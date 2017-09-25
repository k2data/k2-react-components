import React from 'react'
const lightThem = {
  background: '#FAFAFA',
  color: '#555555'
}
const darkThem = {
  background: '#1E2A4D',
  color: '#FFFFFF',
}
const LeftNav = React.createClass({
  propTypes: {
    menu: React.PropTypes.array,
    them: React.PropTypes.string
  },
  getInitialState () {
    return {
      activeArr: [[true]],
      them: this.props.them,
      menu: this.props.menu
    }
  },

  handleActive (index, menuListIndex) {
    let activeArr = []
    activeArr[index] = []
    activeArr[index][menuListIndex] = true
    this.setState({activeArr})
  },

  render () {
    const {activeArr, them, menu} = this.state
    const raperStyle = them === 'light' ? lightThem : darkThem
    return (
      <div className={`leftNav_wraper  ${them}`} style={raperStyle}>
        {
         menu.map((item, index) => (
            item['subMenu']
            ? <ul key={item.name + index} >
              <h3 className='menu_title' style={{ color: raperStyle.color }}>{item.name}</h3>
              {
               item.subMenu.map((menuList, menuListIndex) => {
                 let classNames = `menu_list`
                 if (activeArr[index]) {
                   if (activeArr[index][menuListIndex]) {
                     classNames = `menuList ${them}_active`
                   }
                 }
                 return (
                   <li
                     className={classNames}
                     key={menuList.name + menuListIndex}
                     onClick={() => { this.handleActive(index, menuListIndex) }}
                  >
                     <div className={`icon ${menuList.icon}`} />
                     <a href='javascript:void(0)'
                       className='menulist_name' >
                       {menuList.name}
                     </a>
                   </li>
                 )
               })
              }
            </ul>
            : (
              <ul key={item.name + index} >
                <h3 className='menu_title' style={{ color: raperStyle.color }}>{item.name}</h3>
              </ul>
              )
          ))
        }
      </div>
    )
  }
})

export default LeftNav
