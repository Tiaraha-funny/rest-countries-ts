import { type } from "node:os";
import { createContext, useEffect, useReducer, useState } from "react";

const DEFAULT_COUNTRIES_API = "https://restcountries.eu/rest/v2/all";

type Country = {
    area: number,
    name: string,
    flag: string,
    population: number,
    region: string,
    capital: string,
    topLevelDomain: string[],
    currencies: Curencies[],
    languages: Languages[],
    nativeName: string,
    subregion: string,
    borders: string[],
    alpha3Code: string,
}

type Languages = {
    iso639_1: string,
    nativeName: string,
    name: string,
    iso639_2: string
}

type Curencies = {
    code: string,
    name: string,
    symbol: string
}

type State = {
    country: Country[],
    loading: boolean,
    search: Country[],
    bgColor: boolean,
    dispatch: React.Dispatch<any>;
}

export const initialState: State = {
    country: [],
    loading: true,
    search: [],
    bgColor: true,
    dispatch: () => null,
}

type Action =
    | { type: "DEFAULT_COUNTRIES", country: Country[] }
    | { type: "SEARCH_COUNTRY", searchCountry: Country[] }
    | { type: "SEARCH_REGION", searchRegion: Country[] }
    | { type: "CHANGE_BACKGROUND-COLOR", bgColor: boolean }

export const GlobalContext = createContext(initialState);

function reducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case "DEFAULT_COUNTRIES": {
            return {
                ...state,
                country: action.country,
                loading: false
            }
        }

        case "SEARCH_COUNTRY": {
            return {
                ...state,
                country: action.searchCountry
            }
        }

        case "CHANGE_BACKGROUND-COLOR": {
            return {
                ...state,
                bgColor: action.bgColor
            }
        }

        case "SEARCH_REGION": {
            return {
                ...state,
                country: action.searchRegion
            }
        }
        default: {
            return state;
        }
    }
}

export const GlobalContextProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchDataCountries = async () => {
        const response = await fetch(DEFAULT_COUNTRIES_API);
        const result = await response.json();
        dispatch({ type: "DEFAULT_COUNTRIES", country: result })
    }

    useEffect(() => {
        fetchDataCountries();
    }, [])

    function ChangeBackgroundColor() {
        console.log("change me");
        dispatch({ type: "CHANGE_BACKGROUND-COLOR", bgColor: false })
    }

    return (
        <GlobalContext.Provider value={{ 
            loading: state.loading, 
            country: state.country, 
            search: state.search, 
            bgColor: state.bgColor,
            dispatch,
            // ChangeBackgroundColor,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
