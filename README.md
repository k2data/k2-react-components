## 使用说明
**1.<Header />组件**
```javascript
 const navList = [
       {
         name: '控制台',
         dropMenu: ['controll1', 'controll2'],
         active: false,
         menuClick: () => { console.log(1111) }
       },
       {
         name: '数据查询',
         dropMenu: ['data1', 'data2'],
         active: false,
         menuClick: (value) => { console.log(value) }
       },
       {
         name: '数据分析',
         dropMenu: ['fenxi1', 'fenxi2'],
         active: false,
         menuClick: () => { console.log(3333) }
       },
       {name: '多维分析', active: true, menuClick: (value) => { console.log(value) }},
       {name: '运维',  menuClick: () => { console.log('运维click') }},
       {name: '数据档案'},
       {name: '导入数据'}
     ]
    ReactDOM.render(
      <Header
      navList={navList}
      selects={['时序数据', '关系型数据', '结构化数据', '非结构化数据']}
      userMessage={{'name': 'adminT','navList': ['message', 'modify', 'layout']}}
      // onSelectChange={function (value) {console.log(value)}}
      userControll={function (value) { console.log(value) }}
      // searchChange={function (value) { console.log(value) }}
      logoData={{'title': 'KMX Manager'}}
       />,
      document.getElementById('root')
    )
```
自己引入css样式和组件
```javascript
import Header from 'k2-react-components/lib/Header/index.js'
import 'k2-react-components/lib/Select/index.css'
import 'k2-react-components/lib/UserList/index.css'
import 'k2-react-components/lib/SearchBox/index.css'
import 'k2-react-components/lib/Header/index.css'
```

**2.<SideMenu />组件**
```javascript
 const menuComponent = <span>11</span>
    ReactDOM.render(
      <SideMenu menuComponent={menuComponent}
       />,
      document.getElementById('root')
    )
```
自己引入css样式和组件
```javascript
import SideMenu from 'k2-react-components/lib/SideMenu/index.js'
import 'k2-react-components/lib/SideMenu/index.css'
```






# k2 react components

## TODOS
1. use web components in examples/index.html
