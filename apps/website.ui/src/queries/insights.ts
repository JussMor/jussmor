import type { AuthorsItemGenqlSelection, BlogGenqlSelection , BlogPostsItemGenqlSelection } from "../../connect";





export const authorFragment =  {
    _title: true,
    name: true,
} satisfies AuthorsItemGenqlSelection




export const blogPostItemFragment = {
    _slug: true,
    _title: true,
    author: authorFragment,
    date: true,
} satisfies BlogPostsItemGenqlSelection





export const blogFragment = {
    blogPosts :  {
        items: blogPostItemFragment
    },

} satisfies BlogGenqlSelection
