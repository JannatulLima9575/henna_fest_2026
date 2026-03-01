"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
  const eventDate = new Date("March 17, 2026 11:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(eventDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <section className="py-20 bg-gradient-to-r from-rose-600 to-amber-500 text-white text-center">
      <h2 className="text-4xl font-bold mb-10">Eid Countdown 🌙</h2>

      <div className="flex justify-center gap-6 text-2xl font-semibold">
        <div>{days}d</div>
        <div>{hours}h</div>
        <div>{minutes}m</div>
        <div>{seconds}s</div>
      </div>
    </section>
  );
};

export default Countdown;