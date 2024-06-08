import calculateLabelPrice from "./calculateLabelPrice";

test("all labels", () => {
  expect(calculateLabelPrice("A")).toBe(99);
  expect(calculateLabelPrice("a")).toBe(99);

  expect(calculateLabelPrice("B")).toBe(112);
  expect(calculateLabelPrice("b")).toBe(112);

  expect(calculateLabelPrice("C")).toBe(130);
  expect(calculateLabelPrice("c")).toBe(130);

  expect(calculateLabelPrice("D")).toBe(156);
  expect(calculateLabelPrice("d")).toBe(156);

  expect(calculateLabelPrice("E")).toBe(242);
  expect(calculateLabelPrice("e")).toBe(242);

  expect(calculateLabelPrice("F")).toBe(260);
  expect(calculateLabelPrice("f")).toBe(260);

  expect(calculateLabelPrice("G")).toBe(307);
  expect(calculateLabelPrice("g")).toBe(307);
});

test("unexpected input", () => {
  expect(() => calculateLabelPrice("H")).toThrow(
    'You provided wrong value for energy label: "H"'
  );
  expect(() => calculateLabelPrice("anyUnexpectedValue")).toThrow(
    'You provided wrong value for energy label: "ANYUNEXPECTEDVALUE"'
  );
});
