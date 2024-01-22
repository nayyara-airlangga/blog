// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type { Config } from '@docusaurus/types'
import type {
  Options as PresetOptions,
  ThemeConfig
} from '@docusaurus/preset-classic'
import { themes } from 'prism-react-renderer'

const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const config = {
  title: 'The B(ased)log',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: process.env.SITE_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.GH_USER, // Usually your GitHub org/user name.
  projectName: process.env.GH_REPO, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  plugins: ['./src/plugins/tailwindcss'],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          blogDescription:
            'Stories and discoveries about my journey in tech, product, and a bit of my own interests',
          showReadingTime: false,
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      } satisfies PresetOptions
    ]
  ],

  customFields: {
    repoId: process.env.GH_REPO_ID,
    category: process.env.GH_DISCUSSION_CATEGORY,
    categoryId: process.env.GH_DISCUSSION_CATEGORY_ID
  },

  themeConfig: {
    metadata: [{ name: 'twitter:card', content: 'summary_large_image' }],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true
    },
    // Replace with your project's social card
    image: 'img/logo.jpg',
    navbar: {
      title: 'The B(ased)log',
      logo: {
        alt: 'Logo',
        src: 'img/favicon.svg'
      }
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contacts',
          items: [
            {
              html: `<a class="footer__icon-link fa-brands fa-github fa-xl" href="https://github.com/${process.env.GH_USER}"></a>`
            },
            {
              html: `<a class="footer__icon-link fa-brands fa-linkedin fa-xl" href="https://linkedin.com/in/nayyara-airlangga-raharjo"></a>`
            },
            {
              html: `<a class="footer__icon-link fa-regular fa-envelope fa-xl" href="mailto:nayyara.airlangga@gmail.com"></a>`
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Archive',
              to: '/archive'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Angga`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  } satisfies ThemeConfig
} satisfies Config

export default config
