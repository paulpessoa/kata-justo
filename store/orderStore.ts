import create from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { OrderItem } from "types";

interface OrderStore {
  ordersList: OrderItem[];
  selectedItems: OrderItem[];
  setOrdersList: (ordersList: OrderItem[]) => void;
  setSelectedItems: (selectedItems: OrderItem[]) => void;
  resetStore: () => void;
}

const initialState: OrderStore = {
  ordersList: [],
  selectedItems: [],
  setOrdersList: () => {},
  setSelectedItems: () => {},
  resetStore: () => {},
};

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      ...initialState,
      setOrdersList: (ordersList) => set({ ordersList }),
      setSelectedItems: (selectedItems) => set({ selectedItems }),
      resetStore: () => {
        set(initialState);
      },
    }),
    {
      name: "order-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
