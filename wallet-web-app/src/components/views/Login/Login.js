import { mapGetters } from 'vuex';

var args = {
    contractName: 'Login',
    method: ['verifyCredentials', 'getStatus'],
    methodsArgs: []
}
export default {
    data () {
        return {
            address: '',
        }
    },
    computed: {
        // ...mapGetters('contracts', ['getContractData']),
        ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),
        ...mapGetters('accounts', ['activeAccount']),
        ...mapGetters('contracts', ['getContractData']),
        contractData() {
            return this.getContractData({
                contract: args.contractName,
                method: args.method[1],
            })
        }
    },
    methods: {
        verifyAccount() {
            // console.log(this.getContractData({
            //     contract: args.contractName,
            //     method: args.method,
            //     args: args.methodsArgs
            // }));
            console.log(this.drizzleInstance
                .contracts[args.contractName]
                .methods[args.method[0]]
                .cacheSend(this.address));

            // this.$store.commit("changeLoginStatus", status)
            console.log(this.getContractData({
                contract: args.contractName,
                method: args.method[1],
            }));
        }
    },
    created() {
        this.$store.dispatch('drizzle/REGISTER_CONTRACT', args);
    }
}