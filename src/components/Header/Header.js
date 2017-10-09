import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  logout () {
    const { user } = this.props
    if (user && user.logout && typeof user.logout.callback === 'function') {
      user.logout.callback()
    }
  }

  render () {
    const { navList, logoData } = this.props
    const { logo, title, width, fontSize } = logoData
    return (
      <header className='k2-header'>
        <div className='k2-header__logo'
          style={{ width: `${width || 200}px`, fontSize: `${fontSize || 30}px` }}
        >
          {
            logo && logo.src &&
            <div className='image-wrapper'>
              <a href={logo.href || ''}>
                <img title={title || ''} alt={title || ''} src={logo.src} />
              </a>
            </div>
          }
          {
            !logo && title &&
              <span className='k2-header__logo__title'>
                <b>{ title }</b>
              </span>
          }
        </div>
        <ul className='header__menu'>
          {
            navList && navList instanceof Array &&
              this.props.navList.map((list, index) => {
                return (
                  <li key={list.name}>
                    <a href={list.href}
                      target='_blank'
                      className={list.active ? 'activeA' : ''}
                    >
                      {list.name}
                    </a>

                  </li>
                )
              })
          }
        </ul>
        {
          this.props.user.name && this.props.user.name !== '' &&
          <div className='header__usernav'>
            <div className='header__usernav__name'>
              <span>{this.props.user.name}</span>
            </div>
            <div className='header__usernav__separate'>
              <span>|</span>
            </div>
            <div className='header__usernav__logout'>
              <span onClick={this.logout}>{this.props.user.logout.title}</span>
            </div>
          </div>
        }
      </header>
    )
  }
}

Header.propTypes = {
  navList: PropTypes.array.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    logout: PropTypes.object,
  }),
  logoData: PropTypes.object.isRequired,
}

Header.defaultProps = {}

export default Header
