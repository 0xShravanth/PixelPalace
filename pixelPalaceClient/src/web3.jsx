import Web3 from "web3";

const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8546");
const web3 = new Web3(provider);

export default web3;
