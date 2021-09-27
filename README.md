# Kristie's WavePortal

following [buildspace's Build a Web3 App with Solidity + Ethereum Smart Contracts](https://app.buildspace.so/) class!
* currently deployed @ 0xB4bc34F136dC2cE99bd48Ef0d54132D26e218fB4 on Rinkeby only, not mainnet!

## brainstorming / what this could be
* a little guestbook that lives on my website + recorded on eth chain

## backend stack/dependencies
* ethers
    * JS library that helps our frontend talk to our contract
* @nomiclabs/hardhat-ethers 
    * This plugin brings to Hardhat the Ethereum library ethers.js, which allows you to interact with the Ethereum blockchain in a simple way.
* ethereum-waffle 
* @nomiclabs/hardhat-waffle 
* chai 
* alchemy
    * simple way to deploy to the real Ethereum blockchain
    * access a node to broadcast our contract creation transaction to miners
* metamask
    * provides a "Web3Provider" = access to nodes that send/receive data from chain
* dotenv
    * zero-dependency module that loads environment variables from a .env file into process.env

**using Hardhat**

* `npx hardhat accounts` // generate a list of accounts
* `npx hardhat compile`
* `npx hardhat test` // run tests in test/ folder

run a script that compiles & deploys contract on auto-created temporary test network:
* `npx hardhat run scripts/run.js` 


start local testnet & deploy on local testnet:
* `npx hardhat node` // start and host a localhost eth testnet with 20 test accounts, kinda like Ganache
* `npx hardhat run scripts/deploy.js --network localhost` // deploy onto local testnet & run tests

deploy on testnet:
* `npx hardhat run scripts/deploy.js --network rinkeby` // deploy onto rinkeby

Every time you run a terminal command that starts with npx hardhat you are getting this hre object built on the fly using the hardhat.config.js specified in your code! This means you will never have to actually do some sort of import into your files like:
const hardhat = require("hardhat")

### how to build
* `npm init -y && npm install --save-dev hardhat` // start package.json template
* `npx hardhat` // create sample hardhat project
* write contract in contracts/
* write scripts to run a few tests & to deploy on testnet

### making changes
1. We need to deploy it again: `npx hardhat run scripts/deploy.js --network rinkeby`
2. We need to update `contractAddress` on our frontend's App.js
3. We need to update the abi file on our frontend. 

Q: Redeploying erases all state data on old smart contract; where else could we store our wave data where we could update our contract's code and keep our original data around? There are quite a few solutions here let me know what you find!



## frontend stack
* react+ethers webapp on Replit (browser-based IDE to build & deploy webapps)
    * forked basic react project from https://replit.com/@Farza/waveportal-baseline-student?v=1
    * deployed @ https://waveportal-baseline-student.kristiehuang.repl.co
