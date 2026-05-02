"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Same structure as server data
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
  // Showing first 12 items initially (same as your original logic)
  const [visibleResources, setVisibleResources] = useState<Resource[]>(
    resources.slice(0, 12)
  );

  const [isAllVisible, setIsAllVisible] = useState(false);

  // Toggle between 12 items and all items
  const toggleVisibility = () => {
    if (isAllVisible) {
      setVisibleResources(resources.slice(0, 12));
    } else {
      setVisibleResources(resources);
    }
    setIsAllVisible(!isAllVisible);
  };

  return (
    <div className="w-full px-6 pb-4 mb-20 bg-white">
      {/* Section Header */}
      <div className="w-full mb-8">
        <p className="uppercase font-semibold mb-4 text-base">
          Resources
        </p>
        <hr className="border-t border-gray-200" />
      </div>

      <div className="xl:flex xl:space-x-8">
        {/* Resource Cards Section */}
        <div className="xl:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {visibleResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white shadow-md overflow-hidden overflow-y-auto transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative w-full h-52">
                  <Image
                    src={resource.imageUrl}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>

                  <p className="text-sm text-gray-700 mb-3 line-clamp-4">
                    {resource.text}
                  </p>

                  <p className="text-xs text-gray-500 mb-4">
                    By {resource.author}
                  </p>

                  <a
                    href={resource.reference}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2b68ae] hover:underline text-sm font-medium"
                  >
                    View Reference
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Toggle Button (same behavior as original) */}
          {resources.length > 12 && (
            <button
              onClick={toggleVisibility}
              className="mt-6 text-black font-medium text-lg flex items-center"
            >
              {isAllVisible ? "Hide Some" : "See all"}
            </button>
          )}
        </div>

        {/* Sidebar */}
        <div className="hidden xl:block xl:w-1/4 bg-gray-100 p-8 shadow-md text-center h-fit xl:sticky xl:top-10">
          <Image
            src="/photos/castlex.svg"
            alt="Castle Icon"
            width={90}
            height={90}
            className="mx-auto mb-4"
          />

          <p className="text-2xl font-extrabold text-gray-800 mb-4 uppercase times-new-roman">
            The Citadel
          </p>

          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            Welcome to THE CITADEL. Stay equipped with resources on eschatology,
            gain insight into prophecies, and connect with others. Join us👇
          </p>

          <Link href="/digest">
            <button className="bg-black py-1 px-6 rounded-lg transition-all duration-300 shadow-md">
              <h3 className="text-white hover:text-gray-400">
                Subscribe
              </h3>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}