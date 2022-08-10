import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { network, ethers } from "hardhat";
import { developmentChains, networkConfig } from "../helper-hardhat-config";
import { verify } from "../utils/verify";
import fs from "fs";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const chainId = network.config.chainId!;
  let ethUsdPriceFeedAddress;
  if (developmentChains.includes(network.name)) {
    const EthUsdAggregator = await ethers.getContract("MockV3Aggregator");
    ethUsdPriceFeedAddress = EthUsdAggregator.address;
  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId].ethUsdPriceFeedAddress;
  }

  const lowSvg = await fs.readFileSync("./utils/images/frown.svg", {
    encoding: "utf-8",
  });
  const highSvg = await fs.readFileSync("./utils/images/happy.svg", {
    encoding: "utf-8",
  });

  let args = [ethUsdPriceFeedAddress, lowSvg, highSvg];

  log("------------------------------");

  const svgNFT = await deploy("DynamicSvgNFT", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: 1,
  });

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(svgNFT.address, args);
  }
};
export default func;
func.tags = ["all", "svgNFT"];
