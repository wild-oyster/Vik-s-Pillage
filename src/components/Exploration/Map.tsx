import { Marker, Resources } from "./types/exploration";
import React, { useEffect, useRef, useState } from "react";

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN || "";

export interface MapProps {
  markers: Marker[];
  selectedMarker: Marker | null;
  currentScore: Resources;
  setSelectedMarker: (marker: Marker) => void;
  handleAttack: () => void;
  closeLocation: () => void;
}

const Map: React.FC<MapProps> = ({
  setSelectedMarker,
  handleAttack,
  currentScore,
  closeLocation,
  markers,
  selectedMarker,
}) => {
  const [mapViewPort, setMapViewPort] = useState({
    lat: 55.524566,
    lng: 10.012028,
    zoom: 5,
  });

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: process.env.REACT_APP_MAPBOX_STYLE,
      zoom: mapViewPort.zoom,
      center: [mapViewPort.lng, mapViewPort.lat],
    });

    markers.forEach((marker: Marker) => {
      let point = document.createElement("div");
      point.className = "markerMap";
      point.addEventListener("click", function () {
        map.flyTo({
          center: marker.position as [number, number],
          zoom: 7.5,
          speed: 1,
        });
        setSelectedMarker(marker);
      });
      new mapboxgl.Marker({ element: point })
        .setLngLat(marker.position as [number, number])
        .addTo(map);
    });
  }, []);

  return (
    <div className="mapMain">
      <div className="mapBox">
        {selectedMarker && (
          <div className="selectedMarker">
            <h2>
              Location : <br /> {selectedMarker.name}
            </h2>
            <div className="imgSelectedMarker" />
            {!selectedMarker.done && (
              <>
                <ul>
                  <li>
                    <div className="logoResourcesMapGold" />
                    {selectedMarker.resources.gold}
                  </li>
                  <li>
                    <div className="logoResourcesMapFood" />
                    {selectedMarker.resources.food}
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className="logoResourcesMapWood" />
                    {selectedMarker.resources.wood}
                  </li>
                  <li>
                    <div className="logoResourcesMapEnemies" />
                    {selectedMarker.resources.enemies}
                  </li>
                </ul>
              </>
            )}
            {!selectedMarker.done ? (
              <button className="buttonAttack" onClick={handleAttack}>
                Attack
              </button>
            ) : (
              <button className="buttonAttack" onClick={closeLocation}>
                Already looted
              </button>
            )}
          </div>
        )}
        <div ref={mapRef} className="mapContainer" />
      </div>
      <div className="scoreBoard">
        <h3>Loot</h3>
        <div className="lootBoard">
          <ul className="lootContainer">
            <li className="loot">
              <div className="logoResourcesMapGold" />
              {currentScore.gold}
            </li>
            <li className="loot">
              <div className="logoResourcesMapFood" />
              {currentScore.food}
            </li>
          </ul>
          <ul className="lootContainer">
            <li className="loot">
              <div className="logoResourcesMapWood" />
              {currentScore.wood}
            </li>
            <li className="loot">
              <div className="logoResourcesMapEnemies" />
              {currentScore.enemies}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Map;
