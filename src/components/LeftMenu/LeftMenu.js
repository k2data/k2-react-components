import React from 'react'
import PropTypes from 'prop-types'

const LeftMenu = (props) => {
  const lightThem = {
    background: '#FAFAFA',
    color: '#555555',
  }
  const darkThem = {
    background: '#1E2A4D',
    color: '#FFFFFF',
  }
  const them = props.them || 'light'
  const raperStyle = them === 'light' ? lightThem : darkThem
  return (
    <div className={`${them}`} style={raperStyle}>
      {props.children}
    </div>
  )
}

LeftMenu.propTypes = {
  them: PropTypes.string,
  children: PropTypes.element
}

const SubMenu = (props) => (
  <div>
    <div className={'menu_title'}>{props.name}</div>
    {props.children}
  </div>
)

SubMenu.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element
}

const MenuItem = (props) => {
  return (
    <div>
      {props.icon}
      <span
        className={'menulist_name'} >
        {props.name}
      </span>
    </div>
  )
}

MenuItem.propTypes = {
  icon: PropTypes.node,
  name: PropTypes.string
}

export { SubMenu, MenuItem, LeftMenu }
