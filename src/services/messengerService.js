export async function sendMessageCrossChain(message, source, destination) {
    // TODO: Replace with actual SDK logic (e.g., Hyperlane SDK)
    // This is just a mocked structure for now.
    console.log(`Sending "${message}" from ${source} to ${destination}...`)
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          sourceTx: '0x123source',
          destTx: '0x456dest',
          message
        })
      }, 3000)
    })
  }