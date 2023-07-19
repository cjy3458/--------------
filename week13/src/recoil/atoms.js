import { atom } from "recoil";

export const userNameAtom = atom({
  key: "useName",
  default: "OOO",
});

export const emailAtom = atom({
  key: "email",
  default: "000",
});

export const isSubmitedAtom = atom({
  key: "isSubmited",
  default: "000",
});
