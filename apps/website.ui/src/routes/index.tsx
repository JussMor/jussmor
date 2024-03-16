import { component$, $, useComputed$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { Button,  Container } from '@jussmor/ui';
import { useTheme } from 'qwik-themes';
import { useAppState } from  '../_states/use-app-state';
import { baseOptions, borderRadiusOptions } from '../_states/make-it-yours';
import { cn } from '@jussmor/helpers';



export default component$(() => {

  const  {theme, setTheme } = useTheme()

  const rootStore = useAppState();


    const switchLightDark = $((input: string | string[]): string | string[] | undefined => {
    const switchWord = (word: string): string =>
      word.includes('light')
        ? word.replace('light', 'dark')
        : word.replace('dark', 'light');
    if (typeof input === 'string') {
      return switchWord(input);
    } else if (Array.isArray(input)) {
      return input.map((item) => switchWord(item));
    }
  });


    const themeComputedObjectSig = useComputed$(() => {
    const themeArray = Array.isArray(theme) ? theme : theme?.split(' ');
    return {
      font: themeArray?.[0] || 'font-serif',
      mode: themeArray?.[1] || 'light',
      style: themeArray?.[2] || 'simple',
      base: themeArray?.[3] || 'base-slate',
      primary: themeArray?.[4] || 'primary-cyan-600',
      borderRadius: themeArray?.[5] || 'border-radius-0',
    };
  });

  const themeStoreToThemeClasses$ = $(() => {
    const { font, mode, style, base, primary, borderRadius } =
      themeComputedObjectSig.value;
    return [font, mode, style, base, primary, borderRadius];
  });


  return (
    <>

    <Container  mainClass='bg-background' class='py-12 flex flex-col md:flex-row gap-2  items-center'>
      <img class='rounded-full' src='/img/jussmor.webp' width={100} height={100}/>
      <div class='text-center md:text-left'>
        <p class='text-base font-bold' >Junior Moreira - JussMor</p>
        <p class='text-sm'>Software Development</p>
        <p class='text-sm'>Learn Software the easy way</p>
      </div>
    </Container>

    <Container mainClass='bg-primary' class='py-12 flex flex-col items-stretch md:flex-row gap-2' >

      <article class=" relative m-auto">
        <button  class='w-full sm:w-[600px] md:w-[375px] lg:w-[500px] bg-card p-4  rounded-lg 
                drop-shadow-sm inline-flex gap-2 items-center'>
          <img  src='/img/top-stories.png' width={50} height={50} alt='history'/>
          <div>
            <h2  class='text-sm text-left dark:text-background font-serif'>The IRS say microsoft owes more in back taxes than it invested OpenAI budget</h2>
            <p class='dark:text-background text-left text-xs font-bold mt-1'>Junior  Moreira <span class='ml-2'> Dec 13</span></p>
          </div>
        </button>
      </article>
       <article class="md:basis-full relative m-auto ">
        <button  class='w-full sm:w-[600px] md:w-[375px] lg:w-[500px] bg-card p-4  rounded-lg 
                drop-shadow-sm inline-flex gap-2 items-center'>
          <img  src='/img/top-stories.png' width={50} height={50} alt='history'/>
          <div>
            <h2  class='text-sm text-left dark:text-background font-serif'>The IRS say microsoft owes more in back taxes than it invested OpenAI budget</h2>
            <p class='dark:text-background text-left text-xs font-bold mt-1'>Junior  Moreira <span class='ml-2'> Dec 13</span></p>
          </div>
        </button>
      </article>
    </Container>


      {/* <Container mainClass='bg-background'>
          <div >

            <div class="w-52">
              <select
                class="bg-background rounded-base h-12 w-full border p-2"
                value={themeComputedObjectSig.value.style}
                onChange$={async (e, el) => {
                  console.log('el.value', el.value);
                  if (el.value === 'simple') {
                    themeComputedObjectSig.value.font = 'font-sans';
                  }
                  if (el.value === 'brutalist') {
                    themeComputedObjectSig.value.font = 'font-mono';
                  }
                  if (el.value === 'neumorphic') {
                    themeComputedObjectSig.value.font = 'font-sans';
                  }
                  themeComputedObjectSig.value.style = el.value;
                  console.log('themeComputedObject.value', themeComputedObjectSig.value);
                  setTheme(await themeStoreToThemeClasses$());
                }}
              >
                <option value={'simple'}>Simple</option>
                <option value={'brutalist'}>Brutalist</option>
                {rootStore.featureFlags?.showNeumorphic && (
                  <option value={'neumorphic'}>Neumorphic</option>
                )}
              </select>
            </div>

          <Button  size={"lg"} look={"secondary"} class={"text-red-500"} 
          aria-label="Toggle dark mode"
          onClick$={async () => setTheme(await switchLightDark(theme || 'light'))}
          >  <div class="hidden dark:block">
                  Mon
                </div>
                <div class="block dark:hidden">
                  Sun
                </div>
          </Button>

          <div>
              <label class="mb-1 mt-8 block font-medium">Radius</label>
                <div class="flex space-x-3">
                  {borderRadiusOptions.map((borderRadius) => {
                    const isActive =
                      themeComputedObjectSig.value.borderRadius === borderRadius;
                    return (
                      <Button
                        key={borderRadius}
                        look="outline"
                        onClick$={async () => {
                          themeComputedObjectSig.value.borderRadius = borderRadius;
                          setTheme(await themeStoreToThemeClasses$());
                        }}
                        class={cn('w-12', isActive && 'border-ring mb-2')}
                      >
                        {borderRadius === 'border-radius-0' && 0}
                        {borderRadius === 'border-radius-dot-25' && '.25'}
                        {borderRadius === 'border-radius-dot-50' && '.5'}
                        {borderRadius === 'border-radius-dot-75' && '.75'}
                        {borderRadius === 'border-radius-1' && 1}
                      </Button>
                    );
                  })}
                </div>
          </div>

        </div>
    </Container> */}
    </>
  
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
