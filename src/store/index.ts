import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

interface FlatDetails {
  list: Array<{
    price: number
    label: number
    travelTicketMisha: number
    travelTicketNataliia: number
    livingMonths: number
    oneTimeCosts: number
  }>
}

export const useStore = defineStore('main', () => {
  const flatsDetails = ref({
    list: []
  } as FlatDetails)

  const filledInFlatsDetails = computed(() =>
    flatsDetails.value.list.filter((details) => {
      console.log(details)
      const isFormFilledIn =
        details.price &&
        details.label &&
        details.travelTicketMisha !== undefined &&
        details.travelTicketNataliia !== undefined &&
        details.livingMonths

      return isFormFilledIn
    })
  )

  return {
    flatsDetails,
    filledInFlatsDetails
  }
})
