"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import {
  LuUser,
  LuMail,
  LuLock,
  LuEye,
  LuEyeOff,
  LuArrowRight,
  LuBox,
  LuCircleCheck,
  LuLoader,
} from "react-icons/lu";
import { FaGoogle, FaGithub } from "react-icons/fa";

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // ১. ভ্যালিডেশন চেক (অপশনাল কিন্তু ভালো)
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }

    const toastId = toast.loading("Creating your account...");

    try {
      // ২. রেজিস্ট্রেশন API কল
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      toast.success("Account created successfully!", { id: toastId });

      // ৩. অটোমেটিক লগইন
      const loginResult = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (loginResult?.error) {
        toast.error("Account created, but auto-login failed. Please sign in.");
        router.push("/login");
      } else {
        toast.success("Redirecting to dashboard...");
        router.push("/dashboard");
      }
    } catch (error: any) {
      toast.error(error.message || "An unexpected error occurred", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-surface font-body">
      {/* 1. Left Column (Visual Anchor) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary-fixed">
        <div className="absolute inset-0 z-0">
          <img
            alt="Modern architectural structure"
            className="w-full h-full object-cover opacity-90 mix-blend-multiply"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
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
              Start Building Your Vision Today.
            </h1>
            <ul className="space-y-4">
              {[
                "Unlimited team workspaces",
                "Real-time project synchronization",
                "Enterprise-grade security",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-on-primary-fixed/80 font-medium"
                >
                  <LuCircleCheck className="text-primary" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-on-primary-fixed/60 text-sm font-medium">
            © 2026 TeamOrbit Technologies. All rights reserved.
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent pointer-events-none"></div>
      </div>

      {/* 2. Right Column (Auth Content) */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 md:p-16 bg-surface">
        <div className="w-full max-w-[400px]">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-[#003d9b] to-[#0052cc] rounded-lg flex items-center justify-center text-white">
              <LuBox size={18} />
            </div>
            <span className="font-headline font-black text-xl tracking-tight text-primary">
              TeamOrbit
            </span>
          </div>

          <div className="mb-8 text-center lg:text-left">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-2">
              Create Account
            </h2>
            <p className="text-on-surface-variant font-medium text-sm">
              Join the next generation of precision workflows.
            </p>
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
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

          <div className="relative flex items-center py-4 mb-4">
            <div className="flex-grow border-t border-outline-variant/30"></div>
            <span className="flex-shrink mx-4 text-[10px] font-bold tracking-widest text-outline uppercase">
              Or register with email
            </span>
            <div className="flex-grow border-t border-outline-variant/30"></div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleRegister}>
            {/* Full Name */}
            <div className="space-y-1.5">
              <label
                className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase ml-1"
                htmlFor="name"
              >
                Full Name
              </label>
              <div className="relative group">
                <LuUser className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-lg" />
                <input
                  className="block w-full pl-11 pr-4 py-3 bg-surface-container border border-transparent focus:border-primary/20 rounded-xl text-on-surface placeholder:text-outline focus:ring-4 focus:ring-primary/5 transition-all font-medium text-sm outline-none"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  disabled={loading}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase ml-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative group">
                <LuMail className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-lg" />
                <input
                  className="block w-full pl-11 pr-4 py-3 bg-surface-container border border-transparent focus:border-primary/20 rounded-xl text-on-surface placeholder:text-outline focus:ring-4 focus:ring-primary/5 transition-all font-medium text-sm outline-none"
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  required
                  disabled={loading}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label
                className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase ml-1"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative group">
                <LuLock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-lg" />
                <input
                  className="block w-full pl-11 pr-12 py-3 bg-surface-container border border-transparent focus:border-primary/20 rounded-xl text-on-surface placeholder:text-outline focus:ring-4 focus:ring-primary/5 transition-all font-medium text-sm outline-none"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  required
                  disabled={loading}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <LuEyeOff size={18} /> : <LuEye size={18} />}
                </button>
              </div>
            </div>

            <p className="text-[10px] text-on-surface-variant px-1">
              By signing up, you agree to our{" "}
              <Link href="#" className="text-primary font-bold">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-primary font-bold">
                Privacy Policy
              </Link>
              .
            </p>

            <button
              className="w-full bg-primary text-white py-3.5 px-6 rounded-full font-bold text-base shadow-xl shadow-primary/20 hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <LuLoader className="animate-spin" size={20} />
              ) : (
                <>
                  <span>Create Workspace</span>
                  <LuArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-sm font-medium text-on-surface-variant">
            Already have an account?
            <Link
              className="text-primary font-bold hover:underline ml-1"
              href="/login"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
