import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x8d93f77A75b8f10665Df9Ab6643f5CC7Df870786';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}