import { mapGetters } from 'vuex';

const counter_args = {
    contractName: 'FileHandler',
    method: 'getCounter',
    methodArgs: []
  };
const credentials_args = {
    contractName: 'FileHandler',
    method: 'getCredentials',
    methodArgs: ['']
};
const filehash_args = {
    contractName: 'FileHandler',
    method: 'getHash',
    methodArgs: ['']   
};

export default {
    data() {
        return {
            counter: '',
        };
    },
    computed:{
        ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),
        ...mapGetters('contracts', ['getContractData']),
        getCounter() {
            if(this.isDrizzleInitialized) {
                this.counter = this.getContractData({
                  contract: counter_args.contractName,
                  method: counter_args.method,
                  methodArgs: counter_args.methodArgs
                });
                console.log("Total Number of credentials: "+this.counter);
                return this.counter;
              } else {
                console.log("Drizzle still initializing");
              }            
        }    
    },
    created() {
        this.$store.dispatch('drizzle/REGISTER_CONTRACT', counter_args);
        this.$store.dispatch('drizzle/REGISTER_CONTRACT', credentials_args);
        this.$store.dispatch('drizzle/REGISTER_CONTRACT', filehash_args);
    }
}


