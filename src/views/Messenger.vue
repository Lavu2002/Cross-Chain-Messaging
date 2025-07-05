<template>
  <div class="dashboard-bg">
    <header class="dashboard-header">
      <h1>Transact <span class="highlight">Freely</span></h1>
      <p class="subtitle">Bond, Swap or Bridge with 4000+ tokens across all chains</p>
    </header>

    <main class="dashboard-main">
      <SwapCard />
    </main>

    <footer class="dashboard-footer">
      <div class="stat">Total Swap Volume <span class="stat-value">$620.961 M</span></div>
      <div class="stat">Total Transactions <span class="stat-value">$204.84 K</span></div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import SwapCard from '@/components/SwapCard.vue'
</script>

<script lang="ts">
export default {
  name: 'MessengerView',
}
</script>

<style scoped>
.dashboard-bg {
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
.subtitle {
  color: #b0b3c7;
  font-size: 1.1rem;
  margin-top: 8px;
  margin-bottom: 24px;
}
.dashboard-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.dashboard-footer {
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 32px 0 24px 0;
  font-size: 1.1rem;
  color: #b0b3c7;
}
.stat {
  text-align: center;
}
.stat-value {
  display: block;
  font-size: 1.3rem;
  color: #fff;
  font-weight: 600;
  margin-top: 4px;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .dashboard-header {
    padding: 24px 16px 16px 16px;
  }

  .dashboard-header h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
    margin-bottom: 16px;
  }

  .dashboard-footer {
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    font-size: 1rem;
  }

  .stat-value {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .dashboard-header h1 {
    font-size: 1.6rem;
  }

  .subtitle {
    font-size: 0.9rem;
  }

  .dashboard-footer {
    font-size: 0.9rem;
  }

  .stat-value {
    font-size: 1rem;
  }
}
</style>
