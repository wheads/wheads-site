import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const BigButtonExternal = styled.a`
  display: block;
  background-color: orange;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 15px 20px;
  border-radius: 3px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
`;

export const Section1ColWhite = styled.div`
  padding: 50px 100px;
  background-color: #fff;
  text-align: center;

  @media (max-width: 767px) {
    padding: 50px 25px;
  }
`;

export const Section1ColGray = Section1ColWhite.extend`
  background-color: #eeeff2;

  @media (max-width: 767px) {
    padding: 50px 25px;
  }
`;

export const Section1ColBlack = Section1ColWhite.extend`
  background-color: #000;

  @media (max-width: 767px) {
    padding: 50px 25px;
  }
`;

export const Section1ColGrayHeaderOnly = Section1ColWhite.extend`
background-color: #f9f9f9;

@media (max-width: 767px) {
  padding: 50px 25px 0 25px;
}
`;

export const SectionHeaderWhite = styled.div`
  padding: 50px 100px 0 100px;
  background-color: #FFF;
  text-align: center;

  @media (max-width: 767px) {
    padding: 50px 25px;
  }  
`;

export const SectionHeaderOnlyWhite = SectionHeaderWhite.extend`
  @media (max-width: 767px) {
    padding: 50px 25px 0 25px;
  }
`;

export const SectionHeaderOnlyGray = SectionHeaderWhite.extend`
  padding: 50px 100px 30px 100px;
  background-color: #f9f9f9;

  @media (max-width: 767px) {
    padding: 50px 25px 5px 25px;
  }
`;

export const SectionButtonOnly = SectionHeaderOnlyGray.extend`
  padding: 30px 100px 50px 100px;

  @media (max-width: 767px) {
    padding: 5px 25px 50px 25px;
  }
`;

export const Section3Col = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 50px 100px 25px 100px;
  background-color: #fff;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin: 0 25px 25px 25px;
  }
`;

export const Section3ColGray = Section3Col.extend`
  background-color: #f9f9f9;
  margin: 0;
  padding: 0 100px;

  @media (max-width: 767px) {
    padding: 25px;
    margin: 0;
  }
`;

export const Columns = styled.div`
  margin: 20px;
  text-align: center;
`;

export const SectionH2 = styled.h2`
  font-size: 40px;
  color: #424242;
  margin-bottom: 16px;

  @media (max-width: 767px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

export const SectionH3 = styled.h3`
  font-size: 30px;
  color: #424242;
  margin-bottom: 16px;

  @media (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const SectionParag = styled.p`
  font-size: 18px;
  color: #424242;
`;

export const Icon = styled.img`
  height: 100px;
`;

export const HideOnMobile = styled.span`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const HideOnDesktop = styled.span`
  @media (min-width: 768px) {
    display: none;
  }
`;

