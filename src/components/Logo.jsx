import React from 'react'
import logo from '../assets/logo.png' // Make sure this path matches your logo image

function Logo({ width = '70px' }) {
  return (
    <img
      src={logo}
      alt="BlogHub Logo"
      style={{ width }}
      className="inline-block align-middle"
    />
  )
}

export default Logo