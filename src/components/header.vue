<template>
  <header class="app-header">
    <div class="header-container">
      <h1 class="logo">TransactFreely</h1>

      <!-- Desktop Navigation -->
      <nav class="nav-links desktop-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/history">History</RouterLink>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="mobile-menu-btn"
        @click="toggleMobileMenu"
        :class="{ active: isMobileMenuOpen }"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <WalletConnectButton />
    </div>

    <!-- Mobile Navigation Overlay -->
    <div class="mobile-nav-overlay" :class="{ active: isMobileMenuOpen }" @click="closeMobileMenu">
      <nav class="mobile-nav" @click.stop>
        <div class="mobile-nav-header">
          <h2>Menu</h2>
          <button class="close-btn" @click="closeMobileMenu">
            <span class="close-icon">×</span>
          </button>
        </div>
        <div class="mobile-nav-links">
          <RouterLink to="/" @click="closeMobileMenu" class="mobile-nav-link">
            <span class="nav-icon"></span>
            Home
          </RouterLink>
          <RouterLink to="/history" @click="closeMobileMenu" class="mobile-nav-link">
            <span class="nav-icon"></span>
            History
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WalletConnectButton from '@/components/WalletConnectButton.vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.app-header {
  background: linear-gradient(135deg, #181c2f 0%, #23243a 100%);
  color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  position: relative;
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

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  gap: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.mobile-menu-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease;
}

.mobile-menu-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Mobile Navigation Overlay */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-nav-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-nav {
  position: fixed;
  top: 0;
  right: -300px;
  width: 280px;
  height: 100%;
  background: linear-gradient(135deg, #181c2f 0%, #23243a 100%);
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
}

.mobile-nav-overlay.active .mobile-nav {
  right: 0;
}

.mobile-nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav-header h2 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.close-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.close-icon {
  display: block;
  line-height: 1;
}

.mobile-nav-links {
  flex: 1;
  padding: 20px 0;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.2s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.mobile-nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.mobile-nav-link.router-link-active {
  background-color: rgba(108, 140, 255, 0.2);
  border-left: 3px solid #6c8cff;
}

.nav-icon {
  margin-right: 12px;
  font-size: 1.2rem;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .header-container {
    padding: 12px 16px;
  }

  .logo {
    font-size: 1.3rem;
    display: none;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 8px 12px;
  }

  .logo {
    font-size: 1.1rem;
    display: none;
  }

  .mobile-nav {
    width: 260px;
  }

  .mobile-nav-header {
    padding: 16px;
  }

  .mobile-nav-link {
    padding: 14px 16px;
    font-size: 0.95rem;
  }
}
</style>
