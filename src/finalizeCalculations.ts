import calculateTotalCosts from "./calculateTotalCosts";
import calculateMovingCost from "./calculateMovingCosts";
import {
  paymentForCurrentFlatPerMonth,
  currentFlatNoticePeriodDays,
} from "./config";
import calculateSavings from "./calculateSavings";

const realisticAndOptimisticMovePrice = (
  costPerMonth: number,
  daysBeforeMoveIn: string,
  noticePeriodDays: string
): {
  realistic: number; // same amount of days as to this new flat
  optimistic: number; // 45 days to move
} => ({
  realistic:
    calculateMovingCost(costPerMonth, daysBeforeMoveIn, noticePeriodDays) / 12,
  optimistic: calculateMovingCost(costPerMonth, "45", noticePeriodDays) / 12,
});

type Params = {
  price: string;
  label: string;
  travelTicketMisha: string;
  travelTicketNataliia: string;
  daysBeforeMoveIn: string;
  newFlatNoticePeriod: string;
};

export default ({
  price,
  label,
  travelTicketMisha,
  travelTicketNataliia,
  daysBeforeMoveIn,
  newFlatNoticePeriod,
}: Params) => {
  const totalCosts = calculateTotalCosts({
    price,
    label,
    travelTicketMisha,
    travelTicketNataliia,
  });

  const newMoveOutPricePerMonth = realisticAndOptimisticMovePrice(
    totalCosts,
    daysBeforeMoveIn,
    newFlatNoticePeriod
  );

  const currentMoveOutPricePerMonth = realisticAndOptimisticMovePrice(
    paymentForCurrentFlatPerMonth,
    daysBeforeMoveIn,
    currentFlatNoticePeriodDays.toString()
  );

  const realisticSavingsPerYear = calculateSavings(
    totalCosts,
    newMoveOutPricePerMonth.realistic,
    currentMoveOutPricePerMonth.realistic
  );

  const optimisticSavingsPerYear = calculateSavings(
    totalCosts,
    newMoveOutPricePerMonth.optimistic,
    currentMoveOutPricePerMonth.optimistic
  );

  return {
    totalCosts,
    newMoveOutPricePerMonth: {
      realistic: Math.round(newMoveOutPricePerMonth.realistic),
      optimistic: Math.round(newMoveOutPricePerMonth.optimistic),
    },
    currentMoveOutPricePerMonth: {
      realistic: Math.round(currentMoveOutPricePerMonth.realistic),
      optimistic: Math.round(currentMoveOutPricePerMonth.optimistic),
    },
    realisticSavingsPerYear,
    optimisticSavingsPerYear,
  };
};
