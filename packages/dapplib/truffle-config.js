require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stove rival rifle comic install immense army gas'; 
let testAccounts = [
"0xce05fcb837ce24b7fb73e77e744db4ddcf396258b6e5f1f9a1f8602c7a74a161",
"0x3cea3fa40cc270b423889c96a62ebcaea97cd134300637b67f929e20065d84b6",
"0xf53b6cc2bcd7dacbc45d751126ff9af2ecd45503539a08a02a3b416fe0f91f98",
"0x46ae4a59f1193e0bd2754d19cbb15b5d1dd8335db21e1a02b7c1735f9cc0d95c",
"0xd960ad1f5585fe2027381d5d4ab4b8d7b0821b0c80d2eedc92d26e33723fcdd1",
"0xbe46e16182348498ab0f6b27d21b29d76e99ab52e2e903bae82911838e4d315a",
"0x43385e97b6b0b96155768a69287e3d510538166cdf7d6d95ccf5ddbcd4bf81b3",
"0x1b40e91b6e079b357be20bc8af76de5683fc583c06cf73a5ee67219e9ae6850a",
"0x7323650b29eb03a1812bfc2ee1f301428ff466162b4744a6de79f699ecc81deb",
"0x067043a3c0ee9f8cd6d7ed07276b0e5ca6b12320862b0cbe98d1a4f77e354abf"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

