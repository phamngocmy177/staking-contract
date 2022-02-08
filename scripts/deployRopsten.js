async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const StakingContract = await ethers.getContractFactory("StakingRewards");
  const stakingContract = await StakingContract.deploy(
    "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
  );

  console.log("stakingContract address:", stakingContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
