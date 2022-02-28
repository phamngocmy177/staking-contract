# Basic Solidity Staking Contract

This project includes source code of staking contract and instruction for deploying to local network and Ropsten network.

## How to run

- Change the deposit asset address and the reward asset in: `deployLocal.js` file or `deployRopsten.js` file

Example:

```const stakingContract = await StakingContract.deploy(
    "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984", //deposit asset address
    "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984" //reward asset address
);
```

- Run `yarn`
- `yarn deploy:local` if you want to deploy to local network (don't forget to run you Ganache local network first)
  `yarn deploy:ropsten` if you want to deploy to Ropsten network
