import {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'


function Eventpage() {
    const [event, setEvent] = useState([])
    const fetchEvent =async()=>{
    try {
      const response = await axios.get('https://haven-of-wisdom-server.onrender.com/api/event')
      const resp = response.data.event
      setEvent(resp)
    } catch (error) {
      console.log(error)
    }
  }


useEffect(()=>{
    fetchEvent()
},[])
  return (
    <>
    <Navbar/>
        <div className="container">
            <div className='container'>
                <h2 className='eventHeader'>UPCOMING EVENT</h2>
                {
                event.map((items)=>(
                <img key={items._id} className='eventCard' src={items.imageUrl} alt="" />
                ))
                }
                {event.length==0 && 
                <div className='margin1'>
                    <h2 className='textCenter '>No event found</h2>
                </div>
            }
        </div>
        </div>
    </>
  )
}

export default Eventpage