import { mapGetters } from 'vuex';
import ipfs from '../../../plugins/ipfs-config';

const counter_args = {
  contractName: 'FileHandler',
  method: 'getCounter',
  methodArgs: []
};

export default {
    data() {
        return {
            file: '',
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
            console.log(this.counter);
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
            ipfs.add(this.buffer).then((hashedImg) => {
                this.drizzleInstance
                .contracts["FileHandler"]
                .methods["setHash"]
                .cacheSend(hashedImg[0].hash, this.caption)
            });
            } else {
            console.log("Drizzle Problem");
            }
            this.caption = '';
            this.file = '';
            this.buffer = '';
            this.save = true;
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