import {createContext, Dispatch, ReactNode, useReducer} from "react";
import {classicSeed, Seed} from "../galaxy/seed.tsx";

type GalaxySeedContextType = {
  state: GalaxySeedState,
  dispatch: Dispatch<GalaxySeedAction>
}

type GalaxySeed_UpdateW0 = {
  action: "update-w0";
  payload: string;
}

type GalaxySeed_UpdateW1 = {
  action: "update-w1";
  payload: string;
}

type GalaxySeed_UpdateW2 = {
  action: "update-w2";
  payload: string;
}

type GalaxySeedAction = GalaxySeed_UpdateW0 | GalaxySeed_UpdateW1 | GalaxySeed_UpdateW2 | {
  action: "use-classic-seed" | "use-random-seed";
}

type GalaxySeedState = {
  seed: Seed;
  galaxyId: number;
}

const initialSeedState: GalaxySeedState = {
  seed: classicSeed(),
  galaxyId: 0
}

const initialGalaxySeedContext: GalaxySeedContextType = {
  state: initialSeedState,
  dispatch: () => undefined
}

export const GalaxySeedContext = createContext(initialGalaxySeedContext);

type GalaxySeedProviderProps = {
  children: ReactNode;
}

const GalaxySeedContextReducer = (state: GalaxySeedState, action: GalaxySeedAction): GalaxySeedState => {

  switch (action.action) {
    case "update-w0":
      return {
        ...state,
        seed: {
          ...state.seed,
          w0: parseInt(action.payload)
        }
      }
    case "update-w1":
      return {
        ...state,
        seed: {
          ...state.seed,
          w1: parseInt(action.payload)
        }
      }
    case "update-w2":
      return {
        ...state,
        seed: {
          ...state.seed,
          w2: parseInt(action.payload)
        }
      }

    case "use-classic-seed":
      return {
        ...initialSeedState
      }
    case "use-random-seed":
      return {
        seed: {
          w0: Math.floor(Math.random() * 65536),
          w1: Math.floor(Math.random() * 65536),
          w2: Math.floor(Math.random() * 65536)
        },
        galaxyId: state.galaxyId
      }
  }

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
