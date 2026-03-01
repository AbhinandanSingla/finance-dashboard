"use client";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

// Fix for default marker icons in Leaflet
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = ({ cities }: { cities: any[] }) => {
  return (
    <motion.div
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{ height: "100vh", width: "100%", position: "absolute", top: 0, zIndex: 0 }}
    >
      <MapContainer center={[0, 0]} zoom={3} style={{ height: "100%", width: "100%" }}>
        {/* Dark Theme Tiles */}
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
        />
        {cities.map((city) => (
            <Marker key={city.id} position={city.coords}>
                <Tooltip>{city.name}: {city.metric}</Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </motion.div>
  );
};
export default Map;