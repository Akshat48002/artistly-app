"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Sundar Pichai",
    role: "CEO, Google",
    image: "/speaker.jpeg",
    message:
      "Working with Artistly transformed our events. Truly professional, reliable artists creating unforgettable experiences!",
  },
  {
    name: "Arijit Singh",
    role: "Playback Singer",
    image: "/arijit.jpeg",
    message:
      "The platform connects incredible talents with audiences seamlessly. A brilliant experience from start to finish!",
  },
  {
    name: "Virat Kohli",
    role: "Cricketer",
    image: "/virat.jpeg",
    message:
      "Artistly ensures every performance shines. A powerful initiative to elevate India's entertainment scene.",
  },
  {
    name: "Priya Sharma",
    role: "Classical Dancer",
    image: "/shreya.jpeg",
    message:
      "Finally, a space where genuine artists get recognized. Grateful for Artistly's efforts towards cultural growth.",
  },
  {
    name: "Rahul Mehta",
    role: "Stand-Up Comedian",
    image: "/comedian.jpeg",
    message:
      "A must-have platform for artists seeking growth and audiences wanting the finest entertainment. Highly recommended!",
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 text-center">
      <div className="max-w-3xl mx-auto relative flex items-center justify-center">

        {/* Left Arrow - always visible, positioned better for mobile */}
        <button
          onClick={prevSlide}
          className="absolute cursor-pointer left-2 sm:left-0 top-1/2 -translate-y-1/2 text-2xl md:text-3xl text-gray-700 hover:text-black transition z-10"
        >
          &#8592;
        </button>

        {/* Testimonial Content with Smooth Animation */}
        <div className="flex flex-col items-center max-w-xl mx-6 sm:mx-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-8">
                &quot;{testimonials[activeIndex].message}&quot;
              </p>

              <div className="flex flex-col items-center mt-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
                  <Image
                    src={testimonials[activeIndex].image}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    alt={testimonials[activeIndex].name}
                  />
                </div>
                <p className="mt-4 font-semibold">{testimonials[activeIndex].name}</p>
                <p className="text-gray-500 text-sm">{testimonials[activeIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow - always visible, fixed for mobile */}
        <button
          onClick={nextSlide}
          className="absolute right-2 cursor-pointer sm:right-0 top-1/2 -translate-y-1/2 text-2xl md:text-3xl text-gray-700 hover:text-black transition z-10"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
