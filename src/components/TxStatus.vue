<template>
    <div class="status-container" v-if="sourceTx || destTx || message">
      <div v-if="sourceTx" class="status-item">
        <span class="label">Source Tx:</span>
        <a :href="sourceExplorer" target="_blank" class="tx-link">{{ sourceTx }}</a>
      </div>
  
      <div v-if="destTx" class="status-item">
        <span class="label">Destination Tx:</span>
        <a :href="destExplorer" target="_blank" class="tx-link">{{ destTx }}</a>
      </div>
  
      <div v-if="message" class="status-item delivered-message">
        <span class="label">Message Delivered:</span>
        “{{ message }}”
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  
  const props = defineProps({
    sourceTx: String,
    destTx: String,
    message: String,
  })
  
  const sourceExplorer = computed(() =>
    props.sourceTx ? `https://etherscan.io/tx/${props.sourceTx}` : ''
  )
  
  const destExplorer = computed(() =>
    props.destTx ? `https://optimistic.etherscan.io/tx/${props.destTx}` : ''
  )
  </script>
  
  <style scoped>
  .status-container {
    border: 1px solid #ddd;
    background-color: #fdfdfd;
    border-radius: 8px;
    padding: 20px;
    max-width: 800px;
    margin: 24px auto;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
    font-family: 'Segoe UI', sans-serif;
  }
  
  .status-item {
    margin-bottom: 12px;
    font-size: 1rem;
    line-height: 1.5;
  }
  
  .label {
    font-weight: 600;
    color: #074a85;
    margin-right: 6px;
  }
  
  .tx-link {
    color: #074a85;
    text-decoration: none;
    word-break: break-all;
  }
  
  .tx-link:hover {
    text-decoration: underline;
  }
  
  .delivered-message {
    font-style: italic;
    color: #333;
  }
  </style>