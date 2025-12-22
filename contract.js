import ABI from "./abi.js";
import { CONTRACT_ADDRESS, RPC_URL } from "./config.js";

let web3;
let contractInstance;

export async function initContract() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
  } else {
    web3 = new Web3(
      new Web3.providers.HttpProvider(RPC_URL)
    );
  }

  contractInstance = new web3.eth.Contract(
    ABI,
    CONTRACT_ADDRESS
  );

  return contractInstance;
}

export function getContract() {
  return contractInstance;
}

export async function readOwner() {
  return await contractInstance.methods.owner().call();
}

export async function readTotalSupply() {
  return await contractInstance.methods.totalSupply().call();
}
