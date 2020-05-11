import { mapGetters } from 'vuex';
import AttestationForm from '../../modals/AttestationForm'

export default{
    components: {
        AttestationForm
    },
    data () {
        return {
            dialog: false,          
            itemsPerPageArray: [4, 8, 12],
            search: '',
            filter: {},
            sortDesc: false,
            page: 1,
            itemsPerPage: 8,
            sortBy: 'name',
            sort_list: [
                "Employer",
                "Colleague",
                "Bank Account Manager",
                "Doctor",
                "Utilities",
                "Government",
                "Trusted Node",
                "Other",
            ],
            keys: [],
            items: [
                {
                    name: 'Frozen Yogurt',
                    email: 'aaa@aaa.com',
                    verified: true,
                    relationship: 'Government Body',
                    credentials: [],

                },
                {
                    name: 'Ice cream',
                    email: 'jjj@jjj.com',
                    verified: false,
                    relationship: 'Colleague',
                    credentials: []    
                },
                {
                    name: 'Eclair',
                    email: 'iii@iii.com',
                    verified: true,
                    relationship: 'Bank Account Manager',
                    credentials: []    
                },
                {
                    name: 'Cupcake',
                    email: 'hhh@hhh.com',
                    verified: false,
                    relationship: 'Doctor',
                    credentials: []    
                },
                {
                    name: 'Gingerbread',
                    email: 'ggg@ggg.com',
                    verified: true,
                    relationship: 'Tursted Node',
                    credentials: []    
                },
                {
                    name: 'Jelly bean',
                    email: 'fff@fff.com',
                    verified: false,
                    relationship: 'Colleague',
                    credentials: []    
                },
                {
                    name: 'Lollipop',
                    email: 'eee@eee.com',
                    verified: true,
                    relationship: 'Government Body',
                    credentials: []    
                },
                {
                    name: 'Honeycomb',
                    email: 'ddd@ddd.com',
                    verified: true,
                    relationship: 'Government Body',
                    credentials: []    
                },
                {
                    name: 'Just Eat',
                    email: 'ccc@ccc.com',
                    verified: false,
                    relationship: 'Utilities',
                    credentials: []    
                },
                {
                    name: 'KitKat',
                    email: 'bbb@bbb.com',
                    verified: false,
                    relationship: 'Other',
                    credentials: []    
                },
            ],
            }
      },
      computed: {
        ...mapGetters(['getCredentials']),
        numberOfPages () {
          return Math.ceil(this.items.length / this.itemsPerPage)
        },
        filteredKeys () {
          return this.keys.filter(key => key !== `Name`)
        },
      },
      methods: {
        nextPage () {
          if (this.page + 1 <= this.numberOfPages) this.page += 1
        },
        formerPage () {
          if (this.page - 1 >= 1) this.page -= 1
        },
        updateItemsPerPage (number) {
          this.itemsPerPage = number
        },
      },
      async created() {
        this.getCredentials.map(credential => {
            if(credential['active']===true) {
                this.keys.push(credential['name']);
                this.sort_list.push(credential['name']);
            }
        });
    }
}