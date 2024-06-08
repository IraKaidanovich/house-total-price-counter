import {
  expectedDaysToSignTheContract,
  minimalTimeToMove,
  paymentForCurrentFlatPerMonth,
} from "./config";

const calculateMovingCost = (daysBeforeMoveIn: string) => {
  if (daysBeforeMoveIn.length != (+daysBeforeMoveIn).toString().length) {
    throw new Error(
      `Please provide number for days before moving in, you provided: "${daysBeforeMoveIn}"`
    );
  }

  const paidDays = Math.max(
    minimalTimeToMove,
    60 - +daysBeforeMoveIn + expectedDaysToSignTheContract
  );
  const paidMonths = Math.min(paidDays / 30, 2);

  return Math.round((paymentForCurrentFlatPerMonth * paidMonths) / 12);
};

export default calculateMovingCost;
