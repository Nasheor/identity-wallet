pragma solidity 0.5.16;
import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract TokenHandler {
    using SafeMath for uint256;

    struct Token {
        address owner;
        string name;
        string token_hash;
        string timestamp;
    }

    mapping(uint256 => Token) public tokens;
    uint256 token_ctr;

    function setToken(string memory _name, string memory _token_hash, 
            string memory _timestamp) public {
        token_ctr = token_ctr.add(1);
        Token storage upload = tokens[token_ctr];
        upload.owner = msg.sender;
        upload.name = _name;
        upload.token_hash = _token_hash;
        upload.timestamp = _timestamp;
    }

    function getToken(uint256 _index)
        public view returns (
            string memory name, string memory token_hash, 
            string memory timestamp) {
        name = tokens[_index].name;
        token_hash = tokens[_index].token_hash;
        timestamp = tokens[_index].timestamp;
    }
}