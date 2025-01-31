import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { DetailStyle } from '../styles/DetailStyle';
import { GlobalContext } from './GlobalContext';

export default function Details() {
    const { countries } = useContext(GlobalContext);
    type DetailsId = {
        detailsId: string
    }

    console.log(countries);


    const { detailsId } = useParams<DetailsId>();
    const goBack = useHistory();

    const findId = countries && countries.filter(nameAsId => nameAsId.name == detailsId);
    console.log(findId);


    return (
        <div>
            <Link to="/">
                <button>Go back</button>
            </Link>

            {countries && findId?.map(detail => {
                return (
                    <DetailStyle key={detail.name}>
                        <p><img src={detail.flag} alt={detail.name} /></p>
                        <div className="container">
                            <h2>{detail.name}</h2>
                            <article>
                                <p>Native Name: {detail.name}</p>
                                <p>Population: {detail.population}</p>
                                <p>Region: {detail.region}</p>
                                <p>Sub region: {detail.subregion}</p>
                                <p>Capital: {detail.capital}</p>
                            </article>
                            <article>
                                <p>Top level domain: {detail.topLevelDomain}</p>
                                <p>Curencies: {detail.currencies.map(cur => cur.name)}</p>
                                <p>Languages: {detail.languages.map(lang => lang.name)}</p>
                            </article>
                            <article>
                                <p> Border Countries: </p>
                                {detail.borders.map(bor => {
                                    const findBorder = countries.find(borderName => borderName.alpha3Code == bor)
                                    return (
                                        <Link to={`/countryDetail/${findBorder?.name}`} key={findBorder?.name}>
                                            <button>{findBorder?.name}</button>
                                        </Link>
                                    )
                                })
                                }

                            </article>
                        </div>
                    </DetailStyle>
                )
            })}
        </div>
    )
}
