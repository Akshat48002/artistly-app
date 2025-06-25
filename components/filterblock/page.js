"use client";
import React, { useState, useEffect, useRef } from "react";
import "rc-slider/assets/index.css";
import { MapPin, ListMusic } from "lucide-react";

const Filter = ({ setCategory, setLocation, priceRange, setPriceRange }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const locations = ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Other"];
  const categories = ["Singer", "Dancer", "DJ", "Speakers", "Others"];

  const locationRef = useRef();
  const categoryRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowCategoryDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex items-center z-50 ">
      <div
        className={`flex items-center gap-2 
  ${showFilters ? "max-w-[300px]" : "max-w-[54px]"} 
  md:bg-white/10 md:shadow-lg border rounded-xl p-2 overflow-hidden transition-[max-width] duration-700 ease-in-out 
  ${showFilters ? "bg-white/10 shadow-lg" : "bg-transparent shadow-none"} 
  md:max-w-none md:p-2
`}
      >
        <button
          onClick={() => {
            setShowFilters(!showFilters);
            setShowCategoryDropdown(false);
            setShowLocationDropdown(false);
          }}
          className="p-2 rounded-full transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-list-filter-icon text-green-500 transition-transform duration-500 ${
              showFilters ? "rotate-90" : "rotate-0"
            } md:w-[30px] md:h-[30px] w-[20px] h-[20px]`}
          >
            <path d="M3 6h18" />
            <path d="M7 12h10" />
            <path d="M10 18h4" />
          </svg>
        </button>

        {/* Inner Filters */}
        <div
  className={`flex items-center gap-1 md:gap-3 transition-all duration-500 ${
    showFilters
      ? "opacity-100 scale-100 ml-2"
      : "opacity-0 scale-90 ml-0 pointer-events-none"
  }`}
>
          {/* Location */}
          <div ref={locationRef}>
            <button
              onClick={() => {
                setShowLocationDropdown(!showLocationDropdown);
                setShowCategoryDropdown(false);
              }}
              title="Location"
              className="py-2 transition"
            >
              <MapPin className="text-green-500 md:w-8 md:h-8 w-5 h-5" />
            </button>
          </div>

          {/* Category */}
          <div ref={categoryRef}>
            <button
              onClick={() => {
                setShowCategoryDropdown(!showCategoryDropdown);
                setShowLocationDropdown(false);
              }}
              title="Category"
              className="p-2 transition"
            >
              <ListMusic className="text-green-500 md:w-8 md:h-8 w-5 h-5" />
            </button>
          </div>

          {/* Price Slider */}
          {/* Price Slider */}
          <div className="text-white flex gap-2 items-center min-w-[130px]">
            <input
              type="range"
              min="0"
              max="10000000"
              step="10000"
              value={priceRange}
              title="price"
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-20 md:w-28 h-[2px] cursor-pointer appearance-none rounded-full accent-green-500 bg-slate-600"
            />
            <p className="text-sm text-white/50  text-right">
              ₹{priceRange}+
            </p>
          </div>
        </div>
      </div>

      {/* Location Dropdown */}
      {showLocationDropdown && (
        <div className="absolute top-14 left-12 bg-white/20 backdrop-blur-md rounded shadow-lg z-50">
          {locations.map((loc) => (
            <div
              key={loc}
              className="px-4 py-2 hover:text-slate-300 cursor-pointer text-slate-200 text-sm"
              onClick={() => {
                setLocation(loc);
                setShowLocationDropdown(false);
              }}
            >
              {loc}
            </div>
          ))}
        </div>
      )}

      {/* Category Dropdown */}
      {showCategoryDropdown && (
        <div className="absolute top-14 left-28 bg-white/20 backdrop-blur-md rounded shadow-lg z-50">
          {categories.map((cat) => (
            <div
              key={cat}
              className="px-4 py-2 hover:text-slate-300 cursor-pointer text-slate-200 text-sm"
              onClick={() => {
                setCategory(cat);
                setShowCategoryDropdown(false);
              }}
            >
              {cat}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
