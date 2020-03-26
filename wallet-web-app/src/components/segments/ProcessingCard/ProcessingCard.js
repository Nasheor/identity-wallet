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
            length: 3,
        }
    },
    methods: {
        downloadFile() {
            console.log(this.ipfs_file_path);
        },
    },
    mounted() {
        this.ipfs_file_path += this.file_address;
    }
}