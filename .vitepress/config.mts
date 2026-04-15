import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Win12 Online Wiki',
  description: 'Win12 网页版的 Wiki',
  lang: 'zh-CN',
  srcExclude: ['**/README.md'],
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // By default Cloudflare removes the .html extention
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: [
      { text: '主页', link: '/' },
      { text: '在线体验', link: 'https://win12.tech' },
    ],

    sidebar: [
      {
        text: 'Wiki',
        items: [
          { text: '主页', link: '/' },
          { text: '测试页', link: '/test' }
        ]
      }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    editLink: {
      pattern: 'https://github.com/lingbopro/win12-wiki/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/win12-online/win12' }
    ]
  }
})
