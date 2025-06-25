"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar/page";
import { Menu } from "lucide-react"; 
import Link from "next/link";


const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex justify-between items-center fixed z-50 w-full bg-black/1 text-white p-4 px-6">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <Link href={"/" }  className="font-serif text-2xl font-bold" >Artistly</Link>
      </div>

      {/* Menu Button for Desktop */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="p-2 rounded bg-slate-600 hidden md:block"
      >
        Menu
      </button>

      {/* Menu Icon for Mobile */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="p-2 rounded bg-slate-600 block md:hidden"
      >
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default Navbar;
