<script setup lang="ts">
import finalizeCalculations from '@/modules/finalizeCalculations'
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()

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
        price: store.flatPrice,
        label: store.energyLabel,
        travelTicketMisha: store.travelTicketMisha,
        travelTicketNataliia: store.travelTicketNataliia,
        daysBeforeMoveIn: daysToMoveOut,
        newFlatNoticePeriod: noticePeriod,
        livingMonths: store.livingMonths,
        oneTimeCosts: store.oneTimeCosts
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
</template>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  margin: 25px 0;
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
