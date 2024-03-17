/* eslint-disable @typescript-eslint/no-explicit-any */
import { component$, PropsOf } from "@builder.io/qwik";
import { RichText } from "../../richtext/primitives";

interface RichTextProps {
    body: any;
}

type BlogProps = PropsOf<'section'>  & RichTextProps


const BlogRichText =  component$<BlogProps>(({...props}) => {

    const  { body } = props


    return (
        <section {...props}>
            <RichText>
                {body}
            </RichText>
        </section>
    )
})

export { BlogRichText }