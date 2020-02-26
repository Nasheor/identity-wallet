pragma solidity 0.5.0;

contract Login {

  bool status; 

  function addressToString(address _addr) internal pure returns (string memory) {
      bytes32 value = bytes32(uint256(_addr));
      bytes memory alphabet = "0123456789abcdef";

      bytes memory str = new bytes(42);
      str[0] = '0';
      str[1] = 'x';
      for (uint i = 0; i < 20; i++) {
          str[2+i*2] = alphabet[uint(uint8(value[i + 12] >> 4))];
          str[3+i*2] = alphabet[uint(uint8(value[i + 12] & 0x0f))];
      }
      return string(str);
  }

  function getStatus() public view returns (bool) {
    return status;
  }

  function verifyCredentials(string memory addr) public  {
    if (keccak256(abi.encodePacked((addr))) == keccak256(abi.encodePacked(addressToString(msg.sender)))) {
      status = true;
    }
    status = false;
  }
}
