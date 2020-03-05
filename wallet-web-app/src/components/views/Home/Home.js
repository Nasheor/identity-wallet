import NavigationDrawer from '../../segments/NavigationDrawer';
import IdentityForm from "../../modals/IdentityForm";
import { mapGetters } from "vuex";

export default {
  components: {
    NavigationDrawer,
    IdentityForm,
  },
  data() {
      return {
          dialog: false,
          items: [
            { icon: 'mdi-contacts', text: 'Credentials', route: '/home/credentials' },
            { icon: 'mdi-history', text: 'Attestations', route: '/home/attestations' },
            { icon: 'mdi-animation-outline', text: 'Processing', route: '/home/processing' },
            { icon: 'mdi-settings', text: 'Settings', route: '/home/settings' },
          ],
      }
  },
  methods: {

  },
  computed: {
    ...mapGetters([
      'getActiveAccount'
    ]),
  },
} 