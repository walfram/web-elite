import {Commodity, commodityList, localMarketOffer, Unit} from "./commodities";

const commodity = new Commodity(0x41, -0x03, 0x02, 0x07, Unit.TONNES, "Radioactives");

test('should return correct local market offer for economy = 0 (rich ind) onrira', () => {
  const localOffer = localMarketOffer(0, commodity);

  expect(localOffer.localPrice).toBe(260);
  expect(localOffer.localQuantity).toBe(2)
});

test('should return correct local market offer for economy = 5 (rich arg) lave', () => {
  const localOffer = localMarketOffer(5, commodity);

  expect(localOffer.localPrice).toBe(200);
  expect(localOffer.localQuantity).toBe(17);
});

test('commodities contain legal and illegal stuff', () => {
  const commodities = commodityList();

  const legal = commodities.filter((c) => !c.illegal);
  expect(legal.length).toBe(14);

  const illegal = commodities.filter((c) => c.illegal);
  expect(illegal.length).toBe(3);
});

test('should return complete list of commodities', () => {
  const commodities: Commodity[] = commodityList();
  expect(commodities.length).toBe(17);
});
