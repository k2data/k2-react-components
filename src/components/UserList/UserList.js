import React from 'react'

const UserList = React.createClass({
  propTypes: {
    userMessage: React.PropTypes.object.isRequired,
    userControll: React.PropTypes.func
  },
  getInitialState () {
    return {
      display: 'none',
      className: 'placeholder_close'
    }
  },
  selectClick (e) {
    e.stopPropagation()
    this.setState({
      display: this.state.display === 'block' ? 'none' : 'block',
      className: this.state.className === 'placeholder_close'
                  ? 'placeholder_open' : 'placeholder_close'
    })
  },
  componentDidMount () {
    // const that = this
    // document.body.addEventListener('mousemove', function (e) {
    //   if (e.target.id === 'userList' || e.target.id === 'adminContent') {
    //     document.body.onclick = null
    //   } else {
    //     document.body.onclick = function () {
    //       that.setState({
    //         display: 'none',
    //         className: 'placeholder_close'
    //       })
    //     }
    //   }
    // })
  },
  itemClick (e) {
    e.stopPropagation()
    this.setState({
      display: 'none',
      className: 'placeholder_close'
    })
    this.props.userControll
      ? this.props.userControll(e.target.innerHTML)
        : ''
  },
  render () {
    return (
      <div className='user__list' onClick={this.selectClick} id='userList'>
        <span className={this.state.className} id='adminContent'>{this.props.userMessage.name}</span>
        <ul id='liOptions' style={{display: this.state.display}}>
          {
            this.props.userMessage && this.props.userMessage.navList &&
              this.props.userMessage.navList instanceof Array
              ? this.props.userMessage.navList.map((item, index) => {
                return <li key={`user${index}`} onClick={this.itemClick}>{item}</li>
              })
                : ''
          }
        </ul>
      </div>
    )
  }
})

export default UserList
