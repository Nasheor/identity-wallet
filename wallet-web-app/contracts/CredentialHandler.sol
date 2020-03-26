pragma solidity 0.5.16;
import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract CredentialHandler {

    using SafeMath for uint256;

    struct Credential {
        address owner;
        string name;
        string email;
        string phone;
        bool active;
        string fileHash;
        string caption;
        string token;
    }

    mapping(uint256 => Credential) public credentials;
    uint256 credential_ctr;

    event NewCredential();
    function setCredential(string memory _name, string memory _email, 
            string memory _phone, bool _active, string memory _fileHash, 
            string memory _caption, string memory _token) public {
        credential_ctr = credential_ctr.add(1);
        Credential storage newbie = credentials[credential_ctr];
        newbie.owner = msg.sender;
        newbie.name = _name;
        newbie.email = _email;
        newbie.phone = _phone;
        newbie.active = _active;
        newbie.fileHash = _fileHash;
        newbie.caption = _caption;
        newbie.token = _token;
        emit NewCredential();
    }

    function getCredential(uint256 _index)
        public view returns (
            string memory name,
            string memory email,
            string memory phone,
            bool active,
            string memory file,
            string memory caption,
            string memory token,
            address owner
        ) {
            owner = credentials[_index].owner;
            name = credentials[_index].name;
            email = credentials[_index].email;
            phone = credentials[_index].phone;
            active = credentials[_index].active;
            file = credentials[_index].fileHash;
            caption = credentials[_index].caption;
            token = credentials[_index].token;
        }

    function revokeToken(uint256 _index) public {
            credentials[_index].active = false;
        }

    function getCounter() 
    public view returns(uint256) { 
        return credential_ctr; 
    }
}