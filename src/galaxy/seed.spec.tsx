import {classicSeed, nextSeed, Seed, tweakSeed} from "./seed.tsx";
import {expect, test} from "vitest";

test("should tweak seed", () => {
  const seed: Seed = {
    w0: 1111,
    w1: 2222,
    w2: 3333
  }

  tweakSeed(seed);

  expect(seed.w0).toBe(2222);
  expect(seed.w1).toBe(3333);
  expect(seed.w2).toBe(1111 + 2222 + 3333);
});

test("should return correct seed values for initial seed", () => {
  const seed = classicSeed();

  expect(seed.w0).toBe(0x5A4A);
  expect(seed.w1).toBe(0x0248);
  expect(seed.w2).toBe(0xB753);
})

test("should return correct seed values for 2nd seed", () => {
  const seed = classicSeed();
  const next = nextSeed(seed);

  expect(next.w0).toBe(0xB494);
  expect(next.w1).toBe(0x0490);
  expect(next.w2).toBe(0x6FA6);
})

test("should return original seed after 8 twists", () => {
  let seed = classicSeed();
  for (let i = 1; i <= 8; i++) {
    seed = nextSeed(seed);
  }

  expect(seed.w0).toBe(0x5A4A);
  expect(seed.w1).toBe(0x0248);
  expect(seed.w2).toBe(0xB753);
})
