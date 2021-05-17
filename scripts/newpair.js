// Contracts
const F = artifacts.require("UniswapV2Factory"); 
const R = artifacts.require("UniswapV2Router02");
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
        const route = await R.deployed();

        console.log(await factory.createPair("0xcEBBBc858AD55c2d399F5860D4555F9d042E8454", "0x14b2b5A9288F8327a2D7eb09b0e4d3DC27Da932e"));

    }
    catch(error) {
        console.log(error)
    }

    callback()
}

