import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import bannerBg from "./img-hero-banner-retirement.jpg"
import sectionBannerInfo from "./retirementInfog.jpg"
import sectionBannerBg from "./img-footer-insurance.jpg"
import SubMenuSection from "../../components/SubMenuSection"
import {SectionContainer, SectionContentInfoGraphic} from "../../components/CommonContainers"
import YoutubEmbed from "youtube-embed-video"

const VidWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /*56.25%;  16:9 */
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

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
      <meta property="og:title" content="Get Started - Retirement"/>
      <meta property="og:description" content="Retirement is not about age."/>
      <meta property="og:image" content="https://www.everypeso.com/static/img-hero-banner-retirement.5921b8bd.jpg" />
    </Helmet>

    <BannerContainer style={{backgroundImage:`url(` + bannerBg + `)`}}>
      <HeroBanner>
        <HeroBannerTitle>Retirement</HeroBannerTitle>
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
        <SectionTitle>Retirement Is Not About Age</SectionTitle>
        <SectionParag>
         It's how fast you can save enough for the retirement you want.<br/>
         At 70, you will still have to find a job just to survive if you don't have enough saved.
        </SectionParag>
          <VidWrapper>
            <YoutubEmbed videoId="UEG3uwmwP6I" size="large" suggestions={false} showInfo={false} controls={true} />
          </VidWrapper>
      </SectionContent>
      <SectionContentInfoGraphic>
        <img src={sectionBannerInfo}/>
      </SectionContentInfoGraphic>
    </SectionContainer>

    <SectionContainerWithBg style={{backgroundImage:`url(` + sectionBannerBg + `)`,backgroundSize:`cover`,backgroundPosition:`center`}}>
      <SectionContentWithBg>
        <SectionTitle style={{color:`#fff`}}>Is your family protected?</SectionTitle>
        <SectionParag style={{color:`#fff`}}>Show them you really care.</SectionParag>
        <BigButton to="/get-started/insurance">Learn More</BigButton>
      </SectionContentWithBg>
    </SectionContainerWithBg>
  </div>
);

export const query = graphql`
  query GetStartedRetirementPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`