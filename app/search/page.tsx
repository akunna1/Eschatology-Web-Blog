"use client";

import { Suspense } from "react";
import SearchQuery from "@/components/searchQuery";

export default function SearchPage() {
  return (
    <div>

    {/* Wrapping Search inside Suspense to prevent hydration issues */}
    <Suspense fallback={<p className="text-center">Loading search results...</p>}>
      <SearchQuery />
    </Suspense>

  </div>
)};

