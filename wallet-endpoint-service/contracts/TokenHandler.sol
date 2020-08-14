pragma solidity >=0.5.16;

contract TokenHandler {

    struct Token {
        address owner;
        string name;
        string token_hash;
        string file_hash;
        string file_address;
        string credential_data;
        string timestamp;
        bool active;
    }

    mapping(uint256 => Token) public tokens;
    uint256 token_ctr;

    function setToken(string memory _name, string memory _token_hash, 
            string memory _file_hash, string memory _file_address,
            string memory _credential_data, string memory _timestamp) public {
        token_ctr = token_ctr + 1;
        Token storage upload = tokens[token_ctr];
        upload.owner = msg.sender;
        upload.name = _name;
        upload.token_hash = _token_hash;
        upload.file_address = _file_address;
        upload.credential_data = _credential_data;
        upload.file_hash = _file_hash;
        upload.timestamp = _timestamp;
        upload.active = true;
    }

    function getToken(uint256 _index)
        public view returns (
            string memory name, string memory token_hash, 
            string memory file_hash, string memory file_address,
            string memory credential_data, string memory timestamp, bool active) {
        name = tokens[_index].name;
        token_hash = tokens[_index].token_hash;
        file_address = tokens[_index].file_address;
        file_hash= tokens[_index].file_hash;
        credential_data = tokens[_index].credential_data;
        timestamp = tokens[_index].timestamp;
        active = tokens[_index].active;
    }

    function revokeToken(uint256 _index) public {
            tokens[_index].active = false;
    }

    function getCounter() 
    public view returns(uint256) { 
        return token_ctr; 
    }
}