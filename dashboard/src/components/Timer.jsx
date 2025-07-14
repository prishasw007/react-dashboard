import React, { useState, useEffect } from 'react';
import './Timer.css'; // styling

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup function clears the interval
    return () => clearInterval(interval);
  }, [isRunning]);

  function toggleTimer() {
    setIsRunning(!isRunning);
  }

  return (
    <div className="timer">
      <h2>⏱ Timer</h2>
      <p>Seconds passed: {seconds}</p>
      <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Resume'}</button>
    </div>
  );
}

export default Timer;
