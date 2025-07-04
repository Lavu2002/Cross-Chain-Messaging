<template>
  <div class="app-container">
    <Header />

    <main class="main-content">
      <router-view />
    </main>

    <footer class="app-footer">
      © {{ currentYear }} Cross-Chain Messenger
    </footer>
  </div>
</template>

<script setup>
import Header from '@/components/header.vue'

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f4f6f8;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}

.main-content {
  flex: 1;
  /* max-width: 960px; */
  /* margin: 0 auto; */
  /* padding: 40px 20px; */
}

.app-footer {
  text-align: center;
  font-size: 0.875rem;
  color: #777;
  padding: 20px 0;
  background-color: #f0f0f0;
  border-top: 1px solid #e0e0e0;
}
</style>