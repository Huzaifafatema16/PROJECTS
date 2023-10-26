import React, { useState, useEffect } from 'react';


export default function Timer({ initialTime, onTimeUp }) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const timerInterval = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    } else {
      onTimeUp();
    }
  }, [time, onTimeUp]);

  const timeUpStyles = {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
  };

  return <div className="timer">Time Remaining: {time} seconds</div>;
}


