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
    [
      "script",
      {},
      `// Define dataLayer and the gtag function.
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}

        window.gtag = gtag;

        // Default ad_storage to 'denied'.
        if (localStorage.getItem("analyticsAllowed") === "yes") {
          window.gtag('consent', 'default', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted',
            'ads_data_redaction': 'false'
          });
        } else {
          window.gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'ads_data_redaction': 'true'
          });
        }
        `,
    ],
    [
      "script",
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TX33N7P');`,
    ],
  ],

  themeConfig: {
    logo: "/logo.svg",
    nav,
    sidebar,
    footer: false,
  },
});
