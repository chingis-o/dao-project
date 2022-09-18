// Help Truffle find `TruffleTutorial.sol` in the `/contracts` directory
const MyToken = artifacts.require("MyGovernor");

module.exports = function (deployer) {
  // Command Truffle to deploy the Smart Contract
  deployer.deploy(MyToken);
};
