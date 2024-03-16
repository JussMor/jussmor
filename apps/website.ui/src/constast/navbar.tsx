import type { LinkNavbar } from "@jussmor/ui";


export const links: LinkNavbar[] = [
    {
        name: 'Me',
        link: '/',
        sublink: [
            {
                look: "highlight",
                name: "Meet me",
                link: "",
                internal: true,
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
                link: "/insights/blog",
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
