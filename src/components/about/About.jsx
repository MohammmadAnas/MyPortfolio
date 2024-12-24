import React from 'react';
import "./about.css"
import Image from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';
import resume from '../../assets/Mohammad-Anas.pdf'

const About = () => {
  return (
    <>
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Welcome to my portfolio website! I am a Final Year 
              student pursuing B.Tech in Computer Science and Engineering. With a strong passion 
              for technology, I am constantly exploring new advancements and utilizing them to solve 
              real-life problems. Thank you for visiting my portfolio website. Please 
              feel free to explore my work and get in touch for any opportunities or collaborations.</p>
            <a href={resume} className="btn">Download CV</a>
          </div>

      </div>
      </div>
      
      <AboutBox />
    </section>
    </>
  )
}

export default About
