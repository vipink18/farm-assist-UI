import React from 'react'
import Button from '../Button';
import "./navbar.css"
import {images} from '../constants'

const Navbar = () => {


  return (
    <>
        <div className="navbar">
            <a className='logo' to='/'><img src={images.logo}/><span className='span'>FarmAssist</span></a>
            <div></div>
            
            <div className=' signup-links btn'>
              <Button value="Admin" href="/admin"/>
              <Button value="Farmer" href="login" />
              <Button value="Supplier" href="login" />
            </div>
            
        </div>
    </>
  )
}

export default Navbar