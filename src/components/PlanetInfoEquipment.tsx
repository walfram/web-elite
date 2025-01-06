import {Planet} from "../galaxy/classic-elite.tsx";
import {equipmentList} from "../galaxy/equipment.tsx";
import FormattedPrice from "./FormattedPrice.tsx";

export default function PlanetInfoEquipment({planet} : {planet: Planet}) {
  return (
    <div>
      <div>

        <table>
          <thead>
          <tr>
            <th>name</th>
            <th className="text-end">price</th>
          </tr>
          </thead>
          <tbody>
          {equipmentList(planet).map((eq, idx) => {
            return (
              <tr key={'eq' + idx}>
                <td>{eq.name}</td>
                <td className="text-end"><FormattedPrice value={eq.price} /></td>
              </tr>
            );
          })}
          </tbody>
        </table>

      </div>
    </div>
  );
}
