pragma solidity 0.5.16;
import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract Attestation {
    using SafeMath for uint256;

    struct Attestant {
        address owner;
        string name;
        string email;
        string phone;
        bool verified;
    }

    mapping(uint256 => Attestant) public attestations;
    uint256 att_ctr;

    event NewAttestant();
    function setAttestion(string memory _name, string memory _email, 
            string memory _phone, bool _verified) public {
        att_ctr = att_ctr.add(1);
        Attestant storage upload = attestations[att_ctr];
        upload.owner = msg.sender;
        upload.name = _name;
        upload.email = _email;
        upload.phone = _phone;
        upload.verified = _verified;
        emit NewAttestant();
    }

    function getAttestation(uint256 _index)
        public view returns (
            string memory name, string memory email, 
            string memory phone, bool verified, address owner
        ) {
            owner = attestations[_index].owner;
            name = attestations[_index].name;
            email = attestations[_index].email;
            phone = attestations[_index].phone;
            verified = attestations[_index].verified;
    }
}