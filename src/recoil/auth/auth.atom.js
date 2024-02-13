import { atom } from "recoil";

const authAtom = atom({
  key: "authAtom",
  default: localStorage.getItem("andamangold-auth")
    ? JSON.parse(localStorage.getItem("andamangold-auth"))
    : null,
});

export default authAtom;
