// All prices are per month
import config from './config'

const originalConfig = JSON.parse(JSON.stringify(config))
global.resetConfig = () => {
  for (const key in originalConfig) {
    config[key] = originalConfig[key]
  }
}

config.pricesPerLabel = {
  A: 100,
  B: 200,
  C: 300,
  D: 400,
  E: 500,
  F: 600,
  G: 700
}

config.pricesPerZones = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  6: 600,
  'Full city': 700
}

config.sharedSavings = 500

config.paymentForCurrentFlat = 2000

config.expectedDaysToSignTheContract = 7

config.minimalTimeToMove = 15

config.currentFlatNoticePeriodDays = 60
