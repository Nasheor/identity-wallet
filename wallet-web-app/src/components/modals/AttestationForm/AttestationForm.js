import { mapGetters } from 'vuex';
// import ipfs from '../../../plugins/ipfs-config';
// import { sha256 } from 'js-sha256';

export default {
    data() {
        return {
            file: '',
            name: '',
            email: '',
            phone: '',
            verified: 0,
            relationship: '',
            relationship_list: [
                "Employer",
                "Colleague",
                "Bank Account Manager",
                "Doctor",
                "Government",
                "Other",
            ],
            credentials: [],
            attesting: []
        }
    },
    computed: {
        ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),
        ...mapGetters([
            "getCredentials"
        ]),
        ...mapGetters('contracts', ['getContractData']),
      },
    methods: {
        filePicked(file) {
            const reader = new FileReader();
            if (typeof file !== 'undefined') {
            this.file = file;
            reader.readAsArrayBuffer(file);
            reader.onloadend = async () => {
                this.buffer = await this.convertToBuffer(reader.result);
            };
            } else this.buffer = '';
        },
        async convertToBuffer(reader) {
            return Buffer.from(reader);
        },
        submit() {
            if (this.isDrizzleInitialized) {
                let att_name = this.name;
                let att_email = this.email;
                let att_phone = this.phone;
                let att_attesting = this.attesting;
                let att_relationship = this.relationship;
                let verified = false;
                if(att_relationship === "Government")
                    verified = true;
                this.drizzleInstance
                .contracts["Attestation"]
                .methods["setAttestion"]
                .cacheSend(att_name, att_email, att_phone,
                           verified, att_relationship, att_attesting 
                        );
                this.name = '';
                this.email = '';
                this.phone = '';
                this.attesting = [];
                this.relationship= '';
                this.$notify({
                    group: 'foo',
                    title: 'Notification',
                    text: "Successfully Added! Attestant will have to confirm the claims"
                });
            } else {
                console.log("Drizzle Problem");
            }
        },
        closeConfirmation() {
            this.save = false;
        },
    },
    mounted() {
        this.save = false;
    },
    async created() {
        this.getCredentials.map(credential => {
            if(credential['active']===true)
                this.credentials.push(credential['name']);
        });
    }
}