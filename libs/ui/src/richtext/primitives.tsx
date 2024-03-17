import type { JSXOutput } from '@builder.io/qwik';
import slugify from 'slugify';
import { extractTextFromNode, incrementID } from './utils/headings-id';
import { marked } from 'marked';
import Prism from 'prismjs';
/**
 * TODOs
 *
 * - support json, html, markdown, plain text? we'd need to see the impact on bundle size
 */

// type Formats =
// | { type: "json"; children: unknown }
// | { type: "html" | "markdown" | "plain-text"; children: string };
type Formats = { children: unknown }; // only json supported for now.

const isDev = process.env.NODE_ENV === "development";

interface Attrs {
    readonly [attr: string]: any;
}

const SUFFIX_CUSTOM_MARK = "_mark";
type SUFFIX_CUSTOM_BLOCK_MARK = typeof SUFFIX_CUSTOM_MARK;

type Mark =
    | { type: "bold" | "italic" | "underline" | "strike" }
    | {
        type: "code";
        attrs: { isInline?: boolean; language: string; code: string };
    }
    | { type: "link"; attrs: { href: string; target: string; class: string } }
    | { type: "basehub-inline-block"; attrs: { id: string } };

type Marks = Array<Mark>;


export type Node =
    | {
        type:
        | "paragraph"
        | "bulletList"
        | "listItem"
        | "taskList"
        | "blockquote"
        | "table"
        | "tableRow";
        attrs?: Attrs;
        marks?: Array<Mark>;
        content?: Array<Node>;
    }
    | {
        type: "text";
        text: string;
        attrs?: Attrs;
        marks?: Array<Mark>;
        content?: Array<Node>;
    }
    | {
        type: "codeBlock";
        attrs: {
            language?: string;
        };
        text: string;
        marks?: Array<Mark>;
        content?: [{ type: "text"; text: string }];
    }
    | {
        type: "orderedList";
        attrs?: { start: number };
        marks?: Array<Mark>;
        content?: Array<Node>;
    }
    | {
        type: "taskItem";
        attrs?: { checked: boolean };
        marks?: Array<Mark>;
        content?: Array<Node>;
    }
    | {
        type: "heading";
        attrs: { level: number };
        marks?: Array<Mark>;
        content?: Array<Node>;
    }
    | {
        type: "horizontalRule";
        content?: Array<Node>;
    }
    | {
        type: "hardBreak";
        content?: Array<Node>;
    }
    | {
        type: "image";
        attrs: {
            src: string;
            alt?: string;
            width?: number;
            height?: number;
            caption?: string;
        };
        marks?: Array<Mark>;
        content?: Array<Node>;
    }
    | {
        type: "video";
        attrs: { src: string; width?: number; height?: number };
        marks?: Array<Mark>;
        content?: Array<Node>;
    }
    | {
        type: "tableCell" | "tableHeader" | "tableFooter";
        attrs: { colspan: number; rowspan: number };
        marks?: Array<Mark>;
        content?: Array<Node>;
    }
    | {
        type: "basehub-block";
        attrs: { id: string };
        marks?: Array<Mark>;
        content?: Array<Node>;
    };



