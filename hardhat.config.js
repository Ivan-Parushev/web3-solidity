require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_HTTP, // "YOUR_ALCHEMY_API_URL",
      accounts: [process.env.PRIVATE_ALCHEMY_RINKEBY_KEY], // ["YOUR_PRIVATE_RINKEBY_ACCOUNT_KEY"],
    },
  },
};
