import { mapGetters } from 'vuex';
import { credentials_args } from '../../../utils/args';
import axios from 'axios';
export default {
    props: ["purpose", "email", 
            "phone", "active", 
            "address", "file_hash", 
            "file_text", "token",
            "index"],
    data() {
        return {
            show: false,
            credential_purpose: this.purpose,
            credential_email: this.email,
            credential_phone: this.phone,
            credential_active: this.active,
            credential_address: this.address,
            file_address: this.file_hash,
            file_name: this.file_text,
            credential_token: this.token,
            credential_index: this.index,
            ipfs_file_path: 'https://ipfs.infura.io:5001/api/v0/cat?arg=',
            rating: 3,
            length: 3,
        }
    },
    methods: {
        downloadFile() {
            axios({
                method: 'get',
                url: this.ipfs_file_path,
                responseType: 'arraybuffer'
              })
              .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', 'file.pdf') //or any other extension
                document.body.appendChild(link);
                link.click();                
              })
              .catch(() => console.log('error occured'))
        },
        revokeToken() {
           if(this.isDrizzleInitialized) {
                let count = this.index+1; 
                credentials_args.methodArgs[0] = count;
                this.$store.dispatch('drizzle/REGISTER_CONTRACT', credentials_args);
                this.drizzleInstance
                    .contracts["CredentialHandler"]
                    .methods["revokeToken"]
                    .cacheSend(count);
                let data = this.getContractData({
                    contract: credentials_args.contractName,
                    method: credentials_args.method,
                    methodArgs: credentials_args.methodArgs
                });
                this.$store.commit("setActiveStatusCredential", this.index);
                console.log(count);
                console.log(data);          
           }
        }
    },
    computed: {
        ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),
        ...mapGetters('contracts', ['getContractData']),
        verificationStatus() {
            return this.credential_active;
        }
    },
    mounted() {
        this.ipfs_file_path += this.file_address;
    }
}