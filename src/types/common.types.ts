
export type GlobalState = {
    appId: string;
}
export type GlobalAction = {
    setAppId: (appId:string) => void
}
export type GlobalStore = GlobalState & GlobalAction; 