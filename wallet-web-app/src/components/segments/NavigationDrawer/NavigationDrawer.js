import { mapGetters } from 'vuex';

export default{
    data() {
        return {
            drawer: false,
            items: [
              { icon: 'mdi-contacts', text: 'Credentials', route: '/home/credentials' },
              { icon: 'mdi-history', text: 'Attestations', route: '/home/attestations' },
              { icon: 'mdi-animation-outline', text: 'Processing', route: '/home/processing' },
              { icon: 'mdi-panda', text: 'Tokens', route: '/home/token' },
            ],
            searchTerm: '',
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
    computed: {
        ...mapGetters('accounts', ['activeAccount']),
    }
}