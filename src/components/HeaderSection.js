import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";

import logo from './logo.svg';

const Header = styled.header`
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 200px;
  margin-bottom: 0;
`;

const MainNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    padding-bottom: 5px;
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

class HeaderSection extends Component {
  render() {
    const { imgAltTitle } = this.props;
    
    return (
      <Header>
        <Link to="/" style={{ textDecoration: `none`, color: `#0d56a0` }}>
          <Logo src={logo} alt={imgAltTitle} />
        </Link>
        <MainNav>
          <MainNavLink to="/">Home</MainNavLink>
          <MainNavLink to="#">Get Started</MainNavLink>
          <MainNavLink to="#">Webinars</MainNavLink>
          <MainNavLink to="#">Tools</MainNavLink>          
        </MainNav>
      </Header>
    );
  }
}

export default HeaderSection;