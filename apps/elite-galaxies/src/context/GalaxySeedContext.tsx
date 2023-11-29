import {createContext, Dispatch, ReactNode, useReducer} from "react";
import {classicSeed, Seed} from "../galaxy/seed";

export type GalaxySeedContextType = {
  state: GalaxySeedState,
  dispatch: Dispatch<GalaxySeedAction>
}

export type GalaxySeedAction = {
  action: "update" | "use-classic-seed" | "use-random-seed";
}

export type GalaxySeedState = {
  seed: Seed;
  galaxyId: number;
}

export const initialSeedState: GalaxySeedState = {
  seed: classicSeed(),
  galaxyId: 0
}

const initialGalaxySeedContext : GalaxySeedContextType = {
  state: initialSeedState,
  dispatch: () => undefined
}

export const GalaxySeedContext = createContext(initialGalaxySeedContext);

export type GalaxySeedProviderProps = {
  children: ReactNode;
}

export const GalaxySeedContextReducer = (state: GalaxySeedState, action: GalaxySeedAction): GalaxySeedState => {
  return state;
}

export default function GalaxySeedProvider({children}: GalaxySeedProviderProps) {
  const [state, dispatch] = useReducer(GalaxySeedContextReducer, initialSeedState);

  const galaxySeedContextValue: GalaxySeedContextType = {
    state, dispatch
  }

  return (
    <GalaxySeedContext.Provider value={galaxySeedContextValue}>
      {children}
    </GalaxySeedContext.Provider>
  );
}
