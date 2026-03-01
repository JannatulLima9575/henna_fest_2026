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

    <section className="py-16 md:py-24 bg-[#f8f5ef] text-center">

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 text-[#3a5a40]">
        Eid Countdown 🌙
      </h2>

      {/* Countdown Cards */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">

        {/* Days */}
        <div className="bg-white shadow-xl rounded-2xl px-6 py-5 w-24 md:w-32">
          <div className="text-2xl md:text-4xl font-bold text-[#3a5a40]">
            {days}
          </div>
          <div className="text-sm md:text-base text-gray-600">
            Days
          </div>
        </div>

        {/* Hours */}
        <div className="bg-white shadow-xl rounded-2xl px-6 py-5 w-24 md:w-32">
          <div className="text-2xl md:text-4xl font-bold text-[#3a5a40]">
            {hours}
          </div>
          <div className="text-sm md:text-base text-gray-600">
            Hours
          </div>
        </div>

        {/* Minutes */}
        <div className="bg-white shadow-xl rounded-2xl px-6 py-5 w-24 md:w-32">
          <div className="text-2xl md:text-4xl font-bold text-[#3a5a40]">
            {minutes}
          </div>
          <div className="text-sm md:text-base text-gray-600">
            Minutes
          </div>
        </div>

        {/* Seconds */}
        <div className="bg-white shadow-xl rounded-2xl px-6 py-5 w-24 md:w-32">
          <div className="text-2xl md:text-4xl font-bold text-[#3a5a40]">
            {seconds}
          </div>
          <div className="text-sm md:text-base text-gray-600">
            Seconds
          </div>
        </div>

      </div>

    </section>

  );
};

export default Countdown;