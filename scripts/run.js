// script to compile, deploy, then execute

const main = async () => {
    // compile our contract & generate the necessary `artifacts` files we need
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    // every time you deploy, Hardhat will create a local Ethereum network for us, but just for this contract
    // Q: does hardhat handle migrations?
    const waveContract = await waveContractFactory.deploy();
    // wait until contract is officially deployed to our local blockchain
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
};

const runMain = async () => {
try {
    await main();
    process.exit(0);
} catch (error) {
    console.log(error);
    process.exit(1);
}
};

runMain();