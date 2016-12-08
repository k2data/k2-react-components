import React from 'react'
import Select from '../Select/index.js'
import UserList from '../UserList/UserList.js'
import SearchBox from '../SearchBox/index.js'
import 'animate.css'
const Header = React.createClass({
  propTypes: {
    navList: React.PropTypes.array.isRequired,
    selects: React.PropTypes.array.isRequired,
    userMessage: React.PropTypes.object.isRequired,
    onSelectChange: React.PropTypes.func,
    navChange: React.PropTypes.func,
    userControll: React.PropTypes.func,
    searchChange: React.PropTypes.func,
    logoData: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      visibility: 'hidden',
      display: 'none'
    }
  },
  navClick (e) {
    const navList = this.refs['nav']
    const navArr = navList.getElementsByTagName('li')
    for (let i = 0, len = navArr.length; i < len; i++) {
      navArr[i].className = ''
      if (navArr[i].innerHTML === e.target.innerHTML) {
        navArr[i].className = 'active'
      }
    }
    if (this.state.visibility === 'visible') {
      const hiddenList = this.refs['hiddenNav'].getElementsByTagName('li')
      for (let i = 0, len = hiddenList.length; i < len; i++) {
        hiddenList[i].className = ''
      }
      this.setState({
        display: 'none'
      })
    }
    this.props.navChange
      ? this.props.navChange(e.target.innerHTML)
        : ''
  },
  componentDidMount () {
    this.hiddenNavFunc()
    window.addEventListener('resize', this.hiddenNavFunc)
  },
  componentWillUnmount () {
    window.removeEventListener('resize', this.hiddenNavFunc)
  },
  hiddenNavFunc () {
    const navBox = this.refs['nav']
    const navs = navBox.getElementsByTagName('li')
    let navAllWidth = Number()
    let hiddenList = []
    for (let i = 0, len = navs.length; i < len; i++) {
      navAllWidth += navs[i].offsetWidth
      if (navAllWidth > navBox.offsetWidth) {
        hiddenList.push(navs[i].innerHTML)
      }
    }
    this.setState({
      hiddenList
    })
    if (navAllWidth > navBox.offsetWidth) {
      this.setState({
        visibility: 'visible'
      })
    }
  },
  showHidden (e) {
    e.stopPropagation()
    this.setState({
      display: this.state.display === 'none' ? 'block' : 'none'
    })
    e.target.onblur = () => {
      this.setState({
        display: 'none'
      })
    }
  },

  hiddenListClick (e) {
    const navList = this.refs['nav']
    const navArr = navList.getElementsByTagName('li')
    const hiddenList = this.refs['hiddenNav'].getElementsByTagName('li')
    for (let i = 0, len = navArr.length; i < len; i++) {
      navArr[i].className = ''
    }
    for (let i = 0, len = hiddenList.length; i < len; i++) {
      hiddenList[i].className = ''
      if (hiddenList[i].innerHTML === e.target.innerHTML) {
        hiddenList[i].className = 'hidden__active'
      }
    }
    this.props.navChange
      ? this.props.navChange(e.target.innerHTML)
        : ''
  },

  render () {
    return (
      <header className='header-container'>
        <div className='header__logo'>
          <div className='header__logo_title'>
            <span><img src={'/logo.png'} /></span>
            <span>
              <b>
                {
                  this.props.logoData && this.props.logoData.title
                    ? this.props.logoData.title
                      : ''
                }
              </b>
            </span>
          </div>
        </div>
        <div className='header__controll'>
          <div className='header__controll__nav'>
            <ul onClick={this.navClick} ref='nav'>
              {
                this.props.navList && this.props.navList instanceof Array &&
                  this.props.navList.length !== 0
                  ? this.props.navList.map((item, index) => {
                    if (index === 0) {
                      return <li key={`nav${index}`} className='active'>{item}</li>
                    } else {
                      return <li key={`nav${index}`}>{item}</li>
                    }
                  })
                    : ''
              }
            </ul>
            <a href='javascript:;' className='header__controll__showhidden'
              style={{visibility: this.state.visibility}} onClick={this.showHidden}>
              ...
              <div className='header__controll_hidden-list animated infinite slideInDown'
                style={{display: this.state.display}}>
                <ul onClick={this.hiddenListClick} ref='hiddenNav'>
                  {
                    this.state.hiddenList
                      ? this.state.hiddenList.map((item, index) => {
                        return <li key={`hiddenlist${index}`}>{item}</li>
                      }) : ''
                  }
                </ul>
              </div>
            </a>
            <span className='header__controll__drop'>
              <Select selects={this.props.selects} onSelectChange={this.props.onSelectChange} />
            </span>
          </div>
          <div className='header__controll__search'>
            <SearchBox searchChange={this.props.searchChange} />
          </div>
          <div className='header__controll__admin'>
            <UserList userMessage={this.props.userMessage} userControll={this.props.userControll} />
          </div>
        </div>
      </header>
    )
  }
})

export default Header
