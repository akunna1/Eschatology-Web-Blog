"use client";

import { useSearchParams } from "next/navigation"; // Hook to access query params from the URL
import { useState, useEffect } from "react";
import Image from "next/image";
import { sampleData } from "../data/sampleData";

export default function Search() {
  // Grab the current search params from the URL
  const searchParams = useSearchParams();

  // Extract the value of the "query" parameter or default to an empty string
  const query = searchParams.get("query") || "";

  // Store the filtered results in state
  const [results, setResults] = useState<any[]>([]);

  // Whenever the query changes, filter the sampleData to find matching entries
  useEffect(() => {
    if (query.trim()) {
      const filteredResults = sampleData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.text.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filteredResults); // Update state with filtered items
    } else {
      setResults([]); // Clear results if query is empty
    }
  }, [query]); // Only re-run when the query changes

  return (
    <div className="p-6 my-2 max-w-3xl mx-auto bg-white text-black">
      {/* Header displaying the current search query */}
      <h1 className="text-3xl font-bold mb-6 text-black">
        Search Results for:{" "}
        <span className="text-2xl text-gray-600">{query}</span>
      </h1>

      {/* Show results if any match; otherwise display "no results" */}
      {results.length > 0 ? (
        <ul className="space-y-6">
          {results.map((item, index) => (
            <li
              key={index}
              className="p-6 shadow-lg bg-gray-50 hover:scale-105 transition-transform"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">
          No results found for "{query}".
        </p>
      )}

      {/* Image below search results */}
      <div className="mt-10">
        <Image
          src="/photos/search1.jpg"
          alt="Search"
          width={600}
          height={400}
          className="shadow-lg w-full rounded-lg"
        />
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg font-normal mb-4">
          Sign in above to keep reading and to unlock more entries!
        </p>
      </div>
    </div>
  );
}