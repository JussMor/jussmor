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
      <Navbar class='flex gap-3 justify-center px-8 py-3'>
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
      </Navbar>
      {activeNav.value !== undefined && links[activeNav.value]?.sublink && ( // Check if activeNav is defined and within bounds
        <div>
          {links[activeNav.value].sublink?.map((sublink, subIndex) => (
            <div key={`sublink-${subIndex}`}>
              <a href={sublink.link}>{sublink.name}</a>
            </div>
          ))}
        </div>
      )}
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
