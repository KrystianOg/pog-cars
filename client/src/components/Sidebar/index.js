import React from 'react';
import { useLocation} from 'react-router-dom'
import {SidebarMenu,SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarRoute, SideBtnWrap} from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
    const [path, setPath] = React.useState("/")
    const location = useLocation();

    React.useEffect(()=>{
        setPath(window.location.pathname)
    }, [location]);
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/cars" $active={path === "/cars"} onClick={toggle}>Cars</SidebarLink>
                    <SidebarLink to="/discounts" $active={path === "/discounts"} onClick={toggle}>Discounts</SidebarLink>
                    <SidebarLink to="/account" $active={path === "/account"} onClick={toggle}>Account</SidebarLink>
                    <SidebarLink to="/register" $active={path === "/register"} onClick={toggle}>Sign Up</SidebarLink>
                    </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/login">Log In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
