<template>
  <v-select
    v-model="value"
    :items="tokensDisplay"
    class="token-selector"
    :disabled="disabled"
    hide-details
    variant="solo"
    density="comfortable"
    placeholder="Token"
    item-title="label"
    item-value="value"
  >
    <!-- Custom dropdown item -->
    <!-- <template #item="{ item }">
      <div class="d-flex align-center">
        <span class="token-icon">{{ item.raw.icon }}</span>
        <span>{{ item.raw.label }}</span>
      </div>
    </template>

    <template #selection="{ item }">
      <div class="d-flex align-center">
        <span class="token-icon">{{ item.raw.icon }}</span>
        <span>{{ item.raw.label }}</span>
      </div>
    </template> -->
  </v-select>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: String,
  tokens: {
    type: Array as () => Array<{ symbol: string; icon: string; value?: string }>,
    default: () => [],
  },
  disabled: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const tokensDisplay = computed(() =>
  props.tokens.map((t) => ({
    label: t.symbol,
    value: t.symbol,
    icon: t.icon || '',
  })),
)
</script>

<style scoped>
.token-selector {
  min-width: 100px;
  max-width: 140px;
  font-size: 1.1rem;
  background: #181c2f;
  color: #fff;
  border-radius: 8px;
}

.token-icon {
  margin-right: 6px;
  font-size: 1.2em;
}
</style>
