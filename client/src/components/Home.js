import React from 'react';
import Temp from './temp.jpg';
import './Home.css';
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="home-container">
      <div className="typewriter-container">
        <Typewriter
          options={{
            strings: ["COMM TRACKER..."],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
      {/* Information Section Below COMM TRACKER */}
      <div className="info-container">
        <p>
          --Welcome to COMM TRACKER👋! Your centralized platform for seamless communication and efficient management using a Calender Application.
          Track, organize, and stay on top of all your communication needs in one place.
        </p>
      </div>
      <img src={Temp} className="logo" alt="logo" />
    </div>
  );
}
