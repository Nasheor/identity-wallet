import { mapGetters } from 'vuex';
import CredentialCard from '../../segments/CredentialCard'
import { credentials_args, counter_args } from '../../../utils/args';

export default {
    data() {
        return {
            counter: '',
            credentials: [],
            files: [],
            alignment: 'start',
            dense: false,
            justify: 'start',
            loaded: false,
        };
    },
    components: {
        CredentialCard,
    },
    computed:{
        ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),
        ...mapGetters('contracts', ['getContractData']),
        getCredentials() {
            if(this.isDrizzleInitialized) {
                // Retrieving the counter which is the number of credentials of a user on ethereum
                this.counter = this.getContractData({
                  contract: counter_args.contractName,
                  method: counter_args.method,
                  methodArgs: counter_args.methodArgs
                });
                this.$store.commit("setNumCredentials", this.counter);
                // Retrieving the data of the credentials and respective file associated 
                // with the user and populating it locally
                let data = []
                for(let i = 1; i <= this.counter; i++ ) {
                    // Updating the arguments for the contract method call
                    // before dispatching it to the store
                    credentials_args.methodArgs[0] = i;
                    this.$store.dispatch('drizzle/REGISTER_CONTRACT', credentials_args);
                    data.push(this.getContractData({
                        contract: counter_args.contractName,
                        method: credentials_args.method,
                        methodArgs: credentials_args.methodArgs
                    })); 
                }   
                this.credentials = data;
                this.$store.commit("setCredentials", this.credentials);
                this.loaded = true;  
                return this.credentials;     
              } else {
                console.log("Drizzle still initializing");
              }            
        },
        isloaded() {
            return this.loaded;
        }
    },
    methods: {
        populateData() {
            this.getCredentials;
        }
    },
    async created() {
        this.$store.dispatch('drizzle/REGISTER_CONTRACT', counter_args);   
        let i = this.getCredentials;
        console.log(i);
    }
}