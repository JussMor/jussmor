/* eslint-disable */

// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    DateTime: any,
    Float: number,
    ID: string,
    Int: number,
    JSON: any,
    String: string,
}

export interface Authors {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    items: AuthorsItem[]
    __typename: 'Authors'
}

export interface AuthorsItem {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    avatar: (BlockImage | null)
    biography: (Biography | null)
    name: (Scalars['String'] | null)
    role: (Scalars['String'] | null)
    socialMedia: SocialMedia
    __typename: 'AuthorsItem'
}

export type AuthorsItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'avatar__ASC' | 'avatar__DESC' | 'biography__ASC' | 'biography__DESC' | 'name__ASC' | 'name__DESC' | 'role__ASC' | 'role__DESC' | 'socialMedia__ASC' | 'socialMedia__DESC'

export interface BaseRichTextJson {
    blocks: Scalars['String']
    content: Scalars['JSON']
    toc: Scalars['JSON']
    __typename: 'BaseRichTextJson'
}

export interface Biography {
    html: Scalars['String']
    json: BiographyRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Biography'
}

export interface BiographyRichText {
    content: Scalars['JSON']
    toc: Scalars['JSON']
    __typename: 'BiographyRichText'
}

export interface BlockAudio {
    fileName: Scalars['String']
    fileSize: Scalars['Int']
    lastModified: Scalars['Float']
    mimeType: Scalars['String']
    url: Scalars['String']
    __typename: 'BlockAudio'
}

export interface BlockCodeSnippet {
    allowedLanguages: Scalars['String'][]
    code: Scalars['String']
    /** @deprecated Figuring out the correct api. */
    html: Scalars['String']
    language: Scalars['String']
    __typename: 'BlockCodeSnippet'
}

export interface BlockColor {
    hex: Scalars['String']
    hsl: Scalars['String']
    rgb: Scalars['String']
    __typename: 'BlockColor'
}

export type BlockDocument = (Authors | AuthorsItem | Blog | BlogPosts | BlogPostsItem | Categories | CategoriesItem | Collections | Components | Docs | DocsPosts | DocsPostsItem | HomePage | Insights | LinkComponent | SeoComponent | SocialMedia | SocialMediaComponent | Types | TypesItem) & { __isUnion?: true }

export interface BlockDocumentSys {
    apiNamePath: Scalars['String']
    createdAt: Scalars['String']
    hash: Scalars['String']
    id: Scalars['ID']
    idPath: Scalars['String']
    lastModifiedAt: Scalars['String']
    slug: Scalars['String']
    slugPath: Scalars['String']
    title: Scalars['String']
    __typename: 'BlockDocumentSys'
}

export interface BlockFile {
    fileName: Scalars['String']
    fileSize: Scalars['Int']
    lastModified: Scalars['Float']
    mimeType: Scalars['String']
    url: Scalars['String']
    __typename: 'BlockFile'
}

export interface BlockImage {
    alt: (Scalars['String'] | null)
    aspectRatio: Scalars['String']
    fileName: Scalars['String']
    fileSize: Scalars['Int']
    height: Scalars['Int']
    lastModified: Scalars['Float']
    mimeType: Scalars['String']
    rawUrl: Scalars['String']
    url: Scalars['String']
    width: Scalars['Int']
    __typename: 'BlockImage'
}

export type BlockList = (Authors | BlogPosts | Categories | DocsPosts | SocialMedia | Types) & { __isUnion?: true }


/** Rich text block */
export type BlockRichText = (Biography | Body) & { __isUnion?: true }

export interface BlockVideo {
    aspectRatio: Scalars['String']
    fileName: Scalars['String']
    fileSize: Scalars['Int']
    height: Scalars['Int']
    lastModified: Scalars['Float']
    mimeType: Scalars['String']
    url: Scalars['String']
    width: Scalars['Int']
    __typename: 'BlockVideo'
}

export interface Blog {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    blogPosts: BlogPosts
    seo: SeoComponent
    __typename: 'Blog'
}

export interface BlogPosts {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    items: BlogPostsItem[]
    __typename: 'BlogPosts'
}

