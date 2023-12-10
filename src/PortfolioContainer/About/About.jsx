import React from "react";
import "./About.css";
import aboutImg from "../../assets/1700984020147.jpg";
import Info from "./Info";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-head1">
        <span className="section-subtitle">Get To Know More</span>
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="about-container container grid">
        <img className="about-img" src={aboutImg} alt="aboutImage" />
        <div className="about-data">
          <Info />
          <p className="about-para">
            Hey there! I'm Yuvaraj, a versatile tech enthusiast on a mission to
            make an impact in the IT world! With a Bachelor of Commerces (Computer Application) graduation and a
            Java Full Stack Development certification under my belt, I'm
            equipped with the prowess of SQL, Java, Spring Boot, HTML5, CSS and
            JavaScript . My appetite for learning drives me to explore the
            limitless possibilities of React JS. Passionate, proactive, and
            adaptable, I'm eagerly seeking exciting IT opportunities. If you're
            searching for a dynamic team player with an unyielding drive for
            excellence, let's connect! Together, we'll elevate your projects to
            new heights. Ready to innovate? Let's talk!
          </p>
        </div>
      </div>
    </section>
  );
}
