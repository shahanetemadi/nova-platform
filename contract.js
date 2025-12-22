import ABI from "./abi.js";
import { CONTRACT_ADDRESS, RPC_URL } from "./config.js";

let web3;
let contract;

export async function initContract() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
  }

  contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
  return contract;
}

export async function readOwner() {
  return await contract.methods.owner().call();
}

export async function readTotalSupply() {
  return await contract.methods.totalSupply().call();
}