export interface BlogPostsItem {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    author: (AuthorsItem | null)
    body: (Body | null)
    category: (CategoriesItem | null)
    coverImage: (BlockImage | null)
    /** ISO 8601 date string. */
    date: (Scalars['String'] | null)
    isPublished: Scalars['Boolean']
    seo: SeoComponent
    subtitle: (Scalars['String'] | null)
    summary: (Scalars['String'] | null)
    timeToRead: (Scalars['String'] | null)
    type: (TypesItem | null)
    __typename: 'BlogPostsItem'
}

export type BlogPostsItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'author__ASC' | 'author__DESC' | 'body__ASC' | 'body__DESC' | 'category__ASC' | 'category__DESC' | 'coverImage__ASC' | 'coverImage__DESC' | 'date__ASC' | 'date__DESC' | 'isPublished__ASC' | 'isPublished__DESC' | 'seo__ASC' | 'seo__DESC' | 'subtitle__ASC' | 'subtitle__DESC' | 'summary__ASC' | 'summary__DESC' | 'timeToRead__ASC' | 'timeToRead__DESC' | 'type__ASC' | 'type__DESC'

export interface Body {
    html: Scalars['String']
    json: BodyRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Body'
}

export interface BodyRichText {
    blocks: LinkComponent[]
    content: Scalars['JSON']
    toc: Scalars['JSON']
    __typename: 'BodyRichText'
}

export interface Categories {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    items: CategoriesItem[]
    __typename: 'Categories'
}

export interface CategoriesItem {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'CategoriesItem'
}

export type CategoriesItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export interface Collections {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    authors: Authors
    categories: Categories
    types: Types
    __typename: 'Collections'
}

export interface Components {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    link: LinkComponent
    seo: SeoComponent
    socialMedia: SocialMediaComponent
    __typename: 'Components'
}

export interface Docs {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    docsPosts: DocsPosts
    seo: SeoComponent
    __typename: 'Docs'
}

export interface DocsPosts {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    items: DocsPostsItem[]
    __typename: 'DocsPosts'
}

export interface DocsPostsItem {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    docs: (Scalars['String'] | null)
    __typename: 'DocsPostsItem'
}

export type DocsPostsItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'docs__ASC' | 'docs__DESC'

export interface HomePage {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    seo: SeoComponent
    __typename: 'HomePage'
}

export interface Insights {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    blog: Blog
    docs: Docs
    seo: SeoComponent
    __typename: 'Insights'
}

export interface LinkComponent {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    externalUrl: Scalars['Boolean']
    text: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    __typename: 'LinkComponent'
}

export interface ListMeta {
    totalCount: Scalars['Int']
    __typename: 'ListMeta'
}

export interface Query {
    /** Query across all of the instances of a component. Pass in filters and sorts if you want, and get each instance via the `items` key. */
    _componentInstances: _components
    _sys: RepoSys
    collections: Collections
    components: Components
    homePage: HomePage
    insights: Insights
    __typename: 'Query'
}

export interface RepoSys {
    hash: Scalars['String']
    id: Scalars['ID']
    slug: Scalars['String']
    title: Scalars['String']
    __typename: 'RepoSys'
}

export type RichTextJson = (BaseRichTextJson | BiographyRichText | BodyRichText) & { __isUnion?: true }

export interface SeoComponent {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    keywords: (Scalars['String'] | null)
    metaDescription: (Scalars['String'] | null)
    metaImage: (BlockImage | null)
    metaTitle: (Scalars['String'] | null)
    sharingTitle: (Scalars['String'] | null)
    __typename: 'SeoComponent'
}

export interface SocialMedia {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    items: SocialMediaComponent[]
    __typename: 'SocialMedia'
}

export interface SocialMediaComponent {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    icon: (BlockImage | null)
    link: LinkComponent
    name: (Scalars['String'] | null)
    __typename: 'SocialMediaComponent'
}

export type SocialMediaComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'icon__ASC' | 'icon__DESC' | 'link__ASC' | 'link__DESC' | 'name__ASC' | 'name__DESC'

