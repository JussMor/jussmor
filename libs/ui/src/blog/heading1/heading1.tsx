import { component$, Slot, PropsOf } from "@builder.io/qwik"
import { cn } from "@jussmor/helpers";
import { cva, VariantProps } from 'class-variance-authority';

const heading1Variants  = cva('', {
    variants : {
        look: {
            default: 'text-3xl lg:text-5xl font-extrabold capitalize '
        },
        paddingY: {
            default: 'py-12 lg:py-16'
        },
    },
    defaultVariants: { 
        look: 'default',
        paddingY: 'default',
    }
})



type Heading1Props = PropsOf<'h1'>  & VariantProps<typeof heading1Variants>

const Heading1 = component$<Heading1Props>(({look, paddingY, ...props}) => {
    return (
        <h1 {...props} class={cn(heading1Variants({look, paddingY}), props.class)}>
            <Slot/>
        </h1>
    )
})

export  {Heading1}