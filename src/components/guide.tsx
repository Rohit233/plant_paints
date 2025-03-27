"use client";

import React, { useState } from "react";
import Image from "next/image";

const colors = [
  "#FFA500", "#FF5733", "#D90000", "#6A0DAD", "#4169E1",
  "#00A8A8", "#008000", "#BDB76B", "#808080", "#800000", "#FFFFF0"
];

const Guide: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string>("28.jpg");
  const [selectedText, setSelectedText] = useState<string>("Floor");

  const rooms = [
    { img: "26.jpg", text: "Living Room" },
    { img: "23.png", text: "Kids Room" },
    { img: "24.webp", text: "Kitchen" },
    { img: "25.avif", text: "Bed Room" },
    { img: "28.jpg", text: "Floor" }
  ];

  return (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-10 py-8 md:py-12 bg-gray-100 gap-8 md:gap-16 justify-center items-center">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6 md:space-y-8 pr-0 md:pr-8 lg:pr-16 text-center md:text-left">
        <button className="text-lg bg-gray-300 text-black px-4 py-3 rounded-lg">Colour Guide</button>
        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
          Your Home&apos;s <span className="text-3xl md:text-4xl">Dream Look</span> <br />
          <span className="text-3xl md:text-4xl">Starts With A Single Click</span>
        </h2>
        {/* Room Categories */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {rooms.map((room) => (
            <div key={room.img} className="flex flex-col items-center">
              <Image
                src={`/assets/house/${room.img}`}
                alt={room.text}
                width={112} // Adjust size accordingly
                height={136}
                className="w-20 h-24 md:w-24 md:h-28 lg:w-28 lg:h-32 rounded-lg cursor-pointer"
                onClick={() => {
                  setSelectedRoom(room.img);
                  setSelectedText(room.text);
                }}
              />
            </div>
          ))}
        </div>
        {/* Color Selection */}
        <div className="hidden md:flex flex-wrap justify-center md:justify-start gap-3">
          {colors.map((color) => (
            <button
              key={color}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 rounded-full border"
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            ></button>
          ))}
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center mt-6 md:mt-12">
        <div
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-64 md:h-80 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: selectedColor || "transparent" }}
        >
          <Image
            src={`/assets/house/${selectedRoom}`}
            alt="Selected Room"
            width={400} // Adjust size accordingly
            height={320}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <p className="mt-4 text-lg font-medium">{selectedText}</p>
      </div>
    </div>
  );
};

export default Guide;
