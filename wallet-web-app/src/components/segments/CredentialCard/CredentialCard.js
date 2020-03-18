export default {
    props: ["purpose", "email", 
            "phone", "verified", 
            "active", "address"],
    data() {
        return {
            show: false,
            credential_purpose: this.purpose,
            credential_email: this.email,
            credential_phone: this.phone,
            credential_verified: this.verified,
            credential_active: this.active,
            credential_address: this.address
        }
    }
}