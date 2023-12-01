import React, { useState, useEffect } from 'react'
import FetchingTrending from "../FetchingTrending";
import FetchNowPlaying from '../FetchNowPlaying';
import Navbar from '../NavBar';

const Home = function(){
    return(
      <>
      
      <div className="Home">
        <header>
          <h1><span className="titleColor">Movie</span>Browser</h1>
         <FetchNowPlaying/>  
        </header>

        <main>
          <FetchingTrending/>
        </main>

        <footer>
          <p>This App is powered by      <img className="imgCredit" src="./public/img/Asset3.svg" alt="" /></p>
        </footer>
      </div>    
      </>
      
    );
   };
   export default Home 