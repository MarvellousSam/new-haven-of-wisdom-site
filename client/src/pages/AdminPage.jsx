import {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

function AdminPage() {
  const [image, setImage] = useState(null)
  const [event, setEvent] = useState([])
  const [openHeaven, setOpenHeaven] = useState('')
  const [sundaySchool, setSundaySchool] = useState('')
  const token = sessionStorage.getItem('token')


  const verifyUser =async()=>{
    console.log(token)
    try {
      await axios.get('/api/admin',
        {
          headers:{
              Authorization: `Bearer ${token}`
          }
      }
      )
    } catch (error) {
      console.log(error)
    }
  }


  const uploadImage=async(e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'ecommerce');
    try {
      const response = await axios.post(
          `https://api.cloudinary.com/v1_1/dktallrwf/image/upload`, // Replace with your cloud name
          formData
      );
      const uploadedImageUrl = response.data.secure_url;
      console.log('Upload successful:', uploadedImageUrl);

      await axios.post(`/api/event`, {imageUrl: uploadedImageUrl},{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log('New Event Created')
      window.alert('New event created')
    } catch (error) {
      console.log(error)
    }
  }


  const deleteEvent=async(id)=>{
    try {
      if(window.confirm('Are you sure you want to delete this event?')){
        await axios.delete(`/api/event/${id}`, {
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
      }
    } catch (error) {
      console.log(error)
    }
  }


  const eventImage = (
    <div className='container margin1'>
      {
      event.map((items)=>(
        <img key={items._id} className='eventCard' src={items.imageUrl} alt="" onClick={()=>{deleteEvent(items._id)}}/>
      ))
      }
    </div>
  )


  const fetchEvent =async()=>{
      try {
        const response = await axios.get('/api/event')
        const resp = response.data.event
        setEvent(resp)
        console.log(resp)
      } catch (error) {
        console.log(error)
      }
    }



  const uploadDailyDevotion=async(e)=>{
    try {
      console.log(openHeaven)
      await axios.post('/api/dailyDevotion', {contentType: 'openHeaven', note: openHeaven},{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      window.alert('Daily devotion uploaded successfully')
    } catch (error) {
      console.log(error)
    }
  }


  const uploadSundaySchool=async(e)=>{
    try {
      console.log(openHeaven)
      await axios.post('/api/sundaySchool', {contentType: 'sundaySchool', note: sundaySchool},{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      window.alert('Daily devotion uploaded successfully')
    } catch (error) {
      console.log(error)
    }
  }

  const logOut=()=>{
    sessionStorage.clear()
    window.alert('User logged out successfully')
  }

  useEffect(()=>{
    verifyUser()
    fetchEvent()
  }, [])


  return (
    <>
        <Navbar/>
        <div className='container grey margin1 padding1'>

            <header>
              <h2 className='h3'>Admin Page</h2>
            </header>


            <div>
              <h2>Upload Event Flier</h2>
              <input type="file" accept='image/*' onChange={(e) => setImage(e.target.files[0])} /> <br />
              <button className='uploadBtn' onClick={uploadImage}>Upload</button>
            </div>

            <div>
              {eventImage}
            </div>


            <div>
              <h2>Open Heaven for Today</h2>
              <textarea className='noteInput' name="note" id="note" value={openHeaven} onChange={(e)=>{setOpenHeaven(e.target.value)}}></textarea> 
              <button className='uploadBtn' onClick={uploadDailyDevotion}>Upload</button>   
            </div>


            <div>
              <h2>Sunday School</h2>
              <textarea className='noteInput' name="note" id="note" value={sundaySchool} onChange={(e)=>{setSundaySchool(e.target.value)}}></textarea> 
              <button className='uploadBtn' onClick={uploadSundaySchool}>Upload</button>   
            </div>
            <button className='btn' onClick={logOut}>Log Out</button>
        </div>
    </>
  )
}

export default AdminPage