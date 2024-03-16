import { component$,  useSignal } from "@builder.io/qwik";
import { Navbar, NavbarLinks } from "./navbar";
import { Link } from "../../link/link";
import { Container } from "../../container/container";

interface Sublink {
    look: "highlight" | "minimal";
    name: string;
    link: string;
    internal: boolean | string;
}

interface Link {
    name: string;
    link: string;
    sublink: Sublink[];
}


const GeneralNavbar  = component$(({ links }: { links: Link[] })=> {

      const activeNav = useSignal<number>(0)

    return (
    <>
    <Navbar 
        onMouseLeave$={() => activeNav.value = -1}
        class='fixed w-full z-40  '>
            <div class='relative z-50'>
                <div class='flex gap-8 justify-center px-8 py-3 bg-background'>
                    {links.map(({name, link}, index)=> (
                        <div
                            onMouseEnter$={()=> activeNav.value = index}
                        >
                            <NavbarLinks key={`navbar-${index}`} >
                                <Link look={'highlight'} href={link}>{name}</Link>
                            </NavbarLinks>
                        </div>
                    ))}
                </div>
            </div>
            <div class='relative z-20'>
                <div 
                class={`absolute bg-background w-full transition-all duration-300 ease-in-out  drop-shadow-sm transform
                    ${activeNav.value !== -1 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
                >
                <Container class='pt-10 pb-20'>
                    { links[activeNav.value]?.sublink?.map(({name, link, look, internal}, subIndex) => (
                        <div key={`sublink-${subIndex}`} class={`${look === 'highlight' ? 'pb-3' : 'py-1'}`}>
                            <Link  look={look} href={link} class={`${look === 'highlight' ? 'font-bold' : 'leading-none'}`}
                            target={internal ? '_self' : '_blank'}
                            >{name}</Link>
                        </div> 
                        ))
                    }
                </Container>
                </div>
            </div>
        </Navbar>
        {activeNav.value !== -1 && (
            <div class="fixed z-20 inset-0 bg-opacity-10 backdrop-blur-sm"></div>
        )}
    </>
    )
})

export { GeneralNavbar }


