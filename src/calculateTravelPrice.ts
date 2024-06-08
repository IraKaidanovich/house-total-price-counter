const calculateTravelPrice = (travelTicket: string) => {
  travelTicket = travelTicket === "7" ? "Full city" : travelTicket;

  const pricesPerZonesPerYear = {
    0: 0,
    1: 590,
    2: 960,
    3: 1420,
    4: 1890,
    5: 2360,
    6: 2840,
    "Full city": 3354,
  };

  if (typeof pricesPerZonesPerYear[travelTicket] === "undefined") {
    throw new Error(
      `Please provide correct value for travel ticket, you provided "${travelTicket}"`
    );
  }

  return Math.round(pricesPerZonesPerYear[travelTicket] / 12);
};

export default calculateTravelPrice;
