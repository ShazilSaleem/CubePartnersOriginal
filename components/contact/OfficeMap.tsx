"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

// Brand map pin from the design: purple drop with a white ring.
const pinSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="70" viewBox="0 0 56 70"><path d="M28 2C13.6 2 2 13.4 2 27.6 2 45.5 28 68 28 68s26-22.5 26-40.4C54 13.4 42.4 2 28 2z" fill="#821bc3"/><circle cx="28" cy="27" r="10" fill="none" stroke="#fff" stroke-width="2.5"/></svg>`;

/** Live OpenStreetMap of Parkway Two with a greyscale basemap and the brand pin. */
export function OfficeMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    // Leaflet touches window on import, so load it only in the browser.
    import("leaflet").then((L) => {
      if (cancelled || !ref.current) return;
      map = L.map(ref.current, { scrollWheelZoom: false, zoomControl: false }).setView(site.coordinates, 13);
      L.control.zoom({ position: "topright" }).addTo(map);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      L.marker(site.coordinates, {
        title: "Cube Partner, Parkway Two",
        icon: L.divIcon({ html: pinSvg, className: "", iconSize: [56, 70], iconAnchor: [28, 68] }),
      }).addTo(map);
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div
      ref={ref}
      role="region"
      aria-label={`Map showing our office at ${site.addressLines.join(", ")}`}
      className="office-map relative z-0 h-[417px] w-full overflow-hidden rounded-lg border border-line bg-surface"
    />
  );
}
