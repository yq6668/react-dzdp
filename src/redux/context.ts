import { createContext, Dispatch } from "react";

export type ActionType = {
    type: string;
    city: string;
};

type ContextType = [
    String,
    Dispatch<ActionType>
]

const context = createContext<ContextType>(["", () => { }])

export default context;