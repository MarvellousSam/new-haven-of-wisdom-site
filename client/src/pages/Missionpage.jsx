import React from 'react'
import Navbar from '../components/Navbar'
import Logo from '../images/rccglogo.jpg'
import {FaCopyright} from 'react-icons/fa'
function Missionpage() {
  return (
    <>
        <Navbar/>
        <div className='landingPage2'>
          <h1>African Missions</h1>
        </div>

        <div className="container">
              <h1>African Mission</h1>
              <p className='p'>
              Africa Missions dates back to 1996, when Pastor (Mrs) Folu Adeboye (Visionaire of Africa Missions) went on a 
              visit to mission fields in West Africa. She came back with a burden and the clarion call that the missions 
              desperately needed assistance. This led to the birth of the then ‘West Africa Missions Committee’, a group which 
              focused on assisting mission fields in the West African sub-region alone.
              </p>
              <p className='p'>
              The scope of the committee was enlarged in area of reach and focus to include the rest of Africa and community development 
              work for the host communities of the mission fields. This development came as a 
              result of another missionary journey she embarked upon, in 1997, to the Central, Eastern and Southern parts of Africa.
              </p>
              <p className='p'>
              Today, the Africa Missions Organisation is a fully fledged faith-based not- for- profit organisation committed to 
              addressing the plight of the less privileged in Africa and around 
              the world through appropriate community development and empowerment initiatives and the good news of the gospel of Jesus Christ.
              </p>
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

export default Missionpage