import React from 'react'
import logo from './logo.png'
import PropTypes from 'prop-types'

const Loading = ({ text = 'LOADING...' }) => (
  <div className='spinner-wrapper'>
    <span className='spinner'>
      <img src={logo} />
    </span>
    <span className='spinner-text'>{text}</span>
  </div>
)

Loading.propTypes = {
  text: PropTypes.string,
}

export default Loading
