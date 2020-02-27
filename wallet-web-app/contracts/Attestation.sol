pragma solidity 0.5.16;
import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract Attestion {
    using SafeMath for uint256;

    struct Attestant {
        address owner;
        string name;
        string email;
        string phone;
        string verified;
    }

    mapping(uint256 => Attestant) public attestations;
    uint256 att_ctr;

    function setAttestion() {

    }

    function getAttestation() {

    }

}