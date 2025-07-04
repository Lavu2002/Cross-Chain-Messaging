<template>
  <div class="token-chain-selector">
    <span class="section-label">{{ label }}</span>
    <div class="swap-row">
      <AmountInput v-model="amountProxy" :disabled="disabled" />
      <TokenSelector v-model="tokenProxy" :tokens="tokens" :disabled="disabled" />
      <NetworkSelector v-model="chainProxy" :chains="chains" :disabled="disabled" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AmountInput from './AmountInput.vue'
import TokenSelector from './TokenSelector.vue'
import NetworkSelector from './NetworkSelector.vue'
import { computed } from 'vue'

const props = defineProps({
  label: String,
  amount: String,
  token: String,
  chain: String,
  tokens: Array,
  chains: Array,
  disabled: Boolean,
})
const emit = defineEmits(['update:amount', 'update:token', 'update:chain'])

const amountProxy = computed({
  get: () => props.amount,
  set: (val) => emit('update:amount', val),
})
const tokenProxy = computed({
  get: () => props.token,
  set: (val) => emit('update:token', val),
})
const chainProxy = computed({
  get: () => props.chain,
  set: (val) => emit('update:chain', val),
})
</script>

<style scoped>
.token-chain-selector {
  margin-bottom: 18px;
}
.section-label {
  font-size: 0.95rem;
  color: #b0b3c7;
  margin-bottom: 6px;
  display: block;
}
.swap-row {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
