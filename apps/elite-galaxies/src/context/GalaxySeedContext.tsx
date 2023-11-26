import {createContext} from "react";
import {classicSeed, Seed} from "../galaxy/seed";

export const GalaxySeedContext = createContext({
  contextSeed: classicSeed(),
  updateContextSeed: (seed: Seed) => {}
});