type Handlers = {
    p: (props: { children: JSXOutput }) => JSXOutput;
    b: (props: { children: JSXOutput }) => JSXOutput;
    em: (props: { children: JSXOutput }) => JSXOutput;
    s: (props: { children: JSXOutput }) => JSXOutput;
    code: (props: {
        children: JSXOutput;
        isInline: boolean;
        language: string;
        code: string;
    }) => JSXOutput;
    a: (props: { children: JSXOutput; href: string }) => JSXOutput;
    ol: (props: { children: JSXOutput }) => JSXOutput;
    ul: (props: { children: JSXOutput; isTasksList: boolean }) => JSXOutput;
    li: (
        props: {
            children: JSXOutput;
        } & ({ isTaskListItem: false } | { isTaskListItem: true; checked: boolean })
    ) => JSXOutput;
    h1: (props: { children: JSXOutput; id: string }) => JSXOutput;
    h2: (props: { children: JSXOutput; id: string }) => JSXOutput;
    h3: (props: { children: JSXOutput; id: string }) => JSXOutput;
    h4: (props: { children: JSXOutput; id: string }) => JSXOutput;
    h5: (props: { children: JSXOutput; id: string }) => JSXOutput;
    h6: (props: { children: JSXOutput; id: string }) => JSXOutput;
    hr: () => JSXOutput;
    img: (props: {
        src: string;
        alt?: string;
        width?: number;
        height?: number;
        caption?: string;
    }) => JSXOutput;
    video: (props: {
        children: JSXOutput;
        src: string;
        width?: number;
        height?: number;
    }) => JSXOutput;
    blockquote: (props: { children: JSXOutput }) => JSXOutput;
    pre: (props: {
        children: JSXOutput;
        language: string;
        code: string;
    }) => JSXOutput;
    table: (props: { children: JSXOutput }) => JSXOutput;
    tr: (props: { children: JSXOutput }) => JSXOutput;
    td: (props: {
        children: JSXOutput;
        colspan: number;
        rowspan: number;
    }) => JSXOutput;
    th: (props: {
        children: JSXOutput;
        colspan: number;
        rowspan: number;
    }) => JSXOutput;
    thead: (props: { children: JSXOutput }) => JSXOutput;
    tbody: (props: { children: JSXOutput }) => JSXOutput;
    tfoot: (props: { children: JSXOutput }) => JSXOutput;
    br: () => JSXOutput;
};


type ExtractPropsForHandler<Handler extends (props: any) => JSXOutput> =
    Parameters<Handler>[0];

export type HandlerProps<Key extends keyof Handlers> = ExtractPropsForHandler<
    Handlers[Key]
>;

type CustomBlockBase = { readonly __typename: string };
export type CustomBlocksBase = readonly CustomBlockBase[];

type HandlerMapping<Blocks extends CustomBlocksBase = readonly any[]> = {
    [K in Blocks[number]["__typename"]]: (
        props: Extract<Blocks[number], { __typename: K }>
    ) => JSXOutput;
};

type MarkHandlerMapping<Blocks extends CustomBlocksBase = readonly any[]> = {
    [K in Blocks[number]["__typename"]as `${K}${SUFFIX_CUSTOM_BLOCK_MARK}`]: (
        // we use this hack to add a type for each custom component to create separate handlers for each custom component -> magic 🧙
        props: Extract<Blocks[number], { __typename: K }> & { children: JSXOutput }
    ) => JSXOutput;
};

export type RichTextProps<
    CustomBlocks extends CustomBlocksBase = readonly any[],
> = Formats & {
    blocks?: CustomBlocks;
    components?: Partial<
        Handlers & HandlerMapping<CustomBlocks> & MarkHandlerMapping<CustomBlocks>
    >;
};

type GeneratedIDsRecord = Record<
    number, // level
    Array<string>
>;

export const RichText = <
    CustomBlocks extends CustomBlocksBase = readonly any[],
>(
    props: RichTextProps<CustomBlocks>
): JSXOutput => {
    const value = props.children as Node[] | undefined;
    const generatedIDs: GeneratedIDsRecord = [];

    return (
        <>
            {value?.map((node, index) => {
                return (
                    <Node
                        node={node}
                        key={index}
                        components={props.components}
                        blocks={props.blocks}
                        level={0}
                        generatedIDs={generatedIDs}
                    />
                );
            })}
        </>
    );
};



