import { mapGetters } from 'vuex';
import ipfs from '../../../plugins/ipfs-config';
import { sha256 } from 'js-sha256';

export default {
    data() {
        return {
            file: '',
            name: '',
            email: '',
            phone: '',
            caption: '',
            counter: 0,
            buffer: '',
        }
    },
    computed: {
        ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),
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
            this.dialog = false;
            let cap = this.caption;
            let credentialName = this.name;
            let credentialEmail = this.email;
            let credentialPhone = this.phone;
            let active = true;
            ipfs.add(this.buffer).then((hashedImg) => {
                let token = sha256(hashedImg[0].hash+cap)
                this.drizzleInstance
                .contracts["CredentialHandler"]
                .methods["setCredential"]
                .cacheSend(credentialName, credentialEmail,
                    credentialPhone, active,
                    hashedImg[0].hash, cap, token);
            });
            this.caption = '';
            this.file = '';
            this.name = '';
            this.email = '';
            this.phone = '';
            this.buffer = '';
            this.save = true;
            this.$notify({
                group: 'foo',
                title: 'Notification',
                text: "Tokenizing the credential"
              });
            } else {
                console.log("Drizzle Problem");
            }
        },
    },
}