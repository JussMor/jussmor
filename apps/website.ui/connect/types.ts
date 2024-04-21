/* eslint-disable */
// @ts-nocheck

export default {
    "scalars": [
        3,
        24,
        27,
        31,
        35,
        40,
        41,
        43,
        45,
        46,
        59,
        60,
        66
    ],
    "types": {
        "Authors": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_meta": [
                49
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "items": [
                1
            ],
            "__typename": [
                60
            ]
        },
        "AuthorsItem": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "avatar": [
                13
            ],
            "biography": [
                5
            ],
            "name": [
                60
            ],
            "role": [
                60
            ],
            "socialMedia": [
                55,
                {
                    "filter": [
                        57
                    ],
                    "first": [
                        45
                    ],
                    "orderBy": [
                        59
                    ],
                    "skip": [
                        45
                    ]
                }
            ],
            "__typename": [
                60
            ]
        },
        "AuthorsItemFilterInput": {
            "AND": [
                2
            ],
            "OR": [
                2
            ],
            "_sys_apiNamePath": [
                61
            ],
            "_sys_createdAt": [
                34
            ],
            "_sys_hash": [
                61
            ],
            "_sys_id": [
                61
            ],
            "_sys_idPath": [
                61
            ],
            "_sys_lastModifiedAt": [
                34
            ],
            "_sys_slug": [
                61
            ],
            "_sys_slugPath": [
                61
            ],
            "_sys_title": [
                61
            ],
            "name": [
                61
            ],
            "role": [
                61
            ],
            "socialMedia": [
                48
            ],
            "__typename": [
                60
            ]
        },
        "AuthorsItemOrderByEnum": {},
        "BaseRichTextJson": {
            "blocks": [
                60
            ],
            "content": [
                46
            ],
            "toc": [
                46
            ],
            "__typename": [
                60
            ]
        },
        "Biography": {
            "html": [
                60,
                {
                    "slugs": [
                        27
                    ],
                    "toc": [
                        27
                    ]
                }
            ],
            "json": [
                6
            ],
            "markdown": [
                60
            ],
            "plainText": [
                60
            ],
            "readingTime": [
                45,
                {
                    "wpm": [
                        45
                    ]
                }
            ],
            "__typename": [
                60
            ]
        },
        "BiographyRichText": {
            "content": [
                46
            ],
            "toc": [
                46
            ],
            "__typename": [
                60
            ]
        },
        "BlockAudio": {
            "fileName": [
                60
            ],
            "fileSize": [
                45
            ],
            "lastModified": [
                41
            ],
            "mimeType": [
                60
            ],
            "url": [
                60
            ],
            "__typename": [
                60
            ]
        },
        "BlockCodeSnippet": {
            "allowedLanguages": [
                60
            ],
            "code": [
                60
            ],
            "html": [
                60,
                {
                    "theme": [
                        60
                    ]
                }
            ],
            "language": [
                60
            ],
            "__typename": [
                60
            ]
        },
        "BlockColor": {
            "hex": [
                60
            ],
            "hsl": [
                60
            ],
            "rgb": [
                60
            ],
            "__typename": [
                60
            ]
        },
        "BlockDocument": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "on_Authors": [
                0
            ],
            "on_AuthorsItem": [
                1
            ],
            "on_Blog": [
                17
            ],
            "on_BlogPosts": [
                18
            ],
            "on_BlogPostsItem": [
                19
            ],
            "on_Categories": [
                28
            ],
            "on_CategoriesItem": [
                29
            ],
            "on_Collections": [
                32
            ],
            "on_Components": [
                33
            ],
            "on_Docs": [
                36
            ],
            "on_DocsPosts": [
                37
            ],
            "on_DocsPostsItem": [
                38
            ],
            "on_HomePage": [
                42
            ],
            "on_Insights": [
                44
            ],
            "on_LinkComponent": [
                47
            ],
            "on_SeoComponent": [
                54
            ],
            "on_SocialMedia": [
                55
            ],
            "on_SocialMediaComponent": [
                56
            ],
            "on_Types": [
                63
            ],
            "on_TypesItem": [
                64
            ],
            "__typename": [
                60
            ]
        },
        "BlockDocumentSys": {
            "apiNamePath": [
                60
            ],
            "createdAt": [
                60
            ],
            "hash": [
                60
            ],
            "id": [
                43
            ],
            "idPath": [
                60
            ],
            "lastModifiedAt": [
                60
            ],
            "slug": [
                60
            ],
            "slugPath": [
                60
            ],
            "title": [
                60
            ],
            "__typename": [
                60
            ]
        },
        "BlockFile": {
            "fileName": [
                60
            ],
            "fileSize": [
                45
            ],
            "lastModified": [
                41
            ],
            "mimeType": [
                60
            ],
            "url": [
                60
            ],
            "__typename": [
                60
            ]
        },
        "BlockImage": {
            "alt": [
                60
            ],
            "aspectRatio": [
                60
            ],
            "fileName": [
                60
            ],
            "fileSize": [
                45
            ],
            "height": [
                45
            ],
            "lastModified": [
                41
            ],
            "mimeType": [
                60
            ],
            "rawUrl": [
                60
            ],
            "url": [
                60,
                {
                    "blur": [
                        45
                    ],
                    "brightness": [
                        45
                    ],
                    "compression": [
                        60
                    ],
                    "contrast": [
                        45
                    ],
                    "dpr": [
                        45
                    ],
                    "fit": [
                        60
                    ],
                    "format": [
                        60
                    ],
                    "height": [
                        45
                    ],
                    "quality": [
                        45
                    ],
                    "width": [
                        45
                    ]
                }
            ],
            "width": [
                45
            ],
            "__typename": [
                60
            ]
        },
        "BlockList": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_meta": [
                49
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "on_Authors": [
                0
            ],
            "on_BlogPosts": [
                18
            ],
            "on_Categories": [
                28
            ],
            "on_DocsPosts": [
                37
            ],
            "on_SocialMedia": [
                55
            ],
            "on_Types": [
                63
            ],
            "__typename": [
                60
            ]
        },
        "BlockRichText": {
            "html": [
                60,
                {
                    "slugs": [
                        27
                    ],
                    "toc": [
                        27
                    ]
                }
            ],
            "json": [
                53
            ],
            "markdown": [
                60
            ],
            "plainText": [
                60
            ],
            "readingTime": [
                45,
                {
                    "wpm": [
                        45
                    ]
                }
            ],
            "on_Biography": [
                5
            ],
            "on_Body": [
                25
            ],
            "__typename": [
                60
            ]
        },
        "BlockVideo": {
            "aspectRatio": [
                60
            ],
            "fileName": [
                60
            ],
            "fileSize": [
                45
            ],
            "height": [
                45
            ],
            "lastModified": [
                41
            ],
            "mimeType": [
                60
            ],
            "url": [
                60
            ],
            "width": [
                45
            ],
            "__typename": [
                60
            ]
        },
        "Blog": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "blogPosts": [
                18,
                {
                    "filter": [
                        20
                    ],
                    "first": [
                        45
                    ],
                    "orderBy": [
                        24
                    ],
                    "skip": [
                        45
                    ]
                }
            ],
            "seo": [
                54
            ],
            "__typename": [
                60
            ]
        },
        "BlogPosts": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_meta": [
                49
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "items": [
                19
            ],
            "__typename": [
                60
            ]
        },
        "BlogPostsItem": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "author": [
                1
            ],
            "body": [
                25
            ],
            "category": [
                29
            ],
            "coverImage": [
                13
            ],
            "date": [
                60
            ],
            "isPublished": [
                27
            ],
            "seo": [
                54
            ],
            "subtitle": [
                60
            ],
            "summary": [
                60
            ],
            "timeToRead": [
                60
            ],
            "type": [
                64
            ],
            "__typename": [
                60
            ]
        },
        "BlogPostsItemFilterInput": {
            "AND": [
                20
            ],
            "OR": [
                20
            ],
            "_sys_apiNamePath": [
                61
            ],
            "_sys_createdAt": [
                34
            ],
            "_sys_hash": [
                61
            ],
            "_sys_id": [
                61
            ],
            "_sys_idPath": [
                61
            ],
            "_sys_lastModifiedAt": [
                34
            ],
            "_sys_slug": [
                61
            ],
            "_sys_slugPath": [
                61
            ],
            "_sys_title": [
                61
            ],
            "author": [
                21
            ],
            "date": [
                34
            ],
            "isPublished": [
                27
            ],
            "seo": [
                22
            ],
            "subtitle": [
                61
            ],
            "summary": [
                61
            ],
            "timeToRead": [
                61
            ],
            "type": [
                23
            ],
            "__typename": [
                60
            ]
        },
        "BlogPostsItemFilterInput__author_0___untitled": {
            "name": [
                61
            ],
            "role": [
                61
            ],
            "socialMedia": [
                48
            ],
            "__typename": [
                60
            ]
        },
        "BlogPostsItemFilterInput__seo": {
            "keywords": [
                61
            ],
            "metaDescription": [
                61
            ],
            "metaTitle": [
                61
            ],
            "sharingTitle": [
                61
            ],
            "__typename": [
                60
            ]
        },
        "BlogPostsItemFilterInput__type_0___untitled": {
            "name": [
                61
            ],
            "slug": [
                61
            ],
            "__typename": [
                60
            ]
        },
        "BlogPostsItemOrderByEnum": {},
        "Body": {
            "html": [
                60,
                {
                    "slugs": [
                        27
                    ],
                    "toc": [
                        27
                    ]
                }
            ],
            "json": [
                26
            ],
            "markdown": [
                60
            ],
            "plainText": [
                60
            ],
            "readingTime": [
                45,
                {
                    "wpm": [
                        45
                    ]
                }
            ],
            "__typename": [
                60
            ]
        },
        "BodyRichText": {
            "blocks": [
                47
            ],
            "content": [
                46
            ],
            "toc": [
                46
            ],
            "__typename": [
                60
            ]
        },
        "Boolean": {},
        "Categories": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_meta": [
                49
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "items": [
                29
            ],
            "__typename": [
                60
            ]
        },
        "CategoriesItem": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "__typename": [
                60
            ]
        },
        "CategoriesItemFilterInput": {
            "AND": [
                30
            ],
            "OR": [
                30
            ],
            "_sys_apiNamePath": [
                61
            ],
            "_sys_createdAt": [
                34
            ],
            "_sys_hash": [
                61
            ],
            "_sys_id": [
                61
            ],
            "_sys_idPath": [
                61
            ],
            "_sys_lastModifiedAt": [
                34
            ],
            "_sys_slug": [
                61
            ],
            "_sys_slugPath": [
                61
            ],
            "_sys_title": [
                61
            ],
            "__typename": [
                60
            ]
        },
        "CategoriesItemOrderByEnum": {},
        "Collections": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "authors": [
                0,
                {
                    "filter": [
                        2
                    ],
                    "first": [
                        45
                    ],
                    "orderBy": [
                        3
                    ],
                    "skip": [
                        45
                    ]
                }
            ],
            "categories": [
                28,
                {
                    "filter": [
                        30
                    ],
                    "first": [
                        45
                    ],
                    "orderBy": [
                        31
                    ],
                    "skip": [
                        45
                    ]
                }
            ],
            "types": [
                63,
                {
                    "filter": [
                        65
                    ],
                    "first": [
                        45
                    ],
                    "orderBy": [
                        66
                    ],
                    "skip": [
                        45
                    ]
                }
            ],
            "__typename": [
                60
            ]
        },
        "Components": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "link": [
                47
            ],
            "seo": [
                54
            ],
            "socialMedia": [
                56
            ],
            "__typename": [
                60
            ]
        },
        "DateFilter": {
            "eq": [
                35
            ],
            "isAfter": [
                35
            ],
            "isBefore": [
                35
            ],
            "neq": [
                35
            ],
            "onOrAfter": [
                35
            ],
            "onOrBefore": [
                35
            ],
            "__typename": [
                60
            ]
        },
        "DateTime": {},
        "Docs": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "docsPosts": [
                37,
                {
                    "filter": [
                        39
                    ],
                    "first": [
                        45
                    ],
                    "orderBy": [
                        40
                    ],
                    "skip": [
                        45
                    ]
                }
            ],
            "seo": [
                54
            ],
            "__typename": [
                60
            ]
        },
        "DocsPosts": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_meta": [
                49
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "items": [
                38
            ],
            "__typename": [
                60
            ]
        },
        "DocsPostsItem": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "docs": [
                60
            ],
            "__typename": [
                60
            ]
        },
        "DocsPostsItemFilterInput": {
            "AND": [
                39
            ],
            "OR": [
                39
            ],
            "_sys_apiNamePath": [
                61
            ],
            "_sys_createdAt": [
                34
            ],
            "_sys_hash": [
                61
            ],
            "_sys_id": [
                61
            ],
            "_sys_idPath": [
                61
            ],
            "_sys_lastModifiedAt": [
                34
            ],
            "_sys_slug": [
                61
            ],
            "_sys_slugPath": [
                61
            ],
            "_sys_title": [
                61
            ],
            "docs": [
                61
            ],
            "__typename": [
                60
            ]
        },
        "DocsPostsItemOrderByEnum": {},
        "Float": {},
        "HomePage": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "seo": [
                54
            ],
            "__typename": [
                60
            ]
        },
        "ID": {},
        "Insights": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "blog": [
                17
            ],
            "docs": [
                36
            ],
            "seo": [
                54
            ],
            "__typename": [
                60
            ]
        },
        "Int": {},
        "JSON": {},
        "LinkComponent": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "externalUrl": [
                27
            ],
            "text": [
                60
            ],
            "url": [
                60
            ],
            "__typename": [
                60
            ]
        },
        "ListFilter": {
            "isEmpty": [
                27
            ],
            "length": [
                45
            ],
            "__typename": [
                60
            ]
        },
        "ListMeta": {
            "totalCount": [
                45
            ],
            "__typename": [
                60
            ]
        },
        "NumberFilter": {
            "eq": [
                41
            ],
            "gt": [
                41
            ],
            "gte": [
                41
            ],
            "lt": [
                41
            ],
            "lte": [
                41
            ],
            "neq": [
                41
            ],
            "__typename": [
                60
            ]
        },
        "Query": {
            "_componentInstances": [
                67
            ],
            "_sys": [
                52
            ],
            "collections": [
                32
            ],
            "components": [
                33
            ],
            "homePage": [
                42
            ],
            "insights": [
                44
            ],
            "__typename": [
                60
            ]
        },
        "RepoSys": {
            "hash": [
                60
            ],
            "id": [
                43
            ],
            "slug": [
                60
            ],
            "title": [
                60
            ],
            "__typename": [
                60
            ]
        },
        "RichTextJson": {
            "content": [
                46
            ],
            "toc": [
                46
            ],
            "on_BaseRichTextJson": [
                4
            ],
            "on_BiographyRichText": [
                6
            ],
            "on_BodyRichText": [
                26
            ],
            "__typename": [
                60
            ]
        },
        "SeoComponent": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "keywords": [
                60
            ],
            "metaDescription": [
                60
            ],
            "metaImage": [
                13
            ],
            "metaTitle": [
                60
            ],
            "sharingTitle": [
                60
            ],
            "__typename": [
                60
            ]
        },
        "SocialMedia": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_meta": [
                49
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "items": [
                56
            ],
            "__typename": [
                60
            ]
        },
        "SocialMediaComponent": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "icon": [
                13
            ],
            "link": [
                47
            ],
            "name": [
                60
            ],
            "__typename": [
                60
            ]
        },
        "SocialMediaComponentFilterInput": {
            "AND": [
                57
            ],
            "OR": [
                57
            ],
            "_sys_apiNamePath": [
                61
            ],
            "_sys_createdAt": [
                34
            ],
            "_sys_hash": [
                61
            ],
            "_sys_id": [
                61
            ],
            "_sys_idPath": [
                61
            ],
            "_sys_lastModifiedAt": [
                34
            ],
            "_sys_slug": [
                61
            ],
            "_sys_slugPath": [
                61
            ],
            "_sys_title": [
                61
            ],
            "link": [
                58
            ],
            "name": [
                61
            ],
            "__typename": [
                60
            ]
        },
        "SocialMediaComponentFilterInput__link": {
            "externalUrl": [
                27
            ],
            "text": [
                61
            ],
            "url": [
                61
            ],
            "__typename": [
                60
            ]
        },
        "SocialMediaComponentOrderByEnum": {},
        "String": {},
        "StringFilter": {
            "contains": [
                60
            ],
            "endsWith": [
                60
            ],
            "eq": [
                60
            ],
            "matches": [
                62
            ],
            "notEq": [
                60
            ],
            "startsWith": [
                60
            ],
            "__typename": [
                60
            ]
        },
        "StringMatchesFilter": {
            "caseSensitive": [
                27
            ],
            "pattern": [
                60
            ],
            "__typename": [
                60
            ]
        },
        "Types": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_meta": [
                49
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "items": [
                64
            ],
            "__typename": [
                60
            ]
        },
        "TypesItem": {
            "_id": [
                60
            ],
            "_idPath": [
                60
            ],
            "_slug": [
                60
            ],
            "_slugPath": [
                60
            ],
            "_sys": [
                11
            ],
            "_title": [
                60
            ],
            "name": [
                60
            ],
            "slug": [
                60
            ],
            "__typename": [
                60
            ]
        },
        "TypesItemFilterInput": {
            "AND": [
                65
            ],
            "OR": [
                65
            ],
            "_sys_apiNamePath": [
                61
            ],
            "_sys_createdAt": [
                34
            ],
            "_sys_hash": [
                61
            ],
            "_sys_id": [
                61
            ],
            "_sys_idPath": [
                61
            ],
            "_sys_lastModifiedAt": [
                34
            ],
            "_sys_slug": [
                61
            ],
            "_sys_slugPath": [
                61
            ],
            "_sys_title": [
                61
            ],
            "name": [
                61
            ],
            "slug": [
                61
            ],
            "__typename": [
                60
            ]
        },
        "TypesItemOrderByEnum": {},
        "_components": {
            "authorsItem": [
                0,
                {
                    "filter": [
                        2
                    ],
                    "first": [
                        45
                    ],
                    "orderBy": [
                        3
                    ],
                    "skip": [
                        45
                    ]
                }
            ],
            "blogPostsItem": [
                18,
                {
                    "filter": [
                        20
                    ],
                    "first": [
                        45
                    ],
                    "orderBy": [
                        24
                    ],
                    "skip": [
                        45
                    ]
                }
            ],
            "categoriesItem": [
                28,
                {
                    "filter": [
                        30
                    ],
                    "first": [
                        45
                    ],
                    "orderBy": [
                        31
                    ],
                    "skip": [
                        45
                    ]
                }
            ],
            "docsPostsItem": [
                37,
                {
                    "filter": [
                        39
                    ],
                    "first": [
                        45
                    ],
                    "orderBy": [
                        40
                    ],
                    "skip": [
                        45
                    ]
                }
            ],
            "socialMedia": [
                55,
                {
                    "filter": [
                        57
                    ],
                    "first": [
                        45
                    ],
                    "orderBy": [
                        59
                    ],
                    "skip": [
                        45
                    ]
                }
            ],
            "typesItem": [
                63,
                {
                    "filter": [
                        65
                    ],
                    "first": [
                        45
                    ],
                    "orderBy": [
                        66
                    ],
                    "skip": [
                        45
                    ]
                }
            ],
            "__typename": [
                60
            ]
        }
    }
}