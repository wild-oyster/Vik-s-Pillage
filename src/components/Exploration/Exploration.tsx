import "./Exploration.css";

import { Marker, Resources } from "./types/exploration";
import React, { useState } from "react";

import Map from "./Map";
import { markers } from "./constant/markers";

const Exploration = () => {
  const [mapMarkers, setMapMarkers] = useState<Marker[]>(markers);
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);
  const [currentScore, setCurrentScore] = useState<Resources>({
    gold: 0,
    wood: 0,
    food: 0,
    enemies: 0,
  });

  const handleAttack = () => {
    if (selectedMarker) {
      const markerToEdit = mapMarkers.find(
        (marker) => marker.name === selectedMarker.name
      );

      if (!markerToEdit) return;

      markerToEdit.done = true;

      const filteredMarkers = mapMarkers.filter(
        (marker) => marker.name !== selectedMarker.name
      );
      const newMarkers = [...filteredMarkers, markerToEdit];

      setCurrentScore({
        ...currentScore,
        gold: currentScore.gold + selectedMarker.resources.gold,
        wood: currentScore.wood + selectedMarker.resources.wood,
        food: currentScore.food + selectedMarker.resources.food,
        enemies: currentScore.enemies + selectedMarker.resources.enemies,
      });

      setMapMarkers(newMarkers);
      setSelectedMarker(null);
    }

    return;
  };

  return (
    <div className="bgExploration">
      <Map
        markers={mapMarkers}
        selectedMarker={selectedMarker}
        setSelectedMarker={setSelectedMarker}
        currentScore={currentScore}
        handleAttack={handleAttack}
        closeLocation={() => setSelectedMarker(null)}
      />
    </div>
  );
};

export default Exploration;
