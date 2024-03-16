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
        paddingX: 'sm'
    }
})


type ContainerProps = PropsOf<'div'>  & VariantProps<typeof containerVariants> & {
    mainClass: string
};



const Container = component$<ContainerProps>(({mainClass, maxWidth, margin, position, paddingX, ...props}) => {
    
    return (
    <section  class={cn(mainClass)}>
        <div {...props} class={cn(containerVariants({ maxWidth, margin, position, paddingX}), props.class)}>
            <Slot/>
        </div>
    </section>
    )
})

export { Container, containerVariants}