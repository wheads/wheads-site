import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";

import { HideOnMobile } from '../styles/style.js';

import logo from './logo.svg';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 50px 20px;
  background-color: #e8f0e8;

  @media (max-width: 767px) {
    display: block;
    padding: 32px 32px 20px;
    text-align: center;
  }
`;

const Header = styled.div`
  position: relative;
`;

const Logo = styled.img`
  width: 300px;
  margin-bottom: 0;
`;

const MainNav = styled.div`
  display: flex;
  padding: 16px 0;
  padding-left: 50px;
  //margin-left: 50px;

  @media (max-width: 768px) {
    padding: 10px 0 0;
    margin: 0;
    flex-wrap: wrap;
    justify-content: center;
  }  
`;

const MainNavLink = styled(Link)`
  padding-right: 50px;
  font-size: 20px;
  color: #00b8f8;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 16px;
    margin: 0;
  }
`;

const BigButton = styled(Link)`
  display: block;
  background-color: #146414;
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 15px 20px;
  border-radius: 3px;
  max-width: 230px;
`;

class HeaderSection extends Component {
  render() {
    const { imgAltTitle, menuLink1, menuLink2, menuLink3, menuLink4 } = this.props;
    
    return (
      <HeaderContainer>
        <Header>
          <Link to="/" style={{ textDecoration: `none`}}>
            <Logo src={logo} alt={imgAltTitle} />
          </Link>
        </Header>
        <MainNav>
          <MainNavLink to="/">Home</MainNavLink>
          <MainNavLink to={menuLink1}>Get Started</MainNavLink>
          <MainNavLink to={menuLink2}>Classes</MainNavLink>          
          <MainNavLink to={menuLink3}>Tools</MainNavLink>
          <HideOnMobile>          
            <MainNavLink to={menuLink4}>Contact</MainNavLink>
          </HideOnMobile>  
        </MainNav>
      </HeaderContainer>
    );
  }
}

export default HeaderSection;