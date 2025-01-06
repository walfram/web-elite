import {Planet} from "./classic-elite.tsx";

export type Equipment = {
  name: string;
  minTechLevel: number;
  price: number;
}

export abstract class Laser {
  power = 1;
  fire() {
    return this.power;
  };
}

export class PulseLaser extends Laser implements Equipment {
  minTechLevel = 4;
  name = "PulseLaser";
  power = 400;
  price = 400;
}

export type BeamLaser = Equipment & Laser;
export type MilitaryLaser = Equipment & Laser;
export type MiningLaser = Equipment & Laser;

const items: Equipment[] = [
  {name: "Fuel", minTechLevel: 1, price: 2},
  {name: "Missile", minTechLevel: 2, price: 300},
  {name: "Cargo Bay Expansion", minTechLevel: 2, price: 4000},
  {name: "ECM System", minTechLevel: 3, price: 6000},
  {name: "Pulse Laser", minTechLevel: 4, price: 4000},
  {name: "Beam Laser", minTechLevel: 5, price: 10000},
  {name: "Fuel Scoops", minTechLevel: 6, price: 5250},
  {name: "Escape Pod", minTechLevel: 7, price: 10000},
  {name: "Energy Bomb", minTechLevel: 8, price: 9000},
  {name: "Extra Energy Unit", minTechLevel: 9, price: 15000},
  {name: "Docking Computers", minTechLevel: 10, price: 15000},
  {name: "Galactic Hyper-drive", minTechLevel: 11, price: 50000},
  {name: "Military Laser", minTechLevel: 11, price: 60000},
  {name: "Mining Laser", minTechLevel: 11, price: 8000}
]

export function equipmentList(planet?: Planet) : Equipment[] {
  if (planet) {
    return equipmentList().filter(eq => eq.minTechLevel <= (planet.techLevel + 1));
  } else {
    return [...items];
  }
}

