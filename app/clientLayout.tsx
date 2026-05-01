"use client";

import Menu from "./components/menu";
import Submenu from "./components/submenu";
import Footer1 from "./components/footer1";
import Footer2 from "./components/footer2";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Menu is visible on lg and above screens, submenu is visible on all screens */}
      <Menu className="hidden lg:block"  />
      <Submenu/>

      <main className="grow antialiased flex flex-col min-h-screen">
        {children}
      </main>

      <Footer1 />
      <Footer2 />
    </>
  );
}