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

export const nav = [
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
