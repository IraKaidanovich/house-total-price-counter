import { computed, ref, watch } from 'vue'
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
  backgroundColor: string
}

export const useStore = defineStore('main', function () {
  const flatsDetails = ref({
    list: []
  } as {
    list: Flat[]
  })

  const filledInFlatsDetails = computed(() =>
    flatsDetails.value.list.filter((details) => {
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

  const persistToLocalStorage = () => {
    console.log('persist', flatsDetails.value)
    localStorage.setItem('flatsDetails', JSON.stringify(flatsDetails.value))
  }

  const loadFromStorage = () => {
    const jsonData = localStorage.getItem('flatsDetails')

    if (!jsonData) return

    flatsDetails.value = JSON.parse(jsonData)
  }

  loadFromStorage()
  watch(flatsDetails, persistToLocalStorage)

  return {
    flatsDetails,
    filledInFlatsDetails,
    loadFromStorage
  }
})
