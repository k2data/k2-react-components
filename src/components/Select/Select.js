import React from 'react'
import { Select } from 'antd'
const Option = Select.Option

const SelectComponent = React.createClass({
  propTypes: {
    selects: React.PropTypes.array.isRequired,
    onSelectChange: React.PropTypes.func
  },
  render () {
    return (
      <div ref='selectBox' className='select__box'>
        <Select defaultValue={
          this.props.selects && this.props.selects instanceof Array &&
          this.props.selects.length !== 0 && this.props.selects[0]
          }
          style={{ width: '100%' }}
          showSearch={false}
          onChange={this.props.onSelectChange || function () { console.info('no onchange func..') }}
       >
          {
            this.props.selects && this.props.selects instanceof Array &&
                          this.props.selects.length !== 0
            ? this.props.selects.map((item, index) => {
              return <Option value={item} key={`option${index}`}>{item}</Option>
            })
            : ''
          }
        </Select>
      </div>
    )
  }

})

export default SelectComponent
