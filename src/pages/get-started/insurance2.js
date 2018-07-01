import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import bannerBg from "./img-hero-banner-insurance.jpg"
import sectionBannerBg from "./img-hero-banner-debt.jpg"
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
  background-color: #9ae48b;
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
          Most people would say "How can we save? We don't even have extra money every month.  We could hardly pay our bills."
          You're probably thinking the same thing.  But give yourself a chance. 
          If you're serious about having a financially secure future for you and your family, there are ways to save.
          It's not how much your earn the counts, it's how much you save.
          </SectionParag>
        <BigButton to="#">Sign Up</BigButton>
      </SectionContent>
      <SectionContentInfoGraphic>
        <SectionParag>
          1.) Pay yourself first.  	
          Setting aside money must become a priority.  The amount does not matter, what's important is creating a habit of saving.
          This is the hardest step because it requires a decision to change, and we all know change is never easy.  
          But once you can jump start this new habit of discipline, then the rest will just flow.
        </SectionParag>
        <SectionParag>
          2.) Check your spending habits
          This is where you differentiate the "needs" and the "wants".  What are your priorities in life?
          Do you sometimes buy things you don't really need?  Don't worry, we all do that, it may take some time to 
          be in control with your spending habits but atleast you now have a clear picture on what's important to you.
          Making a budget will greatly help you with this step.  (More tips on the budgeting section)
        </SectionParag>
        <SectionParag>  
          3.) Earn extra income		
          Sometimes, no matter how you squeeze your income and tighten your belts, it's just not enough.
          In reality, a lot of people have part-time jobs and small businesses to supplement their income.
          Is it easy? Of course NOT! But hardwork always pay off.  Family members can also help and contribute to
          your common goal of increasing your cash flow.
        </SectionParag>
        <SectionParag>    
          4.) Avoid debt			
          When you have payments every single month for a long time, you will lose a lot I mean a ton of money.
          The interest alone can be a disaster in your financial situation.  Debt is attractive because it somehow lets
          you have all the things you want - now, even if you can't really afford it.  So don't get trapped,
          have a plan to be debt-free and stay there.  (More tips on the debt section)
        </SectionParag>
      </SectionContentInfoGraphic>
    </SectionContainer>

    <SectionContainerWithBg style={{backgroundImage:`url(` + sectionBannerBg + `)`,backgroundSize:`cover`,backgroundPosition:`center`}}>
      <SectionContentWithBg>
        <SectionTitle style={{color:`#fff`}}>Manage your debt</SectionTitle>
        <SectionParag style={{color:`#fff`}}>Tired of all your monthly payments?</SectionParag>
        <SectionParag style={{color:`#fff`}}>You deserve better.</SectionParag>
        <BigButton to="#">Learn More</BigButton>
      </SectionContentWithBg>
    </SectionContainerWithBg>
  </div>
  
);

export const query = graphql`
  query GetStartedInsurance2PageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`