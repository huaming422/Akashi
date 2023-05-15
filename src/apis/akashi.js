/* eslint-disable no-unused-vars */
import { getAkashiContractInstance } from './index';
import { utils } from "ethers";
import siteConfig from '../configs/site.config';
import coinGecko from '../axios/coinGecko';

const fetchCoinMarketDetails = async (coinId, day) => {
  try {
    const res = await coinGecko.get(`coins/${coinId}/market_chart?vs_currency=usd&days=${day}`);
    return res.data;
  } catch (err) {
    return err.response?.data;
  }
}

const fetchCoinDetails = async (coinId) => {
  try {
    const res = await coinGecko.get(`coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&sparkline=false&developer_data=true`);
    return res.data;
  } catch (err) {
    return err.response?.data;
  }
}

async function owner() {
  try {
    const contractInstance = getAkashiContractInstance()
    const res = await contractInstance.methods.owner().call()
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

async function getTotalSupply() {
  try {
    const contractInstance = getAkashiContractInstance()
    const res = await contractInstance.methods.totalSupply().call()
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getMaxSupply() {
  try {
    const contractInstance = getAkashiContractInstance()
    const res = await contractInstance.methods.MAX_SUPPLY().call()
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getBalanceOfAkashiToken(address) {
  try {
    const contractInstance = getAkashiContractInstance()
    const res = await contractInstance.methods.balanceOf(address).call()
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}


async function burnAkashi(address, value) {
  let amount = utils.parseUnits(value, siteConfig.AKASHI_DECIMAL)
  try {
    const contractInstance = getAkashiContractInstance()
    const res = await contractInstance.methods.burn(address, amount).send({
      from: address
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

export {
  owner,
  getTotalSupply,
  getMaxSupply,
  burnAkashi,
  getBalanceOfAkashiToken,
  fetchCoinMarketDetails,
  fetchCoinDetails
}