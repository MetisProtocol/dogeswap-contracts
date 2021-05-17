const G = artifacts.require("SLVToken");

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(G, "1000000000000000000000");
};
