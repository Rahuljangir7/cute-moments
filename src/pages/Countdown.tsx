import { useState, useEffect } from "react";

// SVG Icons
const ClockIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="#d63384"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M12 6v6l4 2"
      stroke="#d63384"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="18"
      rx="2"
      stroke="#ff6b9d"
      strokeWidth="2"
      fill="none"
    />
    <path d="M8 2v4M16 2v4M3 10h18" stroke="#ff6b9d" strokeWidth="2" />
  </svg>
);

function Countdown(): JSX.Element {
  // Set your special date here (e.g., when you first met)
  const cmSpecialDate = new Date("2024-02-14T00:00:00"); // Example: Valentine's Day 2024
  const cmNextAnniversary = new Date("2025-02-14T00:00:00"); // Next anniversary

  const [cmTimeSince, setCmTimeSince] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [cmTimeUntil, setCmTimeUntil] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const cmCalculateTime = () => {
      const cmNow = new Date();

      // Time since special date
      const cmDiffSince = cmNow.getTime() - cmSpecialDate.getTime();
      const cmDaysSince = Math.floor(cmDiffSince / (1000 * 60 * 60 * 24));
      const cmHoursSince = Math.floor(
        (cmDiffSince % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const cmMinutesSince = Math.floor(
        (cmDiffSince % (1000 * 60 * 60)) / (1000 * 60),
      );
      const cmSecondsSince = Math.floor((cmDiffSince % (1000 * 60)) / 1000);

      // Time until next anniversary
      const cmDiffUntil = cmNextAnniversary.getTime() - cmNow.getTime();
      const cmDaysUntil = Math.max(
        0,
        Math.floor(cmDiffUntil / (1000 * 60 * 60 * 24)),
      );
      const cmHoursUntil = Math.max(
        0,
        Math.floor((cmDiffUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const cmMinutesUntil = Math.max(
        0,
        Math.floor((cmDiffUntil % (1000 * 60 * 60)) / (1000 * 60)),
      );
      const cmSecondsUntil = Math.max(
        0,
        Math.floor((cmDiffUntil % (1000 * 60)) / 1000),
      );

      setCmTimeSince({
        days: cmDaysSince,
        hours: cmHoursSince,
        minutes: cmMinutesSince,
        seconds: cmSecondsSince,
      });
      setCmTimeUntil({
        days: cmDaysUntil,
        hours: cmHoursUntil,
        minutes: cmMinutesUntil,
        seconds: cmSecondsUntil,
      });
    };

    cmCalculateTime();
    const cmTimer = setInterval(cmCalculateTime, 1000);

    return () => clearInterval(cmTimer);
  }, []);

  const cmTimeCard = (value: number, label: string) => (
    <div className="cm-time-card">
      <div className="cm-time-value">{value.toString().padStart(2, "0")}</div>
      <div className="cm-time-label">{label}</div>
    </div>
  );

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-countdown-container">
        <div className="cm-countdown-header">
          <ClockIcon />
          <h1 className="cm-countdown-title">Our Time Together</h1>
          <p className="cm-countdown-subtitle">
            Every second with you is precious ⏰
          </p>
        </div>

        <div className="cm-countdown-section">
          <div className="cm-countdown-label">
            <CalendarIcon />
            <span>Time Since We Met</span>
          </div>
          <div className="cm-countdown-display">
            {cmTimeCard(cmTimeSince.days, "Days")}
            {cmTimeCard(cmTimeSince.hours, "Hours")}
            {cmTimeCard(cmTimeSince.minutes, "Minutes")}
            {cmTimeCard(cmTimeSince.seconds, "Seconds")}
          </div>
        </div>

        <div className="cm-countdown-divider">💕</div>

        <div className="cm-countdown-section">
          <div className="cm-countdown-label">
            <CalendarIcon />
            <span>Until Next Anniversary</span>
          </div>
          <div className="cm-countdown-display">
            {cmTimeCard(cmTimeUntil.days, "Days")}
            {cmTimeCard(cmTimeUntil.hours, "Hours")}
            {cmTimeCard(cmTimeUntil.minutes, "Minutes")}
            {cmTimeCard(cmTimeUntil.seconds, "Seconds")}
          </div>
        </div>

        <div className="cm-countdown-message">
          <p>
            "In all the time we've shared, my love for you has only grown
            stronger."
          </p>
        </div>
      </div>
    </>
  );
}

export default Countdown;
