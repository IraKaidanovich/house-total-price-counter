// All prices are per month

export default {
  pricesPerLabel: {
    A: 99,
    B: 112,
    C: 130,
    D: 156,
    E: 242,
    F: 260,
    G: 307,
  },
  pricesPerZones: {
    0: 0,
    1: 49,
    2: 80,
    3: 118,
    4: 158,
    5: 197,
    6: 237,
    "Full city": 280,
  },
  paymentForCurrentFlat: 1500 + 260, // Including rent, utilities. We don't care about services, taxes
  sharedSavings: 400,

  expectedDaysToSignTheContract: 7, // We will be able to give the notice only after signing the contract
  minimalTimeToMove: 15, // We still need some time to move to another flat
  currentFlatNoticePeriodDays: 60,
};
