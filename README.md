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
      // logoData={{'title': 'KMX', 'logo': {src: 'logo.png', href: 'http://www.baidu.com'}, 'width': 180, fontSize: 16}}
      logoData={{'title': 'KMX Manager'}}
       />,
      document.getElementById('root')
    )
```
Header新增功能：
  在原有的基础上可进行logo的切换， 若在logoData中未添加logo属性（或logo属性为空） 则不显示logo，
  其中logo属性可设置logo图的src，同时还可设置logo图的链接（点击logo跳转到那？）。
  添加了width、fontSize属性，可控制logo区域的宽度和字体大小，如没有设置则显示默认的宽度和字体大小（默认为款140px,字体16px）
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

**3.<SideBar />组件**
```javascript
var list = [
  {name: 'test01', icon: <Icon type="apple" />,
    toggle: true,
    second: [
      {name: 'sli01', onClick: function () { console.log('I am second -- sli01') } },
      {name: 'sli02', disabled: true},
      {name: 'sli03'}
    ]
  },
  {name: 'test02', img: 'anls.png', onClick: function () { console.log('test02') }, active: true},
  {name: 'test03', img: 'mode.png', onClick: function () { console.log('test03') }},
  {name: 'test04', img: 'program.png', onClick: function () { console.log('test04') }},
  {name: 'LINK', img: 'program.png', href: 'http://www.baidu.com', disabled: true}
]
ReactDOM.render(
  <SideBar
    list={list}
    width={220}
   />,
  document.getElementById('root')
)
```
根据新的设计，并为了所有项目服务，增加了SideBar组件
当前设计： 支持一级菜单，二级菜单（待续。。。）
list属性：
  类型： 数组
  数组元素格式：
    一级菜单：
    {
      name（菜单名）:test,
      icon(菜单icon，antd中的Icon或是fontawesome): <Icon type="apple" />,
      img(如果不用icon， 则可以使用img传入图片路径，图片要用png): 'mode.png',
      onClick(菜单点击事件): function () { console.log('test02') },
      active（是否初始化被激活）: true，
      disabled（是否初始化禁用）: true，
      href(是否为链接)：'http://www.k2data.com.cn'
    }
    NOTE: 如果使用href则click事件不生效，也不能制作二级菜单

    二级菜单：
    {
      name（菜单名）:test,
      icon(菜单icon，antd中的Icon或是fontawesome): <Icon type="apple" />,
      img(如果不用icon， 则可以使用img传入图片路径，图片要用png): 'mode.png',
      toggle（是否默认打开二级菜单）: true,
      second(二级菜单内容，数据格式为数组)： [
        {name: 'sli01', onClick: function () { console.log('I am second -- sli01') } },
        {name: 'sli02', disabled: true},
        {name: 'sli03'}
      ]
    }
width属性：
  可控制菜单的宽度，如不设置，则显示默认宽度，为140px。

另一种使用方法：
  <SideBar width={220}>
    {自己定义的菜单组件}
  </SideBar>
自己引入css样式和组件
```javascript
import SideBar from 'k2-react-components/lib/SideBar/index.js'
import 'k2-react-components/lib/SideBar/index.css'
```
**4.Share组件**
由于pas和console等ＫＭＸ产品可能用到公用的一个分享功能，避免重复性，封装一个新的组件 Share
接受参数：　list: 数组（必须）, share:　callback(必须), callback接收一个数组进行处理，
          title: 弹窗显示名称(非必须)，　type: 根据ａｎｔｄ的Button组件的type（非必须），
          size: 参考ａｎｔｄ的Button的ｓｉｚｅ，　loading： 分享触发时的loading效果
eg：
  ```javascript
  <script type="text/babel">
  var ShareDom = React.createClass({
      getInitialState: function () {
        return {loading: false, list: ['javascript', 'Node', 'React', 'Vue']}
      },
      share: function (val) {
        this.setState({ loading: true })
        console.info(val)
        setTimeout(() => {
          this.setState({ loading: false })
        }, 10000)
      },
      render: function () {
        return <Share
          list={this.state.list}
          share={this.share}
          title='分享'
          type='primary'
          size='small'
          loading={this.state.loading}
        />
      }
    })
    ReactDOM.render(
      <ShareDom />,
      document.getElementById('root')
    )
  </script>
  ```

# k2 react components

## TODOS
1. use web components in examples/index.html
