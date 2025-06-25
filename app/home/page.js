"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm/page";
import { useRouter } from "next/navigation";
import TestimonialCarousel from "@/components/Testimonial/page";

const iconsList = [
  "/apple.png",
  "/react.png",
  "/dropbox.png",
  "/envato.png",
  "/blackberry.png",
  "/firefox.png",
  "/magento.png",
  "/joomla.png",
  "/blackberry.png",
  "/apple.png",
  "/dropbox.png",
  "/joomla.png",
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const iconsPerPage = 6;
  const stepSize = 2;
  const totalPages =
    Math.ceil((iconsList.length - iconsPerPage) / stepSize) + 1;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "instant" });
    }
  };

  const router = useRouter();

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <div id="home" className="bg-[url('/concert.jpg')] bg-center bg-cover">
        <div className="bg-black/40 min-h-screen w-full text-white p-8 md:p-20 md:px-50 flex flex-col justify-center">
          <p className="text-sm tracking-widest font-bold text-[#ffffff80]">
            Welcome to Artistly
          </p>

          <div className="text-3xl md:text-6xl font-bold mt-6 max-w-[90%] md:max-w-[70%]">
            <p>
              Discover top Indian artists, singers, dancers, DJs & more to
              elevate your events and experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full max-w-sm">
            <button
              onClick={() => {
                router.push("/artists");
              }}
              className="text-center text-xs py-3 md:px-30 tracking-widest uppercase font-bold border-2 border-white hover:bg-white hover:text-black transition cursor-pointer"
            >
              Explore
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-center text-xs py-3 md:px-30 tracking-widest uppercase font-bold border-2 border-white hover:bg-white hover:text-black transition cursor-pointer"
            >
              About
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="h-auto md:h-screen flex bg-[#39b54a] flex-col items-center justify-center p-8"
      >
        <div className="border-b border-white/30 text-center w-full md:w-1/2 mb-8 py-10">
          <p className="font-bold text-lg">Hello There</p>
          <p className="text-4xl md:text-7xl text-white font-extrabold mt-2">
            We Are Artistly
          </p>
        </div>

        <div className="text-base md:text-2xl w-full md:w-2/3 p-4 text-center tracking-widest text-black">
          <p>
            Welcome to Artistly, your one-stop platform to discover and book
            India’s most talented artists. Whether you are looking for singers,
            dancers, DJs, or entertainers for any event, Artistly helps you find
            the perfect match. Explore artists by category, location, or budget.
            Verified profiles. Personalized quotes. All at your fingertips.
          </p>
        </div>

        <div className="flex flex-wrap  justify-center items-center w-[600px] md:w-full mt-10 ">
          {[
            { stat: "127", label: "Verified Artists" },
            { stat: "1585", label: "Events Powered" },
            { stat: "109", label: "Cities Covered" },
            { stat: "102", label: "Successful Bookings" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="min-w-[50px] space-y-6 sm:min-w-[120px] text-center border-r border-white/30 last:border-r-0 justify-center px-2 md:px-10 flex-shrink-0"
            >
              <p className="text-white text-[14px] sm:text-3xl md:text-7xl font-bold">
                {item.stat}
              </p>
              <p className="font-bold text-[8px] sm:text-sm md:text-2xl text-black">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Artists Section */}
      <div
        id="artists"
        className="relative min-h-screen bg-[#1ab8bd] flex flex-col justify-center items-center overflow-hidden px-6 py-10"
      >
        <p className="text-3xl md:text-5xl text-center mb-12 text-white font-bold tracking-wide drop-shadow-lg">
          India&apos;s Best Artists
        </p>

        <div className="flex justify-center items-end gap-4 md:gap-8 flex-wrap md:flex-nowrap">
          {[
            {
              img: "/speaker.jpeg",
              label: "Best Speakers",
              size: "w-40 h-40 md:w-56 md:h-56",
            },
            {
              img: "/img1.jpg",
              label: "Best DJs",
              size: "w-32 h-32 md:w-44 md:h-44",
            },
            {
              img: "/img2.jpg",
              label: "Best Singers",
              size: "w-24 h-24 md:w-32 md:h-32",
            },
            {
              img: "/img3.jpg",
              label: "Best Dancers",
              size: "w-32 h-32 md:w-44 md:h-44",
            },
            {
              img: "/comedian.jpeg",
              label: "Best Comedians",
              size: "w-40 h-40 md:w-56 md:h-56",
            },
          ].map(({ img, label, size }, idx) => (
            <div
              key={idx}
              className="text-center group cursor-pointer transition-transform hover:scale-105"
            >
              <div
                className={`border-4 border-white/60 shadow-2xl rounded-full overflow-hidden mx-auto 
          ${size} transition-all duration-700 group-hover:scale-110`}
              >
                <Image
                  src={img}
                  alt={label}
                  width={300} 
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-slate-900 text-sm md:text-xl mt-3 font-semibold">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <button
          onClick={() => router.push("/artists")}
          className="mt-12 py-3 px-7 text-sm md:text-base font-bold text-white bg-white/20 rounded-lg hover:bg-white hover:text-black transition-all duration-500 shadow-lg hover:shadow-2xl"
        >
          Explore More Artists
        </button>
      </div>

      {/* Clients Section */}
      <div id="works" className="bg-[#e6e6e6] py-30 px-4">
        <p className="text-center uppercase text-green-600 text-xl font-extrabold tracking-widest mb-4">
          Our Partners
        </p>
        <p className="mx-auto text-3xl md:text-5xl font-bold text-center tracking-wide max-w-4xl">
          Our clients fuel our passion for connecting talent with opportunity.
        </p>

        <div className="w-full max-w-5xl mx-auto mt-10">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                width: `${(iconsList.length / 6) * 100}%`,
                transform: `translateX(-${
                  (currentPage * 2 * 100) / iconsList.length
                }%)`,
              }}
            >
              {iconsList.map((icon, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center w-[16.66%] p-4"
                >
                  <Image
                    src={icon}
                    alt={`icon-${idx}`}
                    width={200}
                    height={200}
                    style={"b"}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-3 mt-6">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-3 h-3 rounded-full ${
                  currentPage === idx ? "bg-green-500" : "bg-gray-300"
                } hover:bg-green-500 transition`}
              ></button>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex justify-center items-center gap-8 mt-16">
          <TestimonialCarousel />
        </div>
      </div>

      {/* Contact and Footer */}
      <div id="contacts">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
