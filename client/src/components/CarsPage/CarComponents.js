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