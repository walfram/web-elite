import {Outlet} from "react-router-dom";
import {useState} from "react";
import {Collapse, Navbar} from "reactstrap";
import {classicSeed, Seed} from "../galaxy/seed";
import GalaxySeedProvider from "../context/GalaxySeedContext";
import SeedForm from "./SeedForm";

export default function Layout() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <GalaxySeedProvider>

      <Navbar expand={true} className="bg-dark-subtle">
        <Collapse isOpen={isOpen} navbar>
          <SeedForm/>
        </Collapse>
      </Navbar>

      <main className="p-2">
        <Outlet/>
      </main>

    </GalaxySeedProvider>
  );
}
