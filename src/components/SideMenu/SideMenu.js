import React from 'react'
import PropTypes from 'prop-types'

export class SideMenu extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      current: '1',
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState({
      current: e.key,
    })
  }

  render () {
    return (
      <div className='side__menu'>
        {
          this.props.menuComponent
            ? this.props.menuComponent
          : ''
        }
      </div>
    )
  }
}

SideMenu.propTypes = {
  menuComponent: PropTypes.object,
}

export default SideMenu
