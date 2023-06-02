import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const searchState = atom({
  key: "searchState",
  default: "",
});
