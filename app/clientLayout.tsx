"use client";

import Image from "next/image";
import Menu from "@/components/menu";
import Submenu from "@/components/submenu";
import Footer1 from "@/components/footer1";
import Footer2 from "@/components/footer2";

// Contains actual UI structure (e.g., page layout, footer, floating buttons, menu, etc.) => clientLayout.tsx 

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Menu is visible on lg and above screens (props added to make className below work), submenu is visible on all screens */}
      <Menu className="hidden lg:block"  />
      <Submenu/>

      <main className="grow flex flex-col">
        {children}
      </main>

      <Footer1 />
      <Footer2 />

      {/* Floating Coffee button */}
        <a
          href="https://buymeacoffee.com/akunna"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-[#D8BFD8] p-3 rounded-full shadow-lg hover:scale-110 active:scale-110 transition-transform duration-200 flex items-center justify-center"
          aria-label="Buy me a coffee button"
        >
          <Image src="/photos/coffee.svg" alt="Buy me a coffee image" width={35} height={35} />
        </a>

    </>
  );
}