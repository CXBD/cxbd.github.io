import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: "O's Blog",
  description: "A Simple Site",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Blogs',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
