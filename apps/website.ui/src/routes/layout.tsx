import { component$, Slot, useSignal , $} from '@builder.io/qwik';
import { Container, Navbar, NavbarLinks } from '@jussmor/ui';

const links = [
  {
    "name": 'Home',
    "link": "/",
  },
  {
    "name": 'Insights',
    "link": 'insights',
    "sublink": [
      {
        "name": "Blog",
        "link": "blog"
      },
      {
        "name": 'Newsletter',
        "link": 'nwsletter'
      }
    ]
  }
  ]

export default component$(() => {

  const activeNav = useSignal<number>()



  return (
    <>
    <Navbar class='fixed w-full z-40  '>
        <div class='relative z-50'>
            <div class='flex gap-3 justify-center px-8 py-3 bg-background'>
                {links.map(({name, link, sublink}, index)=> (
                    <div
                        onMouseEnter$={()=> activeNav.value = index}
                        onMouseLeave$={() => activeNav.value = undefined}
                    >
                        <NavbarLinks key={`navbar-${index}`} class='text-sm'>
                            {name}
                        </NavbarLinks>
                    </div>
                ))}
            </div>
        </div>
        <div class='relative z-20'>
            <div class='absolute bg-foreground w-full transition-all duration-300 ease-in-out top-0 transform translate-y-full opacity-0' style={{ opacity: activeNav.value !== undefined ? 1 : 0, transform: activeNav.value !== undefined ? 'translateY(0)' : 'translateY(-100%)' }}>
                <Container>
                    {activeNav.value !== undefined && links[activeNav.value]?.sublink && (<>
                        {links[activeNav.value].sublink?.map((sublink, subIndex) => (
                            <div key={`sublink-${subIndex}`}>
                                <a class='text-background'  href={sublink.link}>{sublink.name}</a>
                            </div> 
                        ))}
                    </>)}
                </Container>
            </div>
        </div>
    </Navbar>
      <main  >
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
