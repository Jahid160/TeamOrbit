"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
// Import React Icons
import {
  LuMail,
  LuLock,
  LuEye,
  LuEyeOff,
  LuArrowRight,
  LuBox,
} from "react-icons/lu";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl,
    });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-surface font-body">
      {/* 1. Left Column (Visual Anchor) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary-fixed">
        <div className="absolute inset-0 z-0">
          <img
            alt="Architectural detail"
            className="w-full h-full object-cover opacity-90 mix-blend-multiply"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          />
        </div>

        <div className="relative z-10 p-12 xl:p-16 flex flex-col justify-between w-full">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#003d9b] to-[#0052cc] rounded-xl flex items-center justify-center shadow-lg text-white">
                <LuBox size={24} />
              </div>
              <span className="font-headline font-black text-2xl tracking-tight text-on-primary-fixed">
                TeamOrbit
              </span>
            </div>
          </div>

          <div className="max-w-md">
            <h1 className="font-headline text-4xl xl:text-5xl font-extrabold text-on-primary-fixed tracking-tight leading-tight mb-6">
              Precision Fluidity in Every Project.
            </h1>
            <p className="text-lg text-on-primary-fixed/80 font-medium">
              Experience an enterprise-grade workspace that bridges the gap
              between rigid structure and creative momentum.
            </p>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-2xl xl:text-3xl font-bold text-on-primary-fixed">
                12k+
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold opacity-60">
                Projects Built
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl xl:text-3xl font-bold text-on-primary-fixed">
                99.9%
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold opacity-60">
                Uptime Reliability
              </span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent pointer-events-none"></div>
      </div>

      {/* 2. Right Column (Auth Content) */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 md:p-16 bg-surface">
        <div className="w-full max-w-[400px]">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8 md:mb-12">
            <div className="w-8 h-8 bg-gradient-to-br from-[#003d9b] to-[#0052cc] rounded-lg flex items-center justify-center text-white">
              <LuBox size={18} />
            </div>
            <span className="font-headline font-black text-xl tracking-tight text-primary">
              TeamOrbit
            </span>
          </div>

          <div className="mb-8 md:mb-10 text-center lg:text-left">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-2">
              Welcome back
            </h2>
            <p className="text-on-surface-variant font-medium text-sm md:text-base">
              Please enter your details to access your workspace.
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8">
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl })}
              className="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container hover:bg-outline-variant/20 transition-all rounded-xl border border-outline-variant/30"
            >
              <FaGoogle className="text-on-surface-variant" />
              <span className="text-sm font-semibold text-on-surface-variant">
                Google
              </span>
            </button>
            <button
              type="button"
              onClick={() => signIn("github", { callbackUrl })}
              className="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container hover:bg-outline-variant/20 transition-all rounded-xl border border-outline-variant/30"
            >
              <FaGithub className="text-on-surface-variant" />
              <span className="text-sm font-semibold text-on-surface-variant">
                GitHub
              </span>
            </button>
          </div>

          <div className="relative flex items-center py-4 mb-6">
            <div className="flex-grow border-t border-outline-variant/30"></div>
            <span className="flex-shrink mx-4 text-[10px] font-bold tracking-widest text-outline uppercase">
              Or email
            </span>
            <div className="flex-grow border-t border-outline-variant/30"></div>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-1.5">
              <label
                className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase ml-1"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative group">
                <LuMail className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-xl" />
                <input
                  className="block w-full pl-11 pr-4 py-3 bg-surface-container border border-transparent focus:border-primary/20 rounded-xl text-on-surface placeholder:text-outline focus:ring-4 focus:ring-primary/5 transition-all font-medium text-sm md:text-base outline-none"
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-end ml-1">
                <label
                  className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase"
                  htmlFor="password"
                >
                  Password
                </label>
                <Link
                  className="text-[10px] font-bold text-primary hover:underline"
                  href="#"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <LuLock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-xl" />
                <input
                  className="block w-full pl-11 pr-12 py-3 bg-surface-container border border-transparent focus:border-primary/20 rounded-xl text-on-surface placeholder:text-outline focus:ring-4 focus:ring-primary/5 transition-all font-medium text-sm md:text-base outline-none"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
                </button>
              </div>
            </div>

            <button
              className="w-full bg-primary text-white py-3.5 md:py-4 px-6 rounded-full font-bold text-base md:text-lg shadow-xl shadow-primary/20 hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
              type="submit"
            >
              <span>Sign In</span>
              <LuArrowRight size={20} />
            </button>
          </form>

          <p className="mt-8 text-center text-sm font-medium text-on-surface-variant">
            New here?
            <Link
              className="text-primary font-bold hover:underline ml-1"
              href="/register"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
