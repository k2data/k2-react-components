export default {
  showSearch: false,
  showSelects: false,
  navList: [
    {
      name: '数据接入',
      menuClick: () => { window.location.href = 'https://www.baidu.com' },
    },
    {
      name: '数据管理',
      active: true,
      menuClick: () => {},
    },
    {
      name: '数据分析',
      menuClick: () => { window.location.href = 'https://www.baidu.com' },
    },
    {
      name: '系统管理',
      menuClick: () => { window.location.href = 'https://www.baidu.com' },
    },
  ],
  selects: ['时序数据', '关系型', '半结构化', '非结构化'],
  userMessage: {'name': '管理员', navList: ['登出']},
  userControll: () => { console.log('user controle') },
  logo: '/logo.png',
  logoData: {'title': 'KMX Manager'},
}
