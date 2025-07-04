<template>
    <v-card class="swap-card">
      <div class="swap-header">
        <span class="swap-title">Cross-Chain Messenger</span>
      </div>
  
      <!-- Message Input -->
      <div class="swap-section">
        <span class="section-label">Message</span>
        <v-textarea
          v-model="message"
          placeholder="Enter your message"
          variant="solo"
          hide-details
          auto-grow
          :disabled="loading"
        />
      </div>
  
      <!-- Chain Selection -->
      <div class="swap-row">
        <v-select v-model="sourceChain" :items="chains" label="Source Chain" variant="solo" hide-details />
        <v-select v-model="destChain" :items="chains" label="Destination Chain" variant="solo" hide-details />
      </div>
  
      <!-- Send Button -->
      <v-btn class="swap-btn" block :loading="loading" @click="sendMessage">
        Send Cross-Chain Message
      </v-btn>
  
      <!-- Status Display -->
      <div class="status-row" v-if="sourceTxHash">
        📤 Source Tx Hash: <code>{{ sourceTxHash }}</code>
      </div>
      <div class="status-row" v-if="destinationReceipt">
        📥 Destination Receipt: <code>{{ destinationReceipt }}</code>
      </div>
      <div class="status-row" v-if="receivedMessage">
        ✅ Message Received on {{ destChain }}: "{{ receivedMessage }}"
      </div>
    </v-card>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const message = ref('')
  const sourceChain = ref('Ethereum Sepolia')
  const destChain = ref('Polygon Mumbai')
  const loading = ref(false)
  
  const sourceTxHash = ref('')
  const destinationReceipt = ref('')
  const receivedMessage = ref('')
  
  const chains = [
    'Ethereum Sepolia',
    'Optimism Goerli',
    'Arbitrum Sepolia',
    'Base Sepolia',
    'Polygon Mumbai',
  ]
  
  function sendMessage() {
    if (!message.value || !sourceChain.value || !destChain.value) return
  
    loading.value = true
    sourceTxHash.value = ''
    destinationReceipt.value = ''
    receivedMessage.value = ''
  
    // Step 1: Simulate sending
    setTimeout(() => {
      sourceTxHash.value = '0x1234abcd5678ef901234abcd5678ef901234abcd'
    }, 1000)
  
    // Step 2: Simulate receiving
    setTimeout(() => {
      destinationReceipt.value = '0xabcd56781234abcd5678ef901234abcd5678ef90'
      receivedMessage.value = message.value
      loading.value = false
    }, 2500)
  }
  </script>
  
  <style scoped>
  .swap-card {
    background: #23243a;
    border-radius: 18px;
    padding: 28px;
    max-width: 620px;
    margin: 32px auto;
    color: #f5f6fa;
  }
  .swap-header {
    text-align: center;
    margin-bottom: 20px;
  }
  .swap-title {
    font-size: 1.4rem;
    font-weight: 600;
  }
  .swap-section {
    margin-bottom: 16px;
  }
  .swap-row {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  .swap-btn {
    background: linear-gradient(90deg, #6c8cff, #5b6bff);
    color: white;
    font-weight: 600;
  }
  .status-row {
    margin-top: 12px;
    font-size: 0.9rem;
    color: #b0b3c7;
  }
  </style>