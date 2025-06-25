"use client";
import {
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white/5  text-gray-400 px-6 md:px-40 py-20">
      <div className="flex flex-col container mx-auto items-center  md:flex-row gap-12 justify-between max-w-3xl">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-[#39b54a] text-3xl font-extrabold">Artistly</h2>
          <p className="leading-loose text-white/30 text-[12px]">
            Artistly is India&apos;s leading platform to discover, connect, and book
            talented artists for your special events. From singers and dancers
            to DJs and speakers, we bring entertainment to your
            doorstep.talented artists for your special events. From singers and
            dancers to DJs and speakers, we bring entertainment to your
            doorstep.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-green-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col space-y-9">
          <h3 className="text-white  font-bold">Get Notified</h3>
          <p className="leading-5 text-white/30  text-[12px]">
            Subscribe to get the latest artist announcements, event updates, and
            exclusive offers from Artistly. Subscribe to get the latest artist
            announcements, event updates, and exclusive offers from Artistly.
            Subscribe to get the latest artist announcements, event updates, and
            exclusive offers.
          </p>

          {/* Subscribe Form */}
          <div className="flex flex-col w-full">
            <div className="flex items-center px-4 bg-white/1 flex-grow">
              <FaEnvelope className="text-white" />
              <input
                type="email"
                placeholder="Email Address"
                className="outline-none px-3 py-3 text-white placeholder-gray-600 placeholder:text-[13px] w-full"
              />
            </div>
            <button className="bg-[#39b54a] mt-3 sm:mt-0 sm:ml-3 px-7 py-4 uppercase text-white text-[13px] tracking-widest font-bold hover:bg-green-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-20 text-center items-center text-sm text-gray-500">
        © 2025 Artistly &nbsp; | &nbsp; Designed & Developed by{" "}
        <span className="text-white hover:underline cursor-pointer">
          Team Artistly
        </span>
      </div>
    </footer>
  );
};

export default Footer;
