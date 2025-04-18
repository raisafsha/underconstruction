"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const UnderConstruction = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-05-20T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300 flex items-center justify-center text-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-white shadow-2xl rounded-2xl p-10 max-w-xl"
      >
        <motion.h1
          className="text-4xl font-bold mb-4 text-yellow-600"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🚧 Website Under Construction 🚧
        </motion.h1>
        <p className="text-lg text-gray-700 mb-6">
          We're working hard! Coming back online on:
        </p>
        <div className="flex justify-center gap-4 text-xl font-semibold text-gray-800 mb-6">
          <div className="flex flex-col items-center">
            <span>{timeLeft.days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.seconds}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>

        <div className="mt-8 text-gray-600">
          <p>Contact: <span className="font-bold text-gray-800"> Team Huzaifa Mushtaq</span></p>
          <a
            href="https://www.linkedin.com/in/huzaifamushtaqofficial/" // <-- Apna LinkedIn link yahaan lagayein
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;
