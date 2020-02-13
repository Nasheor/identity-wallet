export default {
    data() {
        return {
            dialog: false,
            drawer: null,
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
      }
    }
} 