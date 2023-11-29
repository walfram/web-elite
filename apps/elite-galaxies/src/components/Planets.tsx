import {economyOf, galaxy, governmentOf, Planet, speciesOf} from "../galaxy/classic-elite";
import {Button, Table} from "reactstrap";
import {Seed} from "../galaxy/seed";
import {useContext, useState} from "react";
import {GalaxySeedContext} from "../context/GalaxySeedContext";
import {RiInformationLine} from "react-icons/ri";
import {TbUfo} from "react-icons/tb";
import {GiPayMoney} from "react-icons/gi";
import PlanetInfoModal, {ActiveTab} from "./PlanetInfoModal";

export default function Planets() {

  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>('general');

  const {state, dispatch} = useContext(GalaxySeedContext);
  const {seed} = state;

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
            <Button size="sm" onClick={() => selectPlanet(planet, 'general')}><RiInformationLine/></Button>
            <Button size="sm" onClick={() => selectPlanet(planet, 'market')}><GiPayMoney/></Button>
            <Button size="sm" onClick={() => selectPlanet(planet, 'equipment')}><TbUfo/></Button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Table size="sm" hover>
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
      </Table>

      {selectedPlanet && <PlanetInfoModal activeTab={activeTab} planet={selectedPlanet} callback={() => setSelectedPlanet(null)} />}

    </>
  );
}
