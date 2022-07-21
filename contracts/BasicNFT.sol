// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
pragma solidity ^0.8.15;

contract BasicNFT is ERC721URIStorage {
    uint256 private s_tokenCounter;

    constructor() ERC721("Berta", "DOG") {
        s_tokenCounter = 0;
    }

    function mint(string memory tokenURI) public returns (uint256) {
        _safeMint(msg.sender, s_tokenCounter);
        _setTokenURI(s_tokenCounter, tokenURI);
        s_tokenCounter += 1;
        return s_tokenCounter;
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }
}
