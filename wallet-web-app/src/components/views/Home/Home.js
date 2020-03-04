import IdentityForm from "../../modals/IdentityForm";
import { mapGetters } from "vuex";

export default {
  components: {
    IdentityForm,
  },
  data() {
      return {
          dialog: false,
          drawer: null,
          items: [
            { icon: 'mdi-contacts', text: 'Credentials', route: '/home/credentials' },
            { icon: 'mdi-history', text: 'Attestations', route: 'attestations' },
            { icon: 'mdi-animation-outline', text: 'Processing', route: 'processing' },
            { icon: 'mdi-settings', text: 'Settings', route: 'settings' },
          ],
      }
  },
  methods: {
    navigation(event) {
      console.log(event);
    },
  },
  computed: {
    ...mapGetters([
      'getActiveAccount'
    ]),
  },
} 