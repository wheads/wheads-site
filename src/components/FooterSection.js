import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";

import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  align-items: center;
  background-color: #000;

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 50px 25px 100px 25px;
  }
`;

const FooterSiteTitle = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 15px;
  font-size: 14px;
  color: #aaa;
`;

const FooterNav = styled.div`
  display: flex;
  font-size: 14px;

  @media (max-width: 767px) {
    margin-top: 16px;
  }
`;

const MainNavLink = styled(Link)`
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 18px;
  color: #424242;
  text-decoration: none;

  @media (max-width: 767px) {
    padding: 0 8px;
    font-size: 14px;
    margin: 0;
  }
`;

const FooterNavLink = MainNavLink.extend`
  font-size: 14px;
  font-weight: 400;
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.img`
  width: 24px;
  margin: 0 5px;
`;

class FooterSection extends Component {
  render() {
    const { footerSiteTitle, menuLink1, menuLink2, menuLink3, menuLink4, menuLink5 } = this.props;
    
    return (
      <Footer>
        <FooterLeft>
          <FooterSiteTitle>© {footerSiteTitle}</FooterSiteTitle>
          <a href="#" target="_blank"><SocialIcon src={facebook} /></a>
          <a href="#" target="_blank"><SocialIcon src={twitter} /></a>
          <a href="#" target="_blank"><SocialIcon src={instagram} /></a>
        </FooterLeft>      
        <FooterNav>
          <FooterNavLink to="/">Home</FooterNavLink>
          <FooterNavLink to={menuLink1}>Get Started</FooterNavLink>
          <FooterNavLink to={menuLink1}>Classes</FooterNavLink>
          <FooterNavLink to={menuLink1}>Events</FooterNavLink>
          <FooterNavLink to={menuLink1}>Tools</FooterNavLink>            
          <FooterNavLink to={menuLink1}>Contact</FooterNavLink>
        </FooterNav>
      </Footer>
    );
  }
}

export default FooterSection;