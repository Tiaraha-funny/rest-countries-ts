import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import DisplayCountry from '../components/DisplayCountry'
import SearchCountry from '../components/SearchCountry'

export default function Home() {
    

    return (
        <HomeStyle>
            <SearchCountry/>
            <DisplayCountry/>
        </HomeStyle>
    )
}

const HomeStyle = styled.div`
padding: 20px;
`
