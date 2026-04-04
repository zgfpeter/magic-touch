"use client";

import { MapContainer, TileLayer, Polygon, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function ServiceAreaMap() {
  // 1. The center point of the map (Currently set to Dublin)
  const mapCenter: [number, number] = [53.3498, -6.2603];

  // 2. A custom Polygon (Draws exact neighborhood boundaries)

  const servicePerimeter: [number, number][] = [
    [53.45644988428501, -6.138290010612053],
    [53.45185360120888, -6.35940595639687],
    [53.373187496833424, -6.47757415244061],
    [53.30632015677736, -6.5373985217140955],
    [53.23587070569417, -6.4974222168562505],
    [53.1948601937205, -6.373380595629214],
    [53.19266080714149, -6.19392038372024],
    [53.19976489735737, -6.0969311527905745],
    [53.3823398043061, -6.0477787105845096],
    [53.45644988428501, -6.138290010612053],
  ];

  return (
    // We set a z-index of 0 so the map doesn't overlap any dropdown menus later
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={mapCenter}
        zoom={10}
        style={{ height: "100%", width: "100%", borderRadius: "0.75rem" }}
        scrollWheelZoom={false} // Prevents the page from getting stuck when scrolling down
      >
        {/* The actual map tiles (OpenStreetMap is free to use) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* OPTION A: A specific Polygon boundary */}
        {/* <Polygon
          positions={servicePerimeter}
          pathOptions={{
            color: "#ea580c",
            fillColor: "#ea580c",
            fillOpacity: 0.2,
            weight: 2,
          }}
        /> */}

        {/* OPTION B: A clean 10km radius circle (Currently Active) */}
        <Circle
          center={mapCenter}
          radius={12000} // Radius in meters (12km)
          pathOptions={{
            color: "#ea580c",
            fillColor: "#ea580c",
            fillOpacity: 0.2,
            weight: 2,
          }}
        />
      </MapContainer>
    </div>
  );
}
