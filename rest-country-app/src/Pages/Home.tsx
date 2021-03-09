import React from 'react'
import DisplayCountry from '../components/DisplayCountry'
import SearchCountry from '../components/SearchCountry'

export default function Home() {
    return (
        <div>
            <SearchCountry/>
            <DisplayCountry/>
        </div>
    )
}
