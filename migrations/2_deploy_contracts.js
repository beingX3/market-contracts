const Marketplace = artifacts.require("./Marketplace.sol")

module.exports = async deployer => {  
  const datacoinAddress = "0x0cf0ee63788a0849fe5297f3407f701e122cc023"
  const streamrUpdaterAddress = "0x195d3b9d5954780e1c6107c68965fccbdd2192ff"
  await deployer.deploy(Marketplace, datacoinAddress, streamrUpdaterAddress)
  Marketplace.deployed().transferOwnership()
}
