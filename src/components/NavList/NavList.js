import React from 'react'
import Menu from 'antd/lib/menu'
import Dropdown from 'antd/lib/dropdown'
import Icon from 'antd/lib/icon'
type Props = {
  navList: React.PropTypes.array.isRequired
}
export default class NavList extends React.Component {
  props: Props
  state = {
    current: '',
    currentKey: ''
  }

  constructor (props) {
    super(props)
    this.handlerClick = this.handlerClick.bind(this)
    this.subMenuClick = this.subMenuClick.bind(this)
  }

  handlerClick (e) {
    let subMenus = []
    this.props.navList && this.props.navList.map((list) => {
      !list.dropMenu || list.dropMenu.length === 0
        ? subMenus.push(list.name)
      : this.setState({
        currentKey: e.key
      })
    })
    subMenus.map((item) => {
      e.key === item
        ? (() => {
          this.setState({
            current: e.key
          })
          e.item.props.clickEvent && e.item.props.clickEvent(e.key)
        })()
      : ''
    })
  }

  subMenuClick (e) {
    const newCurrent = this.state.currentKey
    this.setState({
      current: newCurrent
    })
    e.item.props.clickEvent && e.item.props.clickEvent(e.key)
  }

  componentWillMount () {
    this.props.navList
      ? this.props.navList.map((item) => {
        item.active
          ? this.setState({
            current: item.name
          })
        : ''
      })
    : ''
  }
  render () {
    return (
      <div className='nav__list'>
        <Menu onClick={this.handlerClick}
          selectedKeys={[this.state.current]}
          mode='horizontal'
          >
          {
            this.props.navList && this.props.navList instanceof Array
              ? this.props.navList.map((list) => {
                if (list.name && list.dropMenu) {
                  const menu = <Menu onClick={this.subMenuClick}>
                    {
                      list.dropMenu.map((dp) => {
                        return <Menu.Item clickEvent={list.menuClick} key={dp}>{dp}</Menu.Item>
                      })
                    }
                  </Menu>
                  return <Menu.Item
                    key={list.name}><Dropdown overlay={menu} trigger={['click']}>
                      <span className='nav__list_dp' style={{ textAlign: 'center' }}>
                        {list.name}&nbsp;&nbsp;<Icon type='down' /></span>
                    </Dropdown></Menu.Item>
                }
                return <Menu.Item clickEvent={list.menuClick} key={list.name}>
                  <span className='nav__list_dp' style={{ textAlign: 'center' }}>{list.name}</span>
                </Menu.Item>
              })
            : ''
          }
        </Menu>
      </div>
    )
  }
}
