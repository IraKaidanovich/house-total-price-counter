import calculateTotalCosts from "./calculateTotalCosts";
import calculateMovingCost from "./calculateMovingCosts";
import {
  paymentForCurrentFlatPerMonth,
  currentFlatNoticePeriodDays,
} from "./config";
import calculateSavings from "./calculateSavings";

const providedAnd45DaysMovePrice = (
  costPerMonth: number,
  daysBeforeMoveIn: string,
  noticePeriodDays: string
): {
  withProvidedDays: number;
  with45Days: number;
} => ({
  withProvidedDays:
    calculateMovingCost(costPerMonth, daysBeforeMoveIn, noticePeriodDays) / 12,
  with45Days: calculateMovingCost(costPerMonth, "45", noticePeriodDays) / 12,
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

  const newMoveOutPricePerMonth = providedAnd45DaysMovePrice(
    totalCosts,
    daysBeforeMoveIn,
    newFlatNoticePeriod
  );

  const currentMoveOutPricePerMonth = providedAnd45DaysMovePrice(
    paymentForCurrentFlatPerMonth,
    daysBeforeMoveIn,
    currentFlatNoticePeriodDays.toString()
  );

  const weSavedWithProvidedMoveDays = calculateSavings(
    paymentForCurrentFlatPerMonth,
    currentMoveOutPricePerMonth.withProvidedDays
  );
  const weSavedWith45MoveDays = calculateSavings(
    paymentForCurrentFlatPerMonth,
    currentMoveOutPricePerMonth.with45Days
  );
  const weWillSaveWithProvidedMoveDays = calculateSavings(
    totalCosts,
    newMoveOutPricePerMonth.withProvidedDays
  );
  const weWillSaveWith45MoveDays = calculateSavings(
    totalCosts,
    newMoveOutPricePerMonth.with45Days
  );

  return {
    totalCosts,
    newMoveOutPricePerMonth: {
      withProvidedDays: Math.round(newMoveOutPricePerMonth.withProvidedDays),
      with45Days: Math.round(newMoveOutPricePerMonth.with45Days),
    },
    currentMoveOutPricePerMonth: {
      withProvidedDays: Math.round(
        currentMoveOutPricePerMonth.withProvidedDays
      ),
      with45Days: Math.round(currentMoveOutPricePerMonth.with45Days),
    },
    weSavedWithProvidedMoveDays,
    weSavedWith45MoveDays,
    weWillSaveWithProvidedMoveDays,
    weWillSaveWith45MoveDays,
  };
};
