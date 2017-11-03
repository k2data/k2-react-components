import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
    }
    this.logout = this.logout.bind(this)
    this.showSelect = this.showSelect.bind(this)
  }

  logout () {
    const { user } = this.props
    if (user && user.logout && typeof user.logout.callback === 'function') {
      user.logout.callback()
    }
  }

  showSelect () {
    if (this.state.visible) {
      this.setState({ visible: false })
      this.header.style.overflow = 'hidden'
      this.arrow.style.transformOrigin = 'center'
      this.arrow.style.transform = 'rotate(-90deg)'
      this.arrow.style.transition = 'all 0.2s linear'
    } else {
      this.setState({ visible: true })
      this.header.style.overflow = 'visible'
      this.arrow.style.transformOrigin = 'center'
      this.arrow.style.transform = 'rotate(90deg)'
      this.arrow.style.transition = 'all 0.2s linear'
    }
  }

  render () {
    const { navList, logoData } = this.props
    const { logo, title, width, fontSize } = logoData
    return (
      <header className='k2-header' ref={(header) => { this.header = header }}>
        <div className='k2-header__logo'
          style={{ width: `${width || 200}px`, fontSize: `${fontSize || 30}px` }}
        >
          {
            logo && logo.src &&
            <a href={logo.href || ''} className='image-wrapper'>
              <img title={title || ''} alt={title || ''} src={logo.src} />
            </a>
          }
          {
            !logo && title &&
              <span className='k2-header__logo__title'>
                <b>{ title }</b>
              </span>
          }
        </div>
        <div className='header__select__wrapper'>
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
              <div className='header__usernav__name' onClick={this.showSelect}>
                <span>{this.props.user.name}
                  <span
                    ref={(arrow) => { this.arrow = arrow }}
                    className='header__user__icon'>&lt;</span>
                </span>
              </div>
              <div className='header__usernav__separate' />
              <div className='header__usernav__logout'>
                <span onClick={this.logout}>{this.props.user.logout.title}</span>
              </div>
            </div>
          }
        </div>
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
