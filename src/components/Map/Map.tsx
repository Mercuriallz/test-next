'use client';

import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer } from 'react-leaflet';

export default function Testing() {
  return (
    <>
      <MapContainer
        center={[0.7893, 113.9213]}
        zoom={13}
        scrollWheelZoom={true}
        style={{
          width: '100%',
          height: '40rem',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>
      </MapContainer>
    </>
  );
}
