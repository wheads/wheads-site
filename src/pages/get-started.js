import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";

import { Wrapper, SectionH2, SectionParag, Section1ColGray } from "../styles/style.js";

const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HeroBanner = styled.div`
  padding: 50px;
  background-color: #dff9fb;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const HeroBannerParag = styled.p`
  font-size: 18px;
`;

const HeroBannerTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  padding-bottom: 0;
  border-bottom: none;
  font-size: 52px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const HeroBannerSub = styled.h1`
  font-size: 30px;
  color: #fff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    margin: 15px auto;
  }
`;

export default ({ data }) => (
  <div>
    <Helmet>
      <title>Get Started - {data.site.siteMetadata.title}</title>
    </Helmet>

    <BannerContainer>
      <HeroBanner>
          <HeroBannerTitle>Get Started</HeroBannerTitle>
          <HeroBannerParag>I’m a paragraph. Use this space to tell people more about what you do and the services you offer.</HeroBannerParag>
          <HeroBannerParag>Another paragrah here.</HeroBannerParag>
          <BigButton to="#">Read More</BigButton>
      </HeroBanner>
      <Img sizes={data.imageBannerBg.childImageSharp.sizes} />
    </BannerContainer>
  </div>
  
);

export const query = graphql`
  query GetStartedPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    imageBannerBg: file(relativePath: { eq: "get-started-bg.jpeg" }) {
      childImageSharp {
        sizes(maxWidth: 1920, maxHeight: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`