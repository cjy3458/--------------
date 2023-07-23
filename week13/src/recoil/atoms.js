import { atom } from "recoil";

export const userNameAtom = atom({
  key: "useName",
  default: "ooo",
});

export const emailAtom = atom({
  key: "email",
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
