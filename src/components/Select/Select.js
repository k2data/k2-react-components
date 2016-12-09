import React from 'react'

const Select = React.createClass({
  propTypes: {
    selects: React.PropTypes.array.isRequired,
    onSelectChange: React.PropTypes.func
  },
  getInitialState () {
    return {
      display: 'none',
      placeholder: this.props.selects && this.props.selects instanceof Array &&
                    this.props.selects.length !== 0
                    ? this.props.selects[0] : '请选择',
      className: 'placeholder_close'
    }
  },
  selectClick (e) {
    e.stopPropagation()
    this.setState({
      display: this.state.display === 'block' ? 'none' : 'block',
      className: this.state.className === 'placeholder_close'
                  ? 'placeholder_open' : 'placeholder_close'
    })
    document.body.onclick = (e) => {
      this.setState({
        display: 'none',
        className: 'placeholder_close'
      })
    }
  },
  componentDidMount () {
  },
  itemClick (e) {
    e.stopPropagation()
    this.setState({
      placeholder: e.target.innerHTML,
      display: 'none',
      className: 'placeholder_close'
    })
    this.props.onSelectChange ? this.props.onSelectChange(e.target.innerHTML) : ''
  },
  render () {
    return (
      <div ref='selectBox' className='select__box' onClick={this.selectClick}>
        <a className={this.state.className} id='selectContent'>{this.state.placeholder}</a>
        <ul id='liOptions' style={{display: this.state.display}}>
          {
            this.props.selects && this.props.selects instanceof Array &&
                          this.props.selects.length !== 0
            ? this.props.selects.map((item, index) => {
              return <li onClick={this.itemClick}>{item}</li>
            })
            : ''
          }
        </ul>
      </div>
    )
  }

})

export default Select
