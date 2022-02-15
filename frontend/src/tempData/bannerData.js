import { FLIPCART, DOMINOS, MEDLIFE, MYNTRA } from "../constants/images";
export const bannerData = [
  {
    Key: "1",
    image: require("../assets/images/banners/banner1.webp"),
    title: "Banner 1 pressed",
  },
  {
    Key: "2",
    image: require("../assets/images/banners/banner2.webp"),
    title: "Banner 2 pressed",
  },
  {
    Key: "3",
    image: require("../assets/images/banners/banner3.webp"),
    title: "Banner 3 pressed",
  },
];

export const storeData = [
  {
    Key: "1",
    image: FLIPCART,
    storeName: "Flipcart",
    discounts: "20% Discount",
  },
  {
    Key: "2",
    image: DOMINOS,
    storeName: "Domino's",
    discounts: "20% Discount",
  },
  {
    Key: "3",
    image: MEDLIFE,
    storeName: "Med life",
    discounts: "10% Discount",
  },
  {
    Key: "4",
    image: MYNTRA,
    storeName: "Myntra",
    discounts: "50% Discount",
  },
];
