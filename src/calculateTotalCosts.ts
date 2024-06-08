import calculateMovingCost from "./calculateMovingCosts";
import calculateTravelPrice from "./calculateTravelPrice";
import calculateLabelPrice from "./calculateLabelPrice";

type CalculateCostsParams = {
  price: string;
  label: string;
  travelTicketMisha: string;
  travelTicketNataliia: string;
  daysBeforeMoveIn: string;
};

const calculateCosts = ({
  price,
  label,
  travelTicketMisha,
  travelTicketNataliia,
  daysBeforeMoveIn,
}: CalculateCostsParams) => {
  if (price.length !== (+price).toString().length) {
    throw new Error(
      `Please provide correct rent price, you provided: "${price}"`
    );
  }

  const priceForServices = 100; // Ziggo, water, trash etc.

  const labelPrice = calculateLabelPrice(label);
  const travelPriceMisha = calculateTravelPrice(travelTicketMisha);
  const travelPriceNataliia = calculateTravelPrice(travelTicketNataliia);
  const moveInPrice = calculateMovingCost(daysBeforeMoveIn);

  const totalPrice =
    +price +
    +labelPrice +
    +travelPriceMisha +
    +travelPriceNataliia +
    +moveInPrice +
    +priceForServices;

  return totalPrice;
};

export default calculateCosts;
