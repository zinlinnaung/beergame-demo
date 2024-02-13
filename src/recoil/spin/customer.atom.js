import { atom } from "recoil";

const customerAtom = atom({
  key: "customer-atom",
  default: null,
});

export default customerAtom;
