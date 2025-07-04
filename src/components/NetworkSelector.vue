<template>
  <v-select
    v-model="value"
    :items="chainsDisplay"
    class="network-selector"
    :disabled="disabled"
    hide-details
    variant="solo"
    density="comfortable"
    placeholder="Network"
    item-title="label"
    item-value="value"
  >
    <!-- Custom dropdown item template -->
    <!-- <template #item="{ item }">
      <div class="d-flex align-center">
        <span class="chain-icon">{{ item.raw.icon }}</span>
        <span>{{ item.raw.label }}</span>
      </div>
    </template>

    <template #selection="{ item }">
      <div class="d-flex align-center">
        <span class="chain-icon">{{ item.raw.icon }}</span>
        <span>{{ item.raw.label }}</span>
      </div>
    </template> -->
  </v-select>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: String,
  chains: {
    type: Array as () => Array<{ name: string; icon: string; value?: string }>,
    default: () => [],
  },
  disabled: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

// Reactive computed list of chains with proper structure
const chainsDisplay = computed(() =>
  props.chains.map((c) => ({
    label: c.name,
    value: c.name,
    icon: c.icon || '',
  })),
)
</script>

<style scoped>
.network-selector {
  min-width: 140px;
  font-size: 1.1rem;
  background: #181c2f;
  color: #fff;
  border-radius: 8px;
}

.chain-icon {
  margin-right: 6px;
  font-size: 1.2em;
}
</style>
