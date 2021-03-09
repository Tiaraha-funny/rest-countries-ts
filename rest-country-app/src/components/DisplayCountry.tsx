import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

export default function DisplayCountry() {
    const { country, loading } = useContext(GlobalContext);
    console.log(country);

    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                country.map(country => {
                    return (
                        <ul key={country.population}>
                            <li><img src={country.flag} />
                                <aside>
                                    <p><h2>{country.name}</h2></p>
                                    <p>Population: {country.population}</p>
                                    <p>Region: {country.area}</p>
                                    <p>Capital: {country.capital}</p>
                                </aside>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}
