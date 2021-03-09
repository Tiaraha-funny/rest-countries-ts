import React, { useContext, useState } from 'react'
import { GlobalContext } from './GlobalContext'

export default function SearchCountry() {
    const {country, search,  searchCountryByName} = useContext(GlobalContext);
    // const [ search, setSearch ] = useState("");

    return (
        <form>
            <label>Search: </label>
            <input type="text" value={search} onChange={searchCountryByName} />
        </form>
    )
}
