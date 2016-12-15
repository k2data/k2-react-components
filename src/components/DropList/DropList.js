import React from 'react'
const DropList = React.createClass({
  propTypes: {
    list: React.PropTypes.object.isRequired,
    name: React.PropTypes.string.isRequired,
    menuClick: React.PropTypes.func
  },
  getInitialState () {
    return {
      display: 'none',
      arrow: 'drop__menu__name_hide',
      current: this.props.name
    }
  },
  dropDown (e) {
    this.setState({
      display: this.state.display === 'none' ? 'block' : 'none',
      arrow: this.state.arrow === 'drop__menu__name_hide' ? 'drop__menu__name_open' : 'drop__menu__name_hide'
    })
  },
  listClick (e) {
    this.setState({
      display: 'none',
      arrow: 'drop__menu__name_hide'
    })
    this.props.menuClick
      ? this.props.menuClick(e.target.innerHTML)
        : ''
  },
  setHide () {
    this.setState({
      display: 'none',
      arrow: 'drop__menu__name_hide'
    })
  },
  clickHiden (e) {
    if (e.target.getAttribute('target') === this.state.current) {
      document.body.removeEventListener('click', this.setHide)
    } else {
      document.body.addEventListener('click', this.setHide)
    }
  },
  componentDidUpdate () {
    if (this.state.display === 'none') {
      document.body.removeEventListener('mousemove', this.clickHiden)
      document.body.removeEventListener('click', this.setHide)
    } else {
      document.body.addEventListener('mousemove', this.clickHiden)
    }
  },
  render () {
    return (
      <div className='drop__menu'>
        <span onClick={this.dropDown} target={this.state.current}
          className={this.state.arrow}>{this.props.name}</span>
        <div style={{display: this.state.display}} className='drop__menu__list'>
          <ul>
            {
              this.props.list.map((item, index) => {
                return <li key={`dropList${index}`} onClick={this.listClick}>{item}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
})

export default DropList
