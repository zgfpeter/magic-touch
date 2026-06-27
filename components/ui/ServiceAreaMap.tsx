"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { GeoJsonObject } from "geojson";
import L from "leaflet";

const customPinIcon = L.divIcon({
  html: `<div class="w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center animate-bounce">
           <div class="w-2 h-2 bg-white rounded-full"></div>
         </div>`,
  className: "", // Clear default Leaflet styles so our Tailwind classes work
  iconSize: [24, 24],
  iconAnchor: [12, 24], // Centers the bottom point of the pin exactly on the coordinates
});
export default function ServiceAreaMap() {
  const mapCenter: [number, number] = [53.4239, -7.9407]; // Centered on Athlone
  const companyLocation: [number, number] = [53.3498, -6.2603];
  // State to hold geographic border data
  const [irelandGeoData, setIrelandGeoData] = useState<GeoJsonObject | null>(
    null,
  );

  useEffect(() => {
    // Fetch an open-source GeoJSON file containing Ireland's borders
    // Note: This specific file outlines the Republic of Ireland.
    fetch("/ie.json")
      .then((response) => response.json())
      .then((data) => {
        setIrelandGeoData(data);
      })
      .catch((error) => console.error("Error loading GeoJSON:", error));
  }, []);

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={mapCenter}
        zoom={6}
        style={{ height: "100%", width: "100%", borderRadius: "0.75rem" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Only render the GeoJSON once the data has finished fetching */}
        {irelandGeoData && (
          <GeoJSON
            data={irelandGeoData}
            style={{
              color: "#ea580c",
              fillColor: "#ea580c",
              fillOpacity: 0.2,
              weight: 2,
            }}
          />
        )}
        <Marker position={companyLocation} icon={customPinIcon}>
          <Popup>
            <div className="text-slate-900 font-sans p-1">
              <strong className="block text-sm font-bold">
                Prime Build Construction
              </strong>
              <span className="text-xs text-slate-600">
                Dublin Headquarters
              </span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
