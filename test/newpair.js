//const { singletons, BN, expectEvent } = require('@openzeppelin/test-helpers');

const F = artifacts.require("UniswapV2Factory"); 
const R = artifacts.require("UniswapV2Router02");
const G = artifacts.require("GLDToken");
const S = artifacts.require("SLVToken");

const PREFIX = "Returned error: VM Exception while processing transaction: ";

async function tryCatch(promise, message) {
            try {
                            await promise;
                            throw null;
                        }
            catch (error) {
                            assert(error, "Expected an error but did not get one");
                            assert(error.message.startsWith(PREFIX + message), "Expected an error starting with '" + PREFIX + message + "' but got '" + error.message + "' instead");
                        }
};

catchRevert = async function(promise) {await tryCatch(promise, "revert")};

contract("SWAP Test", async accounts => {
        it("newpair", async() => {
           //
           // Fetch the deployed exchange
           const factory = await F.deployed();
           const router = await R.deployed();
           const gld = await G.deployed();
           const slv = await S.deployed();

           await factory.createPair(gld.address, slv.address);
           const pairaddr = await factory.getPair.call(gld.address, slv.address);
           console.log(pairaddr);
           await router.addLiquidity(gld.address, slv.address, 500, 1000, 1, 1, pariaddr);
        });
});
