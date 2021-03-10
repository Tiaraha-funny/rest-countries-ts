import styled from "styled-components";

export const DetailStyle = styled.section`

width: 80%;
margin: auto;

    p > img {
        width: 50%;
    }

    @media (min-width: 1000px) {

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 50px;

        .container {
            margin: 0;
            padding: 0;

            article {
                margin: 0;
                padding: 0;
            }
        }

        p {
            margin: 0;
            padding: 0;
        }

        p > img {
            width: 100%;
        }
    

    }
`