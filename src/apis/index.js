import Web3 from 'web3';
import siteConfig from '../configs/site.config';
import akashiABI from '../abis/Akashi.json'


const getAkashiContractInstance = () => {
  const web3 = new Web3(Web3.givenProvider);
  const res = new web3.eth.Contract(akashiABI.abi, siteConfig.AKASHI_CONTRACT_ADDRESS);
  return res
}

const getAccounts = async () => {
  const web3 = new Web3(Web3.givenProvider);
  if (web3.currentProvider.isMetaMask === true) {
    try {
      const accounts = await web3.eth.getAccounts();
      return Promise.resolve({
        type: "metamask",
        account: accounts[0]
      })
    } catch (err) {
      return Promise.reject(err)
    }
  } else {
    try {
      const accounts = await web3.eth.getAccounts();
      return Promise.resolve({
        type: "wallet",
        account: accounts[0]
      })
    } catch (err) {
      return Promise.reject(err)
    }
  }
}

export {
  getAkashiContractInstance,
  getAccounts
};