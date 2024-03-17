import { component$, useStyles$ } from '@builder.io/qwik';
import { useLocation, routeLoader$, DocumentHead} from '@builder.io/qwik-city';
import { Container } from '@jussmor/ui';
import { basehub } from '../../../../../connect';
import { blogFragment } from '../../../../queries/insights-by-id';
import { RichText } from '../../../../RichText/primitives';
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
        {/* <h1>{title}</h1> */}
        <RichText
        >{body}</RichText>
    </Container>
  );
});

export const head: DocumentHead = ({resolveValue, params}) => {

  const SEO = resolveValue(useInsightsById)

  const title =  SEO.items[0].seo._title
  const keywords = SEO.items[0].seo.keywords
  const metaDescription = SEO.items[0].seo.metaDescription
  const metaTitle = SEO.items[0].seo.metaTitle
  const sharingTtile = SEO.items[0].seo.sharingTitle

  return {
    title: "JussMor",
    meta: [
      {
        name: "description",
        content: "Qwik site description",
      },
    ],
  }
};