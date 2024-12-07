import React, { useState, useEffect, useRef } from 'react'
import Logo from '../images/rccglogo.jpg'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import {FaCopyright} from 'react-icons/fa'
import {CiLocationOn} from 'react-icons/ci'
import Navbar from '../components/Navbar'
import {animate, motion} from 'motion/react'
function Homepage() {
  const navigate =useNavigate()
  const [event, setEvent] = useState([])
  const [openHeavenNote, setOpenHeaven] = useState({
    note: 'Open heaven is a daily devotional book written by the General Overseer of the Redeemed christian church of God, Pastor Enoch'+
    ' Adejare Adeboye . Pastor EA Adeboye is a prolific writer and he has a ' +
    'PhD in Applied mathematics from the university of Lagos, nigeria where he was formerly a senior lecturer. He is also an anointed ' + 
    'favourite guest speaker at many church conferences and conventions all over the world.' 
  })


  const [sundaySchoolNote, setSundaySchoolNote] = useState({
    note: 'Sunday School is a devotional book for Sunday service. The Bible says in Romans 10:17 that faith comes '+
    'hearing and hearing by the word of God. The only source of real faith is the word of God. If faith comes by hearing '+
    'and hearing by the word of God, how will someone have faith when he or she has refused to hear the word of God? ' +
    'When you are totally out of tune with the word of God, you do not hear anything, so faith cannot come.'
  })


  const fetchEvent =async()=>{
      try {
        const response = await axios.get('https://new-haven-of-wisdom-server.onrender.com/api/event')
        const resp = response.data.event
        setEvent(resp)
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
  },[] )
  return (
    <>
      <Navbar/>
      <motion.div 
            className='landingPage '
            initial={{opacity:0.5}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.2}}
      >
        <motion.h1 
        initial={{opacity:0, x: -200}} 
        animate={{opacity: 1, x:0}}
        transition={{delay:0.5, duration:1, type: 'tween'}}
        >
          THE <span className='textDecorate'>REDEEMED</span>  <br /> CHRISTIAN CHURCH OF GOD</motion.h1>
        <motion.p initial={{opacity: 0, x: 200}} animate={{opacity: 1, x:0}} transition={{duration:2,delay: 1.5, type: 'tween'}}>Jesus Christ the same yesterday, and today and forever -Heb 13:8</motion.p>
      </motion.div>



      <motion.div 
            className="container">
        <div className='gridContainer1'>
          <motion.div 
                  initial={{ opacity: 0.7, scale: 0.9}}
                  whileInView={{ opacity: 1, scale:1}}
                  transition={{duration: 0.5, delay:0, type:'tween'}}
                  viewport={{amount: 0.3, once: true}}
                  className='primaryColor padding1'>
            <span className='dec1'>HAVEN OF WISDOM</span> <br /> IS NOT JUST A CHURCH <br />
            WE ARE ONE BIG <span className='red'>FAMILY</span> <br />
            IN THE BODY OF CHRIST
          </motion.div>
          <motion.div
                  initial={{ opacity: 0.7, scale:0.9}}
                  whileInView={{ opacity: 1, scale: 1}}
                  transition={{duration: 0.5, delay: 0, type: 'tween'}}
                  viewport={{amount: 0.3, once: true}}
                  className='announcement'>
              
          </motion.div>
        </div>
      </motion.div>




        <div className="containerFluid">
          <div className='gridContainer1 primaryColor margin2 padding1'>
            <div className='sundayWorshipImg'>
                  
            </div>
            <div className='textContainer order boldText'>
              <motion.main
                initial={{ opacity: 0, y: 100}}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{once:true}}
                transition={{duration: 1, delay: 0, type: 'tween'}}
              >
                OUR SUNDAY SERVICE HOLDS <span className='dec1'>EVERY SUNDAY</span> <br />
                  <br />
                  JOIN US TO EXPERIENCE THE MIGHTY HAND OF GOD IN YOUR LIFE AS HE TRANSFORMS YOUR LIFE. <br /> <br />
                  <span className="smallText dark margin1"><CiLocationOn size={20}/>13, OGUNIYI STREET, ANTHONY VILLAGE, LAGOS STATE, NIGERIA</span>
              </motion.main>
            </div>  
          </div>
        </div>




        <div className='container'>
          <header>
            <h2 className='h2'>OUR SERVICES</h2>
          </header>
            <div className='gridContainer2 rowGap'>
                <motion.div 
                className="gridContainer2 noGap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{duration: 1, delay: 0.1, type: 'tween'}}
                viewport={{amount: 0.1}}
                >
                    <div className="textContainer3 primaryColor">
                      <h2>Digging Deep</h2>
                      <p>Join us every <span className='red'>Tuesday</span> where we get to know more about the Word of God</p>
                    </div>
                    <div className="tuesdayWorshipImg">

                    </div>
                </motion.div>


                <motion.div 
                className="gridContainer2 noGap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{duration: 1, delay: 0.1, type: 'tween'}}
                viewport={{amount:0.1}}
                >
                  <div className="textContainer3 primaryColor">
                      <h2>Faith Clinic</h2>
                      <p>Join us every <span className="red">Thursday</span> as we seek the face of the Lord </p>
                    </div>
                    <div className="thursdayWorshipImg">
                      
                    </div>
                </motion.div>

          </div>

          <div className='thanksgivingImg margin1'>
            <motion.main
                initial={{ opacity: 0, y: 100}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{duration: 1, delay: 0, type: 'tween'}}
                viewport={{once: true}}
            >
              <h2>Thanksgiving Service</h2>
              Join us every First Sunday of the month for our thanksgiving service where we come together <br />
              to show our gratitude back to our maker.
            </motion.main>
          </div>

          <div className='gridContainer2 rowGap'>
              <motion.div
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:0.5, delay: 0.1}}
              viewport={{amount: 0.1}}
              className='youthServiceImg'>
                <h2>Youth Xpression Service</h2>
                Holds every 3rd Sunday of the month
              </motion.div>

              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:0.5, delay: 0.1}}
              viewport={{amount: 0.1}}
              className='breakthroughImg'>
                <h2>Breakthrough Service</h2>
                Holds every 2nd Saturday of the month
              </motion.div>
          </div>

        </div>


        {/* Sunday school and open heaven */}

        
        <div className="containerFluid primaryColor padding1">
            <motion.div 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 1, delay: 0.1, type: 'tween'}}
                className='container margin2'>
                  <div className="gridContainer3">
                    <div className="textContainer whiteBg">
                      <h3>Daily Devotion</h3>
                      <p>
                        {openHeavenNote.note}
                      </p>
                      <button className='btn accentColor margin1' onClick={()=>{navigate('/dailydevotion')}}>Read more</button>
                    </div>
                    <div className="openHeavenImg">

                    </div>
                  </div>
                </motion.div>

        
                <motion.div 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 1, delay: 0.1, type: 'tween'}}
                className='container margin2'>
                      <div className="gridContainer3">
                        <div className="textContainer whiteBg">
                          <h3>Sunday School</h3>
                          <p>
                            {sundaySchoolNote.note}
                          </p>
                          <button className='btn accentColor margin1' onClick={()=>{navigate('/dailydevotion')}}>Read more</button>
                        </div>
                        <div className="sundaySchoolImg">
            
                        </div>
                      </div>
                </motion.div>
        </div>


        {/* Upcoming event container view */}
        {event.length==0? '': eventImage}


        <motion.div 
            initial={{ opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0, type: 'tween'}}
            viewport={{once: true}}
            className='containerFluid padding2 margin2 primaryColor'>
            <header>
              <h2 className='h2'>Online Giving</h2>
            </header>

            <div className='gridContainer2 rowGap1'>

              <div className='offeringImg'>
                <p className='padding2'>Pay your offering, tithe and first fruit.</p>
                <button className='btn accentColor' onClick={()=>{navigate('/giving')}}>Pay Now</button> 
              </div>

              <div className='textContainer3'>
                <p> 
                  It is the commandment of God to us is children to pay our tithe, first fruit and offering.<br />
                  God wants us to be a cheerful giver - II Cor 9:7. <br />
                  He also commanded us to bring our tithe into his storehouse Mal 3:10
              </p>

              </div>

              <hr />

              <div className='textContainer3'>
                <p>
                  You can support the mission by donating <br />
                  to facilitate the smooth running of the kingdom's business. <br />
                  The Lord Almighty will bless you as you do.<br />
                </p>
              </div>

              <div className='csrImg'>
                <p className='padding2'>
                  Support the mission
                </p>
                <button className='btn accentColor' onClick={()=>{navigate('/giving')}}>Support </button>
              </div>

            </div>
        </motion.div>



        
        
      {/* <div className="container margin2">
          <h2>Our Annointed Men of God</h2>
          <div className="gridContainer4">
            <div className='sundayWorshipImg'></div>
            <div className='sundayWorshipImg'></div>
            <div className='sundayWorshipImg'></div>
            <div className='sundayWorshipImg'></div>
          </div>
        </div> */}

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
