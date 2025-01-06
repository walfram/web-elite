import {localMarket} from "../galaxy/commodities.tsx";
import {Planet} from "../galaxy/classic-elite.tsx";
import FormattedUnit from "./FormattedUnit.tsx";
import FormattedPrice from "./FormattedPrice.tsx";

export default function PlanetInfoMarket({planet}: { planet: Planet }) {
  return (
    <div>
      <div>

        <table>
          <thead>
          <tr>
            <th>name</th>
            <th className="text-end">unit</th>
            <th className="text-end">price</th>
            <th className="text-end">quantity</th>
          </tr>
          </thead>
          <tbody>
          {localMarket(planet).map((offer, idx) => {
            return (
              <tr key={"offer" + idx} className={offer.commodity.illegal ? "table-warning" : ""}>
                <td>{offer.commodity.name} {offer.commodity.illegal && "*"}</td>
                <td className="text-end"><FormattedUnit value={offer.commodity.unit}/></td>
                <td className="text-end"><FormattedPrice value={offer.localPrice}/></td>
                <td className="text-end">{offer.localQuantity}/<FormattedUnit value={offer.commodity.unit}/></td>
              </tr>
            );
          })}
          </tbody>
        </table>

      </div>
    </div>
  );
}
