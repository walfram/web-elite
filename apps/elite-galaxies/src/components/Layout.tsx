import {Outlet} from "react-router-dom";
import {useState} from "react";
import {Collapse, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";
import {classicSeed} from "../galaxy/seed";
import {GalaxySeedContext} from "../context/GalaxySeedContext";
import SeedForm from "./SeedForm";

export default function Layout() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const seed = classicSeed();
  console.log('setting seed to', seed);

  return (
    <GalaxySeedContext.Provider value={seed}>

      <Navbar expand={true} className="bg-dark-subtle">
        <Collapse isOpen={isOpen} navbar>
          <SeedForm />
        </Collapse>
      </Navbar>

      <main className="p-2">
        <Outlet/>
      </main>

    </GalaxySeedContext.Provider>
  );
}
