<script setup lang="ts">
import InputsForm from '@/components/InputsForm.vue'
import PricingMatrix from '@/components/PricingMatrix.vue'
import { useStore } from './store'

const store = useStore()
</script>

<template>
  <div class="wrapper">
    <InputsForm />
    <PricingMatrix v-if="store.isFormFilledIn" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
}
</style>
