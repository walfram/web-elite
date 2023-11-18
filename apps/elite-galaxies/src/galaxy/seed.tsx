export type Seed = {
  w0: number,
  w1: number,
  w2: number
}

function rotateLeft(n: number): number {
  const temp = n & 128;
  return (2 * (n & 127)) + (temp >> 7);
}

function twist(n: number): number {
  return ((256 * rotateLeft(n >> 8)) + rotateLeft(n & 255))
}

// returns next galaxy's seed, 8 twists return to 1st galaxy
export function nextSeed(seed: Seed): Seed {
  return {
    w0: twist(seed.w0),
    w1: twist(seed.w1),
    w2: twist(seed.w2)
  }
}

export function classicSeed(): Seed {
  return {
    w0: 0x5A4A,
    w1: 0x0248,
    w2: 0xB753
  }
}

export function tweakSeed(seed: Seed): Seed {
  const temp = (seed.w0 + seed.w1 + seed.w2) & 0xFFFF;
  // seed.w0 = seed.w1;
  // seed.w1 = seed.w2;
  // seed.w2 = temp;

  return {
    w0: seed.w1,
    w1: seed.w2,
    w2: temp
  }
}
