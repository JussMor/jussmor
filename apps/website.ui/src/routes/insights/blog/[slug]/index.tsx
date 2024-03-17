import { component$, useStyles$ } from '@builder.io/qwik';
import { routeLoader$, DocumentHead} from '@builder.io/qwik-city';
import { Container, BlogRichText, Heading1 } from '@jussmor/ui';
import { basehub } from '../../../../../connect';
import { blogFragment } from '../../../../queries/insights-by-id';
import stylesfromCode from 'prismjs/themes/prism-okaidia.min.css?inline'


export const useInsightsById = routeLoader$(async (req) => {

    // const test  = 'how-to-develop-a-career';
    
    const data = await basehub({ token: 'bshb_pk_ra919smqrsehro5a9vuf8b87pg6rpel39ed8zg03bkqa15n6zjm4oopvfir7zv5g'}).query({
        __typename: true,
        insights: {
          blog: {
            ...blogFragment,
            blogPosts: {
              ...blogFragment.blogPosts,
              __args: {
                filter: {
                  _sys_slug: {
                    eq: req.params.slug
                  }
                }
              }
            }
          }
        }
    })


    return data.insights.blog.blogPosts
});

 
export default component$(() => {
  useStyles$(stylesfromCode)
  const data = useInsightsById()
  // console.log(data.value.items[0].body?.json.content)
  // blog
  const title = data.value.items[0]._title
  const subtitle = data.value.items[0].subtitle
  const timeToRead = data.value.items[0].timeToRead
  const category = data.value.items[0].category?._title
  const coverImg = data.value.items[0].coverImage?.url
  const coverImgAlt = data.value.items[0].coverImage?.alt
  const date = data.value.items[0].date
  const isPublished = data.value.items[0].isPublished
  const body = data.value.items[0].body?.json.content
  // console.log(body)
  
  // console.log(data.value.items[0]) 
  return (
    <Container mainClass='bg-background'>
      <Heading1>{title}</Heading1>
      <div class='flex gap-3 lg:justify-between'>
        <BlogRichText
          body={body}
          class='lg:max-w-[748px] '
        />
        <div class='hidden lg:block w-[276px]'> second color</div>
      </div>

    </Container>
  );
});

export const head: DocumentHead = ({resolveValue, params}) => {

  const SEO = resolveValue(useInsightsById)

  const metaImage = SEO.items[0].seo.metaImage?.url
  const keywords = SEO.items[0].seo.keywords
  const metaDescription = SEO.items[0].seo.metaDescription
  const metaTitle = SEO.items[0].seo.metaTitle
  const sharingTtile = SEO.items[0].seo.sharingTitle

  return {
    title: sharingTtile || '',
    meta: [
      {
        name: "title",
        content: metaTitle || '',
      },
      {
        name: "description",
        content: metaDescription || '',
      },
      {
        name: "keywords",
        content: keywords || ''
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
          content: metaTitle || '',
      },
      {
          property: "og:description",
          content: metaDescription || '',
      },
      {
          property: "og:image",
          content: metaImage || '',
      },
      {
          property: "og:url",
          content:`https://www.jussmor.com/insights/blog/${params.slug}/` || '',
      },
      {
          property: "og:type",
          content: "website",
      },
      {
          name: "twitter:title",
          content: metaTitle || '',
      },
      {
          name: "twitter:description",
          content: metaDescription || '',
      },
      {
          name: "twitter:image",
          content: metaImage || '',
      },
      {
          name: "twitter:card",
          content: "summary_large_image",
      }
    ]
  }
}