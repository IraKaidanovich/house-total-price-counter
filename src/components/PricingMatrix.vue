<script setup lang="ts">
import finalizeCalculations from '@/modules/finalizeCalculations'
import { useStore } from '@/store'
import { computed } from 'vue'

interface Props {
  price
  label
  travelTicketMisha
  travelTicketNataliia
  livingMonths
  oneTimeCosts
}

const props = defineProps<Props>()

const moveOutDays = [0, 7, 15, 30, 45, 60]
const noticePeriods = [30, 60]

const getResults = () => {
  const results: {
    [key: string]: {
      [key: string]: ReturnType<typeof finalizeCalculations>
    }
  } = {}

  moveOutDays.forEach((daysToMoveOut) => {
    const result = {}

    noticePeriods.forEach((noticePeriod) => {
      const calculation = finalizeCalculations({
        price: props.price,
        label: props.label,
        travelTicketMisha: props.travelTicketMisha,
        travelTicketNataliia: props.travelTicketNataliia,
        daysBeforeMoveIn: daysToMoveOut,
        newFlatNoticePeriod: noticePeriod,
        livingMonths: props.livingMonths,
        oneTimeCosts: props.oneTimeCosts
      })

      result[noticePeriod] = calculation
    })

    results[daysToMoveOut] = result
  })

  return results
}

const calculationsResults = computed(() => getResults())
</script>

<template>
  <div class="pricing-matrix">
    <div class="properties">
      <div class="properties__items">
        <div class="property">Price (Per month): {{ price }} euros</div>
        <div class="property">Energy label: {{ label }}</div>
        <div class="property">
          Travel ticket Misha:
          {{ travelTicketMisha === 7 ? 'Full city' : travelTicketMisha + ' zones' }}
        </div>
        <div class="property">
          Travel ticket Nataliia:
          {{ travelTicketNataliia === 7 ? 'Full city' : travelTicketNataliia + ' zones' }}
        </div>
        <div class="property">
          How much months will you live there?:
          {{ livingMonths }} months
        </div>

        <div class="property">
          One time costs:
          {{ oneTimeCosts }} euros
        </div>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th></th>
          <th v-for="noticePeriod in noticePeriods" :key="noticePeriod">
            New flat notice of {{ noticePeriod }} days
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(calculationsForDaysBeforeMoveIn, daysBeforeMoveIn) in calculationsResults"
          :key="daysBeforeMoveIn"
        >
          <td>{{ daysBeforeMoveIn }} days to move out</td>
          <td
            v-for="(calculationForNoticePeriod, noticePeriod) in calculationsForDaysBeforeMoveIn"
            :key="noticePeriod"
          >
            {{ calculationForNoticePeriod.weWillSave }} euros
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.properties {
  background: #ca3600;
  border-bottom: 0;
  padding: 10px;

  &__items {
    display: flex;
    align-items: center;
    margin: 0 -10px -20px;
  }
}

.property {
  margin: 0 10px 20px;
  color: #fff;
}

table {
  border-collapse: collapse;
  margin: 0 0 25px;
  font-size: 0.9em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 100%; /* Optional: Set table width to 100% */
}

thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

th,
td {
  padding: 12px 15px;
}

tbody tr {
  border-bottom: 1px solid #dddddd;
}

tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}

tbody tr:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}

th {
  background-color: #009879;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: bold;
  text-align: left;
}

td:first-child {
  background-color: #e94949;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: bold;
  text-align: left;
}

td:not(:first-child) {
  font-size: 0.9em;
  line-height: 1.6;
}

caption {
  caption-side: bottom;
  padding: 10px;
  font-style: italic;
  color: #666;
}
</style>
