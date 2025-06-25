"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaDiscord,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-[url('/7971.jpg')] bg-center bg-cover flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-black/1 backdrop-blur-md rounded-xl text-white p-6 md:p-16 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10 w-full md:w-[70%]">
          <p className="text-[#39b54a] font-bold text-sm md:text-lg tracking-widest">
            CONTACT US
          </p>
          <p className="text-2xl md:text-5xl font-semibold mt-2 md:mt-4 leading-snug">
            Let&apos;s Make Your Next Event Unforgettable
          </p>
        </div>

        {/* Main Grid */}
        <div className="w-full flex flex-col md:flex-row bg-white/10 rounded-lg overflow-hidden">
          {/* Form Section */}
          <div className="w-full md:w-[65%] p-6 md:p-10 flex flex-col gap-6">
            <h3 className="uppercase text-xs md:text-sm tracking-widest font-extrabold mb-4">
              Send Us a Message
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border-b border-gray-700 outline-none py-3 placeholder-[#ffffff41] placeholder:text-xs md:placeholder:text-sm bg-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border-b border-gray-700 outline-none py-3 placeholder-[#ffffff41] placeholder:text-xs md:placeholder:text-sm bg-transparent"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border-b border-gray-700 outline-none py-3 placeholder-[#ffffff41] placeholder:text-xs md:placeholder:text-sm bg-transparent"
              />
              <textarea
                rows="6"
                placeholder="Your Message"
                className="border-b border-gray-700 outline-none py-3 placeholder-[#ffffff41] placeholder:text-xs md:placeholder:text-sm bg-transparent"
              ></textarea>

              <button
                type="submit"
                className="bg-[#39b54a] hover:bg-[#39b54ac5] text-white font-bold py-3 mt-4"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-[35%] bg-black p-6 md:p-10 flex flex-col justify-between gap-6">
            <div>
              <h3 className="uppercase text-xs md:text-sm tracking-widest font-extrabold mb-6">
                Contact Info
              </h3>

              <div className="mb-6">
                <h4 className="text-[#39b54a] font-extrabold mb-1">
                  Where to Find Us
                </h4>
                <p className="text-gray-400 text-sm">
                  1600 Amphitheatre Parkway
                  <br />
                  Mountain View, CA
                  <br />
                  94043 US
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-[#39b54a] font-semibold mb-1">
                  Email Us At
                </h4>
                <p className="text-gray-400 text-sm">
                  contact@glintsite.com
                  <br />
                  info@glintsite.com
                </p>
              </div>

              <div>
                <h4 className="text-[#39b54a] font-semibold mb-1">
                  Call Us At
                </h4>
                <p className="text-gray-400 text-sm">
                  Phone: +63 555 1212
                  <br />
                  Mobile: +63 555 0100
                  <br />
                  Fax: +63 555 0101
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8 text-white">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="w-6 h-6 hover:text-blue-500 hover:scale-110 cursor-pointer transition-transform" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6 hover:text-pink-500 hover:scale-110 cursor-pointer transition-transform" />
              </a>
              <a href="mailto:example@gmail.com">
                <HiOutlineMail className="w-6 h-6 hover:text-red-500 hover:scale-110 cursor-pointer transition-transform" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="w-6 h-6 hover:text-indigo-500 hover:scale-110 cursor-pointer transition-transform" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="w-6 h-6 hover:text-blue-400 hover:scale-110 cursor-pointer transition-transform" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-6 h-6 hover:text-green-500 hover:scale-110 cursor-pointer transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
