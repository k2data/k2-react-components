import React from 'react'
import Menu from 'antd/lib/menu'
// import { Menu } from 'antd'
const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup

type Props = {
  menuList: Object
}
export class SideMenu extends React.Component {
  props: Props
  constructor (props) {
    super(props)

    this.state = {
      current: '1'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState({
      current: e.key
    })
  }

  render () {
    return (
      <div className='side__menu'>
        <Menu onClick={this.handleClick}
          style={{ width: 218 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode='inline'
          >
          <SubMenu key='sub1' title={<span><img className='icon__box' src='datasource.png' /><span>数据源</span></span>}>
            <Menu.Item key='1'>气象观测(历史)</Menu.Item>
            <Menu.Item key='2'>空气质量观测(历史)</Menu.Item>
            <Menu.Item key='3'>大尺度气象预测</Menu.Item>
            <Menu.Item key='4'>地理信息</Menu.Item>
            <Menu.Item key='33'>污染源清单</Menu.Item>
            <Menu.Item key='34'>周边省空气质量观测</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' disabled
            title={<span><img className='icon__box' src='dataclean.png' /><span>数据清洗</span></span>}>
            <Menu.Item key='5'>Option 5</Menu.Item>
            <Menu.Item key='6'>Option 6</Menu.Item>
          </SubMenu>
          <SubMenu key='sub3' disabled
            title={<span><img className='icon__box' src='Willdo.png' /><span>预处理</span></span>}>
            <Menu.Item key='9'>Option 9</Menu.Item>
            <Menu.Item key='10'>Option 10</Menu.Item>
            <Menu.Item key='11'>Option 11</Menu.Item>
            <Menu.Item key='12'>Option 12</Menu.Item>
          </SubMenu>
          <SubMenu key='sub4' disabled
            title={<span><img className='icon__box' src='pull.png' /><span>抽取</span></span>}>
            <Menu.Item key='13'>Option 9</Menu.Item>
          </SubMenu>
          <SubMenu key='sub5'
            title={<span><img className='icon__box' src='future.png' /><span>预测算法</span></span>}>
            <Menu.Item key='14'>autoplait</Menu.Item>
            <Menu.Item key='24'>NN</Menu.Item>
            <Menu.Item key='25'>DL</Menu.Item>
            <Menu.Item key='25'>Random Forest</Menu.Item>
            <Menu.Item key='26'>TSTreeSplit</Menu.Item>
            <Menu.Item key='27'>MoenR</Menu.Item>
            <Menu.Item key='28'>diss.COR</Menu.Item>
            <Menu.Item key='29'>kmeans</Menu.Item>
            <Menu.Item key='30'>hclust</Menu.Item>
            <Menu.Item key='31'>diss.CID</Menu.Item>
            <Menu.Item key='32'>Im</Menu.Item>
          </SubMenu>
          <SubMenu key='sub6' disabled
            title={<span><img className='icon__box' src='view.png' /><span>可视化</span></span>}>
            <Menu.Item key='15'>Option 9</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
// {
//   menuList && menuList.menus && menuList.menus.length
//     ? menuList.menus.map((item, index) => {
//       return <SubMenu key={`sub${index}`} title={item.name}>
//         <Menu.Item key='1'>Option 1</Menu.Item>
//         <Menu.Item key='2'>Option 2</Menu.Item>
//       </SubMenu>
//     })
//   : ''
// }

export default SideMenu
