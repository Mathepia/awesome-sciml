// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'awesome-sciml', //网站名字
  tagline: 'Awesome SciML Resources',
  url: 'https://mathepia.github.io/', // 基准网站
  baseUrl: '/awesome-sciml/', //网站子名字
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/mathepia.ico', // 浏览器tab网站logo
  organizationName: 'Mathepia', // Usually your GitHub org/user name.
  projectName: 'awesome-sciml', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Mathepia/awesome-sciml',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Mathepia/awesome-sciml',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `⭐️ If you like awesome-sciml, don't hesitate to <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mathepia/awesome-sciml">star us</a>`,
      },
      navbar: {
        title: 'awesome-sciml',
        logo: {
          alt: 'Mathepia Logo',
          src: 'img/avatar.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Resources',
          },
          {
            to: 'packagecollections',
            label: 'Packages',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Mathepia',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://song921012.github.io/',
            label: 'PengfeiCV',
          },
          {
            label: 'Mathepia',
            href: 'https://github.com/Mathepia',
          },
          {
            label: 'Mathepia.jl',
            href: 'https://github.com/Mathepia/Mathepia.jl',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Julia-Python-Packages',
                to: 'packagecollections',
              },
              {
                label: 'Data-Mining-Resources',
                to: '/docs/intro',
              },
              {
                href: 'https://github.com/Song921012/MathEpiDeepLearningTutorial',
                label: 'Tutorials',
              }, {
                label: 'MathepiaPrograms',
                href: 'https://github.com/Mathepia/MathepiaPrograms',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Mathepia Organizations',
                href: 'https://github.com/Mathepia',
              },
              {
                label: 'Mathepia Packages Systems',
                href: 'https://github.com/Mathepia/Mathepia.jl',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Pengfei Website',
                href: 'https://song921012.github.io/',
              },
              {
                label: 'Mathepia Organization',
                href: 'https://github.com/Mathepia',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mathepia, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
