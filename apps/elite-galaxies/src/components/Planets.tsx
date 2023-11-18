import {economyOf, galaxy, governmentOf, Planet, speciesOf} from "../galaxy/classic-elite";
import {Button, Table} from "reactstrap";
import {Seed} from "../galaxy/seed";
import {useContext} from "react";
import {GalaxySeedContext} from "../context/GalaxySeedContext";
import {RiGovernmentLine, RiInformationLine} from "react-icons/ri";
import {LiaIndustrySolid} from "react-icons/lia";
import {GrTransaction} from "react-icons/gr";
import {TbUfo} from "react-icons/tb";

export default function Planets() {

  // const seed = useOutletContext<Seed>();
  const seed = useContext<Seed>(GalaxySeedContext);
  console.log('using seed', seed);

  const planets = galaxy(seed);

  const onPlanetInfo = (planet : Planet) => console.log('click on government', planet);

  const bodyItems = planets.map((planet, idx) => {
    return (
      <tr key={`planet-${idx}`}>
        <td>{idx}</td>
        <td>{planet.name}</td>
        <td>{planet.position.x}:{planet.position.y}</td>
        <td>{planet.radius}</td>
        <td>{governmentOf(planet.government)}</td>
        <td>{economyOf(planet.economy)}</td>
        <td>{planet.techLevel}</td>
        <td>{planet.population}</td>
        <td>{planet.productivity}</td>
        <td>{speciesOf(planet.species)}</td>
        <td>
          <Button size="sm" onClick={() => onPlanetInfo(planet)}><RiInformationLine /></Button>
          <Button size="sm" onClick={() => onPlanetMarket(planet)}><GrTransaction /></Button>
          <Button size="sm" onClick={() => onPlanetEquipment(planet)}><TbUfo /></Button>
        </td>
      </tr>
    );
  });

  return (
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
        <th>view</th>
      </tr>
      </thead>
      <tbody>
      {bodyItems}
      </tbody>
    </Table>
  );
}
