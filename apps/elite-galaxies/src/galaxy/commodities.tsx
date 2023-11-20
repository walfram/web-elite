
// code adapted from https://github.com/richcarl/txtelite/blob/master/txtelite.c
// and https://wiki.alioth.net/index.php/Commodities.plist

import {Planet} from "./classic-elite";

export enum Unit {
  TONNES = "TONNES",
  KILOGRAMS = "KILOGRAMS",
  GRAMS = "GRAMS"
}

export class Commodity {
  readonly basePrice: number;
  readonly gradient: number;
  readonly baseQuantity: number;
  readonly maskByte: number;
  readonly unit: Unit;
  readonly name: string;
  readonly illegal: boolean;
  readonly onlyBuy: boolean;

  constructor(basePrice: number, gradient: number, baseQuantity: number, maskByte: number, unit: Unit, name: string, illegal = false, onlyBuy = false) {
    this.basePrice = basePrice;
    this.gradient = gradient;
    this.baseQuantity = baseQuantity;
    this.maskByte = maskByte;
    this.unit = unit;
    this.name = name;
    this.illegal = illegal;
    this.onlyBuy = onlyBuy;
  }
}

const commodities: Commodity[] = [
  new Commodity(0x13, -0x02, 0x06, 0x01, Unit.TONNES, "Food"),
  new Commodity(0x14, -0x01, 0x0A, 0x03, Unit.TONNES, "Textiles"),
  new Commodity(0x41, -0x03, 0x02, 0x07, Unit.TONNES, "Radioactives"),
  new Commodity(0x28, -0x05, 0xE2, 0x1F, Unit.TONNES, "Slaves", true),
  new Commodity(0x53, -0x05, 0xFB, 0x0F, Unit.TONNES, "Liquor/Wines"),
  new Commodity(0xC4, +0x08, 0x36, 0x03, Unit.TONNES, "Luxuries"),
  new Commodity(0xEB, +0x1D, 0x08, 0x78, Unit.TONNES, "Narcotics", true),
  new Commodity(0x9A, +0x0E, 0x38, 0x03, Unit.TONNES, "Computers"),
  new Commodity(0x75, +0x06, 0x28, 0x07, Unit.TONNES, "Machinery"),
  new Commodity(0x4E, +0x01, 0x11, 0x1F, Unit.TONNES, "Alloys"),
  new Commodity(0x7C, +0x0d, 0x1D, 0x07, Unit.TONNES, "Firearms", true),
  new Commodity(0xB0, -0x09, 0xDC, 0x3F, Unit.TONNES, "Furs"),
  new Commodity(0x20, -0x01, 0x35, 0x03, Unit.TONNES, "Minerals"),
  new Commodity(0x61, -0x01, 0x42, 0x07, Unit.KILOGRAMS, "Gold"),
  new Commodity(0xAB, -0x02, 0x37, 0x1F, Unit.KILOGRAMS, "Platinum"),
  new Commodity(0x2D, -0x01, 0xFA, 0x0F, Unit.GRAMS, "Gem-Stones"),
  new Commodity(0x35, +0x0F, 0xC0, 0x07, Unit.TONNES, "Alien Items", false, true)
]

export function commodityList() : Commodity[] {
  return [...commodities];
}

export type MarketOffer = {
  commodity: Commodity;
  localPrice : number;
  localQuantity : number;
}

export function localMarketOffer(economy: number, commodity: Commodity) : MarketOffer {
  const product = economy * commodity.gradient;

  // TODO move fluct to func params
  const fluct = 0x00;
  const changing = fluct & commodity.maskByte;
  let q = (commodity.baseQuantity + changing - product) & 0xFF;

  if (q & 0x80)
    q = 0x00;

  let quantity = q & 0x3f;
  if (commodity.onlyBuy)
    quantity = 0;

  q = (commodity.basePrice + changing + product) & 0xFF;

  const price = q * 4;

  return {
    localPrice: price,
    localQuantity: quantity,
    commodity: commodity
  };
}

export function localMarket(planet: Planet): MarketOffer[] {
  return commodityList().map(c => localMarketOffer(planet.economy, c));
}
