async function main() {
  const StakingContract = await ethers.getContractFactory("StakingRewards");
  //uniswap token rewards
  const stakingContract = await StakingContract.deploy(
    "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
  );

  console.log("My Contract deployed to:", stakingContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
