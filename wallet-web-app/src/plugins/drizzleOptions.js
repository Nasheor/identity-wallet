import Login from "@/contracts/Login.json";
import FileHandler from "@/contracts/FileHandler.json";

const options = {
    web3: {
      block: false,
      fallback: {
        type: "ws",
        url: "ws://127.0.0.1:7545"
      }
    },// The contracts to monitor
    contracts: [Login, FileHandler],
    events: {
      FileHandler: [],
      Login: [],
    },
    polls: {
      // check accounts ever 15 seconds
      accounts: 5000
    }
  };
  export default options;