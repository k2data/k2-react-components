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
  },
  clickHiden (e) {
    if (e.target.id === 'selectBox' || e.target.id === 'selectContent') {
      document.body.removeEventListener('click', this.setHide)
    } else {
      document.body.addEventListener('click', this.setHide)
    }
  },
  setHide () {
    console.log('add click....')
    this.setState({
      display: 'none',
      className: 'placeholder_close'
    })
  },
  componentDidUpdate () {
    if (this.state.display === 'none') {
      document.body.removeEventListener('mousemove', this.clickHiden)
      document.body.removeEventListener('click', this.setHide)
    } else {
      document.body.addEventListener('mousemove', this.clickHiden)
    }
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
      <div ref='selectBox' className='select__box' onClick={this.selectClick} id='selectBox'>
        <span className={this.state.className} id='selectContent'>{this.state.placeholder}</span>
        <ul id='liOptions' style={{display: this.state.display}}>
          {
            this.props.selects && this.props.selects instanceof Array &&
                          this.props.selects.length !== 0
            ? this.props.selects.map((item, index) => {
              return <li onClick={this.itemClick} key={`option${index}`}>{item}</li>
            })
            : ''
          }
        </ul>
      </div>
    )
  }

})

export default Select
