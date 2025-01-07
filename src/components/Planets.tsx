import {economyOf, galaxy, governmentOf, Planet, speciesOf} from "../galaxy/classic-elite.tsx";
import {useAppSelector} from "../store/store.ts";
import "./Planets.css";

export default function Planets() {
  const seed = useAppSelector(state => state.galaxy.seed);
  const planets = galaxy(seed);

  return (
      <>
        <table className={"planet-list-table"}>
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
            <th style={{width: "150px"}}>view</th>
          </tr>
          </thead>
          <tbody>
          {planets.map((planet) => <PlanetRow planet={planet} key={planet.id}/>)}
          </tbody>
        </table>

        <div>TODO planet modal(s)</div>
      </>
  );
}

type PlanetRowProps = {
  planet: Planet;
}

function PlanetRow({planet}: PlanetRowProps) {
  function planetInfo(planet: Planet, showTab: string) {
    console.log(planet, showTab);
  }

  return (
      <tr>
        <td>{planet.id}</td>
        <td>{planet.name}</td>
        <td>{planet.position.x}:{planet.position.y}</td>
        <td>{planet.radius}</td>
        <td>{governmentOf(planet.government)}</td>
        <td>{economyOf(planet.economy)}</td>
        <td>{planet.techLevel + 1}</td>
        <td>{planet.population}</td>
        <td>{planet.productivity}</td>
        <td>{speciesOf(planet.species)}</td>
        <td className={"buttons"}>
          <button onClick={() => planetInfo(planet, "information")} className={"information"}></button>
          <button onClick={() => planetInfo(planet, "market")} className={"market"}></button>
          <button onClick={() => planetInfo(planet, "equipment")} className={"equipment"}></button>
        </td>
      </tr>
  );
}
