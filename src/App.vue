<script setup lang="ts">
import InputsForm from '@/components/InputsForm.vue'
import PricingMatrix from '@/components/PricingMatrix.vue'
import { useStore } from './store'

const store = useStore()
</script>

<template>
  <div class="wrapper">
    <InputsForm />
    <PricingMatrix
      v-for="(flatDetails, index) in store.filledInFlatsDetails"
      :key="index"
      :price="flatDetails.price"
      :label="flatDetails.label"
      :travelTicketMisha="flatDetails.travelTicketMisha"
      :travelTicketNataliia="flatDetails.travelTicketNataliia"
      :livingMonths="flatDetails.livingMonths"
      :oneTimeCosts="flatDetails.oneTimeCosts"
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
}
</style>
