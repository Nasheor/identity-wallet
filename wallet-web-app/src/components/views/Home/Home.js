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
    ...mapGetters([
      'getActiveAccount'
    ]),
  },
  created() {
    this.$router.push({path: `/home/${this.getActiveAccount}`});
  }
} 