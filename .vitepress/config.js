import { defineConfig } from "vitepress";

const chapters = [
  { text: "📕 Theory", link: "/test2" },
  { text: "🔥 Organizing", link: "/test" },
  { text: "🎯 Strategy", link: "/test1" },
  { text: "📢 Tactics", link: "/test1" },
  { text: "❤️ Wellbeing", link: "/test1" },
  { text: "💬 Communication", link: "/test1" },
  { text: "💻 Tools", link: "/test1" },
  // { text: '📕 Theory of Change', link: '/test11' },
  // { text: '🔥 Community Organizing', link: '/test12' },
  // { text: '🎯 Campaign Strategy', link: '/test12' },
  // { text: '📢 Protest1 Tactics', link: '/test12' },
  // { text: '❤️ Wellbeing', link: '/test12' },
  // { text: '💬 Communication', link: '/test12' },
  // { text: '💻 Digital tools', link: '/test12' },
];

const nav = [
  {
    text: "📖 Guides",
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: chapters,
  },
  {
    text: "💪 Get training",
    link: "/test1/",
  },
  {
    text: "❤️ Join us",
    link: "/test1/",
  },
];

export const sidebar = [
  {
    text: "Getting started",
    items: [
      { text: "About", link: "/test1" },
      { text: "Join us", link: "/test1" },
    ],
  },
  {
    text: "Chapters",
    items: chapters,
  },
  {
    text: "Our community",
    items: [
      { text: "Get training", link: "/test1" },
      { text: "Resources", link: "/test1" },
      { text: "Campaigns", link: "/test1" },
    ],
  },
];

export default defineConfig({
  lang: "en-US",
  title: "Activist Handbook",
  description: "The Wikipedia for activists",
  srcDir: "articles",
  scrollOffset: "header",
  cleanUrls: "without-subfolders",
  appearance: false,

  head: [
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.comp",
      },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Mono:wght@700&display=swap",
      },
    ],
  ],

  themeConfig: {
    nav,
    sidebar,

    footer: {
      license: {
        text: "MIT License",
        link: "https://opensource.org/licenses/MIT",
      },
      copyright: `Activist Handbook | Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International`,
    },
  },
});
