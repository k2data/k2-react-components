import React from 'react'
import PropTypes from 'prop-types'

const itemStyle = {
  position: 'relative',
}

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
    <div className={`k2-${them}`} style={{...raperStyle, overflow: 'auto'}}>
      {props.children}
    </div>
  )
}

LeftMenu.propTypes = {
  them: PropTypes.string,
  children: PropTypes.array,
}

const SubMenu = (props) => (
  <div style={itemStyle}>
    <div className={'menu_title'}>{props.name}</div>
    {props.children}
  </div>
)

SubMenu.propTypes = {
  name: PropTypes.string,
  children: PropTypes.array,
}

const MenuItem = (props) => {
  return (
    <div style={itemStyle}>
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
  name: PropTypes.string,
}

export { SubMenu, MenuItem, LeftMenu }
