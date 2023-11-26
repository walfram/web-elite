import {Outlet} from "react-router-dom";
import {useState} from "react";
import {Collapse, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";
import {classicSeed, Seed} from "../galaxy/seed";
import {GalaxySeedContext} from "../context/GalaxySeedContext";
import SeedForm from "./SeedForm";

export default function Layout() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [contextSeed, setSeed] = useState(classicSeed());
  console.log('setting seed to', contextSeed);

  const updateContextSeed = (upd: Seed) => {
    setSeed(upd);
  }

  return (
    <GalaxySeedContext.Provider value={{contextSeed, updateContextSeed}}>

      <Navbar expand={true} className="bg-dark-subtle">
        <Collapse isOpen={isOpen} navbar>
          <SeedForm/>
        </Collapse>
      </Navbar>

      <main className="p-2">
        <Outlet/>
      </main>

    </GalaxySeedContext.Provider>
  );
}
