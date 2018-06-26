import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import bannerBg from "./img-hero-banner-404.jpeg"
import SubMenuSection from "../components/SubMenuSection"
import Img from "gatsby-image";

import { Wrapper, SectionH2, SectionParag, Section1ColGray } from "../styles/style.js";

const BannerContainer = styled.div`
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HeroBanner = styled.div`
  text-align: center;
  padding: 130px 100px;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const HeroBannerParag = styled.p`
  font-size: 18px;
  color: #fff;
`;

const HeroBannerTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  padding-bottom: 0;
  border-bottom: none;
  font-size: 60px;
  color: #fff;

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

    <BannerContainer style={{backgroundImage:`url(` + bannerBg + `)`}}>
      <HeroBanner>
        <HeroBannerTitle>Page Not Found</HeroBannerTitle>
        <HeroBannerParag>Oops! The page you're looking for is not here.</HeroBannerParag>
        <HeroBannerParag>Error code: 404</HeroBannerParag>
      </HeroBanner>
    </BannerContainer>
  </div>
  
);

export const query = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`