pragma solidity >=0.4.21 <0.6.0;
import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract FileHandler {
    using SafeMath for uint256;


    struct File {
        address owner;
        string fileHash;
        string textHash;
    }

    mapping(uint256 => File) files;
    uint256 file_ctr;
    event NewFile();

    function sendHash(string memory _fileHash, string memory _txtHash) public {
        file_ctr = file_ctr.add(1);
        File storage upload = files[file_ctr];
        upload.owner = msg.sender;
        upload.fileHash = _fileHash;
        upload.textHash = _txtHash;

        emit NewFile();
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

    function getCounter() 
    public view returns(uint256) { 
        return file_ctr; 
    }
}