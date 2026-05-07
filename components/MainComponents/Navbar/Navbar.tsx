"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
                <div className="w-9 h-9 relative">
                  <Image
                    src="/logo/logo.png"
                    alt="TeamOrbit Logo"
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tighter text-slate-900">
                Team<span className="text-blue-600">Orbit</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {["Dashboard", "Team", "Tasks", "Pricing"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-all relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-blue-100 transition-all transform active:scale-95"
            >
              Get Started Free
            </Link>
          </div>

          {/* mobile responsive  */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-50 px-6 py-8 flex flex-col gap-6 shadow-xl">
          <Link href="/dashboard" className="text-lg font-bold text-slate-800">
            Dashboard
          </Link>
          <Link href="/team" className="text-lg font-bold text-slate-800">
            Team
          </Link>
          <Link href="/tasks" className="text-lg font-bold text-slate-800">
            Tasks
          </Link>
          <hr className="border-slate-100" />
          <div className="flex flex-col gap-4">
            <Link
              href="/login"
              className="text-center font-bold text-slate-600"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-blue-600 text-white py-4 rounded-2xl text-center font-bold"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
