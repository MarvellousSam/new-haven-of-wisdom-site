import React, { useState, useEffect } from 'react'
import Logo from '../images/rccglogo.jpg'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import {FaCopyright} from 'react-icons/fa'
import {CiLocationOn} from 'react-icons/ci'
import Navbar from '../components/Navbar'
function Homepage() {
  const navigate =useNavigate()
  const [event, setEvent] = useState([])
  const [openHeavenNote, setOpenHeaven] = useState({
    note: 'Open heaven is a daily devotional book written by the General Overseer of the Redeemed christian church of God, Pastor Enoch'+
    ' Adejare Adeboye . Pastor EA Adeboye is a prolific writer and he has a ' +
    'PhD in Applied mathematics from the university of Lagos, nigeria where he was formerly a senio lecturer. He is also an anointed' + 
    'favourite guest speaker at many church conferencess and conventions all over the world. Pastor Adeboye is a man filled and operate' + 
    'in the power of the Holy Spirit. A devoted prophet of God, whose passionate mission and goal is to spread the gospel of Jesus '+
    'Christ to the ends of the earth by proclaiming the power of God. He is married to Pastor (Mrs.) Folu Adeboye and they are blessed '+
    'with four children, many grandchildren in addition to the millions of spirtiual children all over the world.'
  })


  const [sundaySchoolNote, setSundaySchoolNote] = useState({
    note: ''
  })


  const fetchEvent =async()=>{
      try {
        const response = await axios.get('https://haven-of-wisdom-server.onrender.com/api/event')
        const resp = response.data.event
        setEvent(resp)
      } catch (error) {
        console.log(error)
      }
    }


    const fetchDailyDevotion =async()=>{
      try {
        const response = await axios.get('https://haven-of-wisdom-server.onrender.com/api/dailyDevotion')
        const resp = response.data.note
        setOpenHeaven(resp)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }



    const fetchSundaySchool =async()=>{
      try {
        console.log('fetching daily devotion')
        const response = await axios.get('https://haven-of-wisdom-server.onrender.com/api/sundaySchool')
        const resp = response.data.note
        setSundaySchoolNote(resp)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

    const eventImage = (
      <div className='container'>
        <h2 className='eventHeader'>UPCOMING EVENT</h2>
        {
        event.map((items)=>(
          <img key={items._id} className='eventCard' src={items.imageUrl} alt="" />
        ))
        }
      </div>
    )
  
  useEffect(()=>{
    fetchEvent()
    fetchDailyDevotion()
    fetchSundaySchool()
  },[] )
  return (
    <>
      <Navbar/>
      <div className='landingPage '>
        <h1>THE <span className='textDecorate'>REDEEMED</span>  <br /> CHRISTIAN CHURCH OF GOD</h1>
        <p>Jesus Christ the same yesterday, and today and forever -Heb 13:8</p>
      </div>



      <div className="container">
        <div className='gridContainer1'>
          <div className='textContainer grey'>
            <span className='dec1'>HAVEN OF WISDOM PARISH</span> IS NOT JUST A CHURCH <br />
            WE ARE ONE BIG <span className='red'>FAMILY</span> <br />
            IN RCCG
          </div>
          <div className='announcement'>
              
          </div>
        </div>
      </div>


      {event.length==0? '': eventImage}

                  <hr/>

        <div className="containerFluid">
          <div className='gridContainer1 grey margin2 padding1'>
            <div className='sundayWorshipImg'>
                  
            </div>
            <div className='textContainer order'>
                OUR SUNDAY SERVICE HOLDS <span className='dec1'>EVERY SUNDAY</span> <br />
                <br />
                JOIN US TO EXPERIENCE THE MIGHTY HAND OF GOD IN YOUR LIFE AS HE TRANSFORMS YOUR LIFE. <br /> <br />
                <span className="smallText dark margin1"><CiLocationOn size={20}/>13, OGUNIYI STREET, ANTHONY VILLAGE, LAGOS STATE, NIGERIA</span>
            </div>  
          </div>
        </div>

        <hr />



        <div className='container'>
          <h2 className="h2">Daily Devotion</h2>
          <div className="gridContainer3">
            <div className="textContainer longTextContainer">
              <p>
                {openHeavenNote.note}
              </p>
            </div>
            <div className="openHeavenImg">

            </div>
          </div>
        </div>


        {sundaySchoolNote.note && (
                  <div className='container'>
                      <h2 className="h2">Sunday School</h2>
                      <div className="gridContainer3">
                        <div className="textContainer longTextContainer">
                          <p>
                            {sundaySchoolNote.note}
                          </p>
                        </div>
                        <div className="sundaySchoolImg">
            
                        </div>
                      </div>
                </div>
        )}


        <div className='container'>
          <header>
            <h2 className='h2'>OUR SERVICES</h2>
          </header>
            <div className='gridContainer2 rowGap'>
                <div className="gridContainer2 noGap">
                    <div className="textContainer2 grey">
                      <h2>Digging Deep</h2>
                      <p>Join us every <span className='red'>Tuesday</span> where we get to know more about the Word of God</p>
                    </div>
                    <div className="tuesdayWorshipImg">

                    </div>
                </div>


                <div className="gridContainer2 noGap">
                  <div className="textContainer2 grey">
                      <h2>Faith Clinic</h2>
                      <p>Join us every <span className="red">Thursday</span> as we seek the face of the Lord </p>
                    </div>
                    <div className="thursdayWorshipImg">
                      
                    </div>
                </div>

          </div>
          <div className='thanksgivingImg margin1'>
            <h2>Thanksgiving Service</h2>
            Join us every First Sunday of the month for our thansgiving service where we come together <br />
            to show our gratitude back to our maker.
          </div>
          <div className='gridContainer2 rowGap'>
            <div className='youthServiceImg'>
              <h2>Youth Xpression Service</h2>
              Holds at every 3rd Sunday of the month
            </div>
            <div className='breakthroughImg'>
              <h2>Breakthrough Service</h2>
              Holds at every 2nd Saturday of the month
            </div>
          </div>
        </div>


        <div className='containerFluid padding2 margin2 grey'>
            <header>
              <h2 className='h2'>Online Giving</h2>
            </header>

            <div className='gridContainer2 rowGap2'>

              <div className='offeringImg'>
                <p className='padding2'>Pay your offering, tithe and first fruit.</p>
                <button className='btn' onClick={()=>{navigate('/giving')}}>Pay Now</button> 
              </div>

              <div className='textContainer2'>
                <p> 
                  It is the commandment of God to us is children to pay our tithe, first fruit and offering.<br />
                  God wants us to be a cheerful giver - II Cor 9:7. <br />
                  He also commanded us to bring our tithe into his storehouse Mal 3:10
              </p>

              </div>

              <hr />

              <div className='textContainer2'>
                <p>
                  You can support the mission by donating <br />
                  to facilitate the smooth running of the kingdom's business. <br />
                  We are assuring you that the Lord Almighty will bless you as you support us.<br />
                  God bless you
                </p>
              </div>

              <div className='csrImg'>
                <p className='padding2'>
                  Support the mission
                </p>
                <button className='btn' onClick={()=>{navigate('/giving')}}>Support </button>
              </div>

            </div>
        </div>



        
        
      {/* <div className="container margin2">
          <h2>Our Annointed Men of God</h2>
          <div className="gridContainer4">
            <div className='sundayWorshipImg'></div>
            <div className='sundayWorshipImg'></div>
            <div className='sundayWorshipImg'></div>
            <div className='sundayWorshipImg'></div>
          </div>
        </div> */}

        <hr />
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

export default Homepage
