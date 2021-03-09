import { type } from "node:os";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import SearchCountry from "./SearchCountry";

const DEFAULT_COUNTRIES_API = "https://restcountries.eu/rest/v2/all";

type Country = {
    area: number,
    name: string,
    flag: string,
    population: number,
    region: string,
    capital: string,
}

type State = {
    country: Country[],
    loading: boolean,
    search: Country[],
    bgColor: boolean,
}

export const initialState: State = {
    country: [],
    loading: true,
    search: [],
    bgColor: true
}

type Action =
    | { type: "DEFAULT_COUNTRIES", country: Country[] }
    | { type: "SEARCH_COUNTRY", search: Country[] }
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
                search: action.search
            }
        }

        case "CHANGE_BACKGROUND-COLOR": {
            return {
                ...state,
                bgColor: action.bgColor
            }
        }

        default: {
            return state;
        }
    }
}

export const GlobalContextProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [ searchState, setSearchState ] = useState("");

    const fetchDataCountries = async () => {
        const response = await fetch(DEFAULT_COUNTRIES_API);
        const result = await response.json();
        dispatch({ type: "DEFAULT_COUNTRIES", country: result })
    }

    useEffect(() => {
        fetchDataCountries();
    }, [])

    function searchCountryByName() {
        const filterCountry = state.country.filter(countryName => countryName.name.toLowerCase().includes(searchState.toLowerCase()))
        dispatch({ type: "SEARCH_COUNTRY", search: filterCountry })
    }

    function changeValue(e) {
        const getValue = e.target.value;
    }

    function changeBgColor() {
        console.log("change me");
        dispatch({ type: "CHANGE_BACKGROUND-COLOR", bgColor: false })
    }


    return (
        <GlobalContext.Provider value={{ loading: state.loading, country: state.country, search: state.search, bgColor: state.bgColor, searchCountryByName }}>
            {children}
        </GlobalContext.Provider>
    )
}
