import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {classicSeed, Seed} from "../galaxy/seed.tsx";
import {galaxy} from "../galaxy/classic-elite.tsx";
import {RootState} from "./store.ts";

type GalaxyState = {
  seed: Seed;
  galaxyId: number;
}

const initialGalaxyState: GalaxyState = {
  seed: classicSeed(),
  galaxyId: 0
}

export const GalaxySlice = createSlice({
  name: "GalaxySlice",
  initialState: initialGalaxyState,
  reducers: {
    switchToClassicSeed: (state) => {
      state.seed = classicSeed()
    },
    switchToRandomSeed: (state) => {
      state.seed = {
        w0: Math.floor(Math.random() * 65536),
        w1: Math.floor(Math.random() * 65536),
        w2: Math.floor(Math.random() * 65536)
      }
    },
    changeW0: (state, action: PayloadAction<number>) => {
      state.seed.w0 = action.payload;
    },
    changeW1: (state, action: PayloadAction<number>) => {
      state.seed.w1 = action.payload;
    },
    changeW2: (state, action: PayloadAction<number>) => {
      state.seed.w2 = action.payload;
    },
    changeGalaxyId: (state, action: PayloadAction<number>) => {
      state.galaxyId = action.payload;
    }
  }
});

export const {
  switchToClassicSeed, switchToRandomSeed, changeW0, changeW1, changeW2, changeGalaxyId
} = GalaxySlice.actions;

// TODO use createSelector
export const planetsSelector = (state: RootState) => [...galaxy(state.galaxy.seed)];
