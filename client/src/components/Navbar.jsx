import React from 'react'
import {useNavigate, NavLink} from 'react-router-dom'
import { FiMenu, FiX, FiArrowDown } from "react-icons/fi";
import Logo from '../images/rccglogo.jpg'
import { useState } from 'react';
function Navbar() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)


  const toggleSideMenu =(e)=>{
    e.preventDefault()
    setShow((prev)=>{return !prev})
  }


  const scrollaction=(e)=>{
    e.preventDefault()
    window.scrollTo(0,0)
  }
  
  
  return (
    <div className='navBar'>
        <div className='navContainer'>
            <div className='navLogo'>
              <img className='logo' src={Logo} alt="" onClick={()=>{navigate('/login')}}/>
            </div>
            <div className='navBrand'>
              <h1 className='mobile'>H.O.W</h1>
              <h1 className='large'>HAVEN OF WISDOM</h1>
            </div>
            <div className="large">
              <ul className='flex'>
                <li className='navLink' onClick={()=>{navigate('/')}}> HOME</li>
                <li className='navLink' onClick={()=>{navigate('/about')}}> WHO ARE WE</li>
                <li className='navLink' onClick={()=>{navigate('/mission')}}>WHAT WE DO</li>
                <li className='navLink' onClick={()=>{navigate('/giving')}}> ONLINE GIVING  </li>
              </ul>
            </div>
            <div className="mobile" onClick={toggleSideMenu}>
              <FiMenu className='toggleIcon' size={40}/>
            </div>
          </div>
          
            {show && 
             <div className='menuDropdown'>
                <header>
                  <FiX size={40} onClick={toggleSideMenu}/>
                </header>
                <main>
                  <ul>
                    <li className='navList' onClick={()=>{navigate('/')}}>Home</li>
                    <li className='navList' onClick={()=>{navigate('/about')}}>About us</li>
                    <li className='navList' onClick={()=>{navigate('/mission')}}>Mission</li>
                    <li className='navList' onClick={()=>{navigate('/giving')}}>Online giving</li>
                  </ul>
                </main>
             </div>
            }
          
    </div>


  )
}

export default Navbar
