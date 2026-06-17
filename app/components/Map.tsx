"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type Branch = {
  city: string;
  lat: number;
  lng: number;
};

const branches: Branch[] = [
  { city: "Dehiattakandiya", lat: 7.6713, lng: 81.0465 },
  { city: "Batticaloa", lat: 7.7249, lng: 81.6967 },
  { city: "Dambulla", lat: 7.8741, lng: 80.6511 },
  { city: "Embilipitiya", lat: 6.3328, lng: 80.8663 },
  { city: "Hungama", lat: 6.1156, lng: 80.9291 },
  { city: "Nelliady", lat: 9.8027, lng: 80.1973 },
  { city: "Head Office", lat: 6.927, lng: 79.861 },
  { city: "Chunnakam", lat: 9.7376, lng: 80.0245 },
  { city: "Thissamaharama", lat: 6.27, lng: 81.28 },
  { city: "Trincomalee", lat: 8.5874, lng: 81.2152 },
  { city: "Thirukkovil", lat: 7.1153, lng: 81.8525 },
  { city: "Kokkaddicholai", lat: 7.6123, lng: 81.7093 },
  { city: "Chenkalady", lat: 7.7859, lng: 81.5898 },
  { city: "Kaluwanchikudy", lat: 7.5175, lng: 81.7871 },
  { city: "Vavunathivu", lat: 7.7166, lng: 81.7001 },
  { city: "Muthur", lat: 8.4579, lng: 81.2684 },
  { city: "Mannar", lat: 8.981, lng: 79.9044 },
  { city: "Kinniya", lat: 8.5025, lng: 81.1804 },
  { city: "Mahiyanganaya", lat: 7.3316, lng: 81.0037 },
  { city: "Kalmunai", lat: 7.4152, lng: 81.8257 },
  { city: "Vavuniya", lat: 8.7542, lng: 80.4982 },
  { city: "Kanthale", lat: 8.3665, lng: 81.0032 },
  { city: "Polonnaruwa", lat: 7.9147, lng: 81.0001 },
  { city: "Ampara", lat: 7.2912, lng: 81.6725 },
];

export default function Map() {
  const [map, setMap] = useState<ReactNode>(null);

  useEffect(() => {
    let mounted = true;

    async function loadMap() {
      const L = await import("leaflet");
      const {
        MapContainer,
        TileLayer,
        Marker,
        Popup,
      } = await import("react-leaflet");

      // fix default icons
      delete (L.Icon.Default.prototype as any)._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const ui = (
        <MapContainer
          center={[7.8731, 80.7718]}
          zoom={7}
          scrollWheelZoom={false}
          style={{ height: "450px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {branches.map((b, i) => (
            <Marker key={i} position={[b.lat, b.lng]}>
              <Popup>
                <strong>{b.city}</strong>
                <br />
                Branch Location
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      );

      if (mounted) setMap(ui);
    }

    loadMap();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl">
      {map}
    </div>
  );
}