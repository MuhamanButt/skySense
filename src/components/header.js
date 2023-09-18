import React from 'react'
import logo from './images/logo with text.png'
const Header = () => {
  return (
    <div className="row justify-content-start m-0 py-3">
      <div className="col-5 col-md-3 col-lg-2">
        <img src={logo} alt="" style={{width:"100%"}}/>
      </div>
    </div>
  )
}

export default Header
