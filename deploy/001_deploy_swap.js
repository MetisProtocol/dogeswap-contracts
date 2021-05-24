//
// Just a standard hardhat-deploy deployment definition file!
const func = async (hre) => {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  await deploy('UniswapV2Factory', { // Replace `ERC20` with your contract's file name
    from: deployer,
    args: [deployer],
    gasPrice: hre.ethers.BigNumber.from('0'),
    gasLimit: 8999999,
    log: true
  })
}

func.tags = ['UniswapV2Factory'] // Replace `ERC20` with your contract's file name
module.exports = func
