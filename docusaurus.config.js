// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Omega Wallet",
  tagline:
    "A secure blockchain wallet that supports: APTOS, SUI, Ethereum, DApp, DeFi, and acts as your portal to the Web3 world",
  url: "https://omega-wallet.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-32x32.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: ["docusaurus-plugin-sass"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: "G-87NT6XMVSG",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/nixjs/omega-wallet-website",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/nixjs/omega-wallet-website",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.scss")],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        title: "Omega Wallet",
        logo: {
          alt: "Omega Wallet Logo",
          src: "img/omega-light.svg",
          srcDark: "img/omega-dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://chrome.google.com/webstore/detail/omega-wallet-aptos-sui-ev/mobgoaaconpcicgajnpclkelkmjigiak",
            label: "Chrome web store",
            position: "left",
          },
          {
            href: "https://github.com/nixjs/omega-wallet-contribution/discussions",
            label: "Discussions",
            position: "right",
          },
          {
            href: "https://github.com/nixjs/omega-wallet-website",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://github.com/nixjs/omega-wallet-website/blob/main/presskit.zip",
            label: "Press kit",
            position: "right",
          },
        ],
      },
      footer: {
        copyright: `Created with 💖 by <a target="_blank" rel="noopener noreferrer" href="https://github.com/nixjs">@nixjs</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
    }),
};

module.exports = config;
