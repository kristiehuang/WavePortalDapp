# Kristie's WavePortal

following [buildspace's Build a Web3 App with Solidity + Ethereum Smart Contracts](https://app.buildspace.so/) class!

## brainstorming / what this could be
* a little guestbook that lives on my website + recorded on eth chain

## technical stack
* ethers
* @nomiclabs/hardhat-ethers 
    * This plugin brings to Hardhat the Ethereum library ethers.js, which allows you to interact with the Ethereum blockchain in a simple way.
* ethereum-waffle 
* @nomiclabs/hardhat-waffle 
* chai 

**using Hardhat**

* `npx hardhat accounts` // generate a list of accounts
* `npx hardhat compile`
* `npx hardhat test` // run tests in test/ folder

run a script that compiles & deploys contract on auto-created temporary test network:
* `npx hardhat run scripts/run.js` 


start local testnet & deploy on local testnet:
* `npx hardhat node` // start and host a localhost eth testnet with 20 test accounts, kinda like Ganache
* `npx hardhat run scripts/deploy.js --network localhost` // deploy onto local testnet & run tests

Every time you run a terminal command that starts with npx hardhat you are getting this hre object built on the fly using the hardhat.config.js specified in your code! This means you will never have to actually do some sort of import into your files like:
const hardhat = require("hardhat")

## how to build
* `npm init -y && npm install --save-dev hardhat` // start package.json template
* `npx hardhat` // create sample hardhat project
* write contract in contracts/
* write scripts to run a few tests & to deploy on testnet
