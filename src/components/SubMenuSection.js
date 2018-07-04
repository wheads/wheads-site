import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";

import { HideOnMobile } from '../styles/style.js';

const MainNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  padding-left: 50px;
  background-color: #e79702;

  @media (max-width: 768px) {
    padding: 10px 0;
    margin: 0;
    flex-wrap: wrap;
    justify-content: center;
  }  
`;

const MainNavLink = styled(Link)`
  padding-right: 50px;
  font-size: 20px;
  color: #ffffff;
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

class SubMenuSection extends Component {
  render() {
    const { imgAltTitle, menuLink1, menuLink2, menuLink3, menuLink4, menuLink5 } = this.props;
    
    return (      
      <MainNav>        
        <MainNavLink to={menuLink1}>Savings</MainNavLink>
        <MainNavLink to={menuLink2}>Debt</MainNavLink>          
        <MainNavLink to={menuLink3}>Budgeting</MainNavLink>
        <MainNavLink to={menuLink4}>Retirement</MainNavLink>
        <MainNavLink to={menuLink5}>Insurance</MainNavLink>
      </MainNav>
    );
  }
}

export default SubMenuSection;