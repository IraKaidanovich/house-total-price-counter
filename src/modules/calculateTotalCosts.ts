import calculateTravelPrice from './calculateTravelPrice'
import calculateLabelPrice from './calculateLabelPrice'

type CalculateCostsParams = {
  price: number
  label: string
  travelTicketMisha: number
  travelTicketNataliia: number
}

export default ({
  price,
  label,
  travelTicketMisha,
  travelTicketNataliia
}: CalculateCostsParams) => {
  const labelPrice = calculateLabelPrice(label)
  const travelPriceMisha = calculateTravelPrice(travelTicketMisha)
  const travelPriceNataliia = calculateTravelPrice(travelTicketNataliia)

  const totalPrice = +price + +labelPrice + +travelPriceMisha + +travelPriceNataliia

  return totalPrice
}
