import { component$, Slot } from '@builder.io/qwik';
import { GeneralNavbar } from '@jussmor/ui';
import { links } from '../constast/navbar';


export default component$(() => {


  return (
    <>
      <GeneralNavbar links={links}/>

      <main>
          <Slot />
      </main>
      <footer class='text-center py-8'>
        <a href="https://www.builder.io/" target="_blank">
         JussMor - Copyright © 2024
        </a>
      </footer>
    </>
  );
});
