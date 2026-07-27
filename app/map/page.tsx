"use client";

import dynamic from "next/dynamic";
import MapIntro from "@/components/mapIntro";

// Disabling SSR for Map for Leaflet to work properly
const Map = dynamic(() => import("@/components/map"), {
  ssr: false,
});

export default function MapPage() {
  return (
    <div>
      <MapIntro />
      <Map />
    </div>
  );
}