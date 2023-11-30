import {Planet} from "../galaxy/classic-elite";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import {useState} from "react";
import PlanetInfoGeneral from "./PlanetInfoGeneral";
import PlanetInfoEquipment from "./PlanetInfoEquipment";
import PlanetInfoMarket from "./PlanetInfoMarket";

export type ActiveTab = 'general' | 'market' | 'equipment';

type PlanetInfoModalProps = {
  planet: Planet;
  callback: () => void;
  activeTab: ActiveTab;
};

export default function PlanetInfoModal({planet, callback, activeTab = 'general'}: PlanetInfoModalProps) {
  const [currentTab, setActiveTab] = useState<ActiveTab>(activeTab);

  return (
    <Modal isOpen={planet !== null} fade={false}>
      <ModalHeader>{planet.name}</ModalHeader>

      <ModalBody>

        <Nav tabs>
          <NavItem>
            <NavLink
              active={'general' === currentTab}
              onClick={() => setActiveTab('general')}
            >
              General
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={'market' === currentTab}
              onClick={() => setActiveTab('market')}
            >
              Market
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={'equipment' === currentTab}
              onClick={() => setActiveTab('equipment')}
            >
              Equipment
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="general">
            <PlanetInfoGeneral planet={planet}/>
          </TabPane>

          <TabPane tabId="market">
            <PlanetInfoMarket planet={planet}/>
          </TabPane>

          <TabPane tabId="equipment">
            <PlanetInfoEquipment planet={planet}/>
          </TabPane>
        </TabContent>

      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={callback}>
          close
        </Button>
      </ModalFooter>

    </Modal>
  );
}
