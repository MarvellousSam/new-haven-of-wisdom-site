import {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
function Dailydevotionpage() {
    const [sundaySchoolNote, setSundaySchoolNote] = useState({
        note: 'Sunday school for today'
      })
      const [openHeavenNote, setOpenHeaven] = useState({
        note: 'Open heaven is a daily devotional book written by the General Overseer of the Redeemed christian church of God, Pastor Enoch'+
        ' Adejare Adeboye.'
      })




      const fetchDailyDevotion =async()=>{
        try {
          const response = await axios.get('https://new-haven-of-wisdom-server.onrender.com/api/dailyDevotion')
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
          const response = await axios.get('https://new-haven-of-wisdom-server.onrender.com/api/sundaySchool')
          const resp = response.data.note
          setSundaySchoolNote(resp)
          console.log(response)
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(()=>{
        fetchDailyDevotion()
        fetchSundaySchool()
      },[])
  return (
    <>
        <Navbar/>
        <div className='container'>
            <h2 className="h2">Open Heaven</h2>

            <div className="gridContainer3">
                <div className="textContainer longTextContainer">
                  <p>{openHeavenNote.note}</p>
                </div>
                <div className="openHeavenImg">

                </div>
            </div>
        </div>

<hr className='hr' />

        <div className='container'>
            <h2 className="h2">Sunday School</h2>


            <div className="gridContainer3">
                <div className="textContainer longTextContainer">
                  <p>{sundaySchoolNote.note}</p>
                </div>
                <div className="sundaySchoolImg">

                </div>
            </div>
        </div>
    </>
  )
}

export default Dailydevotionpage