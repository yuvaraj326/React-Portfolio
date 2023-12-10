import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {

  const [showMenu,SetShowMenu]=useState(false);
  
  return (
    <nav id="navbar">
      <div className="nav-container container">
        <div className="nav-logo">
          <a className="nav-logo" href="# ">
            Yuvaraj
          </a>
        </div>

        <div className="nav-menu">
          <a href="# ">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Resume</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="hamburger-container">
        <div className="nav-logo">
          <a className="nav-logo" href="# ">
            Yuvaraj
          </a>
        </div>
        <div className="hamburger-menu">
        <div className={showMenu? "hamburger-icon open" :"hamburger-icon"} onClick={ ()=>SetShowMenu(!showMenu) } >
          <span></span>
          <span></span>
          <span></span>
        </div>
          <ul className="hamburger-links" style={{display: showMenu? 'flex' : 'none'}}>
            <li ><a href="# "  onClick={()=>SetShowMenu(false)}>
              Home</a>
            </li>
            <li ><a href="#about" onClick={()=>SetShowMenu(false)}>
              About</a>
            </li>
            <li ><a href="#skills" onClick={()=>SetShowMenu(false)}>
              Resume</a>
            </li>
            <li ><a href="#project" onClick={()=>SetShowMenu(false)}>
              Project</a>
            </li>
            <li><a href="#contact" onClick={()=>SetShowMenu(false)}>
              Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
