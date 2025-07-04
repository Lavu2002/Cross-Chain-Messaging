<template>
  <div class="message-input">
    <v-textarea
      v-model="messageValue"
      label="Optional message"
      variant="outlined"
      auto-grow
      rows="2"
      color="#074a85"
      class="custom-textarea"
      :disabled="disabled"
    />
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, computed } from 'vue'

const emit = defineEmits(['update:message'])
const props = defineProps({ message: String, disabled: Boolean })

const messageValue = computed({
  get: () => props.message,
  set: (value) => emit('update:message', value),
})
</script>

<style scoped>
.message-input {
  max-width: 600px;
  margin: 0 auto;
  padding: 8px 0;
}

.custom-textarea :deep(.v-input__control) {
  background-color: white;
  border-radius: 6px;
}

.custom-textarea :deep(.v-label) {
  color: #074a85;
  font-weight: 500;
}

.custom-textarea :deep(.v-input__control--focused) {
  border-color: #074a85 !important;
}
</style>
