export default {
    data() {
        return {
            dialog: false,
            drawer: null,
            buffer: '',
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
    methods: {
      firstClick() {
        console.log("1")
      },
      secondClick() {
        console.log("2")
      },
      filePicked(file) {
        // console.log(this.$refs.myFiles);
        console.log(file)
        const reader = new FileReader();
        if (typeof file !== 'undefined') {
          reader.readAsArrayBuffer(file);
          reader.onloadend = async () => {
            this.buffer = await this.convertToBuffer(reader.result);
            console.log(this.buffer);
          };
        } else this.buffer = '';
      },
      async convertToBuffer(reader) {
        return Buffer.from(reader);
      },
    }
} 