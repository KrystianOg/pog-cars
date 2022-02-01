import styled from 'styled-components'
import { COLORS } from '../../colors'
import { Link as LinkR } from 'react-router-dom'
import {Button as MButton} from '@mui/material';

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

export const StarsContainer = styled.div`
    display: grid;
`

export const CarImage = styled.img`
    width: 80%;
    height: 80%;
    display: block;
`

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 760px;
    height: 100%;
    margin: 8px;
    padding: 8px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`

export const FilterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 0.2em;
    column-gap: 0.2em;
`