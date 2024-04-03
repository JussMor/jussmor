import { component$,
  //  $, 
  //  useComputed$ 
  } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
// import { Link } from '@builder.io/qwik-city';
import { 
  // Button,  
  Container } from '@jussmor/ui';
import { basehub } from  '../../connect';
import { blogFragment } from '../queries/insights';
import time from '@jussmor/helpers';
// import { useTheme } from 'qwik-themes';
// import { useAppState } from  '../_states/use-app-state';
// import { baseOptions, borderRadiusOptions } from '../_states/make-it-yours';
// import { cn } from '@jussmor/helpers';


export const useInsightsData = routeLoader$(async (req) => {

    
    const data = await basehub({ token: `${req.env.get('BASEHUB_TOKEN')}` }).query({
        __typename: true,
        insights: {
          blog: blogFragment
        }
    })


    return data.insights.blog.blogPosts
});



export default component$(() => {

  const data = useInsightsData()

  const blogPost = data.value 

  // const  {theme, setTheme } = useTheme()

  // const rootStore = useAppState();


  //   const switchLightDark = $((input: string | string[]): string | string[] | undefined => {
  //   const switchWord = (word: string): string =>
  //     word.includes('light')
  //       ? word.replace('light', 'dark')
  //       : word.replace('dark', 'light');
  //   if (typeof input === 'string') {
  //     return switchWord(input);
  //   } else if (Array.isArray(input)) {
  //     return input.map((item) => switchWord(item));
  //   }
  // });


  //   const themeComputedObjectSig = useComputed$(() => {
  //   const themeArray = Array.isArray(theme) ? theme : theme?.split(' ');
  //   return {
  //     font: themeArray?.[0] || 'font-serif',
  //     mode: themeArray?.[1] || 'light',
  //     style: themeArray?.[2] || 'simple',
  //     base: themeArray?.[3] || 'base-slate',
  //     primary: themeArray?.[4] || 'primary-cyan-600',
  //     borderRadius: themeArray?.[5] || 'border-radius-0',
  //   };
  // });

  // const themeStoreToThemeClasses$ = $(() => {
  //   const { font, mode, style, base, primary, borderRadius } =
  //     themeComputedObjectSig.value;
  //   return [font, mode, style, base, primary, borderRadius];
  // });


  return (
    <>

    <Container  mainClass='bg-background' class='py-12 flex flex-col md:flex-row gap-2  items-center'>
      <img class='rounded-full' src='/img/jussmor.webp' width={100} height={100}/>
      <div class='text-center md:text-left'>
        <p class='text-base font-bold' >Junior Moreira - JussMor</p>
        <p class='text-sm'>Software Development</p>
        <p class='text-sm'>Learning software where even a teapot can lend a hand.</p>
      </div>
    </Container>

    <Container mainClass='bg-primary' class='py-12 flex flex-col items-stretch flex-wrap md:flex-row gap-2' >

      {blogPost.items.map((items, index)=> (
        <article key={`article-${index}`} class={` md:relative md:m-auto`}>
          <a  
            href={`insights/blog/${items._slug}`}
            class='w-full sm:w-[600px] md:w-[375px] lg:w-[500px] bg-card p-4  rounded-lg 
                  drop-shadow-sm inline-flex gap-2 items-center'>
            <img  src='/img/top-stories.png' width={50} height={50} alt='history'/>
            <div>
              <h2  class='text-sm text-left dark:text-background font-serif'>{items._title}</h2>
              <p class='dark:text-background text-left text-xs font-bold mt-1'>{items.author?.name}<span class='ml-2'> {time(items.date).format('MMM D')}</span></p>
            </div>
          </a>
        </article>
      ))}
    </Container>

    {/* <a href='/insights/blog/how-to-develop-a-career'> TEST URL</a> */}
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

export const head: DocumentHead =  () => {
  
 return {
    title: 'Unleash Frontend Mastery: Expert Insights in Web & AR/VR | JussMor',
    meta: [
      {
        name: "title",
        content: "Discover the Art of Frontend Mastery with JussMor's Expert Insights!",
      },
      {
        name: "description",
        content: " Unlock the secrets of frontend development in web and AR/VR with our expert resources and clear explanations. Dive into specific issues and think differently about software creation.",
      },
      {
        name: "keywords",
        content: "frontend development tips, AR/VR web development resources, clear explanations in software creation"
      },
      {
        name: "googlebot",
        content: "index, follow"
      },
      {
        name: "robots",
        content: "index, follow"
      },
      {
          property: "og:title",
          content: "Discover the Art of Frontend Mastery with JussMor's Expert Insights!",
      },
      {
          property: "og:description",
          content: " Unlock the secrets of frontend development in web and AR/VR with our expert resources and clear explanations. Dive into specific issues and think differently about software creation.",
      },
      {
          property: "og:image",
          content: 'https://www.jussmor.com/img/mainShare.png',
      },
      {
          property: "og:url",
          content:`https://www.jussmor.com/` || '',
      },
      {
          property: "og:type",
          content: "website",
      },
      {
          name: "twitter:title",
          content: "Discover the Art of Frontend Mastery with JussMor's Expert Insights!",
      },
      {
          name: "twitter:description",
          content: " Unlock the secrets of frontend development in web and AR/VR with our expert resources and clear explanations. Dive into specific issues and think differently about software creation.",
      },
      {
          name: "twitter:image",
          content: 'https://www.jussmor.com/img/mainShare.png',
      },
      {
          name: "twitter:card",
          content: "summary_large_image",
      }
    ]
  }
};
