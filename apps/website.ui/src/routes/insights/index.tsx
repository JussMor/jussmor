import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from '@builder.io/qwik-city';
import type { AuthorsItemGenqlSelection, InsightsGenqlSelection, BlogGenqlSelection , BlogPostsItemGenqlSelection, SeoComponentGenqlSelection, BlockImageGenqlSelection, CategoriesItemGenqlSelection, BodyGenqlSelection, BodyRichTextGenqlSelection} from "../../../connect";
import { basehub } from "../../../connect";
// import { css } from "~/styled-system/css";
import { RichText } from "../../RichText/primitives";


export const imageFragment = {
    alt: true,
    aspectRatio: true,
    fileName: true,
    fileSize: true,
    height: true,
    lastModified: true,
    mimeType: true,
    rawUrl: true,
    url: true,
    width: true,

} satisfies BlockImageGenqlSelection

export const SeoFragment = {
    _title: true,
    keywords: true,
    metaDescription: true,
    metaImage: imageFragment,
    metaTitle: true,
    sharingTitle: true
} satisfies SeoComponentGenqlSelection

export const authorFragment =  {
    _title: true,
    avatar: imageFragment,
    name: true,
    role: true,

} satisfies AuthorsItemGenqlSelection

export const categoriesFragment = {
    _title: true
} satisfies CategoriesItemGenqlSelection

export const jsonFragment = {
    content: true,
} satisfies BodyRichTextGenqlSelection

export const bodyFragment = {
    html: true,
    markdown: true,
    json: jsonFragment,
    plainText: true,
    readingTime: true,
} satisfies BodyGenqlSelection



export const blogPostItemFragment = {
    _slug: true,
    _title: true,
    author: authorFragment,
    category: categoriesFragment,
    coverImage: imageFragment,
    date: true,
    isPublished: true,
    body: bodyFragment,
    seo: SeoFragment,
    subtitle: true,
    timeToRead: true,
} satisfies BlogPostsItemGenqlSelection





export const blogFragment = {
    blogPosts :  {
        items: blogPostItemFragment
    },
    seo: SeoFragment

} satisfies BlogGenqlSelection




export const useInsightsDetails = routeLoader$(async () => {

    const data = await basehub().query({
        __typename: true,
        insights: {
            blog: blogFragment,
            seo: SeoFragment
        }
    })

    return data
});



export default component$<InsightsGenqlSelection>(() => { 
    const data  = useInsightsDetails()

    const blogs = data.value.insights.blog.blogPosts.items

    return (
        <>  {blogs.map ((items, index)=> (
            <>
                <div key={index}>{items._title} </div>
                {items.body?.json.content && (
                    <div > 
                        <RichText
                        components={
                            {
                                p: (props) =>  <p style={{backgroundColor: 'red'}}> {props.children}</p>
                            }
                        }
                        >
                            {items.body.json.content}
                        </RichText>
                    </div>
                )}
            </>
            
        )) }

            {/* <h1 class={css({ color:'red' })}> test</h1> */}
        
        </>
    )
})