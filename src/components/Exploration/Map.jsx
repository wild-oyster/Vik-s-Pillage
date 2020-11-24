import React from "react";
import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmxvcmVudGxlbSIsImEiOiJja2hveDNuYzcxNWY5MndteDM2djE3NnlxIn0.UuP-JCIEimNyvaSefaRr9A";

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
      style: "mapbox://styles/florentlem/ckhoys5sr2ar919pkqrrav9hk",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    // eslint-disable-next-line array-callback-return
    this.props.markers.map((point, index) => {
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
                <h2>Location : <br/> {selectedMarker.object.name}</h2>
                <div className="imgSelectedMarker"/> 
                  { !selectedMarker.object.done ? (
                    <>
                    <ul>
                      <li><div className="logoRessourcesMapGold"/>{selectedMarker.object.ressources.gold}</li>
                      <li><div className="logoRessourcesMapFood" />{selectedMarker.object.ressources.food}</li>
                    </ul>
                    <ul>
                      <li><div className="logoRessourcesMapWood" />{selectedMarker.object.ressources.wood}</li>
                      <li><div className="logoRessourcesMapEnemies" />{selectedMarker.object.ressources.enemies}</li>
                    </ul>
                  </>
                    ) : <p>Done</p>}
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
              <li className="loot"><div className="logoRessourcesMapGold"/>{currentGold}</li>
              <li className="loot"><div className="logoRessourcesMapFood" />{currentFood}</li>
            </ul>
            <ul className="lootContainer">
              <li className="loot"><div className="logoRessourcesMapWood" />{currentWood}</li>
              <li className="loot"><div className="logoRessourcesMapEnemies" />{currentKills}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
