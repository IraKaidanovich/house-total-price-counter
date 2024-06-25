<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useStore } from '@/store'

const { flatsDetails } = storeToRefs(useStore())
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

      <FormKit type="form" v-model="flatsDetails">
        <FormKit type="repeater" name="list" #default="{ index }">
          <div class="form__inputs">
            <div class="form__input form__input--name">
              <FormKit type="text" label="Flat name" name="name" :value="`Flat ${index + 1}`" />
            </div>

            <div class="form__input">
              <FormKit
                type="number"
                label="Price of a new flat (Per month)"
                name="price"
                :value="0"
              />
            </div>

            <div class="form__input">
              <FormKit
                type="select"
                label="Energy label"
                :options="['A', 'B', 'C', 'D', 'E', 'F', 'G']"
                name="label"
                :placeholder="' '"
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
                :placeholder="' '"
                name="travelTicketMisha"
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
                :placeholder="' '"
                name="travelTicketNataliia"
              />
            </div>

            <div class="form__input">
              <FormKit
                type="number"
                label="How much months will you live there?"
                validation="min:12"
                name="livingMonths"
                :value="12"
              />
            </div>

            <div class="form__input">
              <FormKit type="number" label="One-time costs" name="oneTimeCosts" :value="0" />
            </div>

            <div class="form__input">
              <FormKit
                type="number"
                label="Days before moving in the new flat"
                name="moveInDays"
                :value="0"
              />
            </div>

            <div class="form__input">
              <FormKit
                type="number"
                label="Days before moving out from new flat"
                name="moveOutDays"
                :value="0"
              />
            </div>
          </div>
        </FormKit>
      </FormKit>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  padding: 20px 0;

  &__inputs {
    display: flex;
    flex-wrap: wrap;
    margin: 20px -20px -20px;
  }

  &__input {
    margin: 0 20px 20px;

    &--name :deep {
      width: 100%;

      input {
        font-weight: bold;
        color: #0049de;
      }
    }
  }
}
</style>
