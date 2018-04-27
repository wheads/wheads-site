import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";

import { HideOnMobile } from '../styles/style.js';

import logo from './logo.svg';

const Header = styled.header`
  padding: 16px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00548C;
  //background-color: #AC3B61;
`;

const Logo = styled.img`
  width: 300px;
  margin-bottom: 0;
`;

const MainNav = styled.div`
  display: flex;
  padding: 16px 0;
  margin-left: 50px;

  @media (max-width: 768px) {
    padding: 10px 20px;
    margin: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const MainNavLink = styled(Link)`
  padding-right: 50px;
  font-weight: 400;
  font-size: 20px;
  color: #0073b9;
  text-decoration: none;

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 16px;
    margin: 0;
  }
`;

const BigButton = styled(Link)`
  display: block;
  background-color: orange;
  //background-color: #123C69;
  color: #fff;
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
    const { imgAltTitle, menuLink1, menuLink2, menuLink3, menuLink4, menuLink5 } = this.props;
    
    return (
      <div>
        <Header>
          <Link to="/" style={{ textDecoration: `none`, color: `#0d56a0` }}>
            <Logo src={logo} alt={imgAltTitle} />
          </Link>
          <HideOnMobile>
            <BigButton to="/get-started">Get Started</BigButton>
          </HideOnMobile>
        </Header>
        <MainNav>
          <MainNavLink to="/">Home</MainNavLink>
          <MainNavLink to={menuLink1}>Get Started</MainNavLink>
          <MainNavLink to={menuLink2}>Classes</MainNavLink>
          <MainNavLink to={menuLink3}>Events</MainNavLink>
          <MainNavLink to={menuLink4}>Tools</MainNavLink>          
          <MainNavLink to={menuLink5}>Contact</MainNavLink>
        </MainNav>
      </div>
    );
  }
}

export default HeaderSection;