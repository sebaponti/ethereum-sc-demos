var Migrations = artifacts.require("./TimestampDemo.sol");

module.exports = function(deployer) {
  deployer.deploy(TimestampDemo);
};
