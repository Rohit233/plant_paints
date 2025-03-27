"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const colorData = [
  { image: "/assets/house/31.webp", colors: ["#8B0000", "#4169E1"] },
  { image: "/assets/house/32.jpg", colors: ["#00BFFF", "#90EE90"] },
  { image: "/assets/house/36.webp", colors: ["#E5E0B5", "#9370DB"] },
  { image: "/assets/house/34.webp", colors: ["#D8C4B6", "#DAA520"] },
  { image: "/assets/house/37.webp", colors: ["#FFB6C1", "#90EE90", "#FFFFF0"] },
  { image: "/assets/house/35.webp", colors: ["#DAA520", "#FFFAFA"] },
  { image: "/assets/house/38.jpg", colors: ["#ff9682", "#136c51", "#FFFFF0"] },
  { image: "/assets/house/38.webp", colors: ["#FFFFF0", "#c77690"] },
  { image: "/assets/house/42.jpeg", colors: ["#cc66dd"] },
  { image: "/assets/house/42.jpg", colors: ["#939498", "#e56024"] },
  { image: "/assets/house/43.jpg", colors: ["#cfcfcf", "#6a3c3a"] },
];

export default function TrendingColours() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(1); // Default to 1 for SSR consistency

  useEffect(() => {
    const updateImagesPerView = () => {
      setImagesPerView(window.innerWidth >= 1024 ? 4 : 1);
    };

    updateImagesPerView();
    window.addEventListener("resize", updateImagesPerView);

    return () => window.removeEventListener("resize", updateImagesPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= colorData.length - imagesPerView ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? colorData.length - imagesPerView : prev - 1));
  };

  return (
    <section className="relative flex flex-col lg:flex-row justify-center items-center px-6 md:px-12 py-12 md:py-16 bg-white">
      {/* Mobile View - Man Image on Top */}
      <div className="w-full lg:hidden flex flex-col items-center text-center mb-6">
        <Image
          src="/assets/33.jpg"
          alt="Man Pointing"
          width={300}
          height={400}
          className="w-64 h-auto"
        />
        <p className="text-lg md:text-xl text-gray-600 mt-2">
          Get inspired with the latest color, trend, and design ideas.
        </p>
      </div>

      {/* Laptop View - Man Image on Left */}
      <div className="hidden lg:flex w-1/3 justify-center">
        <Image src="/assets/33.jpg" alt="Man Pointing" width={600} height={600} />
      </div>

      {/* Right Side - Content & Image Slider */}
      <div className="w-full lg:w-2/3 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-5">
          Trending Colour Combinations
        </h2>

        {/* Laptop View - Text Under Title */}
        <p className="hidden lg:block text-lg md:text-2xl text-gray-600 mt-2">
          Get inspired with the latest color, trend, and design ideas.
        </p>

        {/* Slider */}
        <div className="relative w-full flex items-center mt-6 md:mt-8 overflow-hidden">
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-0 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Grid - Mobile (1 Image) | Laptop (4 Images) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 mx-auto w-full">
            {colorData.slice(currentIndex, currentIndex + imagesPerView).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-md rounded-lg overflow-hidden w-full"
              >
                <Image
                  src={item.image}
                  alt="Room Design"
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <div className="flex justify-center gap-2 p-3 md:p-4">
                  {item.colors.map((color, i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border shadow" style={{ backgroundColor: color }}></div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-0 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
