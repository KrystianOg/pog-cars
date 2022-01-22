//here we store entire content
import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavIcon, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinkLI, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIcon/>
                        <NavLinkLI to="/">HOME</NavLinkLI>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinkLI to='cars'>CARS</NavLinkLI>
                        </NavItem>
                        <NavItem>
                            <NavLinkLI to='articles'>ARTICLES</NavLinkLI>
                        </NavItem>
                        <NavItem>
                            <NavLinkLI to='discounts'>DISCOUNTS</NavLinkLI>
                        </NavItem>
                        <NavItem>
                            <NavLinkLI to='account'>ACCOUNT</NavLinkLI>
                        </NavItem>
                        </NavMenu>
                        <NavMenu>
                            <NavBtn>
                                <NavBtnLink to='login'>LOG IN</NavBtnLink>
                            </NavBtn>
                            <NavBtn>
                                <NavBtnLink to='register'>SIGN UP</NavBtnLink>
                            </NavBtn>
                        </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
