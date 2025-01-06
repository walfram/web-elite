import {Equipment, equipmentList} from "./equipment.tsx";
import {expect, test} from "vitest";

test("should return equipment list", () => {
  const items : Equipment[] = equipmentList();
  expect(items.length).toBeGreaterThan(0);
})
