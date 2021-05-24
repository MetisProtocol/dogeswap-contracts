pragma solidity ^0.6.0;  
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";  
contract SLVToken is ERC20 {
   constructor(uint256 initialSupply) ERC20("Silver", "SLV") public {
      _mint(msg.sender, initialSupply);     }
}
