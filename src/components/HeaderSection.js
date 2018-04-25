import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";

import logo from './logo.svg';

const Header = styled.header`
  padding: 16px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00548C;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 300px;
  margin-bottom: 0;
`;

const MainNav = styled.div`
  display: block;
  padding: 16px 0;
  margin-left: 50px;

  @media (max-width: 767px) {
    padding-bottom: 5px;
  }
`;

const MainNavLink = styled(Link)`
  padding-right: 50px;
  font-weight: 400;
  font-size: 20px;
  color: #424242;
  text-decoration: none;

  @media (max-width: 767px) {
    padding: 0 8px;
    font-size: 14px;
    margin: 0;
  }
`;

const BigButton = styled(Link)`
  display: block;
  background-color: orange;
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
    const { imgAltTitle } = this.props;
    
    return (
      <div>
        <Header>
          <Link to="/" style={{ textDecoration: `none`, color: `#0d56a0` }}>
            <Logo src={logo} alt={imgAltTitle} />
          </Link>
          <BigButton to="#">Get Started</BigButton>
        </Header>
        <MainNav>
          <MainNavLink to="/">Home</MainNavLink>
          <MainNavLink to="#">Get Started</MainNavLink>
          <MainNavLink to="#">Classes</MainNavLink>
          <MainNavLink to="#">Events</MainNavLink>
          <MainNavLink to="#">Tools</MainNavLink>          
          <MainNavLink to="#">Contact</MainNavLink>
        </MainNav>
      </div>
    );
  }
}

export default HeaderSection;