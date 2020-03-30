const CredentialHandler = artifacts.require("CredentialHandler");

module.exports = function(deployer) {
    deployer.deploy(CredentialHandler);
  };