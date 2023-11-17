import {economyOf, galaxy, governmentOf, speciesOf} from "../galaxy/classic-elite";
import {useContext} from "react";
import {GalaxySeedContext} from "../context/GalaxySeedContext";
import {Table} from "reactstrap";
import {formattedSeed} from "../galaxy/helpers";

export default function Planets() {

  const seed = useContext(GalaxySeedContext);
  console.log('using seed', formattedSeed(seed));

  const planets = galaxy(seed);

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
      </tr>
    );
  });

  return (
    <Table size="sm">
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
      </tr>
      </thead>
      <tbody>
      {bodyItems}
      </tbody>
    </Table>
  );
}
