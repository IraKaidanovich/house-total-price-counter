import calculateTravelPrice from "./calculateTravelPrice";

test("all zones and full city", () => {
  expect(calculateTravelPrice("0")).toBe(0);
  expect(calculateTravelPrice("1")).toBe(49);
  expect(calculateTravelPrice("2")).toBe(80);
  expect(calculateTravelPrice("3")).toBe(118);
  expect(calculateTravelPrice("4")).toBe(158);
  expect(calculateTravelPrice("5")).toBe(197);
  expect(calculateTravelPrice("6")).toBe(237);
  expect(calculateTravelPrice("7")).toBe(280);
});

test("unexpected input", () => {
  expect(() => calculateTravelPrice("8")).toThrow(
    'Please provide correct value for travel ticket, you provided "8"'
  );
  expect(() => calculateTravelPrice("anyUnexpectedValue")).toThrow(
    'Please provide correct value for travel ticket, you provided "anyUnexpectedValue"'
  );
});
