import { mapGetters } from 'vuex';
import ipfs from '../../../plugins/ipfs-config';

export default {
    data() {
        return {
            dialog: false,
            drawer: null,
            buffer: '',
            file: '',
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
            console.log(hashedImg[0].hash);
            this.drizzleInstance
            .contracts["FileHandler"]
            .methods["sendHash"]
            .cacheSend(hashedImg[0].hash)
          }).then(hash => {
            console.log(hash);
          });

        } else {
          console.log("Drizzle Problem")
        }

      }
    }
} 