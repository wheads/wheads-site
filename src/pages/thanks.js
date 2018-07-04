import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
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
  padding: 25px 50px;
  background-color: #ccc6ba;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const HeroBannerParag = styled.p`
  font-size: 18px;
  color: #2d3939;
`;

const HeroBannerTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  padding-bottom: 0;
  border-bottom: none;
  font-size: 52px;
  color: #2d3939;

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

export default ({ data }) => (
  <div>
    <Helmet>
      <title>Contact - {data.site.siteMetadata.title}</title>
    </Helmet>

    <BannerContainer>
      <HeroBanner>
          <HeroBannerTitle>Thank you!</HeroBannerTitle>
          <HeroBannerParag>Your message has been sent. We will contact you soon.</HeroBannerParag>
      </HeroBanner>
      <Img sizes={data.imageBannerBg.childImageSharp.sizes} />
    </BannerContainer>
  </div>
  
);

export const query = graphql`
  query ThanksPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    imageBannerBg: file(relativePath: { eq: "contact-bg.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920, maxHeight: 1281) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`