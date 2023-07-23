import { atom } from "recoil";

export const userNameAtom = atom({
  key: "userName",
  default: "ooo",
});

export const idAtom = atom({
  key: "id",
  default: "ooo",
});

export const isSubmitedAtom = atom({
  key: "isSubmited",
  default: "",
});

export const pwAtom = atom({
  key: "password",
  default: "",
});
