import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import sectionBannerInfo from "./budgetingInfog.jpg"
import bannerBg from "./img-hero-banner-budgeting.jpg"
import sectionBannerBg from "./img-footer-retirement.jpg"
import SubMenuSection from "../../components/SubMenuSection"
import {SectionContainer, SectionContentInfoGraphic} from "../../components/CommonContainers"
import BudgetWinning from "../../components/Tools/BudgetWinning/budget-winning"

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
  color: #000;
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
  align: right;
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
        <HeroBannerTitle>Budgeting</HeroBannerTitle>
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
        <SectionTitle>Budgeting Effectively</SectionTitle>
          <SectionParag>
          Developing a budget can do more than track your spending and savings.&nbsp;&nbsp;It can also help you work towards your financial goals.&nbsp;&nbsp;The following steps will show you how to build a budget that works for your life, so you don't have to worry about falling short of your plans.
           </SectionParag>  
        {/*<BigButton to="#">Learn More</BigButton>*/}       
      </SectionContent>
      <SectionContentInfoGraphic>
        {/*<BudgetWinning/>*/}
        <img src={sectionBannerInfo}/>
      </SectionContentInfoGraphic>
    </SectionContainer>

    <SectionContainerWithBg style={{backgroundImage:`url(` + sectionBannerBg + `)`,backgroundSize:`cover`,backgroundPosition:`center`}}>
      <SectionContentWithBg>
        <SectionTitle style={{color:`#fff`}}>Not enough saved for retirement?</SectionTitle>
        <SectionParag style={{color:`#fff`}}>You can change that.  It's never too late or too early to start.</SectionParag>
        <BigButton to="/get-started/retirement">Learn More</BigButton>
      </SectionContentWithBg>
    </SectionContainerWithBg>
  </div>
  
);

export const query = graphql`
  query GetStartedBudgetingPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`