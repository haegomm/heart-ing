import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const readMessageAtom = atom<boolean>({
  key: "readMessage",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const selectedMessageIdAtom = atom<string>({
  key: "selectedMessageId",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const isMyBoardAtom = atom<boolean>({
  key: "isMyBoard",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
