import React from 'react'
import './header.css'
import logo from './logo.png'
import close from './close.png'

const Header = () => {
  return (
    <div className="header-container">
        <div className="header-closing">
         <img  src={close} alt='x' />   
        </div>
      <div className="header-title">
          <img className="logo" src={logo} alt='flipkart' /> 
      </div>
    </div>
  )
}

export default Header
