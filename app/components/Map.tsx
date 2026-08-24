"use client";

import { useEffect, useState, useMemo } from "react";
import { Search, MapPin, Phone, Building, Navigation, Layers } from "lucide-react";

type Branch = {
  id: number;
  city: string;
  lat: number;
  lng: number;
  type: "Head Office" | "Regional Office" | "Branch";
  address: string;
  phone: string;
};

const branches: Branch[] = [
  { id: 1, city: "Head Office - Colombo", lat: 6.927, lng: 79.861, type: "Head Office", address: "8th Floor, Ceylinco House, No. 69, Janadhipathi Mawatha, Colombo 01", phone: "011 478 2400" },
  { id: 2, city: "Dehiattakandiya", lat: 7.6713, lng: 81.0465, type: "Branch", address: "Main Street, Dehiattakandiya", phone: "+94 74 390 8274" },
  { id: 3, city: "Batticaloa", lat: 7.7249, lng: 81.6967, type: "Regional Office", address: "Trincomalee Road, Batticaloa", phone: "+94 65 222 4100" },
  { id: 4, city: "Dambulla", lat: 7.8741, lng: 80.6511, type: "Branch", address: "Kurunegala Road, Dambulla", phone: "+94 66 228 3200" },
  { id: 5, city: "Embilipitiya", lat: 6.3328, lng: 80.8663, type: "Branch", address: "New Town, Embilipitiya", phone: "+94 47 223 0150" },
  { id: 6, city: "Hungama", lat: 6.1156, lng: 80.9291, type: "Branch", address: "Tangalle Road, Hungama", phone: "+94 47 224 1120" },
  { id: 7, city: "Nelliady", lat: 9.8027, lng: 80.1973, type: "Branch", address: "Jaffna Road, Nelliady", phone: "+94 21 226 2190" },
  { id: 8, city: "Chunnakam", lat: 9.7376, lng: 80.0245, type: "Branch", address: "KKS Road, Chunnakam", phone: "+94 21 224 1500" },
  { id: 9, city: "Thissamaharama", lat: 6.27, lng: 81.28, type: "Branch", address: "Main Street, Tissamaharama", phone: "+94 47 223 8810" },
  { id: 10, city: "Trincomalee", lat: 8.5874, lng: 81.2152, type: "Regional Office", address: "Inner Harbour Road, Trincomalee", phone: "+94 26 222 3400" },
  { id: 11, city: "Thirukkovil", lat: 7.1153, lng: 81.8525, type: "Branch", address: "Main Road, Thirukkovil", phone: "+94 67 226 5100" },
  { id: 12, city: "Kokkaddicholai", lat: 7.6123, lng: 81.7093, type: "Branch", address: "Paddipalai Road, Kokkaddicholai", phone: "+94 65 224 8110" },
  { id: 13, city: "Chenkalady", lat: 7.7859, lng: 81.5898, type: "Branch", address: "Badulla Road, Chenkalady", phone: "+94 65 224 0200" },
  { id: 14, city: "Kaluwanchikudy", lat: 7.5175, lng: 81.7871, type: "Branch", address: "Main Street, Kaluwanchikudy", phone: "+94 65 225 1050" },
  { id: 15, city: "Vavunathivu", lat: 7.7166, lng: 81.7001, type: "Branch", address: "Main Road, Vavunathivu", phone: "+94 65 222 7800" },
  { id: 16, city: "Muthur", lat: 8.4579, lng: 81.2684, type: "Branch", address: "Trinco Road, Muthur", phone: "+94 26 223 9100" },
  { id: 17, city: "Mannar", lat: 8.981, lng: 79.9044, type: "Regional Office", address: "Station Road, Mannar", phone: "+94 23 222 2800" },
  { id: 18, city: "Kinniya", lat: 8.5025, lng: 81.1804, type: "Branch", address: "Main Street, Kinniya", phone: "+94 26 223 6050" },
  { id: 19, city: "Mahiyanganaya", lat: 7.3316, lng: 81.0037, type: "Branch", address: "Padiyatalawa Road, Mahiyanganaya", phone: "+94 55 225 7300" },
  { id: 20, city: "Kalmunai", lat: 7.4152, lng: 81.8257, type: "Regional Office", address: "Batticaloa Road, Kalmunai", phone: "+94 67 222 9400" },
  { id: 21, city: "Vavuniya", lat: 8.7542, lng: 80.4982, type: "Regional Office", address: "Kandy Road, Vavuniya", phone: "+94 24 222 1800" },
  { id: 22, city: "Kanthale", lat: 8.3665, lng: 81.0032, type: "Branch", address: "Town Center, Kanthale", phone: "+94 26 226 3120" },
  { id: 23, city: "Polonnaruwa", lat: 7.9147, lng: 81.0001, type: "Branch", address: "New Town, Polonnaruwa", phone: "+94 27 222 4500" },
  { id: 24, city: "Ampara", lat: 7.2912, lng: 81.6725, type: "Regional Office", address: "D.S. Senanayake Street, Ampara", phone: "+94 63 222 3900" },
];

