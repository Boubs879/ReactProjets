import { create } from 'zustand';

const useCartStore = create((set) => ({
  number: 0,
  increment: () => set((state) => ({ number: state.number + 1 })),
}));

export default useCartStore;
