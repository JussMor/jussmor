import type { AuthorsItemGenqlSelection, BlogGenqlSelection , BlogPostsItemGenqlSelection, SeoComponentGenqlSelection, BlockImageGenqlSelection, CategoriesItemGenqlSelection, BodyGenqlSelection, BodyRichTextGenqlSelection} from "../../connect";




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
    blocks: {
        __typename:true,
        _id:true,
        _title:true,
        url:true,
        text:true,
        externalUrl:true,
    }
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

} satisfies BlogGenqlSelection
