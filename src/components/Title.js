import styled from "styled-components"

const HeadTitle = styled.h1`
    font-family: 'Amatic SC', cursive;
    font-size: 8rem;
    color: brown;
`

export default function Title({content}) {
    return(
        <HeadTitle>
            {content}
        </HeadTitle>
    )
}