export interface Types {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    items: TypesItem[]
    __typename: 'Types'
}

export interface TypesItem {
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    name: (Scalars['String'] | null)
    slug: (Scalars['String'] | null)
    __typename: 'TypesItem'
}

export type TypesItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'name__ASC' | 'name__DESC' | 'slug__ASC' | 'slug__DESC'

export interface _components {
    authorsItem: Authors
    blogPostsItem: BlogPosts
    categoriesItem: Categories
    docsPostsItem: DocsPosts
    socialMedia: SocialMedia
    typesItem: Types
    __typename: '_components'
}

export interface AuthorsGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    items?: AuthorsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AuthorsItemGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    avatar?: BlockImageGenqlSelection
    biography?: BiographyGenqlSelection
    name?: boolean | number
    role?: boolean | number
    socialMedia?: (SocialMediaGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (SocialMediaComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (SocialMediaComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AuthorsItemFilterInput {AND?: (AuthorsItemFilterInput | null),OR?: (AuthorsItemFilterInput | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),name?: (StringFilter | null),role?: (StringFilter | null),socialMedia?: (ListFilter | null)}

export interface BaseRichTextJsonGenqlSelection{
    blocks?: boolean | number
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BiographyGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: BiographyRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BiographyRichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockAudioGenqlSelection{
    fileName?: boolean | number
    fileSize?: boolean | number
    lastModified?: boolean | number
    mimeType?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockCodeSnippetGenqlSelection{
    allowedLanguages?: boolean | number
    code?: boolean | number
    /** @deprecated Figuring out the correct api. */
    html?: { __args: {
    /** Theme for the code snippet */
    theme?: (Scalars['String'] | null)} } | boolean | number
    language?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockColorGenqlSelection{
    hex?: boolean | number
    hsl?: boolean | number
    rgb?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockDocumentGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    on_Authors?: AuthorsGenqlSelection
    on_AuthorsItem?: AuthorsItemGenqlSelection
    on_Blog?: BlogGenqlSelection
    on_BlogPosts?: BlogPostsGenqlSelection
    on_BlogPostsItem?: BlogPostsItemGenqlSelection
    on_Categories?: CategoriesGenqlSelection
    on_CategoriesItem?: CategoriesItemGenqlSelection
    on_Collections?: CollectionsGenqlSelection
    on_Components?: ComponentsGenqlSelection
    on_Docs?: DocsGenqlSelection
    on_DocsPosts?: DocsPostsGenqlSelection
    on_DocsPostsItem?: DocsPostsItemGenqlSelection
    on_HomePage?: HomePageGenqlSelection
    on_Insights?: InsightsGenqlSelection
    on_LinkComponent?: LinkComponentGenqlSelection
    on_SeoComponent?: SeoComponentGenqlSelection
    on_SocialMedia?: SocialMediaGenqlSelection
    on_SocialMediaComponent?: SocialMediaComponentGenqlSelection
    on_Types?: TypesGenqlSelection
    on_TypesItem?: TypesItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockDocumentSysGenqlSelection{
    apiNamePath?: boolean | number
    createdAt?: boolean | number
    hash?: boolean | number
    id?: boolean | number
    idPath?: boolean | number
    lastModifiedAt?: boolean | number
    slug?: boolean | number
    slugPath?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockFileGenqlSelection{
    fileName?: boolean | number
    fileSize?: boolean | number
    lastModified?: boolean | number
    mimeType?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockImageGenqlSelection{
    alt?: boolean | number
    aspectRatio?: boolean | number
    fileName?: boolean | number
    fileSize?: boolean | number
    height?: boolean | number
    lastModified?: boolean | number
    mimeType?: boolean | number
    rawUrl?: boolean | number
    url?: { __args: {blur?: (Scalars['Int'] | null), brightness?: (Scalars['Int'] | null), compression?: (Scalars['String'] | null), contrast?: (Scalars['Int'] | null), dpr?: (Scalars['Int'] | null), fit?: (Scalars['String'] | null), format?: (Scalars['String'] | null), height?: (Scalars['Int'] | null), quality?: (Scalars['Int'] | null), width?: (Scalars['Int'] | null)} } | boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockListGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    on_Authors?: AuthorsGenqlSelection
    on_BlogPosts?: BlogPostsGenqlSelection
    on_Categories?: CategoriesGenqlSelection
    on_DocsPosts?: DocsPostsGenqlSelection
    on_SocialMedia?: SocialMediaGenqlSelection
    on_Types?: TypesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Rich text block */
export interface BlockRichTextGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: RichTextJsonGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    on_Biography?: BiographyGenqlSelection
    on_Body?: BodyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockVideoGenqlSelection{
    aspectRatio?: boolean | number
    fileName?: boolean | number
    fileSize?: boolean | number
    height?: boolean | number
    lastModified?: boolean | number
    mimeType?: boolean | number
    url?: boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlogGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    blogPosts?: (BlogPostsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (BlogPostsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (BlogPostsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    seo?: SeoComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlogPostsGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    items?: BlogPostsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlogPostsItemGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    author?: AuthorsItemGenqlSelection
    body?: BodyGenqlSelection
    category?: CategoriesItemGenqlSelection
    coverImage?: BlockImageGenqlSelection
    /** ISO 8601 date string. */
    date?: boolean | number
    isPublished?: boolean | number
    seo?: SeoComponentGenqlSelection
    subtitle?: boolean | number
    summary?: boolean | number
    timeToRead?: boolean | number
    type?: TypesItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlogPostsItemFilterInput {AND?: (BlogPostsItemFilterInput | null),OR?: (BlogPostsItemFilterInput | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),author?: (BlogPostsItemFilterInput__author_0___untitled | null),date?: (DateFilter | null),isPublished?: (Scalars['Boolean'] | null),seo?: (BlogPostsItemFilterInput__seo | null),subtitle?: (StringFilter | null),summary?: (StringFilter | null),timeToRead?: (StringFilter | null),type?: (BlogPostsItemFilterInput__type_0___untitled | null)}

export interface BlogPostsItemFilterInput__author_0___untitled {name?: (StringFilter | null),role?: (StringFilter | null),socialMedia?: (ListFilter | null)}

export interface BlogPostsItemFilterInput__seo {keywords?: (StringFilter | null),metaDescription?: (StringFilter | null),metaTitle?: (StringFilter | null),sharingTitle?: (StringFilter | null)}

export interface BlogPostsItemFilterInput__type_0___untitled {name?: (StringFilter | null),slug?: (StringFilter | null)}

export interface BodyGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: BodyRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BodyRichTextGenqlSelection{
    blocks?: LinkComponentGenqlSelection
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CategoriesGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    items?: CategoriesItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CategoriesItemGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CategoriesItemFilterInput {AND?: (CategoriesItemFilterInput | null),OR?: (CategoriesItemFilterInput | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null)}

export interface CollectionsGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    authors?: (AuthorsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (AuthorsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (AuthorsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    categories?: (CategoriesGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (CategoriesItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (CategoriesItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    types?: (TypesGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (TypesItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (TypesItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ComponentsGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    link?: LinkComponentGenqlSelection
    seo?: SeoComponentGenqlSelection
    socialMedia?: SocialMediaComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DateFilter {eq?: (Scalars['DateTime'] | null),isAfter?: (Scalars['DateTime'] | null),isBefore?: (Scalars['DateTime'] | null),neq?: (Scalars['DateTime'] | null),onOrAfter?: (Scalars['DateTime'] | null),onOrBefore?: (Scalars['DateTime'] | null)}

export interface DocsGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    docsPosts?: (DocsPostsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (DocsPostsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (DocsPostsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    seo?: SeoComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DocsPostsGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    items?: DocsPostsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DocsPostsItemGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    docs?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DocsPostsItemFilterInput {AND?: (DocsPostsItemFilterInput | null),OR?: (DocsPostsItemFilterInput | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),docs?: (StringFilter | null)}

export interface HomePageGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    seo?: SeoComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface InsightsGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    blog?: BlogGenqlSelection
    docs?: DocsGenqlSelection
    seo?: SeoComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LinkComponentGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    externalUrl?: boolean | number
    text?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ListFilter {isEmpty?: (Scalars['Boolean'] | null),length?: (Scalars['Int'] | null)}

export interface ListMetaGenqlSelection{
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NumberFilter {eq?: (Scalars['Float'] | null),gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),neq?: (Scalars['Float'] | null)}

export interface QueryGenqlSelection{
    /** Query across all of the instances of a component. Pass in filters and sorts if you want, and get each instance via the `items` key. */
    _componentInstances?: _componentsGenqlSelection
    _sys?: RepoSysGenqlSelection
    collections?: CollectionsGenqlSelection
    components?: ComponentsGenqlSelection
    homePage?: HomePageGenqlSelection
    insights?: InsightsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RepoSysGenqlSelection{
    hash?: boolean | number
    id?: boolean | number
    slug?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RichTextJsonGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    on_BaseRichTextJson?: BaseRichTextJsonGenqlSelection
    on_BiographyRichText?: BiographyRichTextGenqlSelection
    on_BodyRichText?: BodyRichTextGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SeoComponentGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    keywords?: boolean | number
    metaDescription?: boolean | number
    metaImage?: BlockImageGenqlSelection
    metaTitle?: boolean | number
    sharingTitle?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SocialMediaGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    items?: SocialMediaComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SocialMediaComponentGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    icon?: BlockImageGenqlSelection
    link?: LinkComponentGenqlSelection
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SocialMediaComponentFilterInput {AND?: (SocialMediaComponentFilterInput | null),OR?: (SocialMediaComponentFilterInput | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),link?: (SocialMediaComponentFilterInput__link | null),name?: (StringFilter | null)}

export interface SocialMediaComponentFilterInput__link {externalUrl?: (Scalars['Boolean'] | null),text?: (StringFilter | null),url?: (StringFilter | null)}

export interface StringFilter {contains?: (Scalars['String'] | null),endsWith?: (Scalars['String'] | null),eq?: (Scalars['String'] | null),matches?: (StringMatchesFilter | null),notEq?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null)}

export interface StringMatchesFilter {caseSensitive?: (Scalars['Boolean'] | null),pattern: Scalars['String']}

export interface TypesGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    items?: TypesItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TypesItemGenqlSelection{
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    name?: boolean | number
    slug?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TypesItemFilterInput {AND?: (TypesItemFilterInput | null),OR?: (TypesItemFilterInput | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),name?: (StringFilter | null),slug?: (StringFilter | null)}

export interface _componentsGenqlSelection{
    authorsItem?: (AuthorsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (AuthorsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (AuthorsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    blogPostsItem?: (BlogPostsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (BlogPostsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (BlogPostsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    categoriesItem?: (CategoriesGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (CategoriesItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (CategoriesItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    docsPostsItem?: (DocsPostsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (DocsPostsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (DocsPostsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    socialMedia?: (SocialMediaGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (SocialMediaComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (SocialMediaComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    typesItem?: (TypesGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (TypesItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (TypesItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const Authors_possibleTypes: string[] = ['Authors']
    export const isAuthors = (obj?: { __typename?: any } | null): obj is Authors => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuthors"')
      return Authors_possibleTypes.includes(obj.__typename)
    }
    


    const AuthorsItem_possibleTypes: string[] = ['AuthorsItem']
    export const isAuthorsItem = (obj?: { __typename?: any } | null): obj is AuthorsItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuthorsItem"')
      return AuthorsItem_possibleTypes.includes(obj.__typename)
    }
    


    const BaseRichTextJson_possibleTypes: string[] = ['BaseRichTextJson']
    export const isBaseRichTextJson = (obj?: { __typename?: any } | null): obj is BaseRichTextJson => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBaseRichTextJson"')
      return BaseRichTextJson_possibleTypes.includes(obj.__typename)
    }
    


    const Biography_possibleTypes: string[] = ['Biography']
    export const isBiography = (obj?: { __typename?: any } | null): obj is Biography => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBiography"')
      return Biography_possibleTypes.includes(obj.__typename)
    }
    


    const BiographyRichText_possibleTypes: string[] = ['BiographyRichText']
    export const isBiographyRichText = (obj?: { __typename?: any } | null): obj is BiographyRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBiographyRichText"')
      return BiographyRichText_possibleTypes.includes(obj.__typename)
    }
    


    const BlockAudio_possibleTypes: string[] = ['BlockAudio']
    export const isBlockAudio = (obj?: { __typename?: any } | null): obj is BlockAudio => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockAudio"')
      return BlockAudio_possibleTypes.includes(obj.__typename)
    }
    


    const BlockCodeSnippet_possibleTypes: string[] = ['BlockCodeSnippet']
    export const isBlockCodeSnippet = (obj?: { __typename?: any } | null): obj is BlockCodeSnippet => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockCodeSnippet"')
      return BlockCodeSnippet_possibleTypes.includes(obj.__typename)
    }
    


    const BlockColor_possibleTypes: string[] = ['BlockColor']
    export const isBlockColor = (obj?: { __typename?: any } | null): obj is BlockColor => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockColor"')
      return BlockColor_possibleTypes.includes(obj.__typename)
    }
    


    const BlockDocument_possibleTypes: string[] = ['Authors','AuthorsItem','Blog','BlogPosts','BlogPostsItem','Categories','CategoriesItem','Collections','Components','Docs','DocsPosts','DocsPostsItem','HomePage','Insights','LinkComponent','SeoComponent','SocialMedia','SocialMediaComponent','Types','TypesItem']
    export const isBlockDocument = (obj?: { __typename?: any } | null): obj is BlockDocument => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockDocument"')
      return BlockDocument_possibleTypes.includes(obj.__typename)
    }
    


    const BlockDocumentSys_possibleTypes: string[] = ['BlockDocumentSys']
    export const isBlockDocumentSys = (obj?: { __typename?: any } | null): obj is BlockDocumentSys => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockDocumentSys"')
      return BlockDocumentSys_possibleTypes.includes(obj.__typename)
    }
    


    const BlockFile_possibleTypes: string[] = ['BlockFile']
    export const isBlockFile = (obj?: { __typename?: any } | null): obj is BlockFile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockFile"')
      return BlockFile_possibleTypes.includes(obj.__typename)
    }
    


    const BlockImage_possibleTypes: string[] = ['BlockImage']
    export const isBlockImage = (obj?: { __typename?: any } | null): obj is BlockImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockImage"')
      return BlockImage_possibleTypes.includes(obj.__typename)
    }
    


    const BlockList_possibleTypes: string[] = ['Authors','BlogPosts','Categories','DocsPosts','SocialMedia','Types']
    export const isBlockList = (obj?: { __typename?: any } | null): obj is BlockList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockList"')
      return BlockList_possibleTypes.includes(obj.__typename)
    }
    


    const BlockRichText_possibleTypes: string[] = ['Biography','Body']
    export const isBlockRichText = (obj?: { __typename?: any } | null): obj is BlockRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockRichText"')
      return BlockRichText_possibleTypes.includes(obj.__typename)
    }
    


    const BlockVideo_possibleTypes: string[] = ['BlockVideo']
    export const isBlockVideo = (obj?: { __typename?: any } | null): obj is BlockVideo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockVideo"')
      return BlockVideo_possibleTypes.includes(obj.__typename)
    }
    


    const Blog_possibleTypes: string[] = ['Blog']
    export const isBlog = (obj?: { __typename?: any } | null): obj is Blog => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlog"')
      return Blog_possibleTypes.includes(obj.__typename)
    }
    


    const BlogPosts_possibleTypes: string[] = ['BlogPosts']
    export const isBlogPosts = (obj?: { __typename?: any } | null): obj is BlogPosts => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlogPosts"')
      return BlogPosts_possibleTypes.includes(obj.__typename)
    }
    


    const BlogPostsItem_possibleTypes: string[] = ['BlogPostsItem']
    export const isBlogPostsItem = (obj?: { __typename?: any } | null): obj is BlogPostsItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlogPostsItem"')
      return BlogPostsItem_possibleTypes.includes(obj.__typename)
    }
    


    const Body_possibleTypes: string[] = ['Body']
    export const isBody = (obj?: { __typename?: any } | null): obj is Body => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBody"')
      return Body_possibleTypes.includes(obj.__typename)
    }
    


    const BodyRichText_possibleTypes: string[] = ['BodyRichText']
    export const isBodyRichText = (obj?: { __typename?: any } | null): obj is BodyRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBodyRichText"')
      return BodyRichText_possibleTypes.includes(obj.__typename)
    }
    


    const Categories_possibleTypes: string[] = ['Categories']
    export const isCategories = (obj?: { __typename?: any } | null): obj is Categories => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategories"')
      return Categories_possibleTypes.includes(obj.__typename)
    }
    


    const CategoriesItem_possibleTypes: string[] = ['CategoriesItem']
    export const isCategoriesItem = (obj?: { __typename?: any } | null): obj is CategoriesItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoriesItem"')
      return CategoriesItem_possibleTypes.includes(obj.__typename)
    }
    


    const Collections_possibleTypes: string[] = ['Collections']
    export const isCollections = (obj?: { __typename?: any } | null): obj is Collections => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollections"')
      return Collections_possibleTypes.includes(obj.__typename)
    }
    


    const Components_possibleTypes: string[] = ['Components']
    export const isComponents = (obj?: { __typename?: any } | null): obj is Components => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComponents"')
      return Components_possibleTypes.includes(obj.__typename)
    }
    


    const Docs_possibleTypes: string[] = ['Docs']
    export const isDocs = (obj?: { __typename?: any } | null): obj is Docs => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDocs"')
      return Docs_possibleTypes.includes(obj.__typename)
    }
    


    const DocsPosts_possibleTypes: string[] = ['DocsPosts']
    export const isDocsPosts = (obj?: { __typename?: any } | null): obj is DocsPosts => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDocsPosts"')
      return DocsPosts_possibleTypes.includes(obj.__typename)
    }
    


    const DocsPostsItem_possibleTypes: string[] = ['DocsPostsItem']
    export const isDocsPostsItem = (obj?: { __typename?: any } | null): obj is DocsPostsItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDocsPostsItem"')
      return DocsPostsItem_possibleTypes.includes(obj.__typename)
    }
    


    const HomePage_possibleTypes: string[] = ['HomePage']
    export const isHomePage = (obj?: { __typename?: any } | null): obj is HomePage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHomePage"')
      return HomePage_possibleTypes.includes(obj.__typename)
    }
    


    const Insights_possibleTypes: string[] = ['Insights']
    export const isInsights = (obj?: { __typename?: any } | null): obj is Insights => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInsights"')
      return Insights_possibleTypes.includes(obj.__typename)
    }
    


    const LinkComponent_possibleTypes: string[] = ['LinkComponent']
    export const isLinkComponent = (obj?: { __typename?: any } | null): obj is LinkComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLinkComponent"')
      return LinkComponent_possibleTypes.includes(obj.__typename)
    }
    


    const ListMeta_possibleTypes: string[] = ['ListMeta']
    export const isListMeta = (obj?: { __typename?: any } | null): obj is ListMeta => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isListMeta"')
      return ListMeta_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const RepoSys_possibleTypes: string[] = ['RepoSys']
    export const isRepoSys = (obj?: { __typename?: any } | null): obj is RepoSys => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRepoSys"')
      return RepoSys_possibleTypes.includes(obj.__typename)
    }
    


    const RichTextJson_possibleTypes: string[] = ['BaseRichTextJson','BiographyRichText','BodyRichText']
    export const isRichTextJson = (obj?: { __typename?: any } | null): obj is RichTextJson => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRichTextJson"')
      return RichTextJson_possibleTypes.includes(obj.__typename)
    }
    


    const SeoComponent_possibleTypes: string[] = ['SeoComponent']
    export const isSeoComponent = (obj?: { __typename?: any } | null): obj is SeoComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSeoComponent"')
      return SeoComponent_possibleTypes.includes(obj.__typename)
    }
    


    const SocialMedia_possibleTypes: string[] = ['SocialMedia']
    export const isSocialMedia = (obj?: { __typename?: any } | null): obj is SocialMedia => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSocialMedia"')
      return SocialMedia_possibleTypes.includes(obj.__typename)
    }
    


    const SocialMediaComponent_possibleTypes: string[] = ['SocialMediaComponent']
    export const isSocialMediaComponent = (obj?: { __typename?: any } | null): obj is SocialMediaComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSocialMediaComponent"')
      return SocialMediaComponent_possibleTypes.includes(obj.__typename)
    }
    


    const Types_possibleTypes: string[] = ['Types']
    export const isTypes = (obj?: { __typename?: any } | null): obj is Types => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypes"')
      return Types_possibleTypes.includes(obj.__typename)
    }
    


    const TypesItem_possibleTypes: string[] = ['TypesItem']
    export const isTypesItem = (obj?: { __typename?: any } | null): obj is TypesItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypesItem"')
      return TypesItem_possibleTypes.includes(obj.__typename)
    }
    


    const _components_possibleTypes: string[] = ['_components']
    export const is_components = (obj?: { __typename?: any } | null): obj is _components => {
      if (!obj?.__typename) throw new Error('__typename is missing in "is_components"')
      return _components_possibleTypes.includes(obj.__typename)
    }
    

export const enumAuthorsItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   avatar__ASC: 'avatar__ASC' as const,
   avatar__DESC: 'avatar__DESC' as const,
   biography__ASC: 'biography__ASC' as const,
   biography__DESC: 'biography__DESC' as const,
   name__ASC: 'name__ASC' as const,
   name__DESC: 'name__DESC' as const,
   role__ASC: 'role__ASC' as const,
   role__DESC: 'role__DESC' as const,
   socialMedia__ASC: 'socialMedia__ASC' as const,
   socialMedia__DESC: 'socialMedia__DESC' as const
}

export const enumBlogPostsItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   author__ASC: 'author__ASC' as const,
   author__DESC: 'author__DESC' as const,
   body__ASC: 'body__ASC' as const,
   body__DESC: 'body__DESC' as const,
   category__ASC: 'category__ASC' as const,
   category__DESC: 'category__DESC' as const,
   coverImage__ASC: 'coverImage__ASC' as const,
   coverImage__DESC: 'coverImage__DESC' as const,
   date__ASC: 'date__ASC' as const,
   date__DESC: 'date__DESC' as const,
   isPublished__ASC: 'isPublished__ASC' as const,
   isPublished__DESC: 'isPublished__DESC' as const,
   seo__ASC: 'seo__ASC' as const,
   seo__DESC: 'seo__DESC' as const,
   subtitle__ASC: 'subtitle__ASC' as const,
   subtitle__DESC: 'subtitle__DESC' as const,
   summary__ASC: 'summary__ASC' as const,
   summary__DESC: 'summary__DESC' as const,
   timeToRead__ASC: 'timeToRead__ASC' as const,
   timeToRead__DESC: 'timeToRead__DESC' as const,
   type__ASC: 'type__ASC' as const,
   type__DESC: 'type__DESC' as const
}

export const enumCategoriesItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumDocsPostsItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   docs__ASC: 'docs__ASC' as const,
   docs__DESC: 'docs__DESC' as const
}

export const enumSocialMediaComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   icon__ASC: 'icon__ASC' as const,
   icon__DESC: 'icon__DESC' as const,
   link__ASC: 'link__ASC' as const,
   link__DESC: 'link__DESC' as const,
   name__ASC: 'name__ASC' as const,
   name__DESC: 'name__DESC' as const
}

export const enumTypesItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   name__ASC: 'name__ASC' as const,
   name__DESC: 'name__DESC' as const,
   slug__ASC: 'slug__ASC' as const,
   slug__DESC: 'slug__DESC' as const
}
