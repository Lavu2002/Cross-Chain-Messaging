<template>
  <div class="swap-info-row">
    <span class="conversion-rate"
      >1 {{ conversionRate.token }} ≈ {{ conversionRate.value }}
      {{ conversionRate.targetToken }}</span
    >
    <span class="gas-fee">Gas: {{ gasFee }} | Route: {{ optimalRoute }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  conversionRate: Object, // { token, value, targetToken }
  gasFee: String,
  optimalRoute: String,
})
</script>

<style scoped>
.swap-info-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  color: #b0b3c7;
  margin: 18px 0 10px 0;
}
</style>
