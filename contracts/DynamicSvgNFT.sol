// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
pragma solidity ^0.8.15;

contract DynamicSvgNft is ERC721 {
    uint256 s_tokenCounter;
    string private i_lowImageUri;
    string private i_highImageUri;

    constructor(string memory lowSvg, string memory highSvg)
        ERC721("SVG NFT", "SVGNFT")
    {}

    function mintNft() public {
        _safeMint(msg.sender, s_tokenCounter);
        s_tokenCounter += 1;
    }
}
