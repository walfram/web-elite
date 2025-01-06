import {economyOf, galaxy, governmentOf, Planet, speciesOf} from "../galaxy/classic-elite.tsx";
import {useContext, useState} from "react";
import {GalaxySeedContext} from "../context/GalaxySeedContext.tsx";
import PlanetInfoModal, {ActiveTab} from "./PlanetInfoModal.tsx";
import {formattedSeed} from "../galaxy/helpers.tsx";

export default function Planets() {

  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>('general');

  const {state} = useContext(GalaxySeedContext);
  const {seed} = state;

  console.log(`using seed ${formattedSeed(seed)}`);

  const planets = galaxy(seed);

  const selectPlanet = (planet: Planet, activeTab: ActiveTab) => {
    setSelectedPlanet(planet);
    setActiveTab(activeTab);
  };

  const bodyItems = planets.map((planet, idx) => {
    return (
      <tr key={`planet-${idx}`}>
        <td>{idx}</td>
        <td>{planet.name}</td>
        <td>{planet.position.x}:{planet.position.y}</td>
        <td>{planet.radius}</td>
        <td>{governmentOf(planet.government)}</td>
        <td>{economyOf(planet.economy)}</td>
        <td>{planet.techLevel + 1}</td>
        <td>{planet.population}</td>
        <td>{planet.productivity}</td>
        <td>{speciesOf(planet.species)}</td>
        <td>
          <div className="d-flex justify-content-between">
            <button onClick={() => selectPlanet(planet, 'general')}>general</button>
            <button onClick={() => selectPlanet(planet, 'market')}>market</button>
            <button onClick={() => selectPlanet(planet, 'equipment')}>equipment</button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>x:y</th>
          <th>radius</th>
          <th>government</th>
          <th>economy</th>
          <th>tech level</th>
          <th>population</th>
          <th>productivity</th>
          <th>species</th>
          <th style={{width: '150px'}}>view</th>
        </tr>
        </thead>
        <tbody>
        {bodyItems}
        </tbody>
      </table>

      {selectedPlanet && <PlanetInfoModal activeTab={activeTab} planet={selectedPlanet} callback={() => setSelectedPlanet(null)} />}

    </>
  );
}
