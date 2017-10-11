export default {
  showSearch: false,
  showSelects: false,
  navList: [
    {
      name: '数据接入',
      active: true,
      href: '#0',
    },
    {
      name: '数据管理',
      href: '#1',
    },
    {
      name: '数据分析',
      href: '#2',
    },
    {
      name: '系统管理',
      href: '#3',
    },
    {
      name: '用户管理',
      href: '#4',
    },
  ],
  selects: ['时序数据', '关系型', '半结构化', '非结构化'],
  user: {
    name: 'admin',
    nav: [],
    logout: {
      title: '退出', callback: () => console.log('登出')},
  },
  logoData: {logo: {src: require('./logo.png')}},
}
