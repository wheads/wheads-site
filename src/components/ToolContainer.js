import React, { Component } from 'react';
import styled from "styled-components";
import bannerBg from "./img-tools.jpg"


const BannerContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url(${bannerBg});
  min-height: 200px;

  @media (max-width: 768px) {
    min-height: 100px;
  }
`;

class ClassToolContainer extends Component {
  render() {
    
    return (
      <div>
        <BannerContainer>&nbsp;</BannerContainer>
        {this.props.children}
      </div>
    );
  }
}

export default {ToolContainer : ClassToolContainer};