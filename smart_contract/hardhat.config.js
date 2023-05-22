// https://eth-sepolia.g.alchemy.com/v2/ucUB_JQqVPmX_DdVxmMUKDBgR0Eq5sw8

require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/ucUB_JQqVPmX_DdVxmMUKDBgR0Eq5sw8',
      accounts: [ '2e15ef7deb794a3906b0f709bd38b712d38500d134c1da303a43dc5b72cb6ed3' ]
    }
  }
};
