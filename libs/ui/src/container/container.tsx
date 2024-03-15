import { component$, Slot, PropsOf } from "@builder.io/qwik";
import { cn } from "@jussmor/helpers";
import { cva, VariantProps } from 'class-variance-authority';

const containerVariants  = cva('', {
    variants : {
        maxWidth: {
            unstyled: '',
            responsive: 'max-w-dsk'
        },
        margin: {
            auto: 'm-auto'
        },
        position: {
            relative: 'relative'
        },
        paddingX: {
            sm: 'px-2',
            md: 'px-4',
            lg: 'px-8',
        }
    },
    defaultVariants: { 
        maxWidth: 'responsive',
        margin: 'auto',
        position: 'relative',
        paddingX: 'lg'
    }
})


type ContainerProps = PropsOf<'section'>  & VariantProps<typeof containerVariants>;



const Container = component$<ContainerProps>(({maxWidth, margin, position, paddingX, ...props}) => {
    
    return (
    <section {...props} class={cn(containerVariants({ maxWidth, margin, position, paddingX}), props.class)}>
        <Slot/>
    </section>
    )
})

export { Container, containerVariants}