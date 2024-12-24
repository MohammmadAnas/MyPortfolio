import React, { useRef } from "react";
import CircleProgressBar from "./CircleProgressBar";
// import "./AboutBox.css";

const AboutBox = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 270; // Adjust the value as needed
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft += 270; // Adjust the value as needed
  };
  return (  <div className="skill-box">
    <h2>Skills</h2>
    <p className="content">
    Driven by a desire to gain technical and industrial knowledge, I am always open to learning and contributing to the community through innovation and hard work. My proficiency lies in the Java programming language, and I possess a deep understanding of Data Structures and Algorithms. Additionally, I have developed several projects using the MERN stack.
    </p>
    
    <div className="about-box-container">
    <button className="scroll-button left" onClick={scrollLeft}>◀</button>
      <div className="app" ref={containerRef}>
        
          <CircleProgressBar percentage="60" circleWidth="200" title="Java" />

          <CircleProgressBar  percentage="60" circleWidth="200" title="Python" />

          <CircleProgressBar percentage="50" circleWidth="200" title="ReactJS" />
          <CircleProgressBar percentage="60" circleWidth="200" title="Html" />
          <CircleProgressBar percentage="50" circleWidth="200" title="Css" />
          <CircleProgressBar percentage="50" circleWidth="200" title="Javascript" />
        <CircleProgressBar percentage="50" circleWidth="200" title="Node" />
        <CircleProgressBar percentage="50" circleWidth="200" title="ExpressJS" />
        <CircleProgressBar percentage="40" circleWidth="200" title="MongoDB" />
        <CircleProgressBar percentage="70" circleWidth="200" title="Git and Github" />
      
      </div>
      <button className="scroll-button right" onClick={scrollRight}>▶</button>
    </div>
    
    </div>
  );
};

export default AboutBox;
