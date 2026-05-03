"use client";

import Link from "next/link";
import { FaRegNewspaper, FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] backgroundImage"/>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Icon header */}
        <div className="flex items-center gap-3 mb-4">
          <FaRegNewspaper className="text-3xl text-black" />
          <span className="uppercase tracking-widest text-sm font-semibold">
            Breaking Archive Error
          </span>
        </div>

        {/* Big 404 */}
        <p className="times-new-roman text-7xl font-extrabold mb-2 tracking-tight">
          404
        </p>

        {/* Warning line */}
        <div className="flex items-center gap-2 mb-4 text-gray-700">
          <FaExclamationTriangle />
          <p className="text-lg">
            This page was not found in the archive.
          </p>
        </div>

        {/* Quote */}
        <p className="max-w-md text-gray-600 italic mb-8 leading-relaxed">
          “What you’re looking for may have been moved, deleted, or never existed in the first place.”
        </p>

        {/* Button */}
        <Link href="/">
          <button className="bg-black py-2 px-7 rounded-lg transition-all duration-300 shadow-md hover:scale-105 active:scale-105">
            <h3 className="text-white hover:text-gray-400 active:text-gray-400">
              Return Home
            </h3>
          </button>
        </Link>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-8 uppercase tracking-widest">
          The Counterfeit Archives
        </p>

      </div>
    </div>
  );
}