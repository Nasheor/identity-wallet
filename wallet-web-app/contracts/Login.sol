pragma solidity >=0.4.21 <0.6.0;

contract Login {
  event SignatureVerified(string message, string name);   

  string[] users; 

  function verifyCredentials(string memory name, string memory password) public returns (uint) {
    users.push("nash password");
    for(uint256 i=0; i<users.length; i++) {
      string memory tmp_data = string(abi.encodePacked(name, password));
      if (keccak256(abi.encodePacked((users[i]))) == keccak256(abi.encodePacked(tmp_data))) {
        emit SignatureVerified("Successfully Logged in!", name);
        return 1;
      }
    }
    return 0; 
  }
}