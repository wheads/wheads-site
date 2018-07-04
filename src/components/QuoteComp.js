import React, { Component } from 'react';
import styled from "styled-components";
import Link from 'gatsby-link';
import { HideOnMobile } from '../styles/style.js';

const Quoted = styled.q`
  quotes: "“" "”" "‘" "’";
  padding: 0px 10px;
  text-align: center;
  line-height: 1.25em;
  font-size: 1em;
  color: ${props => props.Color};
  text-shadow: 1px 1px 5px #0C0C0C, -1px -1px 5px #0C0C0C;
  font-weight: bold;
  font-style: italic;

  &::before {
    font-size: 1.5em;
    content: open-quote;
    position: relative;
    top: 0.05em;
    color: ${props => props.QuoteColor};
  }

  &::after {    
    font-size: 1.5em;
    content: close-quote;
    position: relative;
    top: 0.05em;
    color: ${props => props.QuoteColor};
  }
`;

const Container = styled.div`
  text-align: center;
  padding: 20px 5px;
  display: block;
  position: relative;
  font-size: ${props => props.FontSize};

  @media (max-width: 768px) {
    margin: 5px;
    min-height: 300px;
  }
`

const ContainerBg = styled.div`
  background: ${props => props.BackgroundImage} no-repeat;
  background-size: cover;
  opacity: 0.75;
  top: 0;
  left: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  padding: 2px;
  z-index: -1;
`

const QuoteBy = styled.p`
  margin-top: 2rem;
  font-size: 1.25rem;
  text-shadow: 1px 1px 5px #0C0C0C, -1px -1px 5px #0C0C0C;
  color: ${props => props.QuoteColor};

  &::before {
    content: "-";
    position: relative;
    left: -0.5em;
  }
`

class ClassQuotedText extends Component {
  render() {
    
    return (
      <Container FontSize={this.props.FontSize} >
        <ContainerBg BackgroundImage={this.props.BackgroundImage}>
        </ContainerBg>
        <Quoted style={this.props.style} Color={this.props.Color} QuoteColor={this.props.QuoteColor} >
          {this.props.children}
        </Quoted>
        <QuoteBy QuoteColor={this.props.QuoteColor}>{this.props.QuoteBy}</QuoteBy>
      </Container>
    );
  }
}

export default {QuotedText : ClassQuotedText};