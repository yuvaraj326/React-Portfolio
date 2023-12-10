import React from "react";
import "./index.css";
import Navbar from "./PortfolioContainer/Navbar/Navbar";
import Profile from "./PortfolioContainer/Profile/Profile";
import About from "./PortfolioContainer/About/About";
import Skills from "./PortfolioContainer/Skills/Skills";
import Project from "./PortfolioContainer/Project/project";
import Contact from "./PortfolioContainer/Contact/Contact";
import Footer from "./PortfolioContainer/Footer/Footer";
// import Resume from "./PortfolioContainer/Resume/Resume";

function App() {
  return (
    <div>
      <Navbar />

      <Profile/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      {/* <Resume/> */}
    </div>
  );
}

export default App;
