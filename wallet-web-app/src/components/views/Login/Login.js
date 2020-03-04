import { mapGetters } from 'vuex';

export default {
    data () {
        return {
            address: '',
            errorMessage: false,
        }
    },
    computed: {
        ...mapGetters('accounts', ['activeAccount']),
    },
    methods: {
        verifyAccount() {
            if (this.address === this.activeAccount) {
                this.$store.commit("changeLogStatus", true);
                this.$store.commit("setActiveAccount", this.address);
                this.$router.push({path: '/home'});
                this.errorMessage = false
            } else{
                this.errorMessage = true
            }
        }
    }
}