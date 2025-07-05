<template>
  <v-card class="history-card">
    <!-- <div class="history-header">Transaction History</div> -->
    <v-table class="history-table" dense>
      <thead>
        <tr>
          <th>Time</th>
          <th>From</th>
          <th>To</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tx in history" :key="tx.id">
          <td>{{ tx.time }}</td>
          <td>
            {{ tx.fromAmount }} {{ tx.fromToken }}<br /><span class="chain">{{
              tx.fromChain
            }}</span>
          </td>
          <td>
            {{ tx.toAmount }} {{ tx.toToken }}<br /><span class="chain">{{ tx.toChain }}</span>
          </td>
          <td>{{ tx.fromAmount }}</td>
          <td>
            <span :class="['status', tx.status]">{{ tx.status }}</span>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup lang="ts">
const history = [
  {
    id: 1,
    time: '2 min ago',
    fromToken: 'USDT',
    fromChain: 'Ethereum',
    fromAmount: '10.34',
    toToken: 'SOL',
    toChain: 'Solana',
    toAmount: '50.00',
    status: 'Success',
  },
  {
    id: 2,
    time: '10 min ago',
    fromToken: 'ETH',
    fromChain: 'Arbitrum',
    fromAmount: '1.00',
    toToken: 'USDC',
    toChain: 'Polygon',
    toAmount: '1800.00',
    status: 'Success',
  },
  {
    id: 3,
    time: '1 hr ago',
    fromToken: 'USDC',
    fromChain: 'BNB Chain',
    fromAmount: '500.00',
    toToken: 'ETH',
    toChain: 'Ethereum',
    toAmount: '0.25',
    status: 'Pending',
  },
]
</script>

<style scoped>
.history-card {
  background: #23243a;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  max-width: 600px;
  margin: 0 auto;
  padding: 24px 18px 18px 18px;
  color: #f5f6fa;
}
.history-header {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #fff;
}
.history-table {
  width: 100%;
  color: #111111;
}
.chain {
  color: #b0b3c7;
  font-size: 0.95em;
}
.status {
  font-weight: 600;
  border-radius: 6px;
  padding: 2px 10px;
  font-size: 0.98em;
}
.status.Success {
  background: #1eae72;
  color: #fff;
}
.status.Pending {
  background: #f7b731;
  color: #23243a;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .history-card {
    max-width: 95%;
    margin: 16px auto;
    padding: 16px 12px 12px;
  }

  .history-table {
    font-size: 0.9rem;
  }

  .chain {
    font-size: 0.85em;
  }

  .status {
    font-size: 0.9em;
    padding: 1px 8px;
  }
}

@media (max-width: 480px) {
  .history-card {
    max-width: 98%;
    margin: 8px auto;
    padding: 12px 8px 8px;
  }

  .history-table {
    font-size: 0.8rem;
  }

  .chain {
    font-size: 0.8em;
  }

  .status {
    font-size: 0.85em;
    padding: 1px 6px;
  }
}
</style>
