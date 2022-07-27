// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

error RandomIpfsNft__RangeOutOfBounds();

contract RandomIpfsNFT is VRFConsumerBaseV2, ERC721URIStorage {
    VRFCoordinatorV2Interface private immutable i_vrfCoordinator;
    uint64 private immutable i_subscriptionId;
    bytes32 private immutable i_gasLane;
    uint32 private immutable i_callbackGasLimit;
    uint16 private constant REQUEST_CONFIRMATIONS = 3;
    uint32 private constant NUM_WORDS = 1;

    //VRF helpers
    mapping(uint256 => address) private s_requestIdToSender;

    // NFT Variables
    uint256 public s_tokenCounter;
    uint256 internal constant MAX_CHANCE_VALUE = 100;

    enum Character {
        DEV,
        PM,
        QA
    }

    string[] internal s_characterUris;

    constructor(
        address vrfCoordinatorV2,
        uint64 subscriptionId,
        bytes32 gasLane,
        uint32 callbackGasLimit,
        string[3] memory characterUris
    ) VRFConsumerBaseV2(vrfCoordinatorV2) ERC721("Random Loop NFT", "RNDLOOP") {
        i_vrfCoordinator = VRFCoordinatorV2Interface(vrfCoordinatorV2);
        i_subscriptionId = subscriptionId;
        i_gasLane = gasLane;
        i_callbackGasLimit = callbackGasLimit;
        s_characterUris = characterUris;
    }

    function requestNft() public returns (uint256 requestId) {
        requestId = i_vrfCoordinator.requestRandomWords(
            i_gasLane,
            i_subscriptionId,
            REQUEST_CONFIRMATIONS,
            i_callbackGasLimit,
            NUM_WORDS
        );
        s_requestIdToSender[requestId] = msg.sender;
    }

    function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords)
        internal
        override
    {
        address owner = s_requestIdToSender[requestId];
        uint256 newTokenId = s_tokenCounter;
        s_tokenCounter = s_tokenCounter + 1;

        uint256 moddedRng = randomWords[0] % MAX_CHANCE_VALUE;
        Character loopCharacter = getCharacterByModdedRng(moddedRng);

        _safeMint(owner, newTokenId);
        _setTokenURI(newTokenId, s_characterUris[uint256(loopCharacter)]);
    }

    function getCharacterByModdedRng(uint256 moddedRng)
        public
        pure
        returns (Character)
    {
        uint256 cumulativeSum = 0;
        uint256[3] memory chanceArray = getChanceArray();
        for (uint256 i = 0; i < chanceArray.length; i++) {
            if (
                moddedRng >= cumulativeSum &&
                moddedRng < cumulativeSum + chanceArray[i]
            ) {
                return Character(i);
            }
            cumulativeSum += chanceArray[i];
        }
        revert RandomIpfsNft__RangeOutOfBounds();
    }

    function getChanceArray() public pure returns (uint256[3] memory) {
        return [10, 30, MAX_CHANCE_VALUE];
    }

    function tokenURI(uint256) public view override returns (string memory) {}
}

