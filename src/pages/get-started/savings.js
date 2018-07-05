import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import bannerBg from "./img-hero-banner-savings.jpg"
import sectionBannerInfo from "./savingsInfog.jpg"
import sectionBannerBg from "./img-footer-debt.jpeg"
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
  padding: 50px 25px;

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
  //text-align: left;
  font-size: 1.15rem;
  color: #000;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
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
      <description>If you're serious about having a financially secure future for you and your family, there are ways to save. It's not how much your earn the counts, it's how much you keep.</description>
      <meta property="og:title" content="Want to start saving?"/>
      <meta property="og:description" content="If you're serious about having a financially secure future for you and your family, there are ways to save. It's not how much your earn the counts, it's how much you keep."/>
      <meta property="og:image" content="/static/img-hero-banner-savings.50a3f662.jpg" />
    </Helmet>

    <BannerContainer style={{backgroundImage:`url(` + bannerBg + `)`}}>
      <HeroBanner>
        <HeroBannerTitle>Savings</HeroBannerTitle>
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
        <SectionTitle>Get Started Now</SectionTitle>
        <SectionParag>
          Most people would say "How can we save?  We don't even have extra money every month."
        </SectionParag>
        <SectionParag>         
          You're probably thinking the same thing.  Give yourself a chance. 
          If you're serious about having a financially secure future for you and your family, there are ways to save.  It's not how much you earn that counts, it's how much you keep.
        </SectionParag>
        {/*<BigButton to="#">Sign Up</BigButton>*/}
      </SectionContent>
      <SectionContentInfoGraphic>
          <img src={sectionBannerInfo}/>
      </SectionContentInfoGraphic>
    </SectionContainer>
    <SectionContainerWithBg style={{backgroundImage:`url(` + sectionBannerBg + `)`,backgroundSize:`cover`,backgroundPosition:`center`}}>
      <SectionContentWithBg>
        <SectionTitle style={{color:`#fff`}}>Sick and tired of paying your debts?</SectionTitle>        
        <SectionParag style={{color:`#fff`}}>You deserve better</SectionParag>        
        <BigButton to="/get-started/debt">Learn More</BigButton>
      </SectionContentWithBg>
    </SectionContainerWithBg>
  </div>
);

export const query = graphql`
  query GetStartedSavingsPageQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`