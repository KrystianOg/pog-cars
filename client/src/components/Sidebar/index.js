import React from 'react';
import {SidebarMenu,SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarRoute, SideBtnWrap} from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="cars" onClick={toggle}>Cars</SidebarLink>
                    <SidebarLink to="discounts" onClick={toggle}>Discounts</SidebarLink>
                    <SidebarLink to="account" onClick={toggle}>Account</SidebarLink>
                    <SidebarLink to="sign-up" onClick={toggle}>Sign Up</SidebarLink>
                    </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/login">Log In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
