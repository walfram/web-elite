import {economyOf, governmentOf, Planet} from "../galaxy/classic-elite";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, TabContent, Table, TabPane} from "reactstrap";
import {useState} from "react";
import PlanetInfoGeneral from "./PlanetInfoGeneral";

type ActiveTab = 'general' | 'equipment' | 'market';

type PlanetInfoModalProps = {
  planet: Planet;
  callback: () => void;
  activeTab: ActiveTab;
};

export default function PlanetInfoModal({planet, callback, activeTab = 'general'} : PlanetInfoModalProps) {

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
              active={'equipment' === currentTab}
              onClick={() => setActiveTab('equipment')}
            >
              Equipment
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
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="general">
            <PlanetInfoGeneral planet={planet} />
          </TabPane>

          <TabPane tabId="equipment">
          </TabPane>

          <TabPane tabId="market">
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
