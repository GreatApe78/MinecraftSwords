// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
contract MinecraftSwords is ERC1155 {
    uint256 public constant WOOD = 0;
    uint256 public constant STONE = 1;
    uint256 public constant IRON = 2;
    uint256 public constant GOLD = 3;
    uint256 public constant DIAMOND = 4;
    uint256 public woodTotalSupply = 0;
    uint256 public stoneTotalSupply = 0;
    uint256 public ironTotalSupply = 0;
    uint256 public goldTotalSupply = 0;
    uint256 public diamondTotalSupply = 0;
    uint256 public woodTotalLimit = 2 * 10 ** 5;
    uint256 public stoneTotalLimit = 2 * 10 ** 4;
    uint256 public ironTotalLimit = 2 * 10 ** 3;
    uint256 public goldTotalLimit = 2 * 10 ** 2;
    uint256 public diamondTotalLimit = 2 * 10;
    address public owner;
    constructor() ERC1155("ipfs://QmbBiP2ujvbYtRStSuKSjQz2hAsFzX2mVc2zhmwGZLWPzG/{id}.json") {
        owner = msg.sender;
    }
    modifier onlyOwner() {
    require(msg.sender == owner);
     _;
    }
    function buyWood (uint256 _quantidade) public payable {
        uint256 preco = 1 * 10 ** 14;
        require (woodTotalSupply + _quantidade <= woodTotalLimit, "Limite de tokens mintados!");
        require (msg.value >= preco * _quantidade, "Pague o valor necessario!");
        (bool os, ) = payable(owner).call{value: msg.value}("");
        require(os);
        _mint(msg.sender, WOOD, _quantidade, "");
        woodTotalSupply += _quantidade;
    }
    function buyStone (uint256 _quantidade) public payable {
        uint256 preco = 1 * 10 ** 15;
        require (stoneTotalSupply + _quantidade <= stoneTotalLimit, "Limite de tokens mintados!");
        require (msg.value >= preco * _quantidade, "Pague o valor necessario!");
        (bool os, ) = payable(owner).call{value: msg.value}("");
        require(os);
        _mint(msg.sender, STONE, _quantidade, "");
        stoneTotalSupply += _quantidade;
    }
    function buyIron (uint256 _quantidade) public payable {
        uint256 preco = 5 * 10 ** 15;
        require (ironTotalSupply + _quantidade <= ironTotalLimit, "Limite de tokens mintados!");
        require (msg.value >= preco * _quantidade, "Pague o valor necessario!");
        (bool os, ) = payable(owner).call{value: msg.value}("");
        require(os);
        _mint(msg.sender, IRON, _quantidade, "");
        ironTotalSupply += _quantidade;
    }
    function buyGold (uint256 _quantidade) public payable {
        uint256 preco = 1 * 10 ** 16;
        require (goldTotalSupply + _quantidade <= goldTotalLimit, "Limite de tokens mintados!");
        require (msg.value >= preco * _quantidade, "Pague o valor necessario!");
        (bool os, ) = payable(owner).call{value: msg.value}("");
        require(os);
        _mint(msg.sender, GOLD, _quantidade, "");
        goldTotalSupply += _quantidade;
    }
    function buyDiamond (uint256 _quantidade) public payable {
        uint256 preco = 5 * 10 ** 17;
        require (diamondTotalSupply + _quantidade <= diamondTotalLimit, "Limite de tokens mintados!");
        require (msg.value >= preco * _quantidade, "Pague o valor necessario!");
        (bool os, ) = payable(owner).call{value: msg.value}("");
        require(os);
        _mint(msg.sender, DIAMOND, _quantidade, "");
        diamondTotalSupply += _quantidade;
    }

}







