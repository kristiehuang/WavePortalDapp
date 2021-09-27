// Script to compile, deploy, then execute WavePortal.sol on temporary test network

const main = async () => {
    const [owner, randoPerson] = await hre.ethers.getSigners();

    // compile our contract & generate the necessary `artifacts` files we need
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    // every time you run this script, Hardhat will create a local Ethereum network for us, but just for this contract
    // remove 0.1 ether from caller wallet to fund smart contract
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther('0.1'),
    });
    // wait until contract is deployed to our local blockchain
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);
    /*
    * Get Contract balance
    */
    let contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    );
    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
    );
    
    let waveCount = await waveContract.totalWaveCount();
    
    // async call to the actual contract
    let waveTxn = await waveContract.wave("Hello there!");
    // get the actual response back; wait for tx to complete
    await waveTxn.wait();
    waveCount = await waveContract.totalWaveCount(); 


    // contract balance post-wave
    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
    );

    // simulate other people hitting our functions
    waveTxn = await waveContract.connect(randoPerson).wave("Hiiiii");
    await waveTxn.wait();
    waveCount = await waveContract.totalWaveCount();

    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
    );
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