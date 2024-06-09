import config from "../config";

const calculateMovingCost = (
  pricePerMonth: number,
  daysBeforeMoveIn: string,
  noticePeriodDays: string
) => {
  if (daysBeforeMoveIn.length != (+daysBeforeMoveIn).toString().length) {
    throw new Error(
      `Please provide number for days before moving in, you provided: "${daysBeforeMoveIn}"`
    );
  }

  if (noticePeriodDays.length != (+noticePeriodDays).toString().length) {
    throw new Error(
      `Please provide number for notice period days, you provided: "${noticePeriodDays}"`
    );
  }

  const paidDays = Math.max(
    config.minimalTimeToMove,
    +noticePeriodDays - +daysBeforeMoveIn + config.expectedDaysToSignTheContract
  );
  const paidMonths = Math.min(paidDays / 30, +noticePeriodDays / 30);

  return Math.round((pricePerMonth * paidMonths) / 12);
};

export default calculateMovingCost;
