const F = artifacts.require("UniswapV2Factory");
const U = artifacts.require("UniswapV2Router02");

module.exports = async function(deployer, network, accounts) {
  const factory = deployer.deploy(F, accounts[0]);
  deployer.deploy(U, factory.address);
};
