import React from 'react'

type Props = {
  menuComponent: Object
}
export class SideMenu extends React.Component {
  props: Props
  constructor (props) {
    super(props)

    this.state = {
      current: '1'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState({
      current: e.key
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

export default SideMenu
