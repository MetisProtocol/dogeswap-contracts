/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-waffle')
require('hardhat-deploy')
require('@eth-optimism/hardhat-ovm')

module.exports = {
  networks: {
    hardhat: {
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk'
      }
    },
    optimism: {
      url: 'http://3.138.68.113:8545', // This is the URL of the local L2 instance we will be creating.
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk'
      },
      gasPrice: 0,
      ovm: true
    }
  },
  solidity: '0.6.12', // Must match solc version of the OVM compiler
  ovm: {
    solcVersion: '0.6.12' // Currently, we only support 0.5.16, 0.6.12, and 0.7.6 of the Solidity compiler
  },
  namedAccounts: {
    deployer: 0
  },
}
