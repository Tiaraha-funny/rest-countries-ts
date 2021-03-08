import { createContext } from "react";

export const initialState = {
    value: "petah"
}

export const GlobalContext = createContext(initialState);