"use client";

import Link from "next/link";
import { ShoppingCart, Search, Upload, Type, Image, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white text-gray-900 shadow-sm">
        <Link href="/">
        <h1 className="text-2xl font-bold text-purple-700">
          Ashi Gifts
        </h1>
        </Link>

        <div className="hidden md:flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full w-[380px]">
          <Search size={18} />
          <input
            placeholder="Search gifts, covers, mugs..."
            className="bg-transparent outline-none w-full text-sm text-gray-900"
          />
        </div>

        <button className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-full">
          <ShoppingCart size={18} />
          Cart
        </button>
      </nav>
  );
}