import React, { useEffect, useState } from "react";
import "../styles/Countdown.css";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = React.useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate, calculateTimeLeft]);

  return (
    <section className="countdown">
      <h2 className="countdown-title">¡NOS CASAMOS!</h2>
      <div className="countdown-timer">
        <div>
          <span>{timeLeft.days}</span>
          <small>días</small>
        </div>
        <span className="separator">:</span>
        <div>
          <span>{timeLeft.hours}</span>
          <small>hs</small>
        </div>
        <span className="separator">:</span>
        <div>
          <span>{timeLeft.minutes}</span>
          <small>min</small>
        </div>
        <span className="separator">:</span>
        <div>
          <span>{timeLeft.seconds}</span>
          <small>seg</small>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
