import React from "react";
import bgImage from "../assets/hero2.jpg";

const Hero = () => {
  return (
    <div
      className="relative h-[100vh] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-30 z-10"></div>
      
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 ">
         <h2 className="text-lg md:text-xl mb-4 tracking-widest uppercase bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 bg-clip-text text-transparent  brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl "> 
          Where Luxury Meets Diner
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 bg-clip-text text-transparent  brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl ">
          THE CHILL GRILL
        </h1>
        <button className="text-gray-900 brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600">
          BOOK A TABLE
        </button>
      </div>
    </div>
  );
};

export default Hero;
