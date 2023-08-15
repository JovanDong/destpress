module.exports = {
  head: [
    // 设置 favor.ico，html/head 标题中添加 style 标签
    ['link', { rel: 'icon', href: `logo.png` }],
  ],
  title: 'Jovan的技术站', // 设置网站标题
  description: '描述：我的技术站',
  base: '/', //默认路径
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }],
    '@vuepress/back-to-top',
    '@vuepress/blog',

  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    // 主题设置
    nav: [
      {
        // 右上导航航条 docs/.vuepress 文件夹下
        text: '首页',
        link: '/',
      },
      {
        text: 'JS 学习笔记',
        items: [
          { text: '笔记', link: '/guide/js/test01' }, // 可不写后缀 .md
          { text: '其它链接', link: 'https://blog.csdn.net/Mr_dong_ya_yun' }, // 外部链接
        ],
      },
      {
        text: 'Vue 学习笔记',
        items: [
          { text: '笔记', link: '/guide/vue/test01' }, // 可不写后缀 .md
          { text: '其它链接', link: 'https://blog.csdn.net/Mr_dong_ya_yun' }, // 外部链接
        ],
      },
      {
        text: 'Typescript 学习笔记',
        items: [
          { text: '笔记', link: '/guide/ts/' }, // 以 ‘/’结束，默认读取 README.md
          { text: '其它链接', link: 'https://blog.csdn.net/Mr_dong_ya_yun' }, // 外部链接
        ],
      },
      {
        text: 'gitCode',
        link: 'https://gitcode.net/Mr_dong_ya_yun',
      },
    ],
    sidebar: {
      //左侧列表
      '/guide/js/': [
        {
          // 对应导航中的link文件夹路径，注意这里是 ‘/’结束
          title: 'Js 学习',
          collapsable: true,
          children: [
            {
              title: '测试01',
              path: 'test01',
            }
          ],
        },
      ],
      '/guide/vue/': [
        {
          // 对应导航中的link文件夹路径，注意这里是 ‘/’结束
          title: 'Vue 学习',
          collapsable: true,
          children: [
            {
              title: '测试01',
              path: 'test01',
            },
            {
              title: '测试02',
              path: 'test02',
            },
            {
              title: '测试03',
              path: 'test03',
            },
          ],
        },
      ],
      '/guide/ts/': [
        {
          title: 'Typescript 学习',
          collapsable: false,
          children: [
            {
              title: '1.基础数据类型',
              path: 'ts-01',
            },
            {
              title: '2.ts断言',
              path: 'ts-02',
            },
            {
              title: '3.接口',
              path: 'ts-03',
            },
            {
              title: '4.类',
              path: 'ts-04',
            },
            {
              title: '5.函数',
              path: 'ts-05',
            },
            {
              title: '6.泛型',
              path: 'ts-06',
            }
          ],
        },
      ],
      // fallback 侧边栏被最后定义
      '/': [''], //不能放在数组第一个，否则会导致右侧栏无法使用
    },
    // 左侧列表展开级数，默认是 1
    sidebarDepth: 1,
  },
}
