import React from 'react'
import logo from './images/logo with text.png'
const Header = () => {
  return (
    <div className="row justify-content-start m-0 pt-2">
      <div className="col-4">
        <img src={logo} alt="" style={{width:"100%"}}/>
      </div>
    </div>
  )
}

export default Header
