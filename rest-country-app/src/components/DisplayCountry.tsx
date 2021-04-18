import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Container, ListCountries } from '../styles/ListContries';
import { GlobalContext } from './GlobalContext';

export default function DisplayCountry() {
    const { countries, loading } = useContext(GlobalContext);
    return (
        <Container>
            {loading ? <h1>Loading...</h1> :
                countries.map(country => {
                    return (
                        <Link to={`/countryDetail/${country.name}`} key={country.name}>
                            <ListCountries>
                                <img src={country.flag} />
                                <aside>
                                    <h2>{country.name}</h2>
                                    <p>Population: {country.population}</p>
                                    <p>Region: {country.region}</p>
                                    <p>Capital: {country.capital}</p>
                                </aside>
                            </ListCountries>
                        </Link>
                    )
                })
            }
        </Container>
    )
}
