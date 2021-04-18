import React, { useContext, useState } from 'react'
import { FormStyle } from '../styles/HeaderStyle';
import { GlobalContext } from './GlobalContext'

export default function SearchCountry() {
    const { countries, loading, dispatch } = useContext(GlobalContext);

    const [searchState, setSearchState] = useState("");
    const [ searchRegion, setSearchRegion ] = useState("");

    function searchCountryByName(e: any) {
        setSearchState(e.target.value)        
        const filterCountry = countries.filter(countryName => countryName.name.toLowerCase().includes(searchState.toLowerCase()));
        console.log(filterCountry, "filter countries");
        dispatch({ type: "SEARCH_COUNTRY", searchCountry: filterCountry })
    }

    function searchCountryByRegion(e: any) {
        setSearchRegion(e.target.value);
        const filterRegion = countries?.filter(region => region.region.toLowerCase().includes(searchRegion.toLocaleLowerCase()));
        console.log("region", filterRegion);
        dispatch({type: "SEARCH_REGION", searchRegion: filterRegion})
    }

    console.log(searchRegion);
    
    return (
        <FormStyle>
            <p>
                <input type="text" name="search" value={searchState} onChange={searchCountryByName} placeholder="search for a country" />
            </p>
            <p>
                <select name="region" value={searchRegion} onChange={searchCountryByRegion} >
                    <option value="search">search by region</option>
                    {countries && countries?.map(region => {
                        return (
                            <option key={region.name} value={`${region.region}`}>{region.region}</option>
                        )
                    })}
                </select>
            </p>
        </FormStyle>
    )
}