const defaultHandlers: Handlers = {
    a: ({ children, href }) => <a class='font-bold underline' href={href} target='_blank' rel='noopener noreferrer'>{children}</a>,
    p: ({ children }) => <p>{children}</p>,
    b: ({ children }) => <b>{children}</b>,
    em: ({ children }) => <em>{children}</em>,
    s: ({ children }) => <s>{children}</s>,
    code:  ({ children, isInline, language }) => {
    let code;

    const content = typeof children === 'string' ? children : '';
    if(language === 'markdown' || language === 'text') {
        code =  marked(content);
    }

    if(language !== 'markdown' && language !== 'text') {
        code =  Prism.highlight(content, Prism.languages[language], language)
    }

    return (
        <code
            {...(isInline === false
                ? { "data-language": language, class: `language-${language} ` }
                : {})}
                dangerouslySetInnerHTML={code as string}
        />
        
    );
},
    ol: ({ children }) => <ol class='ml-6 md:ml-8 lg:ml-12'>{children} </ol>,
    ul: ({ children }) => <ul class='ml-6 md:ml-8 lg:ml-12'>{children}</ul>,
    li: ({ children, ...rest }) => {

        return (
            <li
                {...(rest.isTaskListItem
                    ? { style: { display: "flex", alignItems: "baseline" } }
                    : undefined)}
            >
                
                {rest.isTaskListItem ? (
                    <input type="checkbox" checked={rest.checked} disabled class='mr-2'/>
                ) : null}
                {children}
            </li>
        );
    },
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
    h4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
    h5: ({ children, ...props }) => <h5 {...props}>{children}</h5>,
    h6: ({ children, ...props }) => <h6 {...props}>{children}</h6>,
    hr: () => <hr />,
    img: ({ caption, alt, ...rest }) => (
        <img
            class='py-4 lg:py-8'
            {...rest}
            alt={alt ?? caption}
            {...(caption ? { ["data-caption"]: caption } : {})}
        />
    ),
    video: (props) => <video {...props} />,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    pre: ({ children, language }) => (
        <pre data-language={language} class={`language-${language}`}>
            {children}
        </pre>
    ),
    table: ({ children }) => <table>{children}</table>,
    tr: ({ children }) => <tr>{children}</tr>,
    td: ({ children, colspan, rowspan }) => (
        <td colSpan={colspan} rowSpan={rowspan}>
            {children}
        </td>
    ),
    th: ({ children, colspan, rowspan }) => (
        <th colSpan={colspan} rowSpan={rowspan}>
            {children}
        </th>
    ),
    thead: ({ children }) => <thead>{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tfoot: ({ children }) => <tfoot>{children}</tfoot>,
    br: () => <br />,
};




const Node = ({
    node,
    components,
    blocks,
    parent,
    level,
    generatedIDs,
}: {
    node: Node;
    components?: Partial<Handlers>;
    blocks?: readonly CustomBlockBase[];
    parent?: Node;
    level: number;
    generatedIDs: GeneratedIDsRecord;
}) => {
    const children = node.content?.map((childNode, index) => {
        return (
            <Node
                node={childNode}
                parent={node}
                key={index}
                components={components}
                blocks={blocks}
                level={level + 1}
                generatedIDs={generatedIDs}
            />
        );
    });

    let handler: Handlers[keyof Handlers];
    let props: Parameters<typeof handler>[0];
    switch (node.type) {
        case "paragraph":
            handler = components?.p ?? defaultHandlers.p;
            props = { children } satisfies ExtractPropsForHandler<Handlers["p"]>;
            break;
        case "text":
            const forceCodeMark = parent?.type === "codeBlock";
            const clonedMarks = [...(node.marks ?? [])];
            if (forceCodeMark && !clonedMarks.some((mark) => mark.type === "code")) {
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                const language = parent?.attrs?.language ?? "text";
                const code = parent.content?.[0].text ?? "";
                clonedMarks.push({
                    type: "code",
                    attrs: { isInline: false, language, code },
                } satisfies Mark);
            }
            handler = ({ children }: { children?: JSXOutput }) => (
                <Marks marks={clonedMarks} components={components} blocks={blocks}>
                    {children}
                </Marks>
            );
            props = { children: node.text };
            break;
        case "bulletList":
        case "taskList":
            handler = components?.ul ?? defaultHandlers.ul;
            props = {
                children,
                isTasksList: node.type === "taskList",
            } satisfies ExtractPropsForHandler<Handlers["ul"]>;
            break;
        case "orderedList":
            handler = components?.ol ?? defaultHandlers.ol;
            props = { children } satisfies ExtractPropsForHandler<Handlers["ol"]>;
            break;
        case "listItem":
            handler = components?.li ?? defaultHandlers.li;
            props = {
                children,
                isTaskListItem: false,
            } satisfies ExtractPropsForHandler<Handlers["li"]>;
            break;
        case "taskItem":
            handler = components?.li ?? defaultHandlers.li;
            props = {
                children,
                isTaskListItem: true,
                checked: node.attrs?.checked ?? false,
            } satisfies ExtractPropsForHandler<Handlers["li"]>;
            break;
        case "heading":
            const handlerTag = `h${node.attrs.level}` as keyof Handlers;
            handler = components?.[handlerTag] ?? defaultHandlers[handlerTag];

            // initialize the array for this level
            generatedIDs[level] = generatedIDs[level] ?? [];

            // eslint-disable-next-line no-inner-declarations
            function getUniqueID(id: string): string {
                // make sure there are no collisions
                if (id) {
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                    if (generatedIDs[level]?.includes(id)) {
                        return getUniqueID(incrementID(id));
                    }
                }

                return id;
            }

            const id = getUniqueID(
                slugify(extractTextFromNode(node), {
                    strict: true,
                    lower: true,
                    trim: true,
                })
            );

            if (id) {
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                generatedIDs[level]?.push(id);
            }

            props = { children, id } satisfies ExtractPropsForHandler<Handlers["h1"]>;
            break;
        case "horizontalRule":
            handler = components?.hr ?? defaultHandlers.hr;
            break;
        case "hardBreak":
            handler = components?.br ?? defaultHandlers.br;
            break;
        case "blockquote":
            handler = components?.blockquote ?? defaultHandlers.blockquote;
            props = { children } satisfies ExtractPropsForHandler<
                Handlers["blockquote"]
            >;
            break;
        case "codeBlock":
            handler = components?.pre ?? defaultHandlers.pre;
            const code = node.content?.[0].text ?? "";
            props = {
                children,
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                language: node.attrs?.language ?? "text",
                code,
            } satisfies ExtractPropsForHandler<Handlers["pre"]>;
            break;
        case "table":
            handler = components?.table ?? defaultHandlers.table;
            props = { children } satisfies ExtractPropsForHandler<Handlers["table"]>;
            break;
        case "tableRow":
            handler = components?.tr ?? defaultHandlers.tr;
            props = { children } satisfies ExtractPropsForHandler<Handlers["tr"]>;
            break;
        case "tableCell":
            handler = components?.td ?? defaultHandlers.td;
            props = {
                children,
                colspan: node.attrs.colspan,
                rowspan: node.attrs.rowspan,
            } satisfies ExtractPropsForHandler<Handlers["td"]>;
            break;
        case "tableHeader":
            handler = components?.th ?? defaultHandlers.th;
            props = {
                children,
                colspan: node.attrs.colspan,
                rowspan: node.attrs.rowspan,
            } satisfies ExtractPropsForHandler<Handlers["th"]>;
            break;
        case "image":
            handler = components?.img ?? defaultHandlers.img;
            props = {
                src: node.attrs.src,
                width: node.attrs.width,
                height: node.attrs.height,
                alt: node.attrs.alt,
                caption: node.attrs.caption,
            } satisfies ExtractPropsForHandler<Handlers["img"]>;
            break;
        case "video":
            handler = components?.video ?? defaultHandlers.video;
            props = {
                children,
                src: node.attrs.src,
                width: node.attrs.width,
                height: node.attrs.height,
            } satisfies ExtractPropsForHandler<Handlers["video"]>;
            break;
        case "basehub-block": {
            const block = blocks?.find((block: any) => {
                const id = block?._id ?? block?._sys?.id;
                if (typeof id !== "string") {
                    if (isDev) {
                        console.warn(
                            `BaseHub RichText Error: make sure you send through the _id and the __typename for all custom blocks.`
                        );
                    }
                    return false;
                }
                return id === node.attrs.id;
            });
            if (!block) {
                if (isDev) {
                    console.warn(
                        `BaseHub RichText Error: block "${node.attrs.id}" not found.`
                    );
                }
                break;
            }
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            handler = components?.[block?.__typename] ?? (() => <></>);
            // @ts-ignore
            props = block;
            break;
        }
    }

    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!handler) {
        console.warn(`No handler found for node type ${node.type}`);
        return <></>;
    }

    // @ts-ignore
    return handler(props);
};




