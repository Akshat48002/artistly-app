"use client";
import React, { useState, useEffect } from "react";
import ArtistCard from "@/components/artistCard/page";
import Artists from "@/data/page"
import Filter from "@/components/filterblock/page";
import AddArtist from "@/components/AddArtist/page";
import { motion } from "framer-motion";
import { Plus, Search } from "lucide-react";

const ArtistList = () => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState(0);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setshowModal] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  // Artist list after filteration
  const filteredArtists = Artists.filter((artist) => {
    const getPriceRange = (priceString) => {
      const cleaned = priceString.replace(/₹|,|\s/g, "");
      return parseInt(cleaned);
    };

    const matchCategory = category ? artist.category === category : true;
    const matchLocation = location ? artist.location === location : true;
    const matchPrice = priceRange
      ? (() => {
          const min = getPriceRange(artist.price);
          return min >= priceRange;
        })()
      : true;
    const matchSearch = search
      ? artist.name.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchCategory && matchLocation && matchPrice && matchSearch;
  });

  //Artist card shown on a page
  const cardsPerPage = 12;
  const totalPages = Math.ceil(filteredArtists.length / cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const visibleArtists = filteredArtists.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  // Close expanded card when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".artist-card-wrapper")) {
        setExpandedId(null);
      }
    };

    if (expandedId !== null) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [expandedId]);

  //
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="flex flex-col mx-4 sm:mx-10 md:mx-20 mt-20 gap-9">
        <p className="text-center text-3xl sm:text-4xl font-bold text-white">
          Artists
        </p>

        {/* Search Bar */}
        <div className="relative w-full max-w-2xl mx-auto group hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
          <input
            className="p-2 pl-12 md:p-4 md:pl-14 bg-slate-500/20 text-white w-full outline-none placeholder-slate-400 rounded-2xl"
            type="text"
            placeholder="Search artists"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute text-green-600 left-3 md:left-5 top-1/2 -translate-y-1/2 ">
            <Search />
          </div>
        </div>

        {/* Filter + Add Button */}
        <div className="flex justify-between items-center gap-2">
          <Filter
            category={category}
            setCategory={setCategory}
            location={location}
            setLocation={setLocation}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
          <button
            onClick={() => setshowModal(true)}
            className="text-[18px] bg-white/9 shadow-lg p-4 hidden md:block text-green-500 rounded-2xl hover:scale-105 transition-transform"
          >
            Add
          </button>
          <button
            onClick={() => setshowModal(true)}
            className="py-2  text-green-500 block md:hidden rounded-full hover:bg-green-600 hover:scale-105 transition-transform"
          >
            <Plus size={30} />
          </button>
        </div>

        {/* Artist Cards */}
        <div className="flex flex-wrap justify-center md:justify-start gap-15 min-h-screen">
          {filteredArtists.length > 0 ? (
            visibleArtists.map((artist, index) => (
              <motion.div
                key={artist.id}
                onClick={() =>
                  setExpandedId(expandedId === artist.id ? null : artist.id)
                }
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.1 }}
                className={`artist-card-wrapper transition-all duration-300 cursor-pointer ${
                  expandedId === artist.id
                    ? "scale-110 z-10"
                    : expandedId
                    ? "scale-90 opacity-50"
                    : ""
                }`}
              >
                <ArtistCard
                  artist={artist}
                  isExpanded={expandedId === artist.id}
                  onClick={() =>
                    setExpandedId(expandedId === artist.id ? null : artist.id)
                  }
                />
              </motion.div>
            ))
          ) : (
            <p className="text-center text-lg text-gray-500 w-full mt-20">
              No results
            </p>
          )}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-8 space-x-4 mb-20 gap-40">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            title="Previous"
            className="px-4 py-2 text-4xl text-green-500 cursor-pointer  rounded disabled:opacity-50"
          >
            {`<`}
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage >= totalPages - 1}
            title="Next"
            className="px-4 py-2 text-4xl text-green-500 cursor-pointer rounded disabled:opacity-50"
          >
            {`>`}
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && <AddArtist closeModal={() => setshowModal(false)} />}
    </div>
  );
};

export default ArtistList;
