"use client";

import Link from "next/link";

export default function Table() {
  const tableData = [
    { section: "Home", href: "/", description: "Access curated 'food for thought' resources connected to the Forum and Attestation sections." },
    { section: "Prelude", href: "/prelude", description: "An introduction to the web app and its purpose." },
    { section: "Attestation", href: "/attestation", description: "Examines 'the counterfeit' from an eschatological standpoint using verses from various revered religious texts." },
    { section: "Forum", href: "/forum", description: "A platform for sharing further insights, defending the identity of the counterfeit, and discussing related topics. (Sign-in required)." },
    { section: "Map", href: "/map", description: "Presents location points related to extremist groups attacks, starting from 1990." },
    { section: "Digest", href: "/digest", description: "Provides information about The Citadel and an option to subscribe for updates." },
    { section: "About", href: "/about", description: "Details my journey and the inspiration behind this web app." },
    { section: "Contact", href: "/contact", description: "A section where users can contact me directly via email." },
  ];

  return (
    <div className="flex justify-center -mt-8 p-6 mb-20">
      <div className="max-w-3xl 2xl:max-w-5xl">
        <p className="text-2xl font-bold text-left mb-10">
          Information Layout
        </p>

        <div className="overflow-x-auto shadow-lg">
          <table className="w-full text-left border-collapse border border-black">
            <thead>
              <tr className="bg-black text-white">
                <th className="border border-black px-6 py-3">Section</th>
                <th className="border border-black px-6 py-3">Description</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white hover:bg-gray-100 active:bg-gray-100 transition-colors"
                >
                  <td className="border border-white px-6 py-3 font-semibold">
                    <Link href={item.href} className="block">
                      {item.section}
                    </Link>
                  </td>

                  <td className="border border-white px-6 py-3">
                    <Link href={item.href} className="block">
                      {item.description}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}