import styled from "styled-components";

export const ListCountries = styled.li`
border: 1px 3px 3px #a5a2a2;
border-radius: 10px;
list-style: none;
padding: 0;
margin: 30px;
background-color: #ffffff;
color: #000000;

img {
    width: 100%;
}

aside {
    padding: 20px;
}

@media (min-width: 1000px) {
}

`

export const Container = styled.section`
@media (min-width: 1050px) {
display: grid;
grid-template-columns: repeat(3, 1fr);
}
@media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
}
`