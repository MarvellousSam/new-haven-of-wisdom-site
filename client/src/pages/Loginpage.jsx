import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'

function Loginpage() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        userId: '',
        password: ''
    })
    const {userId, password} = form


    const onChange=(e)=>{
        e.preventDefault()
        setForm((prev)=>(
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
    }

    const submit=async()=>{
        try {
            const response = await axios.post('/api/login', form)
            const token = response.data.token
            sessionStorage.setItem('token', token)
            const storedToken = sessionStorage.getItem('token')
            console.log(storedToken)
            navigate('/admin')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
        <Navbar/>
        <div className='container grey page margin1'>
            <header>
                <h2 className='h3'>Admin Login</h2>
            </header>
            <input className='input' type="text" name="userId" id="userId" placeholder='Enter UserId' value={userId} onChange={onChange} />
            <input className='input' type="text" name="password" id="password" placeholder='Enter Password' value={password} onChange={onChange} />
            <button className='btn margin1' onClick={submit}>Login</button>
        </div>

    </>
  )
}

export default Loginpage