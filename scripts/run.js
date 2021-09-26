// Script to compile, deploy, then execute WavePortal.sol

const main = async () => {
    const [owner, randoPerson] = await hre.ethers.getSigners();

    // compile our contract & generate the necessary `artifacts` files we need
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    // every time you deploy, Hardhat will create a local Ethereum network for us, but just for this contract
    // Q: does hardhat handle migrations?
    const waveContract = await waveContractFactory.deploy();
    // wait until contract is deployed to our local blockchain
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);
    
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    
    // async call to the actual contract
    let waveTxn = await waveContract.wave();
    // get the actual response back; wait for tx to complete
    await waveTxn.wait();
    waveCount = await waveContract.getTotalWaves(); 

    // simulate other people hitting our functions
    waveTxn = await waveContract.connect(randoPerson).wave();
    await waveTxn.wait();
    waveCount = await waveContract.getTotalWaves();
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