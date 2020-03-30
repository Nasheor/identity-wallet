const TokenHandler = artifacts.require("TokenHandler");

module.exports = function(deployer) {
    deployer.deploy(TokenHandler);
  };