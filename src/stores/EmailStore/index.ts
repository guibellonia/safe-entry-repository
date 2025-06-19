import { create } from "zustand";
import { persist } from "zustand/middleware";
import { EmailState } from "./@types";

export const useEmailStore = create<EmailState>()(
  persist(
    (set) => ({
      hasSend: null,
      setHasSend: (hasSend: boolean | null) => set({ hasSend }),
    }),
    {
      name: "email-store",
      storage: {
        getItem: (key) => {
          const value = sessionStorage.getItem(key);
          return value ? JSON.parse(value) : null;
        },
        setItem: (key, value) => {
          sessionStorage.setItem(key, JSON.stringify(value));
        },
        removeItem: (key) => {
          sessionStorage.removeItem(key);
        },
      },
    }
  )
);
