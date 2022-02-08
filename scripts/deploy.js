async function main() {
  const StakingContract = await ethers.getContractFactory("StakingRewards");
  const stakingContract = await StakingContract.deploy("StakingRewards");

  console.log("My Contract deployed to:", stakingContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
