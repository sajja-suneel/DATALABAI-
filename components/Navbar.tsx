"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <h1 className="text-4xl font-bold text-cyan-400">
          Datalab AI
        </h1>

        {/* Menu */}
        <div className="flex items-center gap-8">

          <Link
            href="/#about"
            className="text-white text-xl hover:text-cyan-400 transition"
          >
            About
          </Link>

          {/* Intern Button */}
          <Link
            href="/portfolio"
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-3 rounded-full font-semibold transition"
          >
            Intern
          </Link>

        </div>
      </div>
    </header>
  );
}