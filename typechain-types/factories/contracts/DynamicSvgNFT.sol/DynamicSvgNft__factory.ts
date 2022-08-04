/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DynamicSvgNft,
  DynamicSvgNftInterface,
} from "../../../contracts/DynamicSvgNFT.sol/DynamicSvgNft";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "lowSvg",
        type: "string",
      },
      {
        internalType: "string",
        name: "highSvg",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "svg",
        type: "string",
      },
    ],
    name: "svgToImageURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002f0538038062002f0583398181016040528101906200003791906200026e565b6040518060400160405280600781526020017f535647204e4654000000000000000000000000000000000000000000000000008152506040518060400160405280600681526020017f5356474e465400000000000000000000000000000000000000000000000000008152508160009081620000b491906200053e565b508060019081620000c691906200053e565b505050505062000625565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200013a82620000ef565b810181811067ffffffffffffffff821117156200015c576200015b62000100565b5b80604052505050565b600062000171620000d1565b90506200017f82826200012f565b919050565b600067ffffffffffffffff821115620001a257620001a162000100565b5b620001ad82620000ef565b9050602081019050919050565b60005b83811015620001da578082015181840152602081019050620001bd565b83811115620001ea576000848401525b50505050565b600062000207620002018462000184565b62000165565b905082815260208101848484011115620002265762000225620000ea565b5b62000233848285620001ba565b509392505050565b600082601f830112620002535762000252620000e5565b5b815162000265848260208601620001f0565b91505092915050565b60008060408385031215620002885762000287620000db565b5b600083015167ffffffffffffffff811115620002a957620002a8620000e0565b5b620002b7858286016200023b565b925050602083015167ffffffffffffffff811115620002db57620002da620000e0565b5b620002e9858286016200023b565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200034657607f821691505b6020821081036200035c576200035b620002fe565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003c67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000387565b620003d2868362000387565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200041f620004196200041384620003ea565b620003f4565b620003ea565b9050919050565b6000819050919050565b6200043b83620003fe565b620004536200044a8262000426565b84845462000394565b825550505050565b600090565b6200046a6200045b565b6200047781848462000430565b505050565b5b818110156200049f576200049360008262000460565b6001810190506200047d565b5050565b601f821115620004ee57620004b88162000362565b620004c38462000377565b81016020851015620004d3578190505b620004eb620004e28562000377565b8301826200047c565b50505b505050565b600082821c905092915050565b60006200051360001984600802620004f3565b1980831691505092915050565b60006200052e838362000500565b9150826002028217905092915050565b6200054982620002f3565b67ffffffffffffffff81111562000565576200056462000100565b5b6200057182546200032d565b6200057e828285620004a3565b600060209050601f831160018114620005b65760008415620005a1578287015190505b620005ad858262000520565b8655506200061d565b601f198416620005c68662000362565b60005b82811015620005f057848901518255600182019150602085019450602081019050620005c9565b868310156200061057848901516200060c601f89168262000500565b8355505b6001600288020188555050505b505050505050565b6128d080620006356000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80636352211e11610097578063b88d4fde11610066578063b88d4fde14610296578063c2229fea146102b2578063c87b56dd146102bc578063e985e9c5146102ec576100f5565b80636352211e146101fc57806370a082311461022c57806395d89b411461025c578063a22cb4651461027a576100f5565b8063095ea7b3116100d3578063095ea7b31461017857806323b872dd1461019457806330d871c6146101b057806342842e0e146101e0576100f5565b806301ffc9a7146100fa57806306fdde031461012a578063081812fc14610148575b600080fd5b610114600480360381019061010f9190611896565b61031c565b60405161012191906118de565b60405180910390f35b6101326103fe565b60405161013f9190611992565b60405180910390f35b610162600480360381019061015d91906119ea565b610490565b60405161016f9190611a58565b60405180910390f35b610192600480360381019061018d9190611a9f565b6104d6565b005b6101ae60048036038101906101a99190611adf565b6105ed565b005b6101ca60048036038101906101c59190611c67565b61064d565b6040516101d79190611992565b60405180910390f35b6101fa60048036038101906101f59190611adf565b6106da565b005b610216600480360381019061021191906119ea565b6106fa565b6040516102239190611a58565b60405180910390f35b61024660048036038101906102419190611cb0565b6107ab565b6040516102539190611cec565b60405180910390f35b610264610862565b6040516102719190611992565b60405180910390f35b610294600480360381019061028f9190611d33565b6108f4565b005b6102b060048036038101906102ab9190611e14565b61090a565b005b6102ba61096c565b005b6102d660048036038101906102d191906119ea565b610994565b6040516102e39190611992565b60405180910390f35b61030660048036038101906103019190611e97565b6109fc565b60405161031391906118de565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103e757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103f757506103f682610a90565b5b9050919050565b60606000805461040d90611f06565b80601f016020809104026020016040519081016040528092919081815260200182805461043990611f06565b80156104865780601f1061045b57610100808354040283529160200191610486565b820191906000526020600020905b81548152906001019060200180831161046957829003601f168201915b5050505050905090565b600061049b82610afa565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104e1826106fa565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610551576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054890611fa9565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610570610b45565b73ffffffffffffffffffffffffffffffffffffffff16148061059f575061059e81610599610b45565b6109fc565b5b6105de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d59061203b565b60405180910390fd5b6105e88383610b4d565b505050565b6105fe6105f8610b45565b82610c06565b61063d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610634906120cd565b60405180910390fd5b610648838383610c9b565b505050565b60606000610679836040516020016106659190612129565b604051602081830303815290604052610f01565b90506040518060400160405280601a81526020017f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000815250816040516020016106c3929190612140565b604051602081830303815290604052915050919050565b6106f58383836040518060200160405280600081525061090a565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610799906121b0565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361081b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081290612242565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461087190611f06565b80601f016020809104026020016040519081016040528092919081815260200182805461089d90611f06565b80156108ea5780601f106108bf576101008083540402835291602001916108ea565b820191906000526020600020905b8154815290600101906020018083116108cd57829003601f168201915b5050505050905090565b6109066108ff610b45565b8383611079565b5050565b61091b610915610b45565b83610c06565b61095a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610951906120cd565b60405180910390fd5b610966848484846111e5565b50505050565b61097833600654611241565b60016006600082825461098b9190612291565b92505081905550565b606061099f82610afa565b60006109a961125f565b905060008151116109c957604051806020016040528060008152506109f4565b806109d384611276565b6040516020016109e4929190612140565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610b03816113d6565b610b42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b39906121b0565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610bc0836106fa565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610c12836106fa565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c545750610c5381856109fc565b5b80610c9257508373ffffffffffffffffffffffffffffffffffffffff16610c7a84610490565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610cbb826106fa565b73ffffffffffffffffffffffffffffffffffffffff1614610d11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0890612359565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d77906123eb565b60405180910390fd5b610d8b838383611442565b610d96600082610b4d565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610de6919061240b565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e3d9190612291565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610efc838383611447565b505050565b60606000825103610f2357604051806020016040528060008152509050611074565b600060405180606001604052806040815260200161285b6040913990506000600360028551610f529190612291565b610f5c919061246e565b6004610f68919061249f565b90506000602082610f799190612291565b67ffffffffffffffff811115610f9257610f91611b3c565b5b6040519080825280601f01601f191660200182016040528015610fc45781602001600182028036833780820191505090505b509050818152600183018586518101602084015b81831015611033576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f8116850151825360018201915050610fd8565b60038951066001811461104d576002811461105d57611068565b613d3d60f01b6002830352611068565b603d60f81b60018303525b50505050508093505050505b919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036110e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110de90612545565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516111d891906118de565b60405180910390a3505050565b6111f0848484610c9b565b6111fc8484848461144c565b61123b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611232906125d7565b60405180910390fd5b50505050565b61125b8282604051806020016040528060008152506115d3565b5050565b606060405180602001604052806000815250905090565b6060600082036112bd576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506113d1565b600082905060005b600082146112ef5780806112d8906125f7565b915050600a826112e8919061246e565b91506112c5565b60008167ffffffffffffffff81111561130b5761130a611b3c565b5b6040519080825280601f01601f19166020018201604052801561133d5781602001600182028036833780820191505090505b5090505b600085146113ca57600182611356919061240b565b9150600a85611365919061263f565b60306113719190612291565b60f81b81838151811061138757611386612670565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856113c3919061246e565b9450611341565b8093505050505b919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b600061146d8473ffffffffffffffffffffffffffffffffffffffff1661162e565b156115c6578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611496610b45565b8786866040518563ffffffff1660e01b81526004016114b894939291906126f4565b6020604051808303816000875af19250505080156114f457506040513d601f19601f820116820180604052508101906114f19190612755565b60015b611576573d8060008114611524576040519150601f19603f3d011682016040523d82523d6000602084013e611529565b606091505b50600081510361156e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611565906125d7565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506115cb565b600190505b949350505050565b6115dd8383611651565b6115ea600084848461144c565b611629576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611620906125d7565b60405180910390fd5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036116c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116b7906127ce565b60405180910390fd5b6116c9816113d6565b15611709576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117009061283a565b60405180910390fd5b61171560008383611442565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546117659190612291565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461182660008383611447565b5050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6118738161183e565b811461187e57600080fd5b50565b6000813590506118908161186a565b92915050565b6000602082840312156118ac576118ab611834565b5b60006118ba84828501611881565b91505092915050565b60008115159050919050565b6118d8816118c3565b82525050565b60006020820190506118f360008301846118cf565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611933578082015181840152602081019050611918565b83811115611942576000848401525b50505050565b6000601f19601f8301169050919050565b6000611964826118f9565b61196e8185611904565b935061197e818560208601611915565b61198781611948565b840191505092915050565b600060208201905081810360008301526119ac8184611959565b905092915050565b6000819050919050565b6119c7816119b4565b81146119d257600080fd5b50565b6000813590506119e4816119be565b92915050565b600060208284031215611a00576119ff611834565b5b6000611a0e848285016119d5565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a4282611a17565b9050919050565b611a5281611a37565b82525050565b6000602082019050611a6d6000830184611a49565b92915050565b611a7c81611a37565b8114611a8757600080fd5b50565b600081359050611a9981611a73565b92915050565b60008060408385031215611ab657611ab5611834565b5b6000611ac485828601611a8a565b9250506020611ad5858286016119d5565b9150509250929050565b600080600060608486031215611af857611af7611834565b5b6000611b0686828701611a8a565b9350506020611b1786828701611a8a565b9250506040611b28868287016119d5565b9150509250925092565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611b7482611948565b810181811067ffffffffffffffff82111715611b9357611b92611b3c565b5b80604052505050565b6000611ba661182a565b9050611bb28282611b6b565b919050565b600067ffffffffffffffff821115611bd257611bd1611b3c565b5b611bdb82611948565b9050602081019050919050565b82818337600083830152505050565b6000611c0a611c0584611bb7565b611b9c565b905082815260208101848484011115611c2657611c25611b37565b5b611c31848285611be8565b509392505050565b600082601f830112611c4e57611c4d611b32565b5b8135611c5e848260208601611bf7565b91505092915050565b600060208284031215611c7d57611c7c611834565b5b600082013567ffffffffffffffff811115611c9b57611c9a611839565b5b611ca784828501611c39565b91505092915050565b600060208284031215611cc657611cc5611834565b5b6000611cd484828501611a8a565b91505092915050565b611ce6816119b4565b82525050565b6000602082019050611d016000830184611cdd565b92915050565b611d10816118c3565b8114611d1b57600080fd5b50565b600081359050611d2d81611d07565b92915050565b60008060408385031215611d4a57611d49611834565b5b6000611d5885828601611a8a565b9250506020611d6985828601611d1e565b9150509250929050565b600067ffffffffffffffff821115611d8e57611d8d611b3c565b5b611d9782611948565b9050602081019050919050565b6000611db7611db284611d73565b611b9c565b905082815260208101848484011115611dd357611dd2611b37565b5b611dde848285611be8565b509392505050565b600082601f830112611dfb57611dfa611b32565b5b8135611e0b848260208601611da4565b91505092915050565b60008060008060808587031215611e2e57611e2d611834565b5b6000611e3c87828801611a8a565b9450506020611e4d87828801611a8a565b9350506040611e5e878288016119d5565b925050606085013567ffffffffffffffff811115611e7f57611e7e611839565b5b611e8b87828801611de6565b91505092959194509250565b60008060408385031215611eae57611ead611834565b5b6000611ebc85828601611a8a565b9250506020611ecd85828601611a8a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611f1e57607f821691505b602082108103611f3157611f30611ed7565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f93602183611904565b9150611f9e82611f37565b604082019050919050565b60006020820190508181036000830152611fc281611f86565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000612025603e83611904565b915061203082611fc9565b604082019050919050565b6000602082019050818103600083015261205481612018565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b60006120b7602e83611904565b91506120c28261205b565b604082019050919050565b600060208201905081810360008301526120e6816120aa565b9050919050565b600081905092915050565b6000612103826118f9565b61210d81856120ed565b935061211d818560208601611915565b80840191505092915050565b600061213582846120f8565b915081905092915050565b600061214c82856120f8565b915061215882846120f8565b91508190509392505050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b600061219a601883611904565b91506121a582612164565b602082019050919050565b600060208201905081810360008301526121c98161218d565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061222c602983611904565b9150612237826121d0565b604082019050919050565b6000602082019050818103600083015261225b8161221f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061229c826119b4565b91506122a7836119b4565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156122dc576122db612262565b5b828201905092915050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612343602583611904565b915061234e826122e7565b604082019050919050565b6000602082019050818103600083015261237281612336565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006123d5602483611904565b91506123e082612379565b604082019050919050565b60006020820190508181036000830152612404816123c8565b9050919050565b6000612416826119b4565b9150612421836119b4565b92508282101561243457612433612262565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612479826119b4565b9150612484836119b4565b9250826124945761249361243f565b5b828204905092915050565b60006124aa826119b4565b91506124b5836119b4565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156124ee576124ed612262565b5b828202905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b600061252f601983611904565b915061253a826124f9565b602082019050919050565b6000602082019050818103600083015261255e81612522565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006125c1603283611904565b91506125cc82612565565b604082019050919050565b600060208201905081810360008301526125f0816125b4565b9050919050565b6000612602826119b4565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361263457612633612262565b5b600182019050919050565b600061264a826119b4565b9150612655836119b4565b9250826126655761266461243f565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006126c68261269f565b6126d081856126aa565b93506126e0818560208601611915565b6126e981611948565b840191505092915050565b60006080820190506127096000830187611a49565b6127166020830186611a49565b6127236040830185611cdd565b818103606083015261273581846126bb565b905095945050505050565b60008151905061274f8161186a565b92915050565b60006020828403121561276b5761276a611834565b5b600061277984828501612740565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006127b8602083611904565b91506127c382612782565b602082019050919050565b600060208201905081810360008301526127e7816127ab565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612824601c83611904565b915061282f826127ee565b602082019050919050565b6000602082019050818103600083015261285381612817565b905091905056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212200a1d16754a596803ea6966a413130b8ee59cc03e6490cd6634d7c7f2f8560f2664736f6c634300080f0033";

type DynamicSvgNftConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DynamicSvgNftConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DynamicSvgNft__factory extends ContractFactory {
  constructor(...args: DynamicSvgNftConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    lowSvg: PromiseOrValue<string>,
    highSvg: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DynamicSvgNft> {
    return super.deploy(
      lowSvg,
      highSvg,
      overrides || {}
    ) as Promise<DynamicSvgNft>;
  }
  override getDeployTransaction(
    lowSvg: PromiseOrValue<string>,
    highSvg: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(lowSvg, highSvg, overrides || {});
  }
  override attach(address: string): DynamicSvgNft {
    return super.attach(address) as DynamicSvgNft;
  }
  override connect(signer: Signer): DynamicSvgNft__factory {
    return super.connect(signer) as DynamicSvgNft__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DynamicSvgNftInterface {
    return new utils.Interface(_abi) as DynamicSvgNftInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DynamicSvgNft {
    return new Contract(address, _abi, signerOrProvider) as DynamicSvgNft;
  }
}