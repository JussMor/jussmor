import { component$,  useSignal, useOnDocument, $, useStore } from "@builder.io/qwik";
import { Navbar, NavbarLinks } from "./navbar";
import { Link } from "../../link/link";
import { Container } from "../../container/container";

 interface Sublink {
    look: "highlight" | "minimal";
    name: string;
    link: string;
    internal: boolean | string;
}

interface LinkNavbar {
    name: string;
    link: string;
    sublink: Sublink[];
}


const GeneralNavbar  = component$(({ links }: { links: LinkNavbar[] })=> {

    const activeNav = useSignal<number>(-1)
    const scrollPosition = useStore({ scrolly: 0 });

    useOnDocument(
        'scroll',
        $(() => {
            scrollPosition.scrolly =  window.scrollY 
        })
    );

        
    return (
    <>
    <Navbar 
        onMouseLeave$={() => activeNav.value = -1}
        class={`${scrollPosition.scrolly > 1 ? 'fixed' : 'relative'}  w-full z-40`}>
            <div class='relative z-50'>
                <div class='flex gap-8 justify-center px-8 py-3 bg-primary'>
                    {links.map(({name, link}, index)=> (
                        <div
                            key={`{link-${index}}`}
                            onMouseEnter$={()=> activeNav.value = index}
                        >
                            <NavbarLinks key={`navbar-${index}`} 
                                onClick$={()=> activeNav.value = -1}
                                >
                                <Link look={'highlight'} href={link}>{name}</Link>
                            </NavbarLinks>
                        </div>
                    ))}
                </div>
            </div>
            <div class='relative z-20'>
                <div 
                class={`absolute bg-primary w-full transition-all duration-300 ease-in-out  drop-shadow-sm transform
                    ${activeNav.value !== -1 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
                >
                <Container class='pt-10 pb-20' mainClass="bg-primary">
                    { links[activeNav.value]?.sublink?.map(({name, link, look, internal}, subIndex) => (
                        <div 
                        onClick$={()=> activeNav.value = -1}
                        key={`sublink-${subIndex}`} class={`${look === 'highlight' ? 'pb-3' : 'py-1'}`}>
                            { look === 'highlight' ? 
                                <p class='text-sm'> {name} </p>
                            :
                            <Link  
                                look={look} 
                                href={link} 
                                class='leading-none'
                                target={internal ? '' : '_blank'}
                            >
                                {name}
                            </Link>
                            }
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

export { GeneralNavbar };
export type { LinkNavbar };


