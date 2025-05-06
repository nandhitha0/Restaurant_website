import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaReddit,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 px-16 py-16 bg-white">
      <div className="grid place-content-center gap-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Need Update on Latest Offers?
        </h2>
        <p className="text-lg text-gray-600">
          Subscribe to our newsletter to get frequent updates
        </p>
        <div className="flex items-center justify-center max-w-xl mx-auto w-full">
          <input type="email" placeholder="Enter your email address" />
          <button className="brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600 text-while px-6 py-3 rounded-r-full font-bold">
            Join Now
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">THE CHILL GRILL</h2>
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-amber-500">
            <FaFacebook className="text-4xl text-black brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600" />
            <FaInstagram className="text-4xl text-black brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600" />
            <FaTwitter className="text-4xl text-black brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600" />
            <FaReddit className="text-4xl text-black brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600" />
            <FaYoutube className="text-4xl text-black brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600" />
          </div>
        </div>
        <div>
          <ul className="flex gap-6 justify-center text-gray-700 text-base font-medium">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Menu</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-4">
        ©2025 THE GRILL CHILL.All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
