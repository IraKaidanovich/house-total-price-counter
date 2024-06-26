<script setup lang="ts">
import finalizeCalculations from '@/modules/finalizeCalculations'
import { computed } from 'vue'
import type { Flat } from '@/store'

interface Props {
  flats: Flat[]
}

const props = defineProps<Props>()

const getResults = () => {
  let results: {
    name: string
    price: number
    backgroundColor: string
  }[] = []

  props.flats.forEach((flat) => {
    const calculation = finalizeCalculations({
      price: flat.price,
      label: flat.label,
      travelTicketMisha: flat.travelTicketMisha,
      travelTicketNataliia: flat.travelTicketNataliia,
      daysBeforeMoveIn: flat.moveInDays,
      newFlatNoticePeriod: flat.moveOutDays,
      livingMonths: flat.livingMonths,
      oneTimeCosts: flat.oneTimeCosts
    })

    results.push({
      name: flat.name,
      price: calculation.weWillSave,
      backgroundColor: flat.backgroundColor
    })
  })

  return results
}

const flatsPrices = computed(() => getResults())
</script>

<template>
  <div class="pricing-matrix">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(flatPrice, index) in flatsPrices"
          :key="index"
          :style="{ backgroundColor: flatPrice.backgroundColor }"
        >
          <td>{{ flatPrice.name }}</td>
          <td>{{ flatPrice.price }} euros</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
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

tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}

th {
  background-color: #009879;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: bold;
  text-align: left;
}

td {
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: bold;
  text-align: left;
}

td:not(:first-child) {
  font-size: 0.9em;
  line-height: 1.6;
}

tr:nth-child(4n) {
  background: #c1cfc3;
}

tr:nth-child(4n - 1) {
  background: #7cf585;
}

tr:nth-child(4n - 2) {
  background: #67d7f2;
}

tr:nth-child(4n - 3) {
  background: #ffd882;
}

caption {
  caption-side: bottom;
  padding: 10px;
  font-style: italic;
  color: #666;
}
</style>
