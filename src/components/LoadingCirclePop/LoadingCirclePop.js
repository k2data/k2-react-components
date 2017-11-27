import React from 'react'
import logo from './logo.png'

const LoadingCirclePop = () => (
  <div className='loading--ripple-container'>
    <div className='img'>
      <img src={logo} />
    </div>
    <svg width='182px' height='182px' xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'
      className='loading--ripple'>
      <rect x='0' y='0' width='100' height='100' fill='none' className='bk' />
      <g>
        <circle cx='50' cy='50' r='40' stroke='#dddddd' fill='none'
          strokeWidth='2' strokeLinecap='round' className='circle-1' />
      </g>
      <g>
        <circle cx='50' cy='50' r='40' stroke='#dddddd' fill='none'
          strokeWidth='2' strokeLinecap='round' className='circle-2' />
      </g>
    </svg>
    <div className='loading' />
  </div>
)

export default LoadingCirclePop
