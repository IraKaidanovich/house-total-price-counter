import calculateCosts from "./calculateTotalCosts";

test("cheap flat", () => {
  const totalPrice = calculateCosts({
    price: "1000",
    label: "A",
    travelTicketMisha: "1",
    travelTicketNataliia: "0",
  });

  expect(totalPrice).toBe(1200);
});

test("cheap flat with medium move in time", () => {
  const totalPrice = calculateCosts({
    price: "1100",
    label: "B",
    travelTicketMisha: "0",
    travelTicketNataliia: "0",
  });

  expect(totalPrice).toBe(1300);
});

test("slighly more expensive flat with a month of move in time", () => {
  const totalPrice = calculateCosts({
    price: "1700",
    label: "C",
    travelTicketMisha: "0",
    travelTicketNataliia: "0",
  });

  expect(totalPrice).toBe(2000);
});

test("expensive flat", () => {
  const totalPrice = calculateCosts({
    price: "1750",
    label: "C",
    travelTicketMisha: "2",
    travelTicketNataliia: "1",
  });

  expect(totalPrice).toBe(2350);
});

test("unexpected price input", () => {
  expect(() =>
    calculateCosts({
      price: "123 unexpectedInput",
      label: "C",
      travelTicketMisha: "2",
      travelTicketNataliia: "1",
      daysBeforeMoveIn: "15",
    })
  ).toThrow(
    'Please provide correct rent price, you provided: "123 unexpectedInput"'
  );
});