export default function InteractiveMapHub() {
  const [search, setSearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState<Branch>(branches[0]);
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const [MapComponents, setMapComponents] = useState<any>(null);

  // Filter branches based on search
  const filteredBranches = useMemo(() => {
    return branches.filter((b) =>
      b.city.toLowerCase().includes(search.toLowerCase()) ||
      b.type.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  useEffect(() => {
    let mounted = true;

    async function initLeaflet() {
      const L = await import("leaflet");
      const ReactLeaflet = await import("react-leaflet");

      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      if (mounted) {
        setMapComponents({
          MapContainer: ReactLeaflet.MapContainer,
          TileLayer: ReactLeaflet.TileLayer,
          Marker: ReactLeaflet.Marker,
          Popup: ReactLeaflet.Popup,
          useMap: ReactLeaflet.useMap,
          L,
        });
        setLeafletLoaded(true);
      }
    }

    initLeaflet();
    return () => {
      mounted = false;
    };
  }, []);

  const handleSelectBranch = (b: Branch) => {
    setSelectedBranch(b);
    if (mapInstance) {
      mapInstance.flyTo([b.lat, b.lng], 11, {
        duration: 1.2,
      });
    }
  };

  return (
    <div className="w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col lg:flex-row text-white">
      {/* SIDEBAR PANEL */}
      <div className="w-full lg:w-[380px] xl:w-[420px] bg-slate-950 p-5 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 shrink-0">
        <div>
          {/* HEADER */}
          <div className="flex items-center gap-2.5 text-blue-400 mb-1 text-xs font-semibold uppercase tracking-wider">
            <Building className="w-4 h-4" /> Dearo Venture Canada Network
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Branch Locations
          </h3>

          {/* SEARCH BAR */}
          <div className="relative mb-4">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search branch or city..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          {/* BRANCH LIST */}
          <div className="max-h-[240px] lg:max-h-[300px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
            {filteredBranches.length === 0 ? (
              <p className="text-slate-400 text-xs text-center py-6">No matching branches found.</p>
            ) : (
              filteredBranches.map((b) => {
                const isSelected = selectedBranch.id === b.id;

                return (
                  <button
                    key={b.id}
                    onClick={() => handleSelectBranch(b)}
                    className={`w-full text-left p-3 rounded-xl border transition flex items-center justify-between group ${
                      isSelected
                        ? "bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10"
                        : "bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-900 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          isSelected ? "bg-blue-500 text-white" : "bg-slate-800 text-slate-400 group-hover:text-blue-400"
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm">{b.city}</h4>
                        <span className="text-[11px] text-slate-400">{b.type}</span>
                      </div>
                    </div>
                    <span className="text-[11px] text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
                      View →
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* SELECTED BRANCH DETAILS CARD */}
        {selectedBranch && (
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-500/30 text-xs sm:text-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-semibold text-[11px] border border-blue-500/30">
                {selectedBranch.type}
              </span>
              <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                ● Active Branch
              </span>
            </div>

            <h4 className="font-bold text-base text-white">{selectedBranch.city}</h4>

            <div className="space-y-1.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{selectedBranch.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-blue-400 font-medium">{selectedBranch.phone}</span>
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=${selectedBranch.lat},${selectedBranch.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center justify-center gap-2 text-xs transition shadow-md"
            >
              <Navigation className="w-3.5 h-3.5" /> Get Directions
            </a>
          </div>
        )}
      </div>

      {/* MAP CONTAINER */}
      <div className="relative w-full h-[380px] sm:h-[480px] lg:h-auto min-h-[420px] bg-slate-950 flex-1">
        {!leafletLoaded || !MapComponents ? (
          <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              Loading Interactive Map...
            </div>
          </div>
        ) : (
          <MapComponents.MapContainer
            center={[selectedBranch.lat, selectedBranch.lng]}
            zoom={8}
            scrollWheelZoom={false}
            ref={setMapInstance}
            style={{ height: "100%", width: "100%", zIndex: 1 }}
          >
            <MapComponents.TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {branches.map((b) => {
              const isSelected = selectedBranch.id === b.id;
              return (
                <MapComponents.Marker
                  key={b.id}
                  position={[b.lat, b.lng]}
                  eventHandlers={{
                    click: () => handleSelectBranch(b),
                  }}
                >
                  <MapComponents.Popup>
                    <div className="p-1 text-slate-900">
                      <strong className="block text-sm font-bold">{b.city}</strong>
                      <span className="text-xs text-blue-600 font-medium">{b.type}</span>
                      <p className="text-xs text-slate-600 mt-1">{b.address}</p>
                      <p className="text-xs font-semibold text-slate-800 mt-1">{b.phone}</p>
                    </div>
                  </MapComponents.Popup>
                </MapComponents.Marker>
              );
            })}
          </MapComponents.MapContainer>
        )}

        {/* MAP OVERLAY BADGE */}
        <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-white px-3 py-1.5 rounded-xl border border-slate-800 text-xs flex items-center gap-2 z-10 shadow-lg">
          <Layers className="w-3.5 h-3.5 text-blue-400" />
          <span>25+ Islandwide Locations</span>
        </div>
      </div>
    </div>
  );
}