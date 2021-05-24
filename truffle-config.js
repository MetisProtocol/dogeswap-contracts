const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();  
const infuraKey = process.env.INFURAKEY;  
const l2url = process.env.LAYER2;  
const fs = require('fs');  
const mnemonic = fs.readFileSync(".secret").toString().trim();  

module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  //networks: {
  //  development: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  },
  //  test: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  }
  //}
  //
  contracts_directory: "./contracts/swap",
  networks: {
    l2: {
      provider: () => new HDWalletProvider(
        mnemonic, 'https://ws2ggnw4nb.execute-api.us-east-2.amazonaws.com/beta/v1?owner=420'
      ),
      network_id: "420",
      gasPrice: 0,
      skipDryRun: true,
      networkCheckTimeout: 4000,
    },
    l2b: {
      host: "3.138.68.113",
      port: 8545,
      network_id: "420",
      gasPrice: 0,
      skipDryRun: true,
      networkCheckTimeout: 4000,
    }
  },
  compilers: {
    solc: {
        version: 'node_modules/@metis.io/solc', // A version or constraint - Ex. "^0.5.0"
      // Can also be set to "native" to use a native solc
      docker: false, // Use a version obtained through docker
      parser: "solcjs",  // Leverages solc-js purely for speedy parsing
      settings: {
        optimizer: {
          enabled: true,
          runs: 1  // Optimize for how many times you intend to run the code
        },
      }
    }
  },
};
