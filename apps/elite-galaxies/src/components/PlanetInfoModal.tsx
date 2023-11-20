import {economyOf, governmentOf, Planet} from "../galaxy/classic-elite";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";

export default function PlanetInfoModal({planet, callback} : {planet: Planet, callback: () => void}) {

  return (
    <Modal isOpen={planet !== null}>
      <ModalHeader>{planet.name}</ModalHeader>

      <ModalBody>

        <Table size="sm">
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
        </Table>

      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={callback}>
          close
        </Button>
      </ModalFooter>

    </Modal>
  );
}
