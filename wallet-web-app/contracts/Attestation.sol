pragma solidity 0.5.16;
pragma experimental ABIEncoderV2;
import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract Attestation {
    using SafeMath for uint256;

    struct credentials {
        string name;
    }

    struct Attestant {
        address owner;
        string name;
        string email;
        string phone;
        bool verified;
        string relationship;
        credentials[5] credential;
    }

    mapping(uint256 => Attestant) public attestations;
    uint256 att_ctr;

    function setAttestion(string memory _name, string memory _email, 
            string memory _phone, bool _verified, string memory _realtionship, credentials[5] memory _credential) public {
        att_ctr = att_ctr.add(1);
        Attestant storage upload = attestations[att_ctr];
        upload.owner = msg.sender;
        upload.name = _name;
        upload.email = _email;
        upload.phone = _phone;
        upload.verified = _verified;
        upload.relationship = _realtionship;
        uint8 x = 0;
        while(x < _credential.length) {
            upload.credential[x] = _credential[x];
            x++;
        }
    }

    function getAttestation(uint256 _index)
        public view returns (
            string memory name, string memory email, 
            string memory phone, bool verified, address owner,
            string memory relationship, credentials[5] memory credential
        ) {
            owner = attestations[_index].owner;
            name = attestations[_index].name;
            email = attestations[_index].email;
            phone = attestations[_index].phone;
            verified = attestations[_index].verified;
            relationship = attestations[_index].relationship;
            uint8 x = 0;
            while(x < credential.length) {
                credential[x] = attestations[_index].credential[x];
                x++;
            }
        }
}