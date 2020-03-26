import Login from "@/contracts/Login.json";
import CredentialHandler from "@/contracts/CredentialHandler.json";
import Attestation from "@/contracts/Attestation.json";

const options = {
    web3: {
      block: false,
      fallback: {
        type: "ws",
        url: "ws://127.0.0.1:7545"
      }
    },// The contracts to monitor
    contracts: [Login, CredentialHandler, Attestation],
    events: {
      CredentialHandler: [
        {
          eventName: 'NewCredential',
          eventOptions: { fromBlock: 0 }
        }
      ],
      Attestation: [
        {
          eventName: 'NewAttestant',
          eventOptions: { fromBlock: 0 }
        }
      ],
    },
    polls: {
      // check accounts ever 15 seconds
      accounts: 5000
    }
  };
  export default options;