import React from 'react'
import Navbar from '../components/Navbar'
import Logo from '../images/rccglogo.jpg'
import {FaCopyright} from 'react-icons/fa'
function Givingpage() {
  return (
    <>
        <Navbar/>
        <div className='landingPage2 '>
          <h1>ONLINE GIVING</h1>
          <p>Give as purposed in your heart and not out of compulsion for GOD loves a cheerful giver</p>
        </div>    

        <div className="container">
          <div className="gridContainer2">
            <div>
              <p className='p'>
                All online giving should be made to the account RCCG HAVEN OF WISDOM <span className='red' >00234567</span> WEMA BANK.
              </p>
              <p className='p'>
                Kindly state what you are giving towards in the transfer description to help us direct the resources to the appropriate sector.
              </p>
              <p className='p'>
                Description: Offering, Tithe, First fruit, Convenant offering, Donation
              </p>
            </div>
            <div>

            </div>
          </div>
        </div>


        <hr className='hr' />
        <footer className='containerFluid padding1'>
          <div className='gridContainer1 rowGap'>
            <div>
              <img src={Logo} className='bigLogo' alt="" />
            </div>
            <div>
              <span>THE REDEEMED CHRISTIAN <br /> CHURCH OF GOD <span className='greyText'> <br /> HAVEN OF WISDOM</span> </span>
            </div>
          </div>


          <div className='margin2 greyText'>
            <FaCopyright size={12}/> Copyright RCCG HAVEN OF WISDOM 2024. All right reserved. Designed and developed by Mharvix
          </div>
        </footer>

    </>
  )
}

export default Givingpage