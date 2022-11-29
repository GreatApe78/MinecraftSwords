const MinecraftSwords = artifacts.require("MinecraftSwords");
module.exports = async function (deployer) {
    await deployer.deploy(MinecraftSwords);
};