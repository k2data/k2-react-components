//  @flow
import React from 'react'

const LeftMenu = (props: Object) => {
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

const SubMenu = (props: Object) => (
  <div>
    <div className={'menu_title'}>{props.name}</div>
    {props.children}
  </div>
)

const MenuItem = (props: Object) => {
  return (
    <div>
      {props.icon}
      <a href='javascript:void(0)'
        className={'menulist_name'} >
        {props.name}
      </a>
    </div>
  )
}

export { SubMenu, MenuItem, LeftMenu }
