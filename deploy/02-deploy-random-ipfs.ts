import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { network, ethers } from "hardhat";
import { developmentChains, networkConfig } from "../helper-hardhat-config";
import { storeImages, storeTokenUriMetadata } from "../utils/uploadToPinata";
import { verify } from "../utils/verify";

const imagesLocation = "./utils/images";
const metadataTemplate = {
  name: "",
  description: "",
  image: "",
  attributes: [
    {
      trait_type: "Seniority",
      value: "SR",
    },
  ],
};

const FUND_AMOUNT = 1000000000000000000;
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const chainId = network.config.chainId!;

  let tokenUris;
  if (process.env.UPLOAD_TO_PINATA == "true") {
    tokenUris = await handleTokenUris();
  }

  let vrfCoordinatorV2Address, subscriptionId;

  if (developmentChains.includes(network.name)) {
    const vrFCoordinatorV2Mock = await ethers.getContract(
      "VRFCoordinatorV2Mock"
    );
    vrfCoordinatorV2Address = vrFCoordinatorV2Mock.address;
    const tx = await vrFCoordinatorV2Mock.createSubscription();
    const txReceipt = await tx.wait(1);
    subscriptionId = txReceipt.events[0].args.subId;
    await vrFCoordinatorV2Mock.fundSubscription(subscriptionId, FUND_AMOUNT);
  } else {
    vrfCoordinatorV2Address = networkConfig[chainId].vrfCoordinatorV2;
    subscriptionId = networkConfig[chainId].subscriptionId;
  }

  log("------------------------------");
  const args = [
    vrfCoordinatorV2Address,
    subscriptionId,
    networkConfig[chainId].gasLane,
    networkConfig[chainId].callbackGasLimit,
    tokenUris,
    networkConfig[chainId].mintFee,
  ];

  const randomIpfsNft = await deploy("RandomIpfsNFT", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: 4,
  });
  log("------------------------------");
  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(randomIpfsNft.address, args);
  }
};
export default func;
func.tags = ["all", "ipfsNft"];

async function handleTokenUris() {
  let tokenUris = [];
  // Store image
  const { responses, files } = await storeImages(imagesLocation);
  for (const index in responses) {
    // Create metadata
    let tokenUriMetadata = { ...metadataTemplate };
    tokenUriMetadata.name = files[index].replace(".png", "");
    tokenUriMetadata.description = `A ${tokenUriMetadata.name} of Loopstudio`;
    tokenUriMetadata.image = `ipfs://${responses[index].IpfsHash}`;
    console.log(`Uploading ${tokenUriMetadata.name} `);
    // Upload
    const metadatauploadResponse = await storeTokenUriMetadata(
      tokenUriMetadata
    );
    tokenUris.push(`ipfs://${metadatauploadResponse!.IpfsHash}`);
  }
  console.log("Token uris uploaded: ", tokenUris);
  return tokenUris;
}
