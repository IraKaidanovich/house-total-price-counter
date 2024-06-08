const calculateLabelPrice = (label: string) => {
  label = label.toUpperCase();

  const pricesPerLabel = {
    A: 99,
    B: 112,
    C: 130,
    D: 156,
    E: 242,
    F: 260,
    G: 307,
  };

  if (typeof pricesPerLabel[label] === "undefined") {
    throw new Error(`You provided wrong value for energy label: "${label}"`);
  }

  return pricesPerLabel[label];
};

export default calculateLabelPrice;
