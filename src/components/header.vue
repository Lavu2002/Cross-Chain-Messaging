<template>
  <header class="app-header">
    <div class="header-container">
      <h1 class="logo">TransactFreely</h1>
      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/history">History</RouterLink>
      </nav>
      <WalletConnectButton />
    </div>
  </header>
</template>

<script setup lang="ts">
import WalletConnectButton from '@/components/WalletConnectButton.vue'
</script>

<style scoped>
.app-header {
  background: linear-gradient(135deg, #181c2f 0%, #23243a 100%);
  color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-links a {
  color: white;
  margin-left: 24px;
  text-decoration: none;
  font-size: 1rem;
  transition: opacity 0.2s;
}

.nav-links a:hover {
  opacity: 0.85;
}

.router-link-active {
  text-decoration: underline;
  font-weight: bold;
}
</style>
