import { mapGetters } from 'vuex';
import ProcessingCard from '../../segments/ProcessingCard'

export default {
    data() {
        return {
            counter: '',
            credentials: [],
            files: [],
            alignment: 'start',
            dense: false,
            justify: 'start',
        };
    },
    components: {
        ProcessingCard,
    },
    computed:{
        ...mapGetters(['getProcessingCredentials']),
    },
    async created() {
        let i = this.getCredentials;
        console.log(i);
    }
}