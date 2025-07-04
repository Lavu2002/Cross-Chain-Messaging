<template>
  <v-text-field
    v-model="value"
    type="number"
    class="amount-input"
    :disabled="disabled"
    hide-details
    variant="solo"
    density="comfortable"
    placeholder="0.00"
    inputmode="decimal"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  modelValue: String,
  disabled: Boolean,
})
const emit = defineEmits(['update:modelValue'])
const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>

<style scoped>
.amount-input {
  max-width: 120px;
  font-size: 1.3rem;
  background: #181c2f;
  color: #fff;
  border-radius: 8px;
}
</style>
