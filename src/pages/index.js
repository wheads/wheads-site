import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";

import { Wrapper, SectionH2, SectionParag, Section1ColGray } from "../styles/style.js";

const HeroBanner = styled.div`  
  position: absolute;
  top: 180px;
  left: 60px;
  width: 900px;

  @media (max-width: 767px) {
    padding: 50px;
  }
`;

const HeroBannerTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  padding-bottom: 0;
  border-bottom: none;
  font-size: 62px;
  color: #000;

  @media (max-width: 767px) {
    font-size: 40px;
  }
`;

const HeroBannerSub = styled.h1`
  font-size: 30px;
  color: #fff;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    font-size: 20px;
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
  margin-top: 15px;
  max-width: 230px;
`;

export default ({ data }) => (
  <div>
    <Img sizes={data.imageBannerBg.childImageSharp.sizes} />

    <HeroBanner>
      <div>
        <HeroBannerTitle>Financial Literacy<br/> Made Easy</HeroBannerTitle>
        <BigButton to="#">Get Started</BigButton>
      </div>
    </HeroBanner>

    <div style={{display: `grid`, gridTemplateColumns: `3fr 1fr`, gridGap: `40px`, padding: `50px`, backgroundColor: `#eeeff2`}}>
      <Img sizes={data.imagePic1.childImageSharp.sizes} />
      <Img sizes={data.imagePic3.childImageSharp.sizes} />
    </div>
  </div>
  
);

export const query = graphql`
  query HomePageQuery {
    imageBannerBg: file(relativePath: { eq: "banner-bg.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920, maxHeight: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    imagePic1: file(relativePath: { eq: "pic1.png" }) {
      childImageSharp {
        sizes(maxWidth: 845, maxHeight: 252) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    imagePic3: file(relativePath: { eq: "pic3.png" }) {
      childImageSharp {
        sizes(maxWidth: 330, maxHeight: 270) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`