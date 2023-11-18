import {Outlet} from "react-router-dom";
import {useState} from "react";
import {Collapse, Navbar, NavbarToggler} from "reactstrap";
import SeedSelect from "./SeedSelect";
import {classicSeed} from "../galaxy/seed";
import {GalaxySeedContext} from "../context/GalaxySeedContext";

export default function Layout() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const seed = classicSeed();
  console.log('setting seed to', seed);

  return (
    <GalaxySeedContext.Provider value={seed}>

      <Navbar expand={true} className="bg-dark-subtle">
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>

          <SeedSelect/>

        </Collapse>
      </Navbar>

      <main className="p-2">
        <Outlet/>
      </main>

    </GalaxySeedContext.Provider>
  );
}
