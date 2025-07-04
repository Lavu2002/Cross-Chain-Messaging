<template>
  <v-card class="swap-card">
    <!-- Loader Overlay with Timeline -->
    <v-overlay
      :model-value="loading"
      class="swap-loader-overlay"
      persistent
      transition="fade-transition"
    >
      <v-progress-circular indeterminate size="48" color="green" class="w-100" />
      <div class="loader-text">Processing your cross-chain swap...</div>

      <ul class="timeline">
        <li
          v-for="(step, index) in steps"
          :key="index"
          :class="{ active: index <= currentStepIndex }"
        >
          {{ step }}
        </li>
      </ul>
    </v-overlay>

    <!-- Header -->
    <div class="swap-header">
      <span class="swap-title">Cross-Chain Swap</span>
    </div>

    <!-- Form View -->
    <template v-if="!showStatusView">
      <!-- Send Section -->
      <div class="swap-section">
        <span class="section-label">You Send</span>
        <div class="swap-row">
          <AmountInput v-model="sendAmount" :disabled="loading" />
          <TokenSelector v-model="sendToken" :tokens="tokens" :disabled="loading" />
          <NetworkSelector v-model="sendChain" :chains="chains" :disabled="loading" />
        </div>
      </div>

      <!-- Swap Arrow -->
      <div class="swap-arrow-row">
        <v-btn icon class="swap-arrow-btn" @click="swapDirection" :disabled="loading">
          <v-icon>mdi-arrow-down</v-icon>
        </v-btn>
      </div>

      <!-- Receive Section -->
      <div class="swap-section">
        <span class="section-label">You Receive</span>
        <div class="swap-row">
          <AmountInput v-model="receiveAmount" :disabled="true" />
          <TokenSelector v-model="receiveToken" :tokens="tokens" :disabled="loading" />
          <NetworkSelector v-model="receiveChain" :chains="chains" :disabled="loading" />
        </div>
      </div>

      <!-- Optional Message -->
      <div class="swap-section">
        <span class="section-label">Optional Message</span>
        <v-textarea
          v-model="message"
          label="Enter a message to attach with this swap"
          placeholder="E.g. For DAO payment, invoice #1234..."
          auto-grow
          variant="solo"
          hide-details
          :disabled="loading"
        />
      </div>

      <!-- Info -->
      <div class="swap-info-row">
        <span class="conversion-rate">
          1 {{ sendToken }} ≈ {{ conversionRate }} {{ receiveToken }}
        </span>
        <span class="gas-fee">Gas: {{ gasFee }} | Route: {{ optimalRoute }}</span>
      </div>

      <!-- Submit Button -->
      <v-btn class="swap-btn" large block :loading="loading" @click="handleSwap">
        CROSSCHAIN SWAP
      </v-btn>
    </template>

    <!-- Status View -->
    <transition name="fade-slide" mode="out-in">
      <div class="status-view" v-if="showStatusView" key="status-view">
        <div class="status-row">
          📤 Source Tx Hash: <code>{{ sourceTxHash }}</code>
        </div>
        <div class="status-row">
          📥 Destination Receipt: <code>{{ destinationReceipt }}</code>
        </div>
        <div class="status-row">
          ✅ Message Received on {{ receiveChain.name || receiveChain }}:
          "{{ receivedMessage }}"
        </div>
        <v-btn class="swap-btn mt-4" block color="secondary" @click="resetSwap">
          🔁 Send Another Message
        </v-btn>
      </div>
    </transition>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import AmountInput from './AmountInput.vue'
import TokenSelector from './TokenSelector.vue'
import NetworkSelector from './NetworkSelector.vue'

// Static Data
const tokens = ['USDT', 'USDC', 'ETH', 'SOL']
const chains = [
  { name: 'Ethereum Sepolia' },
  { name: 'Optimism Goerli' },
  { name: 'Arbitrum Sepolia' },
  { name: 'Base Sepolia' },
  { name: 'Polygon Mumbai' }
]

// States
const sendAmount = ref('10.00')
const receiveAmount = ref('')
const sendToken = ref('USDT')
const receiveToken = ref('ETH')
const sendChain = ref('Ethereum Sepolia')
const receiveChain = ref('Polygon Mumbai')
const message = ref('')
const loading = ref(false)
const showStatusView = ref(false)
const showSnackbar = ref(false)
const snackbarMessage = ref('')

// Mock Result State
const sourceTxHash = ref('')
const destinationReceipt = ref('')
const receivedMessage = ref('')

// Timeline Steps
const steps = [
  'Initializing swap request...',
  'Validating source network...',
  'Sending tokens across chain...',
  'Confirming on destination network...',
  'Finalizing and delivering message...'
]
const currentStepIndex = ref(0)
let pollingInterval: ReturnType<typeof setInterval> | null = null

