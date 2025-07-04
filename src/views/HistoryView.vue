<template>
  <div class="history-bg">
    <header class="dashboard-header">
      <h1>Transaction <span class="highlight">History</span></h1>
    </header>
    <main class="dashboard-main">
      <TransactionHistory />
    </main>
  </div>
</template>

<script setup lang="ts">
import TransactionHistory from '@/components/TransactionHistory.vue'
</script>

<style scoped>
.history-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, #181c2f 0%, #23243a 100%);
  color: #f5f6fa;
  display: flex;
  flex-direction: column;
}
.dashboard-header {
  text-align: center;
  padding: 48px 0 24px 0;
}
.dashboard-header h1 {
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
}
.dashboard-header .highlight {
  color: #6c8cff;
}
.dashboard-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
</style>
