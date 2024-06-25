import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export interface Flat {
  name: string
  price: number
  label: string
  travelTicketMisha: number
  travelTicketNataliia: number
  livingMonths: number
  oneTimeCosts: number
  moveInDays: number
  moveOutDays: number
}

export const useStore = defineStore('main', () => {
  const flatsDetails = ref({
    list: []
  } as {
    list: Flat[]
  })

  const filledInFlatsDetails = computed(() =>
    flatsDetails.value.list.filter((details) => {
      console.log(details)
      const isFormFilledIn =
        details.price &&
        details.label &&
        details.travelTicketMisha !== undefined &&
        details.travelTicketNataliia !== undefined &&
        details.livingMonths &&
        details.moveInDays &&
        details.moveOutDays

      return isFormFilledIn
    })
  )

  return {
    flatsDetails,
    filledInFlatsDetails
  }
})
