import SeedForm from "../components/SeedForm.tsx";
import {Outlet} from "react-router";

export default function Layout() {

  return (
    <>

      <div className="bg-dark-subtle">
        <SeedForm/>
      </div>

      <main className="p-2">
        <Outlet/>
      </main>

    </>
  );
}
