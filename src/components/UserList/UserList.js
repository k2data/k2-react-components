import React from 'react'
import Menu from 'antd/lib/menu'
import Dropdown from 'antd/lib/dropdown'
import Icon from 'antd/lib/icon'

const UserList = React.createClass({
  propTypes: {
    userMessage: React.PropTypes.object.isRequired,
    userControll: React.PropTypes.func
  },
  menuClick (e) {
    this.props.userControll
      ? this.props.userControll(e.key)
    : ''
  },
  render () {
    const menu = (
      <Menu onClick={this.menuClick}>
        {
          this.props.userMessage && this.props.userMessage.navList &&
            this.props.userMessage.navList instanceof Array
            ? this.props.userMessage.navList.map((item) => {
              return <Menu.Item key={item}>{item}</Menu.Item>
            })
          : ''
        }
      </Menu>
    )
    return (
      <div className='user__list' id='userList'>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className='ant-dropdown-link' href='#' title={this.props.userMessage.name}>
            {this.props.userMessage.name}&nbsp;&nbsp;
            {
              this.props.userMessage.navList instanceof Array && this.props.userMessage.navList.length !== 0 &&
              <Icon type='down' />
            }
          </a>
        </Dropdown>
      </div>
    )
  }
})

export default UserList
