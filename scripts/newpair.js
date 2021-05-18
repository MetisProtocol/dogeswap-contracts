// Contracts
const F = artifacts.require("UniswapV2Factory"); 
const R = artifacts.require("UniswapV2Router02");
const G = artifacts.require("GLDToken");
const S = artifacts.require("SLVToken");
//
// Utils
const ether = (n) => {
   return new web3.utils.BN(
       web3.utils.toWei(n.toString(), 'ether')
   )
}

module.exports = async function(callback) {
    try {

        // Fetch the deployed exchange
           const factory = await F.deployed();
           const router = await R.deployed();
           const gld = await G.deployed();
           const slv = await S.deployed();

           const receipt = await factory.createPair(gld.address, slv.address);
           console.log(receipt.logs);

    }
    catch(error) {
        console.log(error)
    }

    callback()
}

