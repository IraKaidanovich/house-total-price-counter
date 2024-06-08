import { pricesPerLabel } from "./config";

const calculateLabelPrice = (label: string) => {
  label = label.toUpperCase();

  if (typeof pricesPerLabel[label] === "undefined") {
    throw new Error(`You provided wrong value for energy label: "${label}"`);
  }

  return pricesPerLabel[label];
};

export default calculateLabelPrice;
