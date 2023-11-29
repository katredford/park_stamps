import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; 
import "./map.css"



export default function Map() {
  const mapRef = useRef(null)

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([39.4720, -98.3804], 4)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      return () => {
        map.remove();
      };
    }
  }, [mapRef]);

  return (
    <div id="map" ref={mapRef} style={{ height: '400px', width: '100%' }}></div>
  )
  
}



