import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./CircleProgressBar.css";

const CircleProgressBar = ({ percentage, circleWidth, title }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * animatedPercentage) / 100;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 500); // Initial delay before starting animation
    const resetAnimation = setInterval(() => {
      setAnimatedPercentage(0);
      setTimeout(() => {
        setAnimatedPercentage(percentage);
      }, 1500); // Delay before starting the next animation cycle
    }, 4000); // Total cycle time including pause
    return () => {
      clearTimeout(timeout);
      clearInterval(resetAnimation);
    };
  }, [percentage]);

  return (
    <div className="box">
      <svg
        width={circleWidth}
        height="250px"
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="10%" stop-color="#12c2e9" />
            <stop offset="50%" stop-color="#c471ed" />
            <stop offset="100%" stop-color="#f64f59" />
          </linearGradient>
        </defs>

        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-background"
        />

        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke="url(#gradient)"
        />

        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="circle-text"
          fill="url(#gradient)"
        >
          {animatedPercentage}%
        </text>
      </svg>
      <div className="circle-title">{title}</div>
    </div>
  );
};

export default CircleProgressBar;
