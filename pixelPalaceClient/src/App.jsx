import  { useEffect, useState } from "react";
import web3 from "./web3";
//import MyContract from "./contracts/MyContract.json";

const App = () => {
  const [account, setAccount] = useState("");

  useEffect(() => {
    const loadBlockchainData = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    };

    loadBlockchainData();
  }, []);

  return (
    <div className=" bg-slate-950  text-cyan-600">
      <h1 className="text-3xl font-bold underline" >My DApp</h1>
      
      <p>Account: {account}</p>
    </div>
  );
};

export default App;
