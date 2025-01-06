import {Planet} from "../galaxy/classic-elite.tsx";
import PlanetInfoGeneral from "./PlanetInfoGeneral.tsx";
import PlanetInfoEquipment from "./PlanetInfoEquipment.tsx";
import PlanetInfoMarket from "./PlanetInfoMarket.tsx";

export type ActiveTab = "general" | "market" | "equipment";

type PlanetInfoModalProps = {
  planet: Planet;
  callback: () => void;
  activeTab: ActiveTab;
};

export default function PlanetInfoModal({planet}: PlanetInfoModalProps) {
  return (
    <div>
      <div>
        {planet.name}
      </div>

      <div>
        <div>
          <div>
            <button>General</button>
          </div>
          <div>
            <button>Market</button>
          </div>
          <div>
            <button>Equipment</button>
          </div>
        </div>
        <div>
          <div><PlanetInfoGeneral planet={planet}/></div>
          <div><PlanetInfoMarket planet={planet}/></div>
          <div><PlanetInfoEquipment planet={planet}/></div>
        </div>
      </div>

      <div>
        <button>close</button>
      </div>
    </div>
  );
}
