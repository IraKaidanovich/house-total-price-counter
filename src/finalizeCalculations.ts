import calculateTotalCosts from "./calculateTotalCosts";
import calculateMovingCost from "./calculateMovingCosts";
import {
  paymentForCurrentFlatPerMonth,
  currentFlatNoticePeriodDays,
} from "./config";
import calculateSavings from "./calculateSavings";

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

  const newMoveOutPricePerMonth =
    calculateMovingCost(totalCosts, daysBeforeMoveIn, newFlatNoticePeriod) / 12;

  const currentMoveOutPricePerMonth =
    calculateMovingCost(
      paymentForCurrentFlatPerMonth,
      daysBeforeMoveIn,
      currentFlatNoticePeriodDays.toString()
    ) / 12;

  const weSaved = calculateSavings(
    paymentForCurrentFlatPerMonth,
    currentMoveOutPricePerMonth
  );
  const weWillSave = calculateSavings(totalCosts, newMoveOutPricePerMonth);

  return {
    totalCosts,
    newMoveOutPricePerMonth: Math.round(newMoveOutPricePerMonth),
    currentMoveOutPricePerMonth: Math.round(currentMoveOutPricePerMonth),
    weSaved,
    weWillSave,
  };
};
