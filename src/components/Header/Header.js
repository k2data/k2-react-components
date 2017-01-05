import React from 'react'
import SelectComponent from '../Select/index.js'
import UserList from '../UserList/UserList.js'
import SearchBox from '../SearchBox/index.js'
import NavList from '../NavList/index.js'

const Header = React.createClass({
  propTypes: {
    navList: React.PropTypes.array.isRequired,
    selects: React.PropTypes.array,
    showSelects: React.PropTypes.boolean,
    userMessage: React.PropTypes.object.isRequired,
    onSelectChange: React.PropTypes.func,
    navChange: React.PropTypes.func,
    userControll: React.PropTypes.func,
    searchChange: React.PropTypes.func,
    showSearch: React.PropTypes.boolean,
    logoData: React.PropTypes.object.isRequired
  },
  render () {
    return (
      <header className='header-container'>
        <div className='header__logo'>
          <div className='header__logo_title'>
            <span><img src={'logo.png'} width='23' /></span>
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
          <div className='header__controll__admin'>
            <UserList userMessage={this.props.userMessage} userControll={this.props.userControll} />
          </div>
        </div>
      </header>
    )
  }
})

export default Header

Header.defaultProps = {
  showSearch: true,
  showSelects: true
}
