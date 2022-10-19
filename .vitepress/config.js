import { defineConfig } from "vitepress";

import { nav } from "./menu.js";

import sidebar from "./menus/sidebar.json";

export default defineConfig({
  lang: "en-US",
  title: "Activist Handbook",
  description: "The Wikipedia for activists",
  srcDir: "articles",
  scrollOffset: "header",
  cleanUrls: "without-subfolders",
  appearance: false,
  ignoreDeadLinks: true,

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
    // Favicon
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "128x128",
        href: "/icons/favicon-128x128.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/icons/favicon-96x96.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icons/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/icons/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/ico",
        href: "/favicon.ico",
      },
    ],
  ],

  themeConfig: {
    logo: "/logo.svg",
    nav,
    sidebar,
    footer: false,
  },
});
