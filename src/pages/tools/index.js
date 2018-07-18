import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import heroBannerBg from "../../components/img-tools.jpg"
import imgInvestmentCalc from "./inv-calc.png"
import imgNetWorthCalc from "./net-calc.png"
import imgInsuranceCalc from "./ins-calc.png"
import imgInsuranceCostCalc from "./ins-cost-calc.png"
import imgMoneyQuiz from "./money-quiz.png"
import imgDebtQuiz from "./myth-quiz.png"
import imgInvestmentQuiz from "./investment-quiz.png"

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ToolTitle = styled.h3`
  text-align: left;
  font-size: 1.5rem;
  color: #2d3939;
`;

const TitleLinks = styled(Link)`
  display: block;
  text-align: left;
  font-size: 1.5em;
  color: #0695a4;
  text-decoration: none;
  text-align: left;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const ToolInfoContainer = styled.div`
  min-width: 350px;
  padding-right: 20px;
  

@media (max-width: 768px) {
    
  }
`;

const ToolDescription = styled.p`
  text-align: left;
  font-size: 1rem;
  color: #2d3939;
`;

const ToolsContainer = styled.div`
margin-top: 25px;
font-size: 15px;

&::after {
  content: '';
  padding-bottom: 35px;
  display: block;
  border-bottom: 1px solid #2d393944;
}

@media (max-width: 768px) {
  display: block;
}
`;

const ToolsImg = styled.img`
  max-width: 150px;
  float: right;
  height: auto;
  margin: auto;

  @media (max-width: 768px) {
    display: block;
    max-width: 75%;
    height: auto;
    margin: auto;
    float: none;
    margin-bottom: 25px;
  }
`;

const GroupTitle = styled.div`
  display: flex;
  text-align: left;
  font-size: 2.25rem;
  font-weight: bold;
  margin-top: 25px;
  color: #2d3939;

  &::after {  
    content: '';
    flex-grow: 1;
    top: 0.75em;
    position: relative;
    margin-left: 14px;
    height: 2px;
    background-color: #2d3939;
  }

`

const HeroBanner = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #ccc6ba;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const HeroBannerParag = styled.p`
  font-size: 18px;
  padding-bottom: 15px;
  color: #ffffff;
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
  color: #0695a4;
  text-decoration: none;
  text-align: left;
  font-weight: bold;
  letter-spacing: 1px;
  max-width: 230px;

  &:hover {
    text-decoration: underline;
  }
`;

export default ({ data }) => (
  <div>
    <Helmet>
      <title>Tools - {data.site.siteMetadata.title}</title>
    </Helmet>
    
    <HeroBanner style={{backgroundImage:`url(` + heroBannerBg + `)`,backgroundSize:`cover`,backgroundPosition:`center`}}>
      <HeroBannerTitle>Tools</HeroBannerTitle>
      <HeroBannerParag>Taking control of your money may seem overwhelming at first, but you are not alone. We have developed a variety of tools to keep you on track and focused!</HeroBannerParag>
    </HeroBanner>
    <ContentContainer>
      <HeroBanner>
        <GroupTitle>Personal Assessment</GroupTitle>
        <ToolsContainer>
          <ToolsImg src={imgNetWorthCalc}/>
          <ToolInfoContainer>
            <TitleLinks to="/tools/networth-calculator">Net Worth Calculator</TitleLinks>
            <ToolDescription>Use our calculator to know how much will be your savings when you retire.</ToolDescription>
          </ToolInfoContainer>
        </ToolsContainer>
        <GroupTitle>Investments</GroupTitle>
        <ToolsContainer>
          <ToolsImg src={imgInvestmentCalc}/>
          <ToolInfoContainer>
            <TitleLinks to="/tools/investment-calc">Investment Calculator</TitleLinks>
            <ToolDescription>Use our calculator to know how much will be your savings when you retire.</ToolDescription>
          </ToolInfoContainer>
        </ToolsContainer>
        <GroupTitle>Insurance</GroupTitle>
        <ToolsContainer>
          <ToolsImg src={imgInsuranceCalc}/>
          <ToolInfoContainer>
            <TitleLinks to="/tools/insurance-calculator">Insurance Need Calculator</TitleLinks>
            <ToolDescription>Use the simple method in determining your Insurance need.</ToolDescription>
          </ToolInfoContainer>
        </ToolsContainer>
        <ToolsContainer>
          <ToolsImg src={imgInsuranceCostCalc}/>
          <ToolInfoContainer>
            <TitleLinks to="/tools/insurance-cost-calculator">Insurance Cost Calculator</TitleLinks>
            <ToolDescription>It is not expensive to be secured, found out here.</ToolDescription>
          </ToolInfoContainer>
        </ToolsContainer>
      </HeroBanner>
      <HeroBanner>
        <GroupTitle>Quiz</GroupTitle>
        <ToolsContainer>
          <ToolsImg src={imgInvestmentQuiz}/>
          <ToolInfoContainer>
            <TitleLinks to="/tools/debt-myth-quiz">Investment Quiz</TitleLinks>
            <ToolDescription>How much do you know about investments?</ToolDescription>
          </ToolInfoContainer>
        </ToolsContainer>
        <ToolsContainer>
          <ToolsImg src={imgDebtQuiz}/>
          <ToolInfoContainer>
            <TitleLinks to="/tools/debt-myth-quiz">Debt Myth</TitleLinks>
            <ToolDescription>There are many debt myths that we believe that are holding us back. Can you identify them?</ToolDescription>
          </ToolInfoContainer>
        </ToolsContainer>
        <ToolsContainer>
          <ToolsImg src={imgMoneyQuiz}/>
          <ToolInfoContainer>
            <TitleLinks to="/tools/money-myth-quiz">Money Myth</TitleLinks>
            <ToolDescription>Can you identify practices/beliefs about money that are not helping you?</ToolDescription>
          </ToolInfoContainer>
        </ToolsContainer>
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