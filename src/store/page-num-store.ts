import { create } from "zustand";

type State = {
  Number: number;
  setPage: (pageNum: number) => void;
};

const usePageNumStore = create<State>(set => ({
  Number: 1,
  setPage: (pageNum) => set({ Number: pageNum }),
}));

export default usePageNumStore;