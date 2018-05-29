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

const NormalLinks = styled(Link)`
  display: block;
  color: #0a0a0a;
  text-transform: uppercase;
  text-decoration: none;
  text-align: left;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 5px 5px;
  border-radius: 3px;
  margin-top: 5px;
  max-width: 230px;
`;

export default ({ data }) => (
  <div>
    <Helmet>
      <title>Tools - {data.site.siteMetadata.title}</title>
    </Helmet>

    <BannerContainer>
      <HeroBanner>
          <HeroBannerTitle>Tools</HeroBannerTitle>
          <HeroBannerParag>Taking control of your money may seem overwhelming at first, but you are not alone. We have developed a variety of tools to keep you on track and focused!</HeroBannerParag>
          <h3>Investing:</h3>
          <ul>
            <li><NormalLinks to="/tools/investment-calc">Investment Calculator</NormalLinks></li>
            <li><NormalLinks to="/tools/investment-quiz">Investment Quiz</NormalLinks></li>
          </ul>
      </HeroBanner>
      <Img sizes={data.imageBannerBg.childImageSharp.sizes} />
    </BannerContainer>
  </div>
  
);

export const query = graphql`
  query ToolsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    imageBannerBg: file(relativePath: { eq: "tools-bg.jpeg" }) {
      childImageSharp {
        sizes(maxWidth: 1920, maxHeight: 1271) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`