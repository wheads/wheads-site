import React, { Component } from 'react';
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import BarChart from '../../components/BarChart';
import InvestmentQuiz2 from '../../components/Tools/InvestmentQuiz2';

const ToolContainer = styled.div`
  display: block;
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
      <InvestmentQuiz2 onClick={e => this.onClick(e)} />
    </ToolContainer>);
  }
}

export default ({ data, scales, margins, svgDimensions }) => (
    <div>
        <App/>
    </div>
     
  );