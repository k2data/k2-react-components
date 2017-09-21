import React from 'react'
// import SelectComponent from '../Select/index.js'
import UserList from '../UserList/UserList.js'
// import SearchBox from '../SearchBox/index.js'
import NavList from '../NavList/index.js'

const Header = React.createClass({
  propTypes: {
     navList: React.PropTypes.array.isRequired,
    // selects: React.PropTypes.array,
    // showSelects: React.PropTypes.bool,
    userMessage: React.PropTypes.object.isRequired,
    // onSelectChange: React.PropTypes.func,
    // navChange: React.PropTypes.func,
    userControll: React.PropTypes.func,
    // searchChange: React.PropTypes.func,
    // showSearch: React.PropTypes.bool,
    logoData: React.PropTypes.object.isRequired,
    // logo: React.PropTypes.string
  },
  render () {
    const { logo, title, width, fontSize } = this.props.logoData
    return (
      <header className='header-container'>
        <div className='header__logo' style={{ width: `${width || 200}px`, fontSize: `${fontSize || 30}px` }}>
          <div className='header__logo_title'>
            {
              logo && logo.src &&
              <div className='logoImg'>
                <a className='logo-box' href={logo.href || ''}>
                  <img title={title || ''} alt={title || ''} src={logo.src} width='105' />
                </a>
              </div>
            }
          </div>
        </div>
        <div className="header__controll">
          <NavList navList={this.props.navList} />
        </div>
        <div className="header_user">
        {
          this.props.userMessage.name && this.props.userMessage.name !== '' &&
          <UserList userMessage={this.props.userMessage} userControll={this.props.userControll}></UserList>
        }
        </div>
      </header>
    )
  },
})

export default Header

Header.defaultProps = {
  // logo: 'logo.png',
  showSearch: true,
  showSelects: true,
}
