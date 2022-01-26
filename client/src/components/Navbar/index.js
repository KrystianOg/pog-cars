//here we store entire content
import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useLocation} from 'react-router-dom'
import { Nav, NavIcon, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinkLI, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [path, setPath] = React.useState("/")
    const location = useLocation();

    React.useEffect(()=>{
        setPath(window.location.pathname)
    }, [location]);

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIcon $active={path === "/"} />
                        <NavLinkLI to="/">HOME</NavLinkLI>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinkLI to='/cars' $active={path === "/cars"} >CARS</NavLinkLI>
                        </NavItem>
                        <NavItem>
                            <NavLinkLI to='/articles' $active={path === "/articles"} >ARTICLES</NavLinkLI>
                        </NavItem>
                        <NavItem>
                            <NavLinkLI to='/discounts' $active={path === "/discounts"} >DISCOUNTS</NavLinkLI>
                        </NavItem>
                        <NavItem>
                            <NavLinkLI to='/account' $active={path === "/account"} >ACCOUNT</NavLinkLI>
                        </NavItem>
                    </NavMenu>
                    <NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/login'>LOG IN</NavBtnLink>
                        </NavBtn>
                        <NavBtn>
                            <NavBtnLink to='/register'>SIGN UP</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
