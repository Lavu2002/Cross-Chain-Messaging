# 🚀 TransactFreely – Cross-Chain Swap & Messenger Dashboard

A modern, responsive dashboard for **simulated cross-chain token swaps and messaging**, built using **Vue 3**, **Vite**, and **Vuetify**.

> **"Bond, Swap, or Bridge with 4000+ tokens across all chains" — the DeFi way, beautifully presented.**

## 🌟 Features

- ✅ **Cross-Chain Swap Simulation**  
  Swap tokens across chains like Ethereum Sepolia, Optimism Goerli, and others _(mocked logic)_.

- ✅ **Token & Network Selectors**  
  Select from popular tokens like USDT, USDC, ETH, and SOL, and supported testnet chains.

- ✅ **Optional Cross-Chain Messaging**  
  Attach short messages (e.g., DAO payments or invoice notes) with your token transfer.

- ✅ **Visual Transaction Timeline**  
  Displays each step: _Source Tx → Destination Receipt → Message Delivered_.

- ✅ **Snackbar & Loader Feedback**  
  Smooth UI feedback including spinners and toast messages.

- ✅ **Responsive Dark UI**  
  Inspired by modern DeFi apps — mobile-friendly and pixel-polished.

- ⚠️ **Mocked Bridge Logic & Rates**  
  Conversion rates, gas fees, and routing are **simulated** for UI demonstration.

- 🚧 **Wallet Connect (UI only)**  
  Connect button and states are built, but not yet wired to MetaMask or WalletConnect.

## 📦 Tech Stack

- **Vue 3** + `<script setup>`
- **Vite** (super fast dev server & bundler)
- **Vuetify 3** (Material Design framework)
- **TypeScript** (type safety)
- **CSS Animations & Vuetify Transitions**

## 🗂️ Project Directory Structure

```
src/
├── assets/
│   ├── base.css
│   ├── main.css
│   └── logo.svg
├── components/
│   ├── AmountInput.vue
│   ├── MessageInput.vue
│   ├── NetworkSelector.vue
│   ├── SwapButton.vue
│   ├── SwapCard.vue
│   ├── TokenSelector.vue
│   ├── TransactionHistory.vue
│   ├── WalletConnectButton.vue
│   ├── crossChainMessenger.vue
│   └── header.vue
├── router/
│   └── index.ts
├── views/
│   ├── Messenger.vue
│   └── HistoryView.vue
├── App.vue
├── main.ts
└── shims-vue.d.ts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Install & Run

```bash
npm install
# or
yarn install

npm run dev
```
