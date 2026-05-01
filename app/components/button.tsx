"use client";

import Link from 'next/link';

export default function Button() {
  return (
    <div className="flex items-center justify-center py-12 bg-white">
      <Link href="/prelude">
        <button className="bg-white border-4 border-black py-2 px-6 rounded-lg transition-transform duration-300 shadow-lg">
          <h3 className="text-black font-bold font-serif text-lg tracking-wide hover:scale-110 active:scale-110 uppercase">Commence</h3>
        </button>
      </Link>
    </div>
  );
};