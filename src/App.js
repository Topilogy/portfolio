import React, { useState, useEffect } from 'react';
import NavBar from "./component/NavBar";
import Home from "./component/Home"
import About from "./component/About"
import Portfolio from "./component/Portfolio"
import SocialLinks from "./component/SocialLinks";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
import DarkModeToggle from './component/DarkModeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode based on user preference or saved preference
    const prefersDarkMode =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    setDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <NavBar />
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
