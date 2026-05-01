'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Homepic() {
  const [visible, setVisible] = useState(true); // starts off as visible i.e., true

  useEffect(() => { // useEffect runs code after page renders
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Hide text after 5s

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="relative w-full h-105">
      <Image
        src="/photos/home1.jpg"
        alt="Jesus is King"
        fill
        className="object-cover"
        priority
      />

      {visible && (
        <div className="absolute inset-0 flex items-center justify-center sm:flex lg:hidden">
          <Link href="/">
            <h3 className="uppercase text-md md:text-lg p-20 md:p-40 font-bold italic text-white text-center">
              Unveiling Christianity’s Utmost Counterfeit Behind Its End-Times Apostasy
            </h3>
          </Link>
        </div>
      )}
    </div>
  );
}