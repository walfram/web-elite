import {createContext} from "react";
import {classicSeed, Seed} from "../galaxy/seed";

export const GalaxySeedContext = createContext({
  seed: classicSeed(),
  updateSeed: (seed: Seed) => {}
});
