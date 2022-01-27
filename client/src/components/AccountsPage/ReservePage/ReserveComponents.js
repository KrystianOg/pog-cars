import styled from 'styled-components'
import { COLORS } from 'C:/Users/Kornel/pog-cars/client/src/colors.js'
import { Link as LinkR } from 'react-router-dom'

export const Button = styled.nav`
    display: flex;
    align-items: center;
    margin: 10px 10px;
`

export const ButtonLink = styled(LinkR)`
    border-radius: 50px;
    background: ${COLORS.BlueGreen};
    white-space: nowrap;
    padding: 12px 80px;
    color: ${COLORS.White};
    font-size: 18px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        background: ${COLORS.MagentaPantone};
    }
`