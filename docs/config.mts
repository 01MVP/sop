import taskLists from 'markdown-it-task-lists';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig, type HeadConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
const vitePressConfig = {
  title: '01MVP VitePress Template',
  description: '快速、简单、开箱即用的 VitePress 文档模板',
  lastUpdated: true,
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#111827' }],
    ['link', { rel: 'apple-touch-icon', href: '/pwa-192x192.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ] as HeadConfig[],
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['pwa-192x192.png', 'pwa-512x512.png'],
        manifest: {
          name: '01MVP VitePress Template',
          short_name: '01MVP Docs',
          description: '快速、简单、开箱即用的 VitePress 文档模板',
          theme_color: '#111827',
          background_color: '#111827',
          display: 'standalone',
          start_url: '/',
          scope: '/',
          icons: [
            { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
      }),
    ],
    ssr: {
      noExternal: ['vitepress-plugin-nprogress'],
    },
  },
  mermaid: {
    theme: 'default' as const,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern:
        'https://github.com/01mvp/vitepress-template/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/getting-started' },
      { text: '指南', link: '/guide/' },
      { text: '示例', link: '/markdown-examples' },
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/01mvp/vitepress-template' },
      { icon: 'x', link: 'https://twitter.com/01mvp' },
    ],

    // 本地化配置
    outline: {
      label: '目录',
      level: [2, 3],
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchLabel: '切换到浅色模式',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
  },
  markdown: {
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    config(md: any) {
      md.use(taskLists, { enabled: true });
      md.use(tabsMarkdownPlugin);
    },
  },
};

const sidebarOptions = {
  // 文档根目录（对应 docs/.vitepress 所在路径）
  documentRootPath: '/docs',
  // 侧边栏分组可折叠
  collapsed: false,
  // 二级及更深层级默认折叠
  collapseDepth: 2,
  // 优先读取 frontmatter 的 title
  useTitleFromFrontmatter: true,
  // frontmatter 没有 title 时，取一级标题
  useTitleFromFileHeading: true,
  // 文件夹标题从 index.md 读取
  useFolderTitleFromIndexFile: true,
  // 文件夹链接指向 index.md
  useFolderLinkFromIndexFile: true,
  // 根目录的 index.md 不显示在侧边栏 (通常首页不需要)
  includeRootIndexFile: false,
  // 按链接中的数字顺序排序（适合 01-xxx 之类命名）
  sortMenusOrderNumericallyFromLink: true,
  // 排除系统文件
  excludeByGlobPattern: ['**/.DS_Store'],
};

const configWithSidebar = withSidebar(vitePressConfig, sidebarOptions);

// 导出配置
// 1. 如果使用自动侧边栏：
export default defineConfig(withMermaid(configWithSidebar));

// 2. 如果要手动配置侧边栏，请注释上面一行，取消下面注释，并在 themeConfig.sidebar 中配置
// export default defineConfig(withMermaid(vitePressConfig))
