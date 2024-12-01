// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage';
import Missionpage from './pages/Missionpage';
import Givingpage from './pages/Givingpage';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage';
import Loginpage from './pages/Loginpage';
import Errorpage from './pages/Errorpage';
function App() {


  return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/about' element={<Aboutpage/>}/>
            <Route path='/mission' element={<Missionpage/>}/>
            <Route path='/giving' element={<Givingpage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/login' element={<Loginpage/>}/>
            <Route path='/*' element={<Errorpage/>}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
