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
    },
    mounted() {
        this.ipfs_file_path += this.file_address;
    }
}