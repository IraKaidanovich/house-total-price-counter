import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('main', () => {
  const flatPrice = ref(0)
  const energyLabel = ref('A')
  const travelTicketMisha = ref(0)
  const travelTicketNataliia = ref(0)
  const livingYears = ref(0)

  return { flatPrice, energyLabel, travelTicketMisha, travelTicketNataliia, livingYears }
})
