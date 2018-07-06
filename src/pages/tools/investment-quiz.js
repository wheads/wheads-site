import React, { Component } from 'react';
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import BarChart from '../../components/BarChart';
import InvestmentQuiz from '../../components/Tools/InvestmentQuiz';
import {ToolContainer} from "../../components/ToolContainer";
import thumbImg from "./quiz2.jpg"

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;

  @media (max-width: 1111px) {
    display: block;
  }
`;

const IFrameContainer = styled.iframe`
  width: 100%;
  height: 356px;
  border: none;
  background-color: #FFFFFF;
`;

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
  }
  componentWillUnmount() {    
  }

  onClick(investmentData)
  {    
    this.setState({
      data: 
        {
          
        },
    });
  }

  render(){
    
    return(
    <ToolContainer >
      <Helmet>
        <title>Get Started - Investment Quiz</title>
        <meta property="og:title" content="Basic Investment Quiz"/>
        <meta property="og:description" content="Test your knowledge about investment.  Take this short quiz."/>
        <meta property="og:image" content="/static/quiz2.7a02efe8.jpg" />
      </Helmet>
      <PageContainer>
        <InvestmentQuiz onClick={e => this.onClick(e)}  />
        {/**<IFrameContainer src="https://4374kf.imgcorp.com/register/" />*/}
      </PageContainer>
      <img src={thumbImg} style={{display: 'none'}}/>
    </ToolContainer>);
  }
}

export default ({ data, scales, margins, svgDimensions }) => (
  <div>
    <Helmet>
      <title>Tools - {data.site.siteMetadata.title}</title>
    </Helmet>
    <App/>
    
  </div>  
);

export const query = graphql`
  query ToolsInvestmentQuizPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
