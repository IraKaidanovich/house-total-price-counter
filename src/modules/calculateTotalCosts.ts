import calculateTravelPrice from "./calculateTravelPrice";
import calculateLabelPrice from "./calculateLabelPrice";

type CalculateCostsParams = {
  price: string;
  label: string;
  travelTicketMisha: string;
  travelTicketNataliia: string;
};

export default ({
  price,
  label,
  travelTicketMisha,
  travelTicketNataliia,
}: CalculateCostsParams) => {
  if (price.length !== (+price).toString().length) {
    throw new Error(
      `Please provide correct rent price, you provided: "${price}"`
    );
  }

  const labelPrice = calculateLabelPrice(label);
  const travelPriceMisha = calculateTravelPrice(travelTicketMisha);
  const travelPriceNataliia = calculateTravelPrice(travelTicketNataliia);

  const totalPrice =
    +price + +labelPrice + +travelPriceMisha + +travelPriceNataliia;

  return totalPrice;
};
