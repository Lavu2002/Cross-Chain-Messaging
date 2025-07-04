<template>
  <div class="chain-selector">
    <v-select
      :items="chains"
      :label="label"
      v-model="selected"
      variant="outlined"
      color="#074a85"
      class="custom-select"
      @update:modelValue="emit('update:modelValue', $event)"
      :disabled="disabled"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  chains: {
    type: Array,
    required: true,
  },
  disabled: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const selected = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    selected.value = val
  },
)
</script>

<style scoped>
.chain-selector {
  max-width: 400px;
  margin: 16px auto;
}

/* Deep styling for Vuetify input elements */
.custom-select :deep(.v-label) {
  color: #074a85;
  font-weight: 500;
}

.custom-select :deep(.v-input__control) {
  background-color: white;
  border-radius: 6px;
}

.custom-select :deep(.v-input__control--focused) {
  border-color: #074a85 !important;
}
</style>
