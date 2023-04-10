require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
const { SEPOLIA_URL_API, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${SEPOLIA_URL_API}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
};
