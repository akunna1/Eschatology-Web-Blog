"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Resource {
  id: string;
  title: string;
  text: string;
  author: string;
  reference: string;
  imageUrl: string;
}

export default function ResourcesClient({
  resources,
}: {
  resources: Resource[];
}) {
  const [visible, setVisible] = useState(resources.slice(0, 12));
  const [showAll, setShowAll] = useState(false);

  const toggle = () => {
    if (showAll) {
      setVisible(resources.slice(0, 12));
    } else {
      setVisible(resources);
    }
    setShowAll(!showAll);
  };

  return (
    <div className="w-full px-6 pb-4 mb-20 bg-white">
      {/* Header */}
      <div className="mb-8">
        <p className="uppercase font-semibold mb-4">Resources</p>
        <hr />
      </div>

      <div className="xl:flex xl:space-x-8">
        {/* Cards */}
        <div className="xl:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((r) => (
              <div
                key={r.id}
                className="bg-white shadow-md hover:scale-105 transition-transform"
              >
                <div className="relative w-full h-52">
                  <Image
                    src={r.imageUrl}
                    alt={r.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold">{r.title}</h3>
                  <p className="text-sm text-gray-700 line-clamp-4">
                    {r.text}
                  </p>
                  <p className="text-xs text-gray-500">By {r.author}</p>

                  <a
                    href={r.reference}
                    target="_blank"
                    className="text-blue-600 text-sm"
                  >
                    View Reference
                  </a>
                </div>
              </div>
            ))}
          </div>

          {resources.length > 12 && (
            <button onClick={toggle} className="mt-6 font-medium">
              {showAll ? "Hide Some" : "See all"}
            </button>
          )}
        </div>

        {/* Sidebar */}
        <div className="hidden xl:block xl:w-1/4 bg-gray-100 p-6">
          <h1 className="text-xl font-bold">The Citadel</h1>
          <p className="text-sm mt-4">
            Stay equipped with eschatology resources.
          </p>

          <Link href="/digest">
            <button className="mt-4 bg-black text-white px-4 py-1 rounded">
              Subscribe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}