import {Planet} from "../galaxy/classic-elite";
import {Col, Row, Table} from "reactstrap";
import {equipmentList} from "../galaxy/equipment";
import FormattedPrice from "./FormattedPrice";

export default function PlanetInfoEquipment({planet} : {planet: Planet}) {
  return (
    <Row>
      <Col sm="12">

        <Table size="12">
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
        </Table>

      </Col>
    </Row>
  );
}
