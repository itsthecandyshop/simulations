import Pool from '../helpers/pool'

const UNISWAP_ETH_BALANCE = 2000
const UNISWAP_TOKEN_BALANCE = 40000

const DUOSWAP_ETH_BALANCE = 2000
const DUOSWAP_TOKEN_BALANCE = 40000

const NOOB_ETH_BALANCE = 1000
const NOOB_TOKEN_BALANCE = 0

const PRO_ETH_BALANCE = 1000
const PRO_TOKEN_BALANCE = 5000

const uniswap = new Pool({
  name: 'Uniswap',
  ethBalance: UNISWAP_ETH_BALANCE,
  tokenBalance: UNISWAP_TOKEN_BALANCE
})

const duoswap = new Pool({
  name: 'Duoswap',
  ethBalance: DUOSWAP_ETH_BALANCE,
  tokenBalance: DUOSWAP_TOKEN_BALANCE
})

const noob = {
  name: 'Noob',
  ethBalance: NOOB_ETH_BALANCE,
  tokenBalance: NOOB_TOKEN_BALANCE
}

const pro = {
  name: 'Pro',
  ethBalance: PRO_ETH_BALANCE,
  tokenBalance: PRO_TOKEN_BALANCE
}

const logState = () => {
  console.log('    Uniswap Details')
  console.log('        ETH balance:', uniswap.ethBalance)
  console.log('        TKN balance:', uniswap.tokenBalance)
  console.log('        TKN price:', uniswap.tokenRate, 'ETH')
  console.log('        ETH price:', uniswap.ethRate, 'TKN')
  console.log('')
  console.log('    Duoswap Details')
  console.log('        ETH balance:', duoswap.ethBalance)
  console.log('        TKN balance:', duoswap.tokenBalance)
  console.log('        TKN price:', duoswap.tokenRate, 'ETH')
  console.log('        ETH price:', duoswap.ethRate, 'TKN')
  console.log('')
  console.log('    Noob Details')
  console.log('        ETH balance:', noob.ethBalance)
  console.log('        TKN balance:', noob.tokenBalance)
  console.log('')
  console.log('    Pro Details')
  console.log('        ETH balance:', pro.ethBalance)
  console.log('        TKN balance:', pro.tokenBalance)
  console.log('')
}

const depositEth = ({ user, pool, ethInputAmount }) => {
  const { tokenOutputAmount } = pool.exchangeEthForToken({ ethInputAmount })
  user.ethBalance -= ethInputAmount
  user.tokenBalance += tokenOutputAmount
  console.log(`=> ${user.name} deposited ${ethInputAmount} ETH in exchange for ${tokenOutputAmount} TKN on ${pool.name}`)
  console.log('')
}

const depositToken = ({ user, pool, tokenInputAmount }) => {
  const { ethOutputAmount } = pool.exchangeTokenForEth({ tokenInputAmount })
  user.tokenBalance -= tokenInputAmount
  user.ethBalance += ethOutputAmount
  console.log(`=> ${user.name} deposited ${tokenInputAmount} TKN in exchange for ${ethOutputAmount} ETH on ${pool.name}`)
  console.log('')
}

console.log('')
console.log('Initial State')
logState()

depositEth({
  user: noob,
  pool: uniswap,
  ethInputAmount: 100
})

depositEth({
  user: pro,
  pool: duoswap,
  ethInputAmount: 50
})

depositToken({
  user: pro,
  pool: uniswap,
  tokenInputAmount: 975.6
})

console.log('Final State')
logState()
