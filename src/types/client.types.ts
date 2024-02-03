import { IClient } from "@app/interfaces/client.interface";

export type ClientState = {
    clients: IClient[];
    loading?: boolean;
}
export type ClientAction = {
    getClient: () => Promise<void>
}
export type ClientStore = ClientState & ClientAction;