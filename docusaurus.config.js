const path = require('path');
const addFrontMatter = require('./src/utils/addFrontMatter');  // 引入自定义的addFrontMatter函数

const beian = '闽ICP备2020017848号-2';

// 获取当前项目的根目录
const folderPath = './';
const PREFIX = '/pages/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'liuzw的小站',
  titleDelimiter: '-',
  url: 'https://liuzw-cyy.cn',
  baseUrl: '/',
  // c
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/logo.png',
  organizationName: 'liuzw',
  projectName: 'blog',
  tagline: '记录所学知识，领略编程之美',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.png',
    metadata: [
      {
        name: 'keywords',
        content: 'liuzw',
      },
      {
        name: 'keywords',
        content: 'Blog, JavaScript, TypeScript, Node, React, Vue, Web',
      },
      {
        name: 'keywords',
        content: '编程爱好者, 研究生做过深度学习，现在是一名Web开发者',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: '🏡 liuzw',
      logo: {
        alt: 'liuzw',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
      },
      hideOnScroll: true,
      items: [
        {
          label: '📚 Notes',
          position: 'right',
          to: 'docs/note',
        },
        {
          label: '✍ Blog',
          position: 'right',
          items: [
            {
              label: '💻 全部博文',
              to: 'tags',
            },
            {
              label: '⏰ 时间轴',
              to: 'archive',
            },
          ]
        },
        {
          label: '📸 Life Style',
          position: 'right',
          items: [
            {
              label: '✨ 生活指南',
              to: 'tags',
            },
          ],
        },
        {
          label: '🔗 Links',
          position: 'right',
          items: [
            {
              label: '✈导航',
              to: 'resource',
            },
            {
              label: '❤项目',
              to: 'project',
            },
          ],
        },
        // 注释掉导航栏的语言下拉选择栏
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            {
              label: '💻 全部博文',
              to: 'tags',
            },
            {
              label: '⏰ 时间轴',
              to: 'archive',
            },
            {
              label: '📚 Notes',
              to: 'docs/note',
            },
            {
              label: '❤项目',
              to: 'project',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/liuzw-cyy',
            },
            {
              label: '掘金',
              href: 'https://juejin.cn/user/193973670647288',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '友链',
              position: 'right',
              to: 'friends',
            },
            {
              label: '导航',
              position: 'right',
              to: 'resource',
            },
            {
              html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`,
            },
          ],
        },
      ],
      copyright: `<p><a href="http://beian.miit.gov.cn/" >${beian}</a></p><p>Copyright © 2020 - PRESENT liuzw Built with Docusaurus.</p>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {
      appId: 'GV6YN1ODMO',
      apiKey: '50303937b0e4630bec4a20a14e3b7872',
      indexName: 'liuzw',
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {},
    },
    matomo: {
      matomoUrl: 'https://matomo.liuzw-cyy.cn/',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    giscus: {
      repo: 'liuzw-cyy/blog',
      repoId: 'R_kgDOJS8cbQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOJS8cbc4CVoe-',
      theme: 'light',
      darkTheme: 'dark',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/liuzw-cyy',
      juejin: 'https://juejin.cn/user/193973670647288',
      csdn: 'https://blog.csdn.net/kuizuo12',
      qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=3358795244&amp;site=qq',
      zhihu: 'https://www.zhihu.com/people/kuizuo',
    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'liuzw的个人博客',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        // debug: true,
      }),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'], //开启代码块实时编辑功能
  plugins: [
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'),
      {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/liuzw-cyy/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: 'liuzw的个人博客',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: '所有文章',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'liuzw',
          copyright: `Copyright © ${new Date().getFullYear()} liuzw Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
};

// 每次新建md文件时，自动在md文件头部添加frontmatter
addFrontMatter(folderPath, PREFIX);

module.exports = config;
