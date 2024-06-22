<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useStore } from '@/store'

const {
  flatPrice,
  energyLabel,
  travelTicketMisha,
  travelTicketNataliia,
  livingMonths,
  oneTimeCosts
} = storeToRefs(useStore())
</script>

<template>
  <div class="form">
    <div class="form__flat-details">
      <h2 class="form__flat-title">Current flat (Nachtegaalstraat 31B)</h2>

      <div class="form__inputs">
        <div class="form__input">
          <FormKit
            type="number"
            label="Price of the current flat (Per month)"
            :value="1500"
            :disabled="true"
          />
        </div>

        <div class="form__input">
          <FormKit
            type="select"
            label="Energy label"
            :value="'F'"
            :options="['F']"
            :disabled="true"
          />
        </div>

        <div class="form__input">
          <FormKit
            type="text"
            label="Shared savings (Per month)"
            :value="'400 euros'"
            :disabled="true"
          />
        </div>
      </div>
    </div>

    <div class="form__flat-details">
      <h2 class="form__flat-title">New flat</h2>

      <div class="form__inputs">
        <div class="form__input">
          <FormKit type="number" label="Price of a new flat (Per month)" v-model="flatPrice" />
        </div>

        <div class="form__input">
          <FormKit
            type="select"
            label="Energy label"
            :options="['', 'A', 'B', 'C', 'D', 'E', 'F', 'G']"
            v-model="energyLabel"
          />
        </div>

        <div class="form__input">
          <FormKit
            type="select"
            label="Travel ticket Misha"
            :options="{
              0: '0 Zones',
              1: '1 Zone',
              2: '2 Zones',
              3: '3 Zones',
              4: '4 Zones',
              5: '5 Zones',
              6: '6 Zones',
              7: 'Full city'
            }"
            v-model="travelTicketMisha"
            :placeholder="' '"
          />
        </div>

        <div class="form__input">
          <FormKit
            type="select"
            label="Travel ticket Nataliia"
            :options="{
              0: '0 Zones',
              1: '1 Zone',
              2: '2 Zones',
              3: '3 Zones',
              4: '4 Zones',
              5: '5 Zones',
              6: '6 Zones',
              7: 'Full city'
            }"
            v-model="travelTicketNataliia"
            :placeholder="' '"
          />
        </div>

        <div class="form__input">
          <FormKit
            type="number"
            label="How much months will you live there?"
            v-model="livingMonths"
            validation="min:12"
          />
        </div>

        <div class="form__input">
          <FormKit
            type="number"
            label="One-time costs"
            v-model="oneTimeCosts"
            validation="min:12"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  padding: 20px 0;

  &__inputs {
    display: flex;
    margin: 20px -10px -20px;
  }

  &__input {
    margin: 0 10px 20px;
  }
}
</style>
