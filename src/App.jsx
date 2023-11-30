import './App.css'
import React from 'react'
import Navbar from './NavBar'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
//  clé d'API : 35c92636c099bd068a88f78c4bccf46c
// Jeton d'accès en lecture à l'API: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWM5MjYzNmMwOTliZDA2OGE4OGY3OGM0YmNjZjQ2YyIsInN1YiI6IjY1NjYwMmU1MTU2Y2M3MDE0ZTY1ZmZhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j7NvX1aIpAbGQfwYX1hafyWR7o7kQcYKmkQj1y0UdA


function App() {
  
  return (
    <>
    <header>

    </header>
    <main>
      
    </main>
    <footer>
    <BrowserRouter>
      <nav>
          <ul className="nav-links">
            <li className="nav-item"><Link to="/"><img src="./img/iconmonstr-home-1.svg" alt="home icon" /></Link></li>
            <li className="nav-item"><Link to="/discover"><img src="./img/iconmonstr-search-thin.svg" alt="search icon" /></Link></li>
            <li className="nav-item"><Link to="/profile"><img src="./img/iconmonstr-user-6.svg" alt="user profile icon" /></Link></li>
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
    </footer>
      
    </>
    );
  };
      <div className='App'>
        <header>
          <h1><span className="titleColor">Movie</span>Browser</h1>
          <div className='headerClass'>
            {/* image d'un film a chercher dans l'API */}
          </div>
        </header>

        <main>
          <h2>Trending</h2>
          <div className='mainClass'>
            {/* caroussel avec les images de film, issu de l'API */}
          </div>
          
        </main>

        <footer>
          <Navbar />
          <p>This App is powered by <img src="./public/img/Asset3.svg" alt="" /></p>
        </footer>
      </div>    
  


export default App
