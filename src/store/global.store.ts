import { GlobalStore } from "@app/types/common.types";
import { create } from "zustand";

export const globalStore = create<GlobalStore>((set) => ({
    appId: '',
    setAppId: (appId: string) => set({ appId })
}))