import React from 'react'
import { Menu, Dropdown, Icon } from 'antd'

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
          <a className='ant-dropdown-link' href='#'>
            admin <Icon type='down' />
          </a>
        </Dropdown>
      </div>
    )
  }
})

export default UserList
