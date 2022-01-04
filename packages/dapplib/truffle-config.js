require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remember push inflict entire front ten'; 
let testAccounts = [
"0xa14f7e471249c3a388f94cd81f049bd444f925d6ac75e8f8bf249a72e8dcb74e",
"0xc537a2ccb7f1f36cb9217d276f8090c381981e0b76ac48d411ff4300c7eb7746",
"0x4c5a706e98dddce6197d90290a137739e0f8b61369f576fafb35273b81f8e32b",
"0xe7825f687cb6885a69f2b8d06d3af69b6cceb37de8b853668ab30610d2f5277b",
"0xf762cc691677a3a73c86a97c3c54376cfd59f1f0d7abbb6db231a1b56847c2e4",
"0x31cc1869781369e9c7f10033bb2f97be4a996b4bb0ab36231b9c251349b0d143",
"0xcdc188f560ecc7a7fa2869cfc093a956661c51f39967d78b24cbc80d10d1a714",
"0x855b81b777f640bbd99d3eda6045521f1ab045492060d5c8e6b0f53ca58d2370",
"0x967d890c382662535afb04a40a2c5c0e5e95f62213e338ddce6c936a3dbc6c71",
"0x9d86f0c57643b3141826f447249628d3c8ef6dd36f665bd4adc60c06ee70a297"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


