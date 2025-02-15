"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Welcome to Our Journey", "Join Our Pilgrimage", "Spread the Spirit"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex  justify-center bg-secondary dark:bg-black">
      <motion.div
        initial={{ opacity: 0.5, y: 0, scale: 1 }}
        whileInView={{ opacity: 1, y: -20, scale: 1.1, rotate: 360 }}
        transition={{ duration: 5 }}
        className="absolute mt-20"
      >
        <Image src="/pilgrim.png" alt="Pilgrim" width={320} height={320} />
      </motion.div>
      <div className="relative h-[70vh] flex items-center justify-center text-black dark:text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          // style={{ backgroundImage: "url('/asset/holydoor.png')" }}
        />
        {/* <div className="absolute inset-0 bg-black opacity-50 z-10" /> */}
        <div className="relative z-20 text-center">
          <motion.h1
            key={currentText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {texts[currentText]}
          </motion.h1>
          <p className="text-xl md:text-2xl font-bold">Ignatius Francis Sumual & Irene Lily Halim</p>
        </div>
      </div>
    </div>
  );
}
