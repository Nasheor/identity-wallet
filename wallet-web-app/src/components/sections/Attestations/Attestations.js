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
            keys: [
                'Name',
                'Email',
                'DOB',
                'Nationality',
                'Gender',
                'Employment',
            ],
            items: [
                {
                    name: 'Frozen Yogurt',
                    email: 'aaa@aaa.com',
                    dob: 159,
                    nationality: 6.0,
                    gender: 24,
                    employment: 4.0,
                },
                {
                    name: 'Ice cream',
                    email: 'jjj@jjj.com',
                    dob: 159,
                    nationality: 6.0,
                    gender: 24,
                    employment: 4.0,
                },
                {
                    name: 'Eclair',
                    email: 'iii@iii.com',
                    dob: 159,
                    nationality: 6.0,
                    gender: 24,
                    employment: 4.0,
                },
                {
                    name: 'Cupcake',
                    email: 'hhh@hhh.com',
                    dob: 159,
                    nationality: 6.0,
                    gender: 24,
                    employment: 4.0,
                },
                {
                    name: 'Gingerbread',
                    email: 'ggg@ggg.com',
                    dob: 159,
                    nationality: 6.0,
                    gender: 24,
                    employment: 4.0,
                },
                {
                    name: 'Jelly bean',
                    email: 'fff@fff.com',
                    dob: 159,
                    nationality: 6.0,
                    gender: 24,
                    employment: 4.0,
                },
                {
                    name: 'Lollipop',
                    email: 'eee@eee.com',
                    dob: 159,
                    nationality: 6.0,
                    gender: 24,
                    employment: 4.0,
                },
                {
                    name: 'Honeycomb',
                    email: 'ddd@ddd.com',
                    dob: 159,
                    nationality: 6.0,
                    gender: 24,
                    employment: 4.0,
                },
                {
                    name: 'Donut',
                    email: 'ccc@ccc.com',
                    dob: 159,
                    nationality: 6.0,
                    gender: 24,
                    employment: 4.0,
                },
                {
                    name: 'KitKat',
                    email: 'bbb@bbb.com',
                    dob: 159,
                    nationality: 6.0,
                    gender: 24,
                    employment: 4.0,
                },
            ],
            }
      },
      computed: {
        ...mapGetters(['getCredentialKeys']),
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
      mounted() {
          // populate keys with Credential names received from the store
      }
}