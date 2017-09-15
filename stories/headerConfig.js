// export default {
//   showSearch: false,
//   showSelects: false,
//   navList: [
//     {
//       name: '数据接入',
//       menuClick: () => { window.location.href = 'https://www.baidu.com' },
//     },
//     {
//       name: '数据管理',
//       active: true,
//       menuClick: () => {},
//     },
//     {
//       name: '数据分析',
//       menuClick: () => { window.location.href = 'https://www.baidu.com' },
//     },
//     {
//       name: '系统管理',
//       menuClick: () => { window.location.href = 'https://www.baidu.com' },
//     },
//   ],
//   selects: ['时序数据', '关系型', '半结构化', '非结构化'],
//   userMessage: {'name': '管理员', navList: ['登出']},
//   userControll: () => { console.log('user controle') },
//   logo: '/logo.png',
//   logoData: {'title': 'KMX Manager'},
// }
export const testValue1 = {
  showSearch: false,
  showSelects: false,
  navList: [
    {
      name: '控制台',
      dropMenu: ['controll1', 'controll2'],
      active: false,
      menuClick: () => { console.log(1111) },
    },
    {
      name: '数据查询',
      dropMenu: ['data1', 'data2'],
      active: false,
      menuClick: (value) => { console.log(value) },
    },
    {
      name: '数据分析',
      dropMenu: ['fenxi1', 'fenxi2'],
      active: false,
      menuClick: () => { console.log(3333) },
    },
    {name: '多维分析', active: true, menuClick: (value) => { console.log(value) }},
    {name: '运维', menuClick: () => { console.log('运维click') }},
    {name: '数据档案'},
    {name: '导入数据'},
  ],
  selects: ['时序数据', '关系型数据', '结构化数据', '非结构化数据'],
  userMessage: {'name': 'adminT', 'navList': ['message', 'modify', 'layout']},
  userControll: function (value) { console.log(value) },
  logoData: {logo: {src: 'logo.png'}},
}

export const testValue2 = {
  showSearch: false,
  showSelects: false,
  navList: [
    {
      name: '数据接入',
      menuClick: () => { window.location.href = '' },
      href: '1'
    },
    {
      name: '数据管理',
      menuClick: () => { window.location.href = '' },
      href: '2'
    },
    {
      name: '数据分析',
      active: true,
      menuClick: () => {},
      href: '3'
    },
    {
      name: '系统管理',
      menuClick: () => { window.location.href = '' },
      href: '4'
    },
    {
      name: '用户管理',
      menuClick: () => { window.location.href = '' },
      href: '5'
    },
  ],
  selects: ['时序数据', '关系型', '半结构化', '非结构化'],
  userMessage: {'name': 'admin', navList: ['登出']},
  userControll: this.handleUserList,
  logoData: {logo: {src: require('./logo.png')}},
}
