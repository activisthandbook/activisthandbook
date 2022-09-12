import { defineConfig } from "vitepress";

import { nav, sidebar } from "./menu.js";

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
    logo: "/logo.svg",
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
