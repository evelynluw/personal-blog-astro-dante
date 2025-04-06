export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const basePath = ''

const siteConfig: SiteConfig = {
    title: 'Evelyn\'s site',
    subtitle: "Develop & Create",
    description: 'Evelyn\'s site',
    image: {
        src: '/PLACEHOLDER.jpg',
        alt: 'PLACEHOLDER'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: basePath + '/'
        },
        {
            text: 'Projects',
            href: basePath + '/projects'
        },
        {
            text: 'Blog',
            href: basePath + '/blog'
        },
        {
            text: 'Tags',
            href: basePath + '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: basePath + '/about'
        },
        {
            text: 'Contact',
            href: basePath + '/contact'
        },
        {
            text: 'Terms',
            href: basePath + '/terms'
        },
        {
            text: 'Theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        // {
        //     text: 'Linkedin',
        //     href: 'https://linkedin.com/'
        // },
    ],
    hero: {
        title: 'Hello,',
        text: "I'm **Evelyn**. I write code, I play music and bring small songs to open mics, I like traveling & photography. Feel free to explore some of my coding endeavors on <a href='https://github.com/evelynluw'>GitHub</a>. Let's all try to make the world a better place.",
        image: {
            src: '/hero-scenery-pic.jpg',
            alt: 'Scenery picture'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: basePath + '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to My Newsletter',
        text: 'Follow my latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
