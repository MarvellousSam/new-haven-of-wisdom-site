import {useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'


function Testimonypage() {
    const [testimony, setTestimony] = useState('')

    const uploadTestimony=async()=>{
        try {
            await axios.post('https://new-haven-of-wisdom-server.onrender.com/api/testimony', {testimony: testimony})
            window.alert('Testimony uploaded')
        } catch (error) {
            console.log(error)
            window.alert('Testimony upload failed. Check your internet and try again')
        }
    }
  return (
    <>
        <Navbar/>

        <div className='landingPage2 padding1'>
            <h1>
                We overcome him by the blood of the lamb <br />
                and by the word of our testimony
            </h1>
        </div>

        <div className="container padding1 margin1 primaryColor">
            <h2>ENTER YOUR TESTIMONY</h2>
            <textarea className='noteInput' name="testimony" id="testimony" value={testimony} onChange={(e)=>{setTestimony(e.target.value)}}></textarea> <br />
            <button className='uploadBtn margin1 accentColor' onClick={uploadTestimony}>Upload</button>
        </div>
    </>

  )
}

export default Testimonypage