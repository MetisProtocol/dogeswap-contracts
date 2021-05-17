const F = artifacts.require("UniswapV2Factory");
const U = artifacts.require("UniswapV2Router02");

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(F, accounts[0]);
  const factory = await F.deployed();
  const router = await deployer.deploy(U, factory.address);
};
