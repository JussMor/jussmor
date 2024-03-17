import { component$, Slot, PropsOf } from "@builder.io/qwik"
import { cn } from "@jussmor/helpers";
import { cva, VariantProps } from 'class-variance-authority';

const heading3Variants  = cva('', {
    variants : {
        look: {
            default: 'text-lg lg:text-xl font-extrabold capitalize '
        },
        paddingY: {
            default: 'py-8'
        },
    },
    defaultVariants: { 
        look: 'default',
        paddingY: 'default',
    }
})



type Heading3Props = PropsOf<'h3'>  & VariantProps<typeof heading3Variants>

const Heading3 = component$<Heading3Props>(({look, paddingY, ...props}) => {
    return (
        <h2 {...props} class={cn(heading3Variants({look, paddingY}), props.class)}>
            <Slot/>
        </h2>
    )
})

export  {Heading3}