import React from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 55.524566,
      lng: 10.012028,
      zoom: 5,
    };

  }

  componentDidMount() {
    const { setSelectedMarker } = this.props;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: process.env.REACT_APP_MAPBOX_STYLE,
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    this.props.markers.forEach((point, index) => {
      let marker = document.createElement("div");
      marker.className = "markerMap";
      marker.addEventListener("click", function () {
        map.flyTo({
          center: point.position,
          zoom: 7.5,
          speed: 1,
        });
        setSelectedMarker(index);
      });

      new mapboxgl.Marker({ element: marker })
        .setLngLat(point.position)
        .addTo(map);
    });
  }


  render() {
    const { selectedMarker } = this.props;
    const { handleAttack, closedLocation } = this.props;
    const { currentFood, currentGold, currentKills, currentWood } = this.props;
    return (
      <div className="mapMain">
        <div className="mapBox">
          {selectedMarker && (
            <div className="selectedMarker" >
              <h2>Location : <br /> {selectedMarker.object.name}</h2>
              <div className="imgSelectedMarker" />
              {!selectedMarker.object.done && (
                <>
                  <ul>
                    <li><div className="logoResourcesMapGold" />{selectedMarker.object.resources.gold}</li>
                    <li><div className="logoResourcesMapFood" />{selectedMarker.object.resources.food}</li>
                  </ul>
                  <ul>
                    <li><div className="logoResourcesMapWood" />{selectedMarker.object.resources.wood}</li>
                    <li><div className="logoResourcesMapEnemies" />{selectedMarker.object.resources.enemies}</li>
                  </ul>
                </>
              )}
              {!selectedMarker.object.done ? <button className="buttonAttack" onClick={handleAttack}>Attack</button> : <button className="buttonAttack" onClick={closedLocation}>Already looted</button>}
            </div>
          )}
          <div
            ref={(el) => (this.mapContainer = el)}
            className="mapContainer"
          />
        </div>
        <div className="scoreBoard">
          <h3>Loot</h3>
          <div className="lootBoard">
            <ul className="lootContainer">
              <li className="loot"><div className="logoResourcesMapGold" />{currentGold}</li>
              <li className="loot"><div className="logoResourcesMapFood" />{currentFood}</li>
            </ul>
            <ul className="lootContainer">
              <li className="loot"><div className="logoResourcesMapWood" />{currentWood}</li>
              <li className="loot"><div className="logoResourcesMapEnemies" />{currentKills}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
