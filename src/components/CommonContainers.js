import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";

import { HideOnMobile } from '../styles/style.js';



const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  background-color: #ffffff;
  width: 85%;
  margin: auto;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;

const SectionConteInfoGraphic = styled.div`
  padding: 0px;
  margin: 0px;
`;

class ClassSectionContainer extends Component {
  render() {
    
    return (      
      <SectionContainer>        
        {this.props.children}
      </SectionContainer>
    );
  }
}

class ClassSectionContentInfoGraphic extends Component {
  render() {
    
    return (      
      <SectionConteInfoGraphic>        
        {this.props.children}
      </SectionConteInfoGraphic>
    );
  }
}

export default {SectionContainer : ClassSectionContainer, SectionContentInfoGraphic : ClassSectionContentInfoGraphic};