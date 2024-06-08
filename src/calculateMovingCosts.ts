const calculateMovingCost = (daysBeforeMoveIn: string) => {
  if (daysBeforeMoveIn.length != (+daysBeforeMoveIn).toString().length) {
    throw new Error(
      `Please provide number for days before moving in, you provided: "${daysBeforeMoveIn}"`
    );
  }

  const paymentForCurrentFlatPerMonth = 1900;
  const expectedDaysToSignTheContract = 7; // We will be able to give the notice only after signing the contract
  const paidDays = Math.max(
    15,
    60 - +daysBeforeMoveIn + expectedDaysToSignTheContract
  );
  const paidMonths = Math.min(paidDays / 30, 2);

  return Math.round((paymentForCurrentFlatPerMonth * paidMonths) / 12);
};

export default calculateMovingCost;
