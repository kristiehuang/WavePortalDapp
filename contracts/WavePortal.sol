// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    struct Wave {
        address waver; // The address of the user who waved.
        string message; // The message the user sent.
        uint256 timestamp; // The timestamp when the user waved.
    }

    event NewWave(
        address indexed from, 
        string message,
        uint256 timestamp
    );


    // State variable stored permanently in smart contract storage
    uint256 public totalWaveCount;
    Wave[] public waves;
    

    constructor() {
        console.log("Yo yo, I am a contract am I am smart");
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function wave(string memory _message) public {
        totalWaveCount += 1;
        // msg.sender = wallet address of function callee
        Wave memory wv = Wave(msg.sender, _message, block.timestamp);
        waves.push(wv);
        emit NewWave(msg.sender, _message, block.timestamp);
    }
}