import { component$, Slot, useSignal } from '@builder.io/qwik';
import { GeneralNavbar } from '@jussmor/ui';
import { links } from '../constast/navbar';


export default component$(() => {


  return (
    <>
      <GeneralNavbar links={links}/>

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
