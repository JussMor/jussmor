interface Sublink {
    look: "highlight" | "minimal";
    name: string;
    link: string;
    internal: boolean | string;
}

interface Link {
    name: string;
    link: string;
    sublink: Sublink[];
}

export const links: Link[] = [
    {
        name: 'Me',
        link: '/',
        sublink: [
            {
                look: "highlight",
                name: "Meet me",
                link: "",
                internal: "",
            },
            {
                look: "minimal",
                name: "Youtube",
                link: "https://www.youtube.com/@jussmor",
                internal: false,
            },
            {
                look: "minimal",
                name: "LinkedIn",
                link: "https://ec.linkedin.com/in/jussmor",
                internal: false,
            },
            {
                look: "minimal",
                name: "Instagram",
                link: "https://www.instagram.com/jussmor",
                internal: false,
            },
            {
                look: "minimal",
                name: "Twitter",
                link: "https://twitter.com/jussmorX",
                internal: false,
            }
        ]
    },
    {
        name: 'Insights',
        link: '/insights/blog',
        sublink: [
            {
                look: "highlight",
                name: "Explore to Learn",
                link: "",
                internal: true,
            },
            {
                look: "minimal",
                name: "Blog",
                link: "blog",
                internal: true,
            },
            {
                look: "minimal",
                name: 'Newsletter',
                link: 'https://jussmor.substack.com/',
                internal: false,
            }
        ]
    }
];
