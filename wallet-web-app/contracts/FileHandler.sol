pragma solidity 0.5.16;
import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract FileHandler {

    using SafeMath for uint256;

    struct File {
        address owner;
        string fileHash;
        string textHash;
    }

    struct Credential {
        address owner;
        string name;
        string email;
        bool verified;
        string phone;
        bool active;
    }

    mapping(uint256 => File) public files;
    mapping(uint256 => Credential) public credentials;
    uint256 file_ctr;
    uint256 credential_ctr;

    event NewFile();
    function setHash(string memory _fileHash, string memory _txtHash) public {
        file_ctr = file_ctr.add(1);
        File storage upload = files[file_ctr];
        upload.owner = msg.sender;
        upload.fileHash = _fileHash;
        upload.textHash = _txtHash;

        emit NewFile();
    }

    function setCredential(string memory _name, string memory _email, 
            string memory _phone, bool _verified, 
            bool _active) public {
        credential_ctr = credential_ctr.add(1);
        Credential storage newbie = credentials[credential_ctr];
        newbie.owner = msg.sender;
        newbie.name = _name;
        newbie.email = _email;
        newbie.phone = _phone;
        newbie.verified = _verified;
        newbie.active = _active;
    }

    function getHash(uint256 _index)
        public view returns (
            string memory file,
            string memory text,
            address owner
        ) {
            owner = files[_index].owner;
            file = files[_index].fileHash;
            text = files[_index].textHash;
    }
    function getCredential(uint256 _index)
        public view returns (
            string memory name,
            string memory email,
            string memory phone,
            bool verified,
            bool active,
            address owner
        ) {
            owner = credentials[_index].owner;
            name = credentials[_index].name;
            email = credentials[_index].email;
            phone = credentials[_index].phone;
            verified = credentials[_index].verified;
            active = credentials[_index].active;
        }
    function revokeToken(uint256 _index)
        public returns (
            bool status
        ) {
            credentials[_index].active = false;
            status = true;
        }

    function getCounter() 
    public view returns(uint256) { 
        return file_ctr; 
    }
}