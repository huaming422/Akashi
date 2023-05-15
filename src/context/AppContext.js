/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import WalletConnect from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { getAkashiContractInstance } from "../apis";
import siteConfig from "../configs/site.config";

export const AppContext = createContext();

const providerOptions = {
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: "538f6602a3474dfab48d5e4728f98d13"
    }
  }
};



export const AppcontextProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [networkId, setNetworkId] = useState();
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [network, setNetwork] = useState();
  const [isShowConnectModal, setIsShowConnectModal] = useState();
  const [isShowDisConnectModal, setIsShowDisConnectModal] = useState();
  const [themeMode, setTheme] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setTheme(true)
    } else {
      setTheme(false);
    }
  }, [])

  const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions, // required
    theme: themeMode ? "dark" : "light",
  });
  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setNetworkId(network.chainId);
      setProvider(provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setNetwork(network);
    } catch (error) {
      console.error(error);
    }
  };

  const setThemeMode = (value) => {
    setTheme(value);
    if (value) {
      localStorage.setItem('theme', "dark");
    } else {
      localStorage.setItem('theme', "light");
    }
  }

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        setAccount(accounts[0]);
      };

      const handleChainChanged = (chainId) => {
        setNetworkId(parseInt(chainId));
      };

      const handleDisconnect = () => {
        disconnectWallet();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, [])

  const refreshState = () => {
    setAccount();
    setNetworkId();
    setNetwork();
  };

  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
    setIsShowDisConnectModal(false);
  }

  const disconnect = () => {
    setIsShowDisConnectModal(true);
  }

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: ethers.utils.hexlify(siteConfig.NETWORK.ID) }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: ethers.utils.hexlify(siteConfig.NETWORK.ID),
                chainName: siteConfig.NETWORK.NAME,
                rpcUrls: [siteConfig.NETWORK.RPC_URI],
                blockExplorerUrls: [siteConfig.NETWORK.BLOCK_EXPLORE_URL],
              },
            ],
          });
        } catch (addError) {
          throw addError;
        }
      }
    }
  };

  const getAccBalance = async () => {
    if (library) {
      if (account) {
        let balance = await library.getBalance(account);
        return Number(ethers.utils.formatEther(balance.toString()));
      }
    }
  };

  const getAccAkashiBalance = async () => {
    if (account) {
      const contract = getAkashiContractInstance();
      const res = await contract.methods.balanceOf(account).call()
      return Number(res.toString() / 10 ** 18);
    }
  }


  return (
    <AppContext.Provider
      value={{
        connectWallet,
        disconnectWallet,
        disconnect,
        themeMode,
        setThemeMode,
        account,
        library,
        provider,
        networkId,
        network,
        setIsShowDisConnectModal,
        isShowConnectModal,
        isShowDisConnectModal,
        setIsShowConnectModal,
        getAccBalance,
        getAccAkashiBalance,
        switchNetwork
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
