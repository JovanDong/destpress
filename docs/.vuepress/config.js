module.exports = {
  //这里面路径最开始的/是指向.vuepress/public/的
  base: '/', //部署站点的基础路径,默认/
  lang: 'zh-CN', //语言设置
  title: '你好， VuePress ！', //所有页面标题的后缀，并且在默认主题的导航栏中显示
  description: '这是我的第一个 VuePress 站点', //站点描述，它会被每个页面的 Frontmatter 中的 description 字段覆盖
  head: [['link', { rel: 'icon', href: './images/logo.png' }]], //站点头部的icon
  // themeConfig: {
  //   logo: './images/logo.png',
  //   nav: [
  //     { text: '首页', link: '/' },
  //     {
  //       text: '测试知识库',
  //       link: '/test/',
  //     },
  //     {
  //       text: '相关链接',
  //       items: [
  //         {
  //           text: '测试百度的链接',
  //           link: 'https://www.baidu.com',
  //         },
  //       ],
  //     },
  //   ],
  //   sidebar: {
  //     '/test/': [
  //       {
  //         title: '首页',
  //         path: '/',
  //       },
  //       {
  //         title: '基础学习',
  //         path: '/test/first',
  //         children: [
  //           { title: '第一个', path: '/test/first' },
  //           { title: '第二个', path: '/test/second' },
  //         ],
  //       },
  //     ],
  //     '/中文测试/': [
  //       {
  //         title: '首页',
  //         path: '/',
  //       },
  //       {
  //         title: '中文文件夹测试',
  //         path: '/中文测试/第一个',
  //         children: [{ title: '第一个', path: '/中文测试/第一个' }],
  //       },
  //     ],
  //   },
  //   sidebarDepth: 1, //侧边栏自动提取文章的几层标题
  // },
}
