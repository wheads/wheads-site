import React, { Component } from 'react';
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import BarChart from '../../components/BarChart';
import DebtMythQuiz from '../../components/Tools/MoneyMythQuiz';
import {ToolContainer} from "../../components/ToolContainer";
import thumbImg from "./MythFact.png"

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
        <title>EveryPeso.com - Money Myth</title>
        <meta property="og:title" content="EveryPeso - Money Myth"/>
        <meta property="og:description" content="Can you identify which are Myth or Fact?"/>
        <meta property="og:image" content="https://www.everypeso.com/static/MythFact.11c512c1.png" />
      </Helmet>
      <PageContainer>
        <DebtMythQuiz onClick={e => this.onClick(e)}  />
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
  query ToolsMoneyMythQuizPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
