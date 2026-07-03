import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Win12 Online Wiki',
  srcExclude: ['**/README.md'],
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // By default Cloudflare removes the .html extention
  cleanUrls: true,
  sitemap: {
    hostname: 'https://win12-wiki.lingbopro.qzz.io',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/lingbopro/win12-wiki/edit/main/:path',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lingbopro/win12-wiki' },
    ],
  },

  locales: {
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      description: 'Win12 网页版项目 wiki',

      themeConfig: {
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '在线体验', link: 'https://win12.tech' },
          { text: '源代码', link: 'https://codeberg.org/win12-online/win12' },
        ],

        sidebar: [
          {
            text: '关于 Win12',
            collapsed: false,
            items: [
              { text: '主页', link: '/zh/' },
              {
                text: '关于 GitHub 暂停公开本组织的声明',
                link: '/zh/statements-of-github',
              },
              { text: '观看宣传片', link: '/zh/watch-promo' },
              { text: '加入交流群', link: '/zh/join-chat' },
            ],
          },
        ],

        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        editLink: {
          pattern: 'https://github.com/lingbopro/win12-wiki/edit/main/:path',
          text: '在 GitHub 上编辑此页面',
        },
      },
    },

    en: {
      label: 'English (WIP)',
      lang: 'en',
      description: 'Win12 Online project wiki',

      themeConfig: {
        sidebar: [
          {
            text: 'About Win12',
            collapsed: false,
            items: [{ text: 'Home', link: '/en/' }],
          },
        ],

        editLink: {
          pattern: 'https://github.com/lingbopro/win12-wiki/edit/main/:path',
          text: 'Edit this page on GitHub',
        },
      },
    },
  },
});
