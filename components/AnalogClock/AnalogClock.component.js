import React, { useEffect, useState, useRef } from 'react';
import { TweenMax, TweenLite, Power3 } from 'gsap';
import moment from 'moment';
import './AnalogClock.css';
import logo from '../../logo.svg';

function AnalogClock() {
  // State
  const [clicksCount, addClick] = useState(0);
  const [degreesCount, addDegrees] = useState(0);
  const [currentTime, setCurrentTime] = useState(moment().format());
  // Hooks
  let logoItem = useRef(null);
  let textItem = useRef(null);
  let clock = useRef(null);
  let deg = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format('h:mm:ss a'));
    }, 1000);

    console.log(logoItem);
    TweenMax.to(logoItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    TweenMax.to(textItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.2,
    });

    console.log(moment().format());
  }, []);

  const rotateSecondHand = (other = checkDegrees()) => {
    addClick(clicksCount + 1);

    addDegrees(degreesCount + deg);

    TweenLite.to('.hand.second', 0.5, {
      rotation: degreesCount == 0 ? degreesCount + deg : degreesCount + deg,
      ease: Power3.easeInOut,
    });
  };

  function checkDegrees() {
    console.log(this.degreeCount);
  }

  return (
    <div className="App">
      <img
        ref={(el) => {
          logoItem = el;
        }}
        src={logo}
        className="app-logo"
        alt="logo"
      />

      <div
        ref={(el) => {
          textItem = el;
        }}
        className="clock"
        onClick={rotateSecondHand}
      >
        <div className="hand hour" data-hour-hand></div>
        <div className="hand minute" data-minute-hand></div>
        <div className="hand second" data-second-hand></div>
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
        <div className="number number5">5</div>
        <div className="number number6">6</div>
        <div className="number number7">7</div>
        <div className="number number8">8</div>
        <div className="number number9">9</div>
        <div className="number number10">10</div>
        <div className="number number11">11</div>
        <div className="number number12">12</div>
        <div className="degDisplay">{degreesCount}</div>
        <div className="timeDisplay">{currentTime}</div>
      </div>
    </div>
  );
}

export default AnalogClock;
