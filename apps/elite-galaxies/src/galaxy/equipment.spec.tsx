import {Equipment, equipmentList} from "./equipment";
import {expect} from "vitest";

test("should return equipment list", () => {
  const items : Equipment[] = equipmentList();
  expect(items.length).toBeGreaterThan(0);
})
