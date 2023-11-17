import {Seed} from "./seed";

export function formattedSeed(seed : Seed) : string {
  return `0x${seed.w0.toString(16).toUpperCase()},0x${seed.w1.toString(16).toUpperCase()},0x${seed.w2.toString(16).toUpperCase()}`;
}
