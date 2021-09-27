// Script to compile & deploy WavePortal.sol to actual testnet chain

const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
  
    console.log('Deploying contracts with account: ', deployer.address);
    console.log('Account balance: ', accountBalance.toString());
  
    // compile our contract & generate the necessary `artifacts` files we need
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy(
        {value: hre.ethers.utils.parseEther('0.1'),}
    );
    await waveContract.deployed();
    console.log('WavePortal address: ', waveContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  runMain();