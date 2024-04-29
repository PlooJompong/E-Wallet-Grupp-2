import Chip from "../assets/chip.png";
import BlippDark from "../assets/blipp_dark.png";
import BlippLight from "../assets/blipp_light.png";
import Bitcoin from "../assets/bitcoin.png";
import Ninja from "../assets/ninja.png";
import BlockChain from "../assets/chain.png";
import Evil from "../assets/evil.png";
// import BitcoinBank from '../assets/vendors/bitcoininc.png';
// import NinjaBank from '../assets/vendors/ninjabank.png';
// import BlockChainBank from '../assets/vendors/blockchaininc.png';
// import EvilBank from '../assets/vendors/evilcorp.png';

export const updateCardDetails = (newCardData) => {
  // Uppdatera CARD_DETAILS-arrayen med den nya datan
  CARD_DETAILS.push(newCardData);
};

export const CARD_DETAILS = [
  {
    cardColor: "orangeContainer",
    cardNumber: "1234 5678 9101 1213",
    chip: Chip,
    blipp: BlippDark,
    vendor: Bitcoin,
    // vendor: "./",
    name: "Rachel Richter",
    dates: "12/24",
  },
  {
    cardColor: "blackContainer",
    cardNumber: "8502 2394 9603 6920",
    chip: Chip,
    blipp: BlippLight,
    vendor: Ninja,
    name: "Rachel Richter",
    dates: "12/24",
  },
  {
    cardColor: "purpleContainer",
    cardNumber: "4325 0583 5891 5892",
    chip: Chip,
    blipp: BlippLight,
    vendor: BlockChain,
    name: "Rachel Richter",
    dates: "12/24",
  },
  {
    cardColor: "redContainer",
    cardNumber: "2904 2349 5003 0928",
    chip: Chip,
    blipp: BlippLight,
    vendor: Evil,
    name: "Rachel Richter",
    dates: "12/24",
  },
];
