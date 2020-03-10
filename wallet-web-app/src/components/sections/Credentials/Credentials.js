import { mapGetters } from 'vuex';
import CredentialCard from '../../segments/CredentialCard'

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
const filehash_args = {
    contractName: 'FileHandler',
    method: ['getHash'],
    methodArgs: [1]   
};

export default {
    data() {
        return {
            counter: '',
            credentials: [],
            files: [],
            alignment: 'start',
            dense: false,
            justify: 'start',
        };
    },
    components: {
        CredentialCard,
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
                // Retrieving the data of the credentials and respective file associated 
                // with the user and populating it locally
                let data = []
                let files_data = []
                for(let i = 1; i <= this.counter; i++ ) {
                    // Updating the arguments for the contract method call
                    // before dispatching it to the store
                    credentials_args.methodArgs[0] = i;
                    filehash_args.methodArgs[0] = i;
                    this.$store.dispatch('drizzle/REGISTER_CONTRACT', credentials_args);
                    this.$store.dispatch('drizzle/REGISTER_CONTRACT', filehash_args);
                    data.push(this.getContractData({
                        contract: counter_args.contractName,
                        method: credentials_args.method,
                        methodArgs: credentials_args.methodArgs
                    })); 
                    files_data.push(this.getContractData({
                        contract: filehash_args.contractName,
                        method: filehash_args.method,
                        methodArgs: filehash_args.methodArgs
                    })); 
                }
                this.credentials = data;
                console.log(this.credentials[1]);
                this.files = files_data;
                // TO DO
                // Commit the locally populated credential and file data to the store
                // in the event another component needs to access it. 
                
                return this.counter;
              } else {
                console.log("Drizzle still initializing");
              }            
        },
        getCredentials() {
            return this.credentials;
        }   
    },
    methods: {
        populateCredentials(item) {
            this.credentials.push({
                'purpose': item[0],
                'email': item[1],
                'phone': item[2],
                'verified': item[3],
                'active': item[4],
                'address':item[5]                        
            })            
        },
        populateFiles(file) {
            this.files.push({
                'hash': file[0],
                'caption': file[1],
                'owner': file[2],                    
            })            
        },
    },
    created() {
        this.$store.dispatch('drizzle/REGISTER_CONTRACT', counter_args);   }
}