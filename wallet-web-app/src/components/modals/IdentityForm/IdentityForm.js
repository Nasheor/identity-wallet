import { mapGetters } from 'vuex';
import ipfs from '../../../plugins/ipfs-config';

const counter_args = {
  contractName: 'FileHandler',
  method: 'getCounter',
  methodArgs: []
};
const verified = true;

export default {
    data() {
        return {
            file: '',
            name: '',
            email: '',
            phone: '',
            caption: '',
            counter: 0,
            buffer: '',
            save: false,
        }
    },
    computed: {
        ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),
        ...mapGetters('contracts', ['getContractData']),
        contractData() {
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
        },
        getSave() {
            return this.save;
        }
      },
    methods: {
        filePicked(file) {
            const reader = new FileReader();
            if (typeof file !== 'undefined') {
            this.file = file;
            reader.readAsArrayBuffer(file);
            reader.onloadend = async () => {
                this.buffer = await this.convertToBuffer(reader.result);
            };
            } else this.buffer = '';
        },
        async convertToBuffer(reader) {
            return Buffer.from(reader);
        },
        submit() {
            if (this.isDrizzleInitialized) {
            this.dialog = false;
            let cap = this.caption;
            ipfs.add(this.buffer).then((hashedImg) => {
                console.log(hashedImg);
                this.drizzleInstance
                .contracts["FileHandler"]
                .methods["setHash"]
                .cacheSend(hashedImg[0].hash, cap);
            });
            let active = true;
            this.drizzleInstance
            .contracts["FileHandler"]
            .methods["setCredential"]
            .cacheSend(this.name, this.email,
                this.phone, verified, active);

            this.caption = '';
            this.file = '';
            this.name = '';
            this.email = '';
            this.phone = '';
            this.buffer = '';
            this.save = true;
            } else {
            console.log("Drizzle Problem");
            }
        },
        closeConfirmation() {
            this.save = false;
        },
    },
    mounted() {
        this.save = false;
    },
    created() {
        this.$store.dispatch('drizzle/REGISTER_CONTRACT', counter_args);
    }
}