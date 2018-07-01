import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import bannerBg from "./img-hero-banner-debt.jpg"
import sectionBannerInfo from "./debtInfog.jpg"
import sectionBannerBg from "./img-footer-budgeting.jpg"
import SubMenuSection from "../../components/SubMenuSection"
import {SectionContainer, SectionContentInfoGraphic} from "../../components/CommonContainers"

const BannerContainer = styled.div`
  background-size: cover;
  background-position: center;

  // @media (max-width: 768px) {
  //  display: block;
  // }
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

const SectionContainerWithBg = styled.div`
  background-size: cover;
  background-position: center;
`;

const SectionContent = styled.div`
  text-align: center;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const SectionContentWithBg = styled.div`
  text-align: center;
  padding: 100px;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const SectionParag = styled.p`
  font-size: 18px;
  color: #000;
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  padding-bottom: 0;
  border-bottom: none;
  font-size: 40px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const BigButton = styled(Link)`
  display: block;
  background-color: #0695a4;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 15px 20px;
  border-radius: 3px;
  margin: 15px auto 0;
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
        <HeroBannerTitle>Debt</HeroBannerTitle>
      </HeroBanner>
    </BannerContainer>

    <SubMenuSection 
      menuLink1="/get-started/savings"
      menuLink2="/get-started/debt"
      menuLink3="/get-started/budgeting"
      menuLink4="/get-started/retirement"
      menuLink5="/get-started/insurance"
    />

    <SectionContainer>
      <SectionContent>
        <SectionTitle>You Can Be Debt-Free</SectionTitle>
        <SectionParag>
          Most people think that having debt is normal.  This mentality robs you of having a better future.<br/>
          If you get rid of those payments you will unlock a very powerful wealth-building tool - your income.
        </SectionParag>        
        {/*<BigButton to="#">Sign Up</BigButton>*/}
      </SectionContent>
      <SectionContentInfoGraphic>
          <img src={sectionBannerInfo}/>
      </SectionContentInfoGraphic>
    </SectionContainer>

    <SectionContainerWithBg style={{backgroundImage:`url(` + sectionBannerBg + `)`,backgroundSize:`cover`,backgroundPosition:`center`}}>
      <SectionContentWithBg>
        <SectionTitle style={{color:`#fff`}}>Is your budget working?</SectionTitle>
        <SectionParag style={{color:`#fff`}}>Take total control of your money</SectionParag>
        <BigButton to="/get-started/budgeting">Learn More</BigButton>
      </SectionContentWithBg>
    </SectionContainerWithBg>
  </div>
  
);

export const query = graphql`
  query GetStartedDebtQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`