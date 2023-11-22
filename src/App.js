import NavBar from "./component/NavBar";
import Home from "./component/Home"
import About from "./component/About"
import Portfolio from "./component/Portfolio"
import SocialLinks from "./component/SocialLinks";
import Experience from "./component/Experience";
import Contact from "./component/Contact";

function App() {
  return (
    <div>
      <NavBar />
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
