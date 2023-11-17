import {createContext} from "react";
import {classicSeed, Seed} from "../galaxy/seed";

export const GalaxySeedContext = createContext<Seed>(classicSeed());
