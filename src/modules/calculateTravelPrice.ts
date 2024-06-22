import config from '../config'

const calculateTravelPrice = (travelTicket: number) => {
  const ticket = travelTicket === 7 ? 'Full city' : travelTicket

  if (typeof config.pricesPerZones[ticket] === 'undefined') {
    throw new Error(`Please provide correct value for travel ticket, you provided "${ticket}"`)
  }

  return config.pricesPerZones[ticket]
}

export default calculateTravelPrice
