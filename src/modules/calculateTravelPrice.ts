import config from "../config";

const calculateTravelPrice = (travelTicket: string) => {
  travelTicket = travelTicket === "7" ? "Full city" : travelTicket;

  if (typeof config.pricesPerZones[travelTicket] === "undefined") {
    throw new Error(
      `Please provide correct value for travel ticket, you provided "${travelTicket}"`
    );
  }

  return config.pricesPerZones[travelTicket];
};

export default calculateTravelPrice;
