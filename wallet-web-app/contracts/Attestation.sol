pragma solidity >=0.5.16;

contract Attestation {

    struct Attestant {
        address owner;
        string name;
        string email;
        string phone;
        bool verified;
        string relationship;
        string credentials;
    }

    mapping(uint256 => Attestant) public attestations;
    uint256 att_ctr;

    function setAttestion(string memory _name, string memory _email, 
            string memory _phone, bool _verified, 
            string memory _realtionship, string memory _credentials) public {
        att_ctr = att_ctr + 1;
        Attestant storage upload = attestations[att_ctr];
        upload.owner = msg.sender;
        upload.name = _name;
        upload.email = _email;
        upload.phone = _phone;
        upload.verified = _verified;
        upload.relationship = _realtionship;
        upload.credentials = _credentials;
    }

    function getAttestation(uint256 _index)
        public view returns (
            string memory name, string memory email, 
            string memory phone, bool verified, address owner,
            string memory relationship, string memory credentials
        ) {
            owner = attestations[_index].owner;
            name = attestations[_index].name;
            email = attestations[_index].email;
            phone = attestations[_index].phone;
            verified = attestations[_index].verified;
            relationship = attestations[_index].relationship;
            credentials = attestations[_index].credentials;
        }

    function getCounter() 
    public view returns(uint256) { 
        return att_ctr; 
    }
}