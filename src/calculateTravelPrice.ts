import { pricesPerZonesPerYear } from "./config";

const calculateTravelPrice = (travelTicket: string) => {
  travelTicket = travelTicket === "7" ? "Full city" : travelTicket;

  if (typeof pricesPerZonesPerYear[travelTicket] === "undefined") {
    throw new Error(
      `Please provide correct value for travel ticket, you provided "${travelTicket}"`
    );
  }

  return Math.round(pricesPerZonesPerYear[travelTicket] / 12);
};

export default calculateTravelPrice;
