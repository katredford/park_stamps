
import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import usStatesData from '../../data/us-states.json'; 

const Map = ({ onStateClick }) => {
  const [selectedState, setSelectedState] = useState(null);

  const handleClick = (e) => {
    const stateCode = e.layer.feature.properties;
  
    console.log(e.layer.feature.properties)
   
    setSelectedState(stateCode);
    onStateClick(stateCode);
  };

  const style = (feature) => {
    return {
      fillColor: selectedState === feature.properties.STUSPS ? 'blue' : 'gray',
      weight: 2,
      opacity: 1,
      color: 'white',
      fillOpacity: 0.7,
    };
  };

  return (
    <MapContainer center={[37.7749, -97.4194]} zoom={4} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={usStatesData} style={style} eventHandlers={{ click: handleClick }} />
    </MapContainer>
  );
};

export default Map;



