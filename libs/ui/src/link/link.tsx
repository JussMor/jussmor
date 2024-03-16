import { Slot, component$ } from '@builder.io/qwik';
import { Link as LinkQuik, type LinkProps } from '@builder.io/qwik-city';
import { cn } from '@jussmor/helpers';
import { cva, VariantProps } from 'class-variance-authority';

const linkVariants = cva('', {
    variants: {
        look: {
            minimal: 'text-lg ',
            highlight: 'text-sm font-bold'
        }
    }, 
    defaultVariants: {
      look: 'minimal',
    },
})

type CustomLinkProps = LinkProps & VariantProps<typeof linkVariants>

const Link = component$(
  ({look, ...props }: CustomLinkProps) => {

    return (
      <LinkQuik
        {...props}
        class={cn(linkVariants({ look }), props.class)}
      >
        <Slot />
      </LinkQuik>
    );
  }
);

export { Link }