import { component$, Slot, PropsOf } from "@builder.io/qwik"
import { cn } from "@jussmor/helpers";
import { cva, VariantProps } from 'class-variance-authority';

const paragraphVariants  = cva('', {
    variants : {
        look: {
            blog: 'text-md lg:text-lg font-serif inline-block',
            default: 'text-md lg:text-lg font-serif ',
            normal: 'text-md lg:text-lg font-sans'
        },
        paddingY: {
            default: 'py-2',
            normal: 'py-0'
        },
    },
    defaultVariants: { 
        look: 'default',
        paddingY: 'default',
    }
})



type ParagraphProps = PropsOf<'p'>  & VariantProps<typeof paragraphVariants>

const Paragraph = component$<ParagraphProps>(({look, paddingY, ...props}) => {
    return (
        <p {...props} class={cn(paragraphVariants({look, paddingY}), props.class)}>
            <Slot/>
        </p>
    )
})

export  {Paragraph}