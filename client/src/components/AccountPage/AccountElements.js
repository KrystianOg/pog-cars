import styled from 'styled-components'
import { COLORS } from '../../colors'
import { FaUser,FaEdit } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 680px;
    height: 100%;
    margin: 8px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`

export const UserIcon = styled(FaUser)`
position: relative;
    color: ${COLORS.BlueGreen};
    
    margin: 20px;
    font-size: 4rem;
`

export const EditIcon = styled(FaEdit)`
    color: ${COLORS.BlueGreen};
    font-size: 2rem;
    margin: 10px;
`
