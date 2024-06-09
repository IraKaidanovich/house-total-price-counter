import config from "../config";

const calculateLabelPrice = (label: string) => {
  label = label.toUpperCase();

  if (typeof config.pricesPerLabel[label] === "undefined") {
    throw new Error(`You provided wrong value for energy label: "${label}"`);
  }

  return config.pricesPerLabel[label];
};

export default calculateLabelPrice;