// Rates
const mockRates: Record<string, Record<string, number>> = {
  USDT: { ETH: 0.00032, SOL: 0.035, USDC: 1 },
  ETH: { USDT: 3125, SOL: 110, USDC: 3100 },
  SOL: { USDT: 28.57, ETH: 0.009, USDC: 28.3 },
  USDC: { USDT: 1, ETH: 0.00031, SOL: 0.034 },
}
const conversionRate = computed(() => {
  if (sendToken.value === receiveToken.value) return '1.00'
  const rate = mockRates[sendToken.value]?.[receiveToken.value]
  return rate?.toFixed(6) ?? 'N/A'
})
watchEffect(() => {
  const rate = parseFloat(conversionRate.value)
  const amount = parseFloat(sendAmount.value)
  const result = rate * amount
  receiveAmount.value = !isNaN(result) ? result.toFixed(2) : ''
})

// UI Static Info
const gasFee = computed(() => '$2.50')
const optimalRoute = computed(() => 'Fastest')

// Methods
function swapDirection() {
  ;[sendToken.value, receiveToken.value] = [receiveToken.value, sendToken.value]
  ;[sendChain.value, receiveChain.value] = [receiveChain.value, sendChain.value]
}

function handleSwap() {
  if (!sendAmount.value || parseFloat(sendAmount.value) <= 0) {
    snackbarMessage.value = '❌ Please enter a valid amount.'
    showSnackbar.value = true
    return
  }

  loading.value = true
  showStatusView.value = false
  sourceTxHash.value = ''
  destinationReceipt.value = ''
  receivedMessage.value = ''
  currentStepIndex.value = 0

  pollingInterval = setInterval(() => {
    if (currentStepIndex.value < steps.length - 1) {
      currentStepIndex.value++
    }
  }, 600)

  // Simulate source tx
  setTimeout(() => {
    sourceTxHash.value = '0x1234abcd5678ef901234abcd5678ef901234abcd'
  }, 1000)

  // Simulate destination confirmation
  setTimeout(() => {
    clearInterval(pollingInterval!)
    currentStepIndex.value = steps.length - 1
    destinationReceipt.value = '0xabcd56781234abcd5678ef901234abcd5678ef90'
    receivedMessage.value = message.value
    loading.value = false
    showStatusView.value = true
    snackbarMessage.value = '✅ Message delivered successfully!'
    showSnackbar.value = true
  }, 3200)
}

function resetSwap() {
  sendAmount.value = '10.00'
  receiveAmount.value = ''
  sendToken.value = 'USDT'
  receiveToken.value = 'ETH'
  sendChain.value = 'Ethereum Sepolia'
  receiveChain.value = 'Polygon Mumbai'
  message.value = ''
  sourceTxHash.value = ''
  destinationReceipt.value = ''
  receivedMessage.value = ''
  loading.value = false
  showStatusView.value = false
  currentStepIndex.value = 0
}
</script>

<style scoped>
.swap-card {
  background: #23243a;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  width: 620px;
  margin: 32px auto;
  padding: 32px 28px 24px;
  color: #f5f6fa;
  position: relative;
}
.swap-header {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}
.swap-title {
  font-size: 1.3rem;
  font-weight: 600;
}
.swap-section {
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
.swap-arrow-row {
  display: flex;
  justify-content: center;
  margin: 8px 0;
}
.swap-arrow-btn {
  background: #181c2f;
  color: #6c8cff;
  border-radius: 50%;
}
.swap-info-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  color: #b0b3c7;
  margin: 18px 0 10px;
}
.swap-btn {
  background: linear-gradient(90deg, #9fa8ff 0%, #5b6bff 100%);
  font-size: 1rem;
  font-weight: 500;
  border-radius: 10px;
  margin-top: 8px;
  height: 48px;
}
.status-row {
  margin-top: 12px;
  font-size: 0.9rem;
  color: #b0b3c7;
  text-align: center;
  word-break: break-word;
}
.status-view {
  margin-top: 20px;
  text-align: center;
  animation: fadeInUp 0.7s ease;
}
.swap-loader-overlay {
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(24, 28, 47, 0.85);
}
.loader-text {
  margin-top: 18px;
  font-size: 1.1rem;
  color: #b0b3c7;
  letter-spacing: 0.5px;
}
.timeline {
  list-style: none;
  margin-top: 20px;
  padding-left: 0;
  width: 260px;
}
.timeline li {
  font-size: 0.95rem;
  color: #777a8d;
  padding: 6px 0;
  position: relative;
  padding-left: 22px;
}
.timeline li::before {
  content: '';
  width: 10px;
  height: 10px;
  background: #44485f;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 10px;
}
.timeline li.active {
  color: #f5f6fa;
  font-weight: 500;
}
.timeline li.active::before {
  background: #5b6bff;
}
</style>