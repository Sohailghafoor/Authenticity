
const hre = require("hardhat");

async function main() {
  const Authenticity = await hre.ethers.getContractFactory("Authenticity");
  const Authenticity_ = await Authenticity.deploy();
  await Authenticity_.deployed();
  console.log(" Authenticity Contract deployed to:", Authenticity_.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });