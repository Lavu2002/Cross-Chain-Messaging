<template>
  <v-btn
    class="swap-btn"
    large
    block
    :loading="loading"
    :disabled="disabled"
    @click="$emit('click')"
  >
    CROSSCHAIN SWAP
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps({
  loading: Boolean,
  disabled: Boolean,
})
</script>

<style scoped>
.swap-btn {
  background: linear-gradient(90deg, #9fa8ff 0%, #5b6bff 100%);
  font-size: 1rem;
  font-weight: 500;
  border-radius: 10px;
  margin-top: 8px;
  margin-bottom: 8px;
  height: 48px;
}
</style>
