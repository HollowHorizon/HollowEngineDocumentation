import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'HollowEngine Docs',
    favicon: 'img/logo.png',

    future: {
        v4: true,
    },

    url: 'https://hollowengine.github.io',
    baseUrl: '/',
    deploymentBranch: 'main',
    organizationName: 'Phase Of Horizon',
    projectName: 'HollowEngine Docs',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    markdown: {
        mermaid: true
    },

    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru'],
        localeConfigs: {
            en: { label: 'English' },
            ru: { label: 'Русский' },
        },
    },
    themes: [
        '@docusaurus/theme-mermaid',
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],
    trailingSlash: false,

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'HollowEngine Docs',
            logo: {
                alt: 'HollowEngine Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Документация',
                },
                {
                    href: 'https://github.com/HollowHorizon/HollowEngine',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} HollowHorizon.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;

