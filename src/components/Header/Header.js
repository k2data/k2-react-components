import React from 'react'
import SelectComponent from '../Select/index.js'
import UserList from '../UserList/UserList.js'
import SearchBox from '../SearchBox/index.js'
import NavList from '../NavList/index.js'

const Header = React.createClass({
  propTypes: {
    navList: React.PropTypes.array.isRequired,
    selects: React.PropTypes.array,
    showSelects: React.PropTypes.bool,
    userMessage: React.PropTypes.object.isRequired,
    onSelectChange: React.PropTypes.func,
    navChange: React.PropTypes.func,
    userControll: React.PropTypes.func,
    searchChange: React.PropTypes.func,
    showSearch: React.PropTypes.bool,
    logoData: React.PropTypes.object.isRequired
    // logo: React.PropTypes.string
  },
  render () {
    const { logo, title, width, fontSize } = this.props.logoData
    return (
      <header className='header-container'>
        <div className='header__logo' style={{ width: `${width || 140}px`, fontSize: `${fontSize || 30}px` }}>
          <div className='header__logo_title'>
            {
              logo && logo.src &&
              <span className='logoImg'>
                <a href={logo.href || ''}>
                  <img title={title || ''} alt={title || ''} src={logo.src} width='23' />
                </a>
              </span>
            }
            <span>
              <b>
                {
                  title || ''
                }
              </b>
            </span>
          </div>
        </div>
        <div className='header__controll' style={{ marginLeft: `${width || 140}px` }}>
          <div className='header__controll__admin'>
            {
              this.props.userMessage.name && this.props.userMessage.name !== '' &&
              <UserList userMessage={this.props.userMessage} userControll={this.props.userControll} />
            }
          </div>
          <div className='header__controll__nav'>
            <NavList navList={this.props.navList} />
            {this.props.showSelects && <span className='header__controll__drop'>
              <SelectComponent selects={this.props.selects} onSelectChange={this.props.onSelectChange} />
            </span>
            }
          </div>
          {this.props.showSearch && <div className='header__controll__search'>
            <SearchBox searchChange={this.props.searchChange} />
          </div>
          }
        </div>
      </header>
    )
  }
})

export default Header

Header.defaultProps = {
  // logo: 'logo.png',
  showSearch: true,
  showSelects: true
}
