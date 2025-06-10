// import React, { useState, useEffect } from 'react';
import NavBar from "./component/NavBar";
import Home from "./component/Home"
import About from "./component/About"
import Portfolio from "./component/Portfolio"
import SocialLinks from "./component/SocialLinks";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
// import DarkModeToggle from './component/DarkModeToggle';

function App() {
  

  return (
    <div className='bg-gray-800'>
      <NavBar />
      {/* <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