const Marks = ({
    marks,
    children,
    components,
    blocks,
}: {
    marks?: Marks;
    children: JSXOutput;
    components?: Partial<Handlers>;
    blocks?: readonly CustomBlockBase[];
}) => {
    if (!marks) return <>{children}</>;
    const marksClone = [...marks];
    const mark = marksClone.pop();

    if (!mark) return <>{children}</>;

    let handler: Handlers[keyof Handlers];
    let props: Parameters<typeof handler>[0];
    switch (mark.type) {
        case "bold":
            handler = components?.b ?? defaultHandlers.b;
            props = { children } satisfies ExtractPropsForHandler<Handlers["b"]>;
            break;
        case "italic":
            handler = components?.em ?? defaultHandlers.em;
            props = { children } satisfies ExtractPropsForHandler<Handlers["em"]>;
            break;
        case "strike":
            handler = components?.s ?? defaultHandlers.s;
            props = { children } satisfies ExtractPropsForHandler<Handlers["s"]>;
            break;
        case "code":
            handler = components?.code ?? defaultHandlers.code;
            props = {
                children,
                isInline: mark.attrs.isInline ?? true,
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                language: mark.attrs.language ?? "text",
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                code: mark.attrs.code ?? "",
            } satisfies ExtractPropsForHandler<Handlers["code"]>;
            break;
        case "underline":
            handler = components?.s ?? defaultHandlers.s;
            props = { children } satisfies ExtractPropsForHandler<Handlers["s"]>;
            break;
        case "link":
            handler = components?.a ?? defaultHandlers.a;
            props = {
                children,
                href: mark.attrs.href,
            } satisfies ExtractPropsForHandler<Handlers["a"]>;
            break;
        case "basehub-inline-block": {
            const block = blocks?.find((block: any) => {
                const id = block?._id ?? block?._sys?.id;
                if (typeof id !== "string") {
                    if (isDev) {
                        console.warn(
                            `BaseHub RichText Error: make sure you send through the _id and the __typename for all custom blocks.`
                        );
                    }
                }
                return id === mark.attrs.id;
            });
            if (!block) {
                if (isDev) {
                    console.warn(
                        `BaseHub RichText Error: block "${mark.attrs.id}" not found.`
                    );
                }
                break;
            }
            handler =
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                components?.[block?.__typename + SUFFIX_CUSTOM_MARK] ??
                (() => <>{children}</>);
            // @ts-ignore
            props = { ...block, children };
            break;
        }
    }

    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!handler) {
        console.warn(`No handler found for mark ${mark}`);
        return <></>;
    }

    return (
        <Marks marks={marksClone} components={components} blocks={blocks}>
            {/* @ts-ignore */}
            {handler(props)}
        </Marks>
    );
};



// export function createRichTextWithDefaultComponents(
//     defaultComponents: RichTextProps["components"]
// ) {
//     return <CustomBlocks extends CustomBlocksBase = readonly any[]>(
//         props: RichTextProps<CustomBlocks>
//     ): JSXOutput => {
//         return (
//             <RichText<CustomBlocks>
//                 {...props}
//                 components={{
//                     ...defaultComponents,
//                     ...(props.components as any),
//                 }}
//             />
//         );
//     };
// }