import React from 'react'
import { Input } from 'antd'
const Search = Input.Search

const SearchBox = React.createClass({
  propTypes: {
    searchChange: React.PropTypes.func
  },
  getInitialState () {
    return {
      value: ''
    }
  },
  searchClick (value) {
    this.props.searchChange
      ? this.props.searchChange(value)
        : ''
  },
  render () {
    return (
      <span className='header__controll__search__box'>
        <Search placeholder='搜索关键字' onSearch={this.searchClick} />
      </span>
    )
  }
})

export default SearchBox
