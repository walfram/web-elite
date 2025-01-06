import {classicSeed} from "./seed.tsx";
import {Planet, galaxy} from "./classic-elite.tsx";
import {expect, test} from "vitest";

test("should generate classic 1st galaxy", () => {
  const seed = classicSeed();
  const planets : Planet[] = galaxy(seed);

  expect(planets.length).toBe(256);

  const lave = planets[7];

  expect(lave.position.x).toBe(20);
  expect(lave.position.y).toBe(173);
  expect(lave.radius).toBe(4116);
  expect(lave.government).toBe(3);
  expect(lave.economy).toBe(5);
  expect(lave.techLevel).toBe(4); // 5?
  expect(lave.productivity).toBe(7000);
  expect(lave.population).toBe(25);

  expect(lave.name).toBe("LAVE");
})
