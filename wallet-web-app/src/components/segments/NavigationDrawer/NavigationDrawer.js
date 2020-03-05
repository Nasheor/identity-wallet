export default{
    data() {
        return {
            drawer: false,
            items: [
              { icon: 'mdi-contacts', text: 'Credentials', route: '/home/credentials' },
              { icon: 'mdi-history', text: 'Attestations', route: '/home/attestations' },
              { icon: 'mdi-animation-outline', text: 'Processing', route: '/home/processing' },
              { icon: 'mdi-settings', text: 'Settings', route: '/home/settings' },
            ],
        }
    },
    methods: {
        uodateDrawer() {
            this.drawer = !this.drawer;
        }
    },
}