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
    console.log(e.target)
    document.body.onclick = () => {
      this.setState({
        display: 'none',
        className: 'placeholder_close'
      })
    }
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
      <div className='user__list' onClick={this.selectClick}>
        <span className={this.state.className} id='selectContent'>{this.props.userMessage.name}</span>
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
