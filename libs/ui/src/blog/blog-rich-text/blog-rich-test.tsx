/* eslint-disable @typescript-eslint/no-explicit-any */
import { component$, PropsOf } from "@builder.io/qwik";
import { RichText } from "../../richtext/primitives";
import { Heading1 } from "../heading1/heading1";
import { Heading2 } from "../heading2/heading2";
import { Heading3 } from "../heading3/heading3";
import { Paragraph } from "../paragraph/paragraph";

interface RichTextProps {
    body: any;
}

type BlogProps = PropsOf<'section'>  & RichTextProps


const BlogRichText =  component$<BlogProps>(({...props}) => {

    const  { body } = props

    return (
        <section {...props}>
            <RichText
                components={{
                    h1: ({children}) => <Heading1>{children}</Heading1>,
                    h2: ({children}) => <Heading2>{children}</Heading2>,
                    h3: ({children}) => <Heading3>{children}</Heading3>,
                    p: ({children}) =>  <Paragraph look={'blog'} paddingY={'blog'}>{children} </Paragraph>,
                }}
            >
                {body}
            </RichText>
        </section>
    )
})

export { BlogRichText }