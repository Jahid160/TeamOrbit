"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          🚀 TeamOrbit
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
          <Link href="/tasks" className="hover:text-gray-300">
            Tasks
          </Link>
          <Link href="/team" className="hover:text-gray-300">
            Team
          </Link>

          {/* Auth Buttons */}
          <Link href="/login" className="bg-blue-600 px-4 py-1 rounded">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/tasks">Tasks</Link>
          <Link href="/team">Team</Link>
          <Link href="/login" className="bg-blue-600 px-4 py-1 rounded w-fit">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
