import styled from 'styled-components'
import { COLORS } from '../../colors'
import { FaCar } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
   // margin-top: -80px;
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: 1 rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavIcon = styled(FaCar)`
    color: ${props => props.$active ? COLORS.MagentaPantone : COLORS.White};
    font-size: 2.5rem;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLinkLI = styled(LinkR)`
    white-space: nowrap;
    color: ${props => props.$active ? COLORS.MagentaPantone : COLORS.White};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    display: flex;
    align-items: center;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${COLORS.BlueGreen}
    }
`

export const NavLogo = styled(LinkR)`
    color: ${COLORS.White};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        ${NavIcon} {
            transition: all 0.2s ease-in-out;
            color: ${COLORS.BlueGreen};
        }

        ${NavLinkLI} {
            transition: all 0.2s ease-in-out;
            color: ${COLORS.BlueGreen};
        }
    }
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width:768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`

export const NavMenu = styled.ul`
    display: flex;
    align-items:center;
    list-style: none;
    text-align:center;
    margin-right: -22px;

    @media screen and (max-width:768px){
        display: none;
    }
`
export const NavItem = styled.li`
height: 80px;
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin: 0 10px;

    @media screen and (max-width:768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: ${COLORS.BlueGreen};
    white-space: nowrap;
    padding: 10px 22px;
    color: ${COLORS.White};
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${COLORS.White};
        color: ${COLORS.BlueGreen}
    }
`
