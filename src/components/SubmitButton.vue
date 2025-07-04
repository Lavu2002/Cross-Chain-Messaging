<template>
  <v-btn :loading="loading" color="primary" @click="$emit('submit')" :disabled="disabled">
    Send Message
  </v-btn>
</template>

<script setup lang="ts">
defineProps({ loading: Boolean, disabled: Boolean })
defineEmits(['submit'])
</script>
