export default {
    props: ["purpose", "email", 
            "phone", "verified", 
            "active", "address"],
    data() {
        return {
            show: false,
            purpose: this.purpose,
            email: this.email,
            phone: this.phone,
            verified: this.verified,
            active: this.active,
            address: this.address
        }
    }
}