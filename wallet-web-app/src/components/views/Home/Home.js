import { mapGetters } from 'vuex';
import ipfs from '../../../plugins/ipfs-config';

const args = {
  contractName: 'FileHandler',
  method: 'getCounter',
  methodArgs: ''
};

export default {
    data() {
        return {
            dialog: false,
            counter: 0,
            drawer: null,
            buffer: '',
            file: '',
            caption: '',
            items: [
              { icon: 'mdi-contacts', text: 'Credentials' },
              { icon: 'mdi-history', text: 'Attestations' },
              { icon: 'mdi-animation-outline', text: 'Processing' },
              {
                icon: 'mdi-arrow-up-box',
                'icon-alt': 'mdi-arrow-down-box',
                text: 'More',
                model: false,
                children: [
                  { text: 'Import' },
                  { text: 'Export' },
                  { text: 'Print' },
                ],
              },
              { icon: 'mdi-settings', text: 'Settings' },
            ],
        }
    },
    computed: {
      ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),
      ...mapGetters('contracts', ['getContractData']),
      ...mapGetters('accounts', ['activeAccount']),
      contractData() {
        this.counter = this.getContractData({
          contract: args.contractName,
          mehtod: args.method
        });
        return this.counter;
        // return this.drizzleInstance
        // .contracts["FileHandler"]
        // .methods["getCounter"]
        // .cacheCall()
      }
    },
    methods: {
      filePicked(file) {
        // console.log(this.$refs.myFiles);
        // console.log(file)
        const reader = new FileReader();
        if (typeof file !== 'undefined') {
          this.file = file;
          reader.readAsArrayBuffer(file);
          reader.onloadend = async () => {
            this.buffer = await this.convertToBuffer(reader.result);
            // console.log(this.buffer);
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
            console.log(hashedImg);
            console.log(hashedImg[0].hash);
            this.drizzleInstance
            .contracts["FileHandler"]
            .methods["setHash"]
            .cacheSend(hashedImg[0].hash, this.caption)
          }).then(hash => {
            console.log(hash);
          });

        } else {
          console.log("Drizzle Problem");
        }

      }
    },
    created() {
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', args);
      // this.counter= this.drizzleInstance
      // .contracts["FileHandler"]
      // .methods["getCounter"]
      // .cacheCall();
      // console.log(this.counter);
    }
} 