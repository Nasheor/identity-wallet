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
        updateDrawer() {
            this.drawer = !this.drawer;
        },
        logout() {
            this.$store.commit("changeLogStatus", false);
            this.$router.push("/login");
            location.reload();
                localStorage.setItem('address', '');
        }
    },
}