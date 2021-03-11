import React, { useContext, useState } from 'react'
import { GlobalContext } from './GlobalContext'

export default function SearchCountry() {
    const { country, loading, dispatch } = useContext(GlobalContext);
    const [searchState, setSearchState] = useState("");
    const [ searchRegion, setSearchRegion ] = useState("");


    function searchCountryByName(e: any) {
        setSearchState(e.target.value)        
        const filterCountry = country?.filter(countryName => countryName.name.toLowerCase().includes(searchState.toLowerCase()));
        console.log(filterCountry, "filter countries");
        dispatch({ type: "SEARCH_COUNTRY", searchCountry: filterCountry })
    }

    function searchCountryByRegion(e: any) {
        setSearchRegion(e.target.value);
        const filterRegion = country?.filter(region => region.region.toLowerCase().includes(searchRegion.toLocaleLowerCase()));
        console.log("region", filterRegion);
        dispatch({type: "SEARCH_REGION", searchRegion: filterRegion})
    }

    console.log(searchRegion);
    
    return (
        <form>
            <label>Search: </label>
            <p>
                <input type="text" name="search" value={searchState} onChange={searchCountryByName} placeholder="search for a country" />
            </p>
            <p>
                <select name="region" value={searchRegion} onChange={searchCountryByRegion} >
                    <option value="search">search by region</option>
                    {country && country?.map(region => {
                        return (
                            <option key={region.name} value={`${region.region}`}>{region.region}</option>
                        )
                    })}
                </select>
            </p>
        </form>
    )
}
