import { component$, Slot, PropsOf, HTMLAttributes } from "@builder.io/qwik";
import { cn } from "@jussmor/helpers";
import { cva, VariantProps } from 'class-variance-authority';



type NavbarProps = PropsOf<'nav'> 

const Navbar  = component$<NavbarProps>(({...props})=> {
    return (
    <nav {...props}>
        <Slot/>
    </nav>
    )
})

type NavbarLinksProps = HTMLAttributes<HTMLElement>;

const NavbarLinks = component$<NavbarLinksProps>(( props: NavbarLinksProps)=> {
    return (
        <div  {...props}>
            <Slot/>
        </div>
    )
})

export { Navbar, NavbarLinks }