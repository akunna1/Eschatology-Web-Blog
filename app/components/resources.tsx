"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../lib/contentful/client";

// Defining the Resource interface to ensure type safety
interface Resource {
  id: string;
  title: string;
  text: string;
  author: string;
  reference: string;
  imageUrl: string;
}

export default function Resources() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleResources, setVisibleResources] = useState<Resource[]>([]);
  const [isAllVisible, setIsAllVisible] = useState<boolean>(false);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        // Contentful SDK call
        const response = await client.getEntries({
          content_type: "resources",
          include: 1,
        });

        const resourcesData: Resource[] = response.items.map((item: any) => {
          const imageAsset = item.fields.image;

          return {
            id: item.sys.id,
            title: item.fields.title,
            text: item.fields.text,
            author: item.fields.author,
            reference: item.fields.reference || "",
            imageUrl: imageAsset
              ? `https:${imageAsset.fields.file.url}`
              : "/fallback-image.jpg",
          };
        });

        setResources(resourcesData);
        setVisibleResources(resourcesData.slice(0, 12));
      } catch (err) {
        console.error("Error fetching resources:", (err as Error).message);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  const toggleVisibility = () => {
    if (isAllVisible) {
      setVisibleResources(resources.slice(0, 12));
    } else {
      setVisibleResources(resources);
    }
    setIsAllVisible(!isAllVisible);
  };

  if (loading)
    return <p className="text-center text-gray-600">Loading resources...</p>;

  if (error)
    return <p className="text-center text-red-600">Error: {error}</p>;

  if (resources.length === 0)
    return <p className="text-center text-gray-600">No resources available.</p>;

  return (
    <div className="w-full px-6 pb-4 mb-20 bg-white">
      {/* Header */}
      <div className="w-full mb-8">
        <p className="uppercase font-semibold mb-4 text-base">Resources</p>
        <hr className="border-t border-gray-200" />
      </div>

      <div className="xl:flex xl:space-x-8">
        {/* Cards */}
        <div className="xl:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
              >
                <div className="relative w-full h-52">
                  <Image
                    src={resource.imageUrl}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">
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

          {/* Toggle Button */}
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
            src="/castlex.svg"
            alt="Castle Icon"
            width={90}
            height={90}
            className="mx-auto mb-4"
          />

          <h1 className="text-2xl font-extrabold mb-4 uppercase">
            The Citadel
          </h1>

          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            Welcome to THE CITADEL. Stay equipped with resources on eschatology.
          </p>

          <Link href="/digest">
            <button className="bg-black py-1 px-6 rounded-lg text-white hover:text-gray-400 transition-all">
              Subscribe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}