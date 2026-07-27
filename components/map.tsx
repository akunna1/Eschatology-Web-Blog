"use client";

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fixing Leaflet default icon issue in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Map component is loaded dynamically into map/page.tsx to avoid SSR issues with Leaflet
export default function Map() {
  const [groups, setGroups] = useState<any[]>([]);

  // Fetching terrorist groups data from the API
    useEffect(() => {
    const fetchGroups = async () => {
        try {
        const res = await fetch('/api/terrorGroupsDataFetch');
        const data = await res.json();
        console.log("Fetched Data:", data);
        setGroups(data);
        } catch (error) {
        console.error("Error fetching groups:", error);
        }
    };

    fetchGroups();
    }, []);

  return (
    <div className="h-dvh w-auto mb-10 border-8 border-black mx-10">
      <MapContainer
        center={[30.3753, 69.3451]} // Centered around Pakistan as a neutral point
        zoom={3}
        className="h-full z-0"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {groups.map((group, index) => (
          <Marker key={index} position={[group.latitude, group.longitude]}>
            <Popup>
              <h3>{group.name}</h3>
              <p>{group.description}</p>
              <p>Founded: {group.founded_year}</p>
              <p>Ideology: {group.ideology}</p>
              <p>Notable Attacks: {group.notable_attacks}</p>
              <p>Estimated Size: {group.estimated_size}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};