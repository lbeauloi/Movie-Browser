import './App.css'
import React from 'react'
import Navbar from './NavBar'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Discover from './pages/Discover'
import Profile from './pages/Profile'



function App() {
  
  return (
    <>
    
    <BrowserRouter>
      <nav>
          <ul className="nav-links">
            <li className="nav-item"><Link to="/"><img className='navImg' src="./img/iconmonstr-home-1.svg" alt="home icon" /></Link></li>
            <li className="nav-item"><Link to="/discover"><img className='navImg' src="./img/iconmonstr-magnifier-11.svg" alt="search icon" /></Link></li>
            <li className="nav-item"><Link to="/profile"><img className='navImg' src="./img/iconmonstr-user-6.svg" alt="user profile icon" /></Link></li>
          </ul>
      </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/detail' element={<Detail/>}></Route>
          <Route path='/discover' element={<Discover/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='*' element={<h1>404 -Page not found!</h1>}></Route>
        </Routes>
      </BrowserRouter>
    
      
    </>
    );
  };
export default App
