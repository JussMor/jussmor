import { component$, Slot, PropsOf } from "@builder.io/qwik"
import { cn } from "@jussmor/helpers";
import { cva, VariantProps } from 'class-variance-authority';

const heading2Variants  = cva('', {
    variants : {
        look: {
            default: 'text-2xl lg:text-3xl font-extrabold capitalize '
        },
        paddingY: {
            default: 'pt-12  pb-4 lg:pt-20 '
        },
    },
    defaultVariants: { 
        look: 'default',
        paddingY: 'default',
    }
})



type Heading2Props = PropsOf<'h2'>  & VariantProps<typeof heading2Variants>

const Heading2 = component$<Heading2Props>(({look, paddingY, ...props}) => {
    return (
        <h2 {...props} class={cn(heading2Variants({look, paddingY}), props.class)}>
            <Slot/>
        </h2>
    )
})

export  {Heading2}