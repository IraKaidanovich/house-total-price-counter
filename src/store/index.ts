import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('main', () => {
  const flatPrice = ref(null as number)
  const energyLabel = ref(null as string)
  const travelTicketMisha = ref(null as number)
  const travelTicketNataliia = ref(null as number)
  const livingMonths = ref(null as number)

  const isFormFilledIn = computed(() => {
    return (
      flatPrice.value &&
      energyLabel.value !== null &&
      travelTicketMisha.value !== null &&
      travelTicketNataliia.value !== null &&
      livingMonths.value
    )
  })

  return {
    flatPrice,
    energyLabel,
    travelTicketMisha,
    travelTicketNataliia,
    livingMonths,
    isFormFilledIn
  }
})
