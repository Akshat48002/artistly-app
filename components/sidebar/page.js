"use client";
import { useRouter } from "next/navigation";
import React from "react";


const Sidebar = ({ onClose, isOpen }) => {
  const router = useRouter()

  const handleNavigation = (id) => {
    if (window.location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${id}`);
    }
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      {/* Sidebar Panel */}
      <div
        className={`h-screen w-80 bg-[#0C0C0C] text-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent close on sidebar click
      >
        <div className="flex justify-between items-center p-10 border-b border-gray-800">
          <h2 className="text-[#39b54a] uppercase tracking-widest font-bold text-[11px]">
            Navigation
          </h2>
          <button
            onClick={onClose}
            className="text-xl font-bold hover:text-slate-600"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col m-0 space-y-10 p-6">
          <button
            onClick={() => {
              handleNavigation("home");
              onClose();
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              handleNavigation("about");
              onClose();
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              handleNavigation("artists");
              onClose();
            }}
          >
            Artists
          </button>
          <button
            onClick={() => {
              handleNavigation("works");
              onClose();
            }}
          >
            Works
          </button>
          <button
            onClick={() => {
              handleNavigation("contacts");
              onClose();
            }}
          >
            Contacts
          </button>
        </nav>

        <div className="p-6 text-sm text-gray-400">
          <p className="mb-4">
            Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem
            porro iusto sequi veritatis libero enim.
          </p>
          <div className="flex space-x-3">
            <a href="#">
              <i className="fab fa-facebook text-white hover:text-green-400"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter text-white hover:text-green-400"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram text-white hover:text-green-400"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
