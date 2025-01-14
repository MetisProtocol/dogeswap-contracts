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
      url: 'http://rocketfuel.metis.io/?owner=420', // This is the URL of the local L2 instance we will be creating.
      accounts: ['']
      gasPrice: 100000001,
      ovm: true
    }
  },
  solidity: '0.6.12', // Must match solc version of the OVM compiler
  ovm: {
    solcVersion: '0.6.12', // Currently, we only support 0.5.16, 0.6.12, and 0.7.6 of the Solidity compiler
     optimizer: true,
     runs: 20
  },
  namedAccounts: {
    deployer: 0
  },
}
