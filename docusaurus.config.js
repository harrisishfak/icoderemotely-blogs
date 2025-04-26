// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Harris Ishfak',
  tagline: '💻 Software Engineer | 🚀 Founder of iChildBloom & iCodeRemotely  | 💡 Making Tech Fun & Scalable',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://harrisishfak.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false, // ✅ Ensures clean URLs for SEO

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'harrisishfak', // Usually your GitHub org/user name.
  projectName: 'icoderemotely-blogs', // Usually your repo name.
  deploymentBranch: 'gh-pages', // ✅ Ensure the deployment branch is set

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


// Google analytic tag
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-EE4504THN9',
        anonymizeIP: true, // Optional: Anonymize visitor IPs
      },
    ],
],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
          // sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/myphoto.jpg',
      navbar: {
        title: 'Harris Ishfak',
        logo: {
          alt: 'My Site Logo',
          src: 'img/software-engineer.svg',
        },
        items: [
         
          {to: '/blog', label: 'Blog', position: 'left'},

          {
            type: 'docSidebar',
            sidebarId: 'defaultSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          
          // {
          //   href: 'https://www.instagram.com/harris_ishfak?igsh=MXE1YWYyN2U2dmZkZA%3D%3D&utm_source=qr',
          //   label: 'Instagram',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                href: 'https://www.instagram.com/harrisishfak/',
                label: 'Instagram',
                position: 'right',
               },
               {
                href: 'https://www.linkedin.com/in/harrisishfak/',
                label: 'Linkedin',
                position: 'right',
               },
               {
                href: '#',
                label: 'Youtube',
                position: 'right',
               },
               {
                href: 'https://ichildbloom.com',
                label: 'iChildBloom',
                position: 'right',
               },
               {
                href: 'https://icoderemotely.com',
                label: 'iCodeRemotely',
                position: 'right',
               },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Whatsapp',
                href: 'https://chat.whatsapp.com/CpDsDeWXzHOLdQ6J9wffa0',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/pxpdReYh',
              },
              // {
              //   label: 'X',
              //   href: 'https://x.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Tutorial',
                to: '/docs/intro'
              },
              // {
              //   type: 'docSidebar',
              //   sidebarId: 'defaultSidebar',
              //   position: 'left',
              //   label: 'Learning',
              // },
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Harris Ishfak. Made with ❤️`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
