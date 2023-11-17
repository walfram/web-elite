import {Outlet} from "react-router-dom";
import {GalaxySeedContext} from "../context/GalaxySeedContext";
import {useContext, useState} from "react";
import {Collapse, Navbar, NavbarToggler} from "reactstrap";
import SeedSelect from "./SeedSelect";

export default function Layout() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const seed = useContext(GalaxySeedContext);

  return (
    <>

      <GalaxySeedContext.Provider value={seed}>
        {/*<input type="radio" name="seed" value="0x5A4A,0x0248,0xB753"
               defaultChecked={true}/> classic {formattedSeed(seed)}
        <input type="radio" name="seed" value="custom"/> custom <input name="seed" type="text"
                                                                       placeholder="hex seed 6 bytes"/>*/}

        <Navbar expand={true}>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>

            <SeedSelect />

          </Collapse>
        </Navbar>

        <main className="p-2">
          <Outlet/>
        </main>

      </GalaxySeedContext.Provider>

    </>
  )
    ;
}
