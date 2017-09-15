import React from 'react'
// import Menu from 'antd/lib/menu'
// import Dropdown from 'antd/lib/dropdown'
// import Icon from 'antd/lib/icon'
// import R from 'ramda'
type Props = {
  navList: React.PropTypes.array.isRequired
}

export default class NavList extends React.Component {
  // props: Props
  // state = {
  //   current: '',
  //   currentKey: '',
  // }

  // constructor (props) {
  //   super(props)
  //   this.handlerClick = this.handlerClick.bind(this)
  //   this.subMenuClick = this.subMenuClick.bind(this)
  // }
  // componentWillReceiveProps (nextProps) {
  //   if (!R.equals(nextProps.navList, this.props.navList)) {
  //     nextProps.navList
  //     ? nextProps.navList.map((item) => {
  //       item.active
  //       ? this.setState({
  //         current: item.name,
  //       })
  //       : ''
  //     })
  //     : ''
  //   }
  // }

  // handlerClick (e) {
  //   let subMenus = []
  //   this.props.navList && this.props.navList.map((list) => {
  //     !list.dropMenu || list.dropMenu.length === 0
  //       ? subMenus.push(list.name)
  //     : this.setState({
  //       currentKey: e.key,
  //     })
  //   })
  //   subMenus.map((item) => {
  //     e.key === item
  //       ? (() => {
  //         this.setState({
  //           current: e.key,
  //         })
  //         e.item.props.clickEvent && e.item.props.clickEvent(e.key)
  //       })()
  //     : ''
  //   })
  // }

  // subMenuClick (e) {
  //   const newCurrent = this.state.currentKey
  //   this.setState({
  //     current: newCurrent,
  //   })
  //   e.item.props.clickEvent && e.item.props.clickEvent(e.key)
  // }
  render () {
    return (
      <ul className="header_menu_list">
        {
          this.props.navList && this.props.navList instanceof Array
            ? this.props.navList.map((list) => {
              return <li key={list.name}><a href={list.href}>{list.name}</a><span>|</span></li>
            })
            : ''
        }
      </ul>
    )
  }
}
