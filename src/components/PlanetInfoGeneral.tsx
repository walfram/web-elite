import {economyOf, governmentOf, Planet} from "../galaxy/classic-elite.tsx";

export default function PlanetInfoGeneral({planet} : {planet : Planet}) {
  return (
    <table>
      <tbody>
      <tr>
        <td>position</td>
        <td>{planet.position.x}/{planet.position.y}</td>
      </tr>
      <tr>
        <td>radius</td>
        <td>{planet.radius}</td>
      </tr>
      <tr>
        <td>government</td>
        <td>{governmentOf(planet.government)}</td>
      </tr>
      <tr>
        <td>economy</td>
        <td>{economyOf(planet.economy)}</td>
      </tr>
      <tr>
        <td>tech level</td>
        <td>{planet.techLevel + 1}</td>
      </tr>
      </tbody>
    </table>
  );
}
