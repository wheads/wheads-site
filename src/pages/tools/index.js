import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import heroBannerBg from "../../components/img-tools.jpg"

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HeroBanner = styled.div`
  text-align: center;
  padding: 130px 100px;
  background-color: #ccc6ba;

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
  font-size: 60px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 4px;
  }
`;

const NormalLinks = styled(Link)`
  display: block;
  color: #2d3939;
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

    <ContentContainer>
      <HeroBanner style={{backgroundImage:`url(` + heroBannerBg + `)`,backgroundSize:`cover`,backgroundPosition:`center`}}>
        <HeroBannerTitle>Tools</HeroBannerTitle>
      </HeroBanner>
      <HeroBanner>
          <HeroBannerParag>Taking control of your money may seem overwhelming at first, but you are not alone. We have developed a variety of tools to keep you on track and focused!</HeroBannerParag>
          {/*<h3>Investing:</h3>*/}
          <ul>
            <li><NormalLinks to="/tools/investment-quiz">Investment Quiz</NormalLinks></li>
            <li><NormalLinks to="/tools/investment-calc">Investment Calculator</NormalLinks></li>
            <li><NormalLinks to="/tools/networth-calculator">Net Worth Calculator</NormalLinks></li>
            <li><NormalLinks to="/tools/insurance-calculator">Insurance Calculator</NormalLinks></li>
          </ul>
      </HeroBanner>
    </ContentContainer>
    {/*<Img sizes={data.imageBannerBg.childImageSharp.sizes} />*/}
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