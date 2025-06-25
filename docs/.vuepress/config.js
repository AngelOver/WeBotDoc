import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 请不要忘记设置默认语言
  blog: false,
  lang: 'zh-CN',
  head: [
    [
        'link', { rel: 'icon', href: '/images/logo.png' },
    ]
  ],
  locales: {
    '/': { lang: 'zh-CN', title: 'WeChatBot 文档' }
  },
  theme: plumeTheme({
    hostname: 'https://webot.v1chat.cc',
    docsRepo: 'https://github.com/iwyxdxl/WeChatBot_WXAUTO_SE',
    docsBranch: 'master',
    docsDir: 'docs',
    navbar: [
      {
        text: '首页',
        link: '/',
        icon: 'material-symbols:home-outline'
      },
      {
        text: '快速开始',
        link: '/guide/wechatbot-start/',
        icon: 'material-symbols:start-rounded'
      },
      {
        text: '部署教程',
        icon: 'material-symbols:cloud-upload-outline',
        items: [
          {
            text: '本地部署指南',
            link: '/article/k0jowsj2/'
          },
          {
            text: '云服务器部署指南',
            link: '/article/m3jffxef/'
          }
        ]
      },
      {
        text: '配置指南',
        icon: 'material-symbols:settings-outline',
        items: [
          {
            text: '基础配置设置',
            link: '/notes/guide/3. 配置指南/1. 基础配置设置'
          }
        ]
      },
      {
        text: 'API 参考',
        link: '/notes/guide/4. API 参考/1. API 调用',
        icon: 'material-symbols:api'
      },
      {
        text: '功能指南',
        icon: 'material-symbols:auto-awesome-outline',
        items: [
          {
            text: 'AI+机器人功能',
            link: '/notes/guide/5. 杂项/7. AI+WeChatBot'
          },
          {
            text: '事件上报',
            link: '/notes/guide/3. 事件处理/2. 事件上报'
          }
        ]
      },
      {
        text: '常见问题',
        icon: 'material-symbols:help-outline',
        items: [
          {
            text: '高频问题解答',
            link: '/article/rw5g0pkc/'
          },
          {
            text: '安装时常见问题',
            link: '/guide/install-issues/'
          },
          {
            text: '运行时常见问题',
            link: '/guide/runtime-issues/'
          },
          {
            text: '开发时常见问题',
            link: '/guide/pkst6v9y/'
          },
          {
            text: '一键检测问题',
            link: '/guide/diagnostic-issues/'
          }
        ]
      },
      {
        text: '项目参考',
        link: '/notes/guide/8. 实际项目参考/1. 简单 BotClient 项目',
        icon: 'material-symbols:code'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/iwyxdxl/WeChatBot_WXAUTO_SE',
        icon: 'mdi:github'
      }
    ],
    plugins: {
      shiki: {
        languages: ['yaml', 'python', 'shell', 'json'],
      },
      comment: {
        provider: 'Giscus', // "Artalk“ | "Giscus" | "Twikoo" | "Waline"
        comment: true,
        repo: 'iwyxdxl/WeChatBot_WXAUTO_SE',
        repoId: 'R_kgDOMqQW-g',
        category: 'General',
        categoryId: 'DIC_kwDOMqQW-g4Ckdh2',
      },
      markdownPower: {
        imageSize: 'all', // 'local' | 'all'
        plot: true,
      },
    }
  }),
  bundler: viteBundler(),
})
