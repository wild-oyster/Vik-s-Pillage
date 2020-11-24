import React from "react";
import Map from "./Map";
import "./Exploration.css";

class Exploration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMarker: null,
      markers: [
        {
          name: "Winterton",
          position: [-0.59, 53],
          ressources: {
            gold: 350,
            food: 80,
            enemies: 70,
            wood: 300,
          },
        },
        {
          name: "Eccles on sea",
          position: [1.55, 52.8],
          ressources: {
            gold: 680,
            food: 500,
            enemies: 100,
            wood: 125,
          },
        },
        {
          name: "Walcotte",
          position: [-1.16, 52.44],
          ressources: {
            gold: 1400,
            food: 325,
            enemies: 1000,
            wood: 800,
          },
        },
        {
          name: "Kilnsea",
          position: [0.1392, 53.62],
          ressources: {
            gold: 760,
            food: 225,
            enemies: 50,
            wood: 125,
          },
        },
        {
          name: "Margate",
          position: [1.38, 51.38],
          ressources: {
            gold: 28,
            food: 98,
            enemies: 42,
            wood: 56,
          },
        },
        {
          name: "St fergus",
          position: [-1.83, 57.55],
          ressources: {
            gold: 1000,
            food: 500,
            enemies: 800,
            wood: 1000,
          },
        },
        {
          name: "York",
          position: [-1.08, 53.95],
          ressources: {
            gold: 700,
            food: 300,
            enemies: 200,
            wood: 500,
          },
        },
        {
          name: "Stavenger",
          position: [5.73, 58.97],
          ressources: {
            gold: 600,
            food: 120,
            enemies: 50,
            wood: 800,
          },
        },
        {
          name: "Uskedal",
          position: [5.86, 59.93],
          ressources: {
            gold: 0,
            food: 0,
            enemies: 1,
            wood: 0,
          },
        },
        {
          name: "Kristinehamn",
          position: [14.1, 59.3],
          ressources: {
            gold: 150,
            food: 100,
            enemies: 5,
            wood: 60,
          },
        },
        {
          name: "Esbjerg",
          position: [8.45, 55.47],
          ressources: {
            gold: 50,
            food: 250,
            enemies: 100,
            wood: 800,
          },
        },
        {
          name: "Klitmøller",
          position: [8.54, 57.08],
          ressources: {
            gold: 980,
            food: 140,
            enemies: 90,
            wood: 170,
          },
        },
        {
          name: "Aarhus",
          position: [10.21, 56.15],
          ressources: {
            gold: 1200,
            food: 250,
            enemies: 65,
            wood: 45,
          },
        },
        {
          name: "Saint Malo",
          position: [-2.02, 48.64],
          ressources: {
            gold: 450,
            food: 230,
            enemies: 180,
            wood: 160,
          },
        },
        {
          name: "Brest",
          position: [-4.48, 48.39],
          ressources: {
            gold: 50,
            food: 600,
            enemies: 100,
            wood: 200,
          },
        },
        {
          name: "Le treport",
          position: [1.38, 50.05],
          ressources: {
            gold: 730,
            food: 10,
            enemies: 80,
            wood: 10,
          },
        },
        {
          name: "Calais",
          position: [1.85, 50.95],
          ressources: {
            gold: 15,
            food: 100,
            enemies: 1000,
            wood: 300,
          },
        },
        {
          name: "La Loupe",
          position: [1.01, 48.47],
          ressources: {
            gold: 1,
            food: 15,
            enemies: 25,
            wood: 1000,
          },
        },
      ],
      currentGold: 0,
      currentFood: 0,
      currentKills: 0,
      currentWood: 0,
    };
    this.setSelectedMarker = this.setSelectedMarker.bind(this);
    this.handleAttack = this.handleAttack.bind(this);
    this.closedLocation = this.closedLocation.bind(this);
  }

  setSelectedMarker(index) {
    this.setState({
      selectedMarker: {
        object: this.state.markers[index],
        id: index,
      },
    });
  }

  handleAttack() {
    const {
      currentFood,
      currentGold,
      currentKills,
      currentWood,
      selectedMarker,
      markers,
    } = this.state;
    const array = markers;
    array[selectedMarker.id] = {
      name: markers.name,
      position: markers.position,
      ressources: markers.ressources,
      done: true,
    };
    this.setState({
      currentFood: currentFood + selectedMarker.object.ressources.food,
      currentGold: currentGold + selectedMarker.object.ressources.gold,
      currentKills: currentKills + selectedMarker.object.ressources.enemies,
      currentWood: currentWood + selectedMarker.object.ressources.wood,
      markes: array,
      selectedMarker: null,
    });
  }

  closedLocation() {
    this.setState({
      selectedMarker: null,
    });
  }

  render() {
    const {
      currentFood,
      currentGold,
      currentKills,
      currentWood,
      selectedMarker,
      markers,
    } = this.state;
    return (
      <div className="bgExploration">
        <Map
          markers={markers}
          selectedMarker={selectedMarker}
          setSelectedMarker={this.setSelectedMarker}
          handleAttack={this.handleAttack}
          currentFood={currentFood}
          currentWood={currentWood}
          currentGold={currentGold}
          currentKills={currentKills}
          closedLocation={this.closedLocation}
        />
      </div>
    );
  }
}

export default Exploration;
