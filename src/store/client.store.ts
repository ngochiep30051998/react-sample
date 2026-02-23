import HTTP from "@core/http";
import { ClientStore } from "@app/types/client.types";
import { create } from "zustand";

export const clientStore = create<ClientStore>((set) => ({
    clients: [],
    loading: false,
    getClient: async () => {
        try {
            set({ loading: true })
            const res = await HTTP.get('/clients');
            const data = await res.data;
            set({ clients: data.data })
            set({ loading: false })
        } catch (e) {
            set({ loading: false })
            return Promise.reject(e);
        }
    }
}))