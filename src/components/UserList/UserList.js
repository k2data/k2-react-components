import React from 'react'

const UserList = React.createClass({
  propTypes: {
    userMessage: React.PropTypes.object.isRequired,
    userControll: React.PropTypes.func,
  },
  menuClick (e) {
    this.props.userControll
      ? this.props.userControll(e.key)
    : ''
    console.log('退出')
  },
  render () {
    return (
      <div className="header_user_center">
        <div className="header_username">
          <span>{this.props.userMessage.name}</span>
        </div>
        <div className="header_separate">
          <span>&nbsp;|&nbsp;</span>
        </div>
        <div className="header_logOut">
          <span onClick={this.menuClick}>{this.props.userMessage.tuichu}</span>
        </div>
      </div>
    )
  },
})

export default UserList
