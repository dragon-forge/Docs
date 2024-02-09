// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

/** @type {import('@docusaurus/types').Config} */
const config: Config = {
  title: 'Docs for Zeith\'s mods.',
  tagline: 'Gettings started with HammerSeries framework (and other mod APIs)\nIf you\'re not scared by the furry, of course.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.zeith.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dragon-forge', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
      // Replace with your project's social card
      image: 'img/banner.webp',
      navbar: {
        title: 'HammerSeries',
        logo: {
          alt: 'Logo',
          src: 'img/logo.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Modding Docs',
          },
          {
            href: 'https://github.com/dragon-forge',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'HammerLib',
                to: '/docs/hammerlib/intro',
              },
              {
                label: 'HammerAnimations',
                to: '/docs/hammeranims/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://ds.zeith.org/dev',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Zeitheron',
              },
              {
                label: 'Bluesky',
                href: 'https://bsky.app/profile/zeith.bsky.social',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/dragon-forge',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zeitheron. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['java', 'toml', 'json', 'groovy', 'properties'],
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
