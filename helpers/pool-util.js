import colors from 'colors';

export const depositEth = ({ user, pool, ethInputAmount }) => {
  const { tokenOutputAmount } = pool.exchangeEthForToken({ ethInputAmount })
  user.ethBalance -= ethInputAmount
  user.tokenBalance += tokenOutputAmount
  console.log(`=> ${user.name[user.color || 'reset']} deposited ${ethInputAmount.toString().yellow} ETH in exchange for ${tokenOutputAmount.toString().yellow} TKN on ${pool.name[pool.color || 'reset']}`)
  console.log('')
}

export const depositToken = ({ user, pool, tokenInputAmount }) => {
  const { ethOutputAmount } = pool.exchangeTokenForEth({ tokenInputAmount })
  user.tokenBalance -= tokenInputAmount
  user.ethBalance += ethOutputAmount
  console.log(`=> ${user.name[user.color || 'reset']} deposited ${tokenInputAmount.toString().yellow} TKN in exchange for ${ethOutputAmount.toString().yellow} ETH on ${pool.name[pool.color || 'reset']}`)
  console.log('')
}
