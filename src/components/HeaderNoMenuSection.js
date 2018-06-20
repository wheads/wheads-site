import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";

import logo from './logo.svg';

const Header = styled.header`
  padding: 16px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //background-color: #00548C;
  background-color: #AC3B61;
`;

const Logo = styled.img`
  width: 300px;
  margin-bottom: 0;
`;

class HeaderNoMenuSection extends Component {
  render() {
    const { imgAltTitle, menuLink1, menuLink2, menuLink3, menuLink4, menuLink5 } = this.props;
    
    return (
      <div>
        <Header>
          <Link to="/" style={{ textDecoration: `none`, color: `#0d56a0` }}>
            <Logo src={logo} alt={imgAltTitle} />
          </Link>
        </Header>
      </div>
    );
  }
}

export default HeaderNoMenuSection;