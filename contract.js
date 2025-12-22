import { ethers } from "ethers";
import CONTRACT_ABI from "./abi.js";

const CONTRACT_ADDRESS = https://bscscan.com/address/0x3810099D2D61e0399d07a3bad4e796A3De82ff27

// اتصال به متامسک
const getProvider = () => {
  if (!window.ethereum) {
    alert("MetaMask نصب نیست");
    return null;
  }
  return new ethers.BrowserProvider(window.ethereum);
};

// گرفتن کانترکت
export const getContract = async () => {
  const provider = getProvider();
  if (!provider) return null;

  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();

  return new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI,
    signer
  );
};
