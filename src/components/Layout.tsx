import GalaxySeedProvider from "../context/GalaxySeedContext.tsx";
import SeedForm from "./SeedForm.tsx";
import {Outlet} from "react-router";

export default function Layout() {

  return (
    <GalaxySeedProvider>

      <div className="bg-dark-subtle">
        <div>
          <SeedForm/>
        </div>
      </div>

      <main className="p-2">
        <Outlet/>
      </main>

    </GalaxySeedProvider>
  );
}
