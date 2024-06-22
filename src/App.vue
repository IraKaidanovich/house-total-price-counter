<script setup lang="ts">
import InputsForm from '@/components/InputsForm.vue'
import PricingMatrix from '@/components/PricingMatrix.vue'
</script>

<template>
  <div class="wrapper">
    <InputsForm />
    <PricingMatrix />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
}
</style>
