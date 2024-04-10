import create from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface User {
  id: number;
  name: string;
}

interface UserStore {
  userList: User[];
  addUserList: (userList: User[]) => void;
  resetStore: () => void;
}

const initialState: UserStore = {
  userList: [],
  addUserList: () => {},
  resetStore: () => {},
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      ...initialState,
      userList: [],
      addUserList: (userList) => set({ userList }),
      resetStore: () => {
        set(initialState);
      },
    }),
    {
      name: "user-list-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
