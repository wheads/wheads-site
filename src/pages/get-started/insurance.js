import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import bannerBg from "./img-hero-banner-insurance.jpg"
import sectionBannerInfo from "./insuranceInfog.jpg"
import sectionBannerBg from "./img-footer-insurancetag.jpg"
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
  padding: 50px 100px;

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
        <HeroBannerTitle>Insurance</HeroBannerTitle>
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
        <SectionTitle>Insurance</SectionTitle>
        <SectionParag>
          Just like any sport you need both good offense and defense to win. <br/>
          Your financial defense is insurance.
        </SectionParag>
      </SectionContent>
      <SectionContentInfoGraphic>
        <img src={sectionBannerInfo}/>
      </SectionContentInfoGraphic>
    </SectionContainer>

    <SectionContainerWithBg style={{backgroundImage:`url(` + sectionBannerBg + `)`,backgroundSize:`cover`,backgroundPosition:`center`}}>
      <SectionContentWithBg>
        <SectionTitle style={{color:`#fff`}}>How much life insurance do you need?</SectionTitle>
        <SectionParag style={{color:`#fff`}}>Calculate it by using this tool.</SectionParag>
        <BigButton to="/tools/insurance-calculator">Calculate</BigButton>
      </SectionContentWithBg>
    </SectionContainerWithBg>
  </div>
  
);

export const query = graphql`
  query GetStartedInsurancePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`