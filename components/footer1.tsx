"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer1() {

  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear()); // Updating the year when the component mounts
  }, []);

  return (
    <div className="border-t border-b border-gray-200 p-6 flex flex-col sm:flex-row justify-between items-center mb-5">
      <div className="mb-4 sm:mb-0">
        <p className="font-bold times-new-roman uppercase text-lg lg:text-xl text-center hover:scale-110 active:scale-110 transition-transform duration-400">
          <Link href="/">The Counterfeit</Link>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-7 text-center">
        <Link href="/privacy" className="text-sm font-semibold hover:scale-110 active:scale-110 transition-transform duration-400">
          Data & privacy
        </Link>
        <Link href="/contact" className="text-sm font-semibold hover:scale-110 active:scale-110 transition-transform duration-400">
          Contact
        </Link>
        <Link href="/contribute" className="text-sm font-semibold hover:scale-110 active:scale-110 transition-transform duration-400">
          Contribute →
        </Link>
        <p className="text-sm font-semibold">
          Created by{" "}
          <a
            href="https://akunnatechstudio.com/"
            className="text-sm font-semibold underline hover:scale-110 active:scale-110 transition-transform duration-400 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Akunna Tech Studio
          </a> {/* <a> is for external links */}
        </p>
        <p className="text-sm font-semibold">&copy; {year} All rights reserved.</p>
      </div>
    </div>
  )};

