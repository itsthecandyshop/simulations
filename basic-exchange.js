const pool = {
  ethBalance: 30,
  tokenBalance: 150,

  get productConst() {
    return this.ethBalance * this.tokenBalance
  },

  get ethRate() {
    return this.ethBalance / this.tokenBalance
  },

  get tokenRate() {
    return this.tokenBalance / this.ethBalance
  },

  exchangeEthForToken(ethInputAmount) {
    const newEthBalance = this.ethBalance + ethInputAmount
    const newTokenBalance = this.productConst / newEthBalance
    const tokenOutputAmount = this.tokenBalance - newTokenBalance

    console.log('old token rate', this.tokenRate)
    this.ethBalance = newEthBalance
    this.tokenBalance = newTokenBalance
    console.log('avg token rate', tokenOutputAmount / ethInputAmount)
    console.log('new token rate', this.tokenRate)

    return tokenOutputAmount
  },

  exchangeTokenForEth(tokenInputAmount) {
    const newTokenBalance = this.tokenBalance + tokenInputAmount
    const newEthBalance = this.productConst / newTokenBalance
    const ethOutputAmount = this.ethBalance - newEthBalance

    console.log('old eth rate', this.ethRate)
    this.tokenBalance = newTokenBalance
    this.ethBalance = newEthBalance
    console.log('avg eth rate', ethOutputAmount / tokenInputAmount)
    console.log('new eth rate', this.ethRate)

    return ethOutputAmount
  }
}

const user = {
  ethBalance: 10,
  tokenBalance: 50
}

function depositEth(ethAmount) {
  const tokenAmount = pool.exchangeEthForToken(ethAmount)
  user.ethBalance -= ethAmount
  user.tokenBalance += tokenAmount
  console.log(`deposited ${ethAmount} ETH in exchange for ${tokenAmount} TOKEN\n`)
}

function depositToken(tokenAmount) {
  const ethAmount = pool.exchangeTokenForEth(tokenAmount)
  user.tokenBalance -= tokenAmount
  user.ethBalance += ethAmount
  console.log(`deposited ${tokenAmount} TOKEN in exchange for ${ethAmount} ETH\n`)
}

function reset() {
  pool.ethBalance = 30
  pool.tokenBalance = 150
  user.ethBalance = 10
  user.tokenBalance = 50
}

reset()
depositEth(1)
// depositToken(4.838709677419359)

reset()
depositEth(5)

reset()
depositEth(10)
