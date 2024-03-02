import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2024-03-31T09:00:00Z"); // March 31, 2024 at 9:00 AM UTC

  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      // The target date has passed
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className=" p-5 mt-4">
      <h2 className="font-thin text-xs">Seçime Kalan Süre:</h2>
      <div>
      <span style={{ marginRight: '5px' }}>{timeRemaining.days} gün</span>
    <span style={{ marginRight: '5px' }}>{timeRemaining.hours} saat</span>
    <span style={{ marginRight: '5px' }}>{timeRemaining.minutes} dakika</span>
    <span>{timeRemaining.seconds} saniye</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
