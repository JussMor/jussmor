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


  console.log(theme , 'theme')

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
    <Container>
          <div >
          test
          <h1 >
            Welcome website.ui <span class="lightning">⚡️</span>
          </h1>

          <ul>
            <li>
              Check out the <code>src/routes</code> directory to get started.
            </li>
            <li>
              Add integrations with <code>npm run qwik add</code>.
            </li>
            <li>
              More info about development in <code>README.md</code>
            </li>
          </ul>

          <h2 class='text-primary text-lg dark:text-secondary'>Commands</h2>

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

        <div class='bg-foreground'> testing colors </div>

          <Button class={cn('p-4  border-ring border')}> hola</Button>

          <table class="commands">
            <tbody>
              <tr>
                <td>
                  <code>npm run dev</code>
                </td>
                <td>Start the dev server and watch for changes.</td>
              </tr>
              <tr>
                <td>
                  <code>npm run preview</code>
                </td>
                <td>Production build and start preview server.</td>
              </tr>
              <tr>
                <td>
                  <code>npm run build</code>
                </td>
                <td>Production build.</td>
              </tr>
              <tr>
                <td>
                  <code>npm run qwik add</code>
                </td>
                <td>Select an integration to add.</td>
              </tr>
            </tbody>
          </table>

          <h2>Add Integrations</h2>

          <table class="commands">
            <tbody>
              <tr>
                <td>
                  <code>npm run qwik add cloudflare-pages</code>
                </td>
                <td>
                  <a href="https://developers.cloudflare.com/pages" target="_blank">
                    Cloudflare Pages Server
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <code>npm run qwik add express</code>
                </td>
                <td>
                  <a href="https://expressjs.com/" target="_blank">
                    Nodejs Express Server
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <code>npm run qwik add netlify-edge</code>
                </td>
                <td>
                  <a href="https://docs.netlify.com/" target="_blank">
                    Netlify Edge Functions
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <code>npm run qwik add static</code>
                </td>
                <td>
                  <a
                    href="https://qwik.builder.io/qwikcity/static-site-generation/overview/"
                    target="_blank"
                  >
                    Static Site Generation (SSG)
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Community</h2>

          <ul>
            <li>
              <span>Questions or just want to say hi? </span>
              <a href="https://qwik.builder.io/chat" target="_blank">
                Chat on discord!
              </a>
            </li>
            <li>
              <span>Follow </span>
              <a href="https://twitter.com/QwikDev" target="_blank">
                @QwikDev
              </a>
              <span> on Twitter</span>
            </li>
            <li>
              <span>Open issues and contribute on </span>
              <a href="https://github.com/BuilderIO/qwik" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <span>Watch </span>
              <a href="https://qwik.builder.io/media/" target="_blank">
                Presentations, Podcasts, Videos, etc.
              </a>
            </li>
          </ul>
          <Link class="mindblow" href="/flower/">
            Blow my mind 🤯
          </Link>
        </div>
    </Container>
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
