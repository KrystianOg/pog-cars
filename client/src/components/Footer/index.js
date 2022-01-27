import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaCar} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterEmailLink, FooterLinkItems, FooterLinkTitle, FooterLink, FooterInfo, FooterInfoAdres, FooterInfoKontakt} from './FooterElements'
import{SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, SocialIcons} from './FooterElements'
// import { ... } from './FooterElements'
//there put some info that should be in the footer
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterInfo>
                                <FooterInfoAdres>
                                <h3>PogCars</h3>
                                <h3>51-314 Wrocław,</h3>
                                <h3>ul. Gorlicka </h3>
                                </FooterInfoAdres>
                                <FooterInfoKontakt>
                                <div>Kontakt: </div>
                                <FooterEmailLink>pogcars@gmail.com</FooterEmailLink>
                                </FooterInfoKontakt>
                            </FooterInfo>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                                <FooterLink to="/contact">Kontakt</FooterLink>
                                <FooterLink to="/articles">Artykuły</FooterLink>
                                <FooterLink to="/signin">FAQ</FooterLink>
                                <FooterLink to="/signin">About us</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            PogCars
                        </SocialLogo>
                        <WebsiteRights>PogCars © {new Date().getFullYear()}  
                        All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/PogCars" target="_blank" aria-label ="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/PogCars" target="_blank" aria-label ="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/PogCars" target="_blank" aria-label ="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
};

export default Footer;
