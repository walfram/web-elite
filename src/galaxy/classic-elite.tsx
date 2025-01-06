import {Seed, tweakSeed} from "./seed.tsx";

// generation code adapted from https://github.com/richcarl/txtelite/blob/master/txtelite.c

export type Position = {
  x: number,
  y: number
}

export function economyOf(type: number): string {
  return [
    "Rich_Ind",
    "Average_Ind",
    "Poor_Ind",
    "Mainly_Ind",
    "Mainly_Agr",
    "Rich_Agr",
    "Average_Agr",
    "Poor_Agr"][type];
}

export function governmentOf(type: number): string {
  return [
    "Anarchy",
    "Feudal",
    "Multi_gov",
    "Dictatorship",
    "Communist",
    "Confederacy",
    "Democracy",
    "Corporate_State"][type];
}

export function speciesOf(type: Species): string {
  if (type.humanColony)
    return "Human colonies";

  return [
    "Rodents",
    "Frogs",
    "Lizards",
    "Lobsters",
    "Birds",
    "Humanoids",
    "Felines",
    "Insects"][type.species];
}

type Species = {
  humanColony : boolean;
  species: number;
}

export type Planet = {
  id: string,
  name: string,
  position: Position,
  radius: number,
  government: number,
  economy: number,
  techLevel: number,
  population: number,
  productivity: number,
  species: Species
}

function speciesType(seed: Seed, position : Position): Species {
  // const a = seed.w1 & 0xFF;
  // const b = seed.w1 >> 8;
  const c = seed.w2 & 0xFF;
  const d = seed.w2 >> 8;

  const humanColony = !(c & 0x80);
  const speciesAdj3 = (position.x ^ position.y) & 7;
  const species = (speciesAdj3 + (d & 3)) & 7;

  return {
    humanColony : humanColony,
    species : species
  }
}

const pairs = "..LEXEGEZACEBISOUSESARMAINDIREA.ERATENBERALAVETIEDORQUANTEISRION";

export function galaxy(seed: Seed): Planet[] {
  const planets: Planet[] = [];

  for (let i = 0; i < 256; i++) {
    const longNameFlag = seed.w0 & 64;
    const position: Position = {
      x: seed.w1 >> 8,
      y: seed.w0 >> 8
    }

    const government = (seed.w1 >> 3) & 7;

    let economy = (seed.w0 >> 8) & 7;

    if (government <= 1)
      economy = economy | 2;

    let techLevel = ((seed.w1 >> 8) & 3) + (economy ^ 7);
    techLevel += government >> 1;

    if ((government & 1) === 1)
      techLevel += 1;

    let population = 4 * techLevel + economy;
    population += government + 1;

    let productivity = ((economy ^ 7) + 3) * (government + 4);
    productivity *= population * 8;

    planets[i] = {
      id: i.toString(),
      name: 'raxxla ;)',
      position: position,
      radius: 256 * (((seed.w2 >> 8) & 15) + 11) + position.x,
      government: government,
      economy: economy,
      techLevel: techLevel,
      population: population,
      productivity: productivity,
      species: speciesType(seed, position)
    };

    const pair1 = 2 * ((seed.w2 >> 8) & 31);
    seed = tweakSeed(seed);

    const pair2 = 2 * ((seed.w2 >> 8) & 31);
    seed = tweakSeed(seed);

    const pair3 = 2 * ((seed.w2 >> 8) & 31);
    seed = tweakSeed(seed);

    const pair4 = 2 * ((seed.w2 >> 8) & 31);
    seed = tweakSeed(seed);

    const name: string[] = [];
    name.push(pairs[pair1], pairs[pair1 + 1], pairs[pair2], pairs[pair2 + 1], pairs[pair3], pairs[pair3 + 1]);
    if (longNameFlag > 0) {
      name.push(pairs[pair4], pairs[pair4 + 1]);
    }
    planets[i].name = name.filter(e => e !== ".").join("");
  }

  return planets;
}
