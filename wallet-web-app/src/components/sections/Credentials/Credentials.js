import { mapGetters } from 'vuex';

let counter_args = {
    contractName: 'FileHandler',
    method: ['getCounter'],
    methodArgs: [],
  };
let credentials_args = {
    contractName: 'FileHandler',
    method: ['getCredential'],
    methodArgs: [1]
};
// const filehash_args = {
//     contractName: 'FileHandler',
//     method: 'getHash',
//     methodArgs: [2]   
// };
// string memory name,
// string memory email,
// string memory phone,
// bool verified,
// bool active,
// address owner
export default {
    data() {
        return {
            counter: '',
            credentials: [],
            credential_data: {
                purpose: '',
                email: '',
                phone: '',
                verified: true,
                active: true,
            }
        };
    },
    computed:{
        ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),
        ...mapGetters('contracts', ['getContractData']),
        getCounter() {
            if(this.isDrizzleInitialized) {
                // Retrieving the counter which is the number of credentials of a user on ethereum
                this.counter = this.getContractData({
                  contract: counter_args.contractName,
                  method: counter_args.method,
                  methodArgs: counter_args.methodArgs
                });
                console.log("Total Number of credentials: "+this.counter);
                this.$store.commit("setNumCredentials", this.counter);
                // Retrieving the data of the credentials associated with the user and populating
                // it locally
                let data = []
                for(let i = 1; i <= this.counter; i++ ) {
                    credentials_args.methodArgs[0] = i;
                    data.push(this.getContractData({
                        contract: counter_args.contractName,
                        method: credentials_args.method,
                        methodArgs: credentials_args.methodArgs
                      })); 
                }
                console.log(data[0]);
                return this.counter;
              } else {
                console.log("Drizzle still initializing");
              }            
        }    
    },
    created() {
        this.$store.dispatch('drizzle/REGISTER_CONTRACT', counter_args);
        this.$store.dispatch('drizzle/REGISTER_CONTRACT', credentials_args);
        // this.$store.dispatch('drizzle/REGISTER_CONTRACT', filehash_args);
    }
}


