import React, { Component } from 'react';
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import BarChart from '../../components/BarChart';
import InvestmentCalc from '../../components/Tools/InvestmentCalc';
import bgImage from './funky-lines.png';
import retireImage from './icons8-coins-50.png';
import saveMoney from './icons8-stack-of-money-50.png';
import saveSoda from './icons8-soda-50.png';
import saveResto from './icons8-restaurant-table-50.png';
import { max } from 'd3-array';
import * as d3Axis from 'd3-axis';
import { select } from 'd3-selection';
import { transition } from 'd3-transition';

const ToolContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;

  @media (max-width: 1111px) {
    display: block;
  }
`;

const ResultContainer = styled.div`
  display: grid;
  grid-template-columns: 48% 52%;

  @media (max-width: 1330px)
  {
    {
      display: block;
    }
  }
`;

const ResultInfoHeader = styled.p`
  margin-top: 10px;
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 15px white
`;

const ResultInfo = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0px;
  text-shadow: 2px 2px 15px white
`;

const Sup = styled.sup`
  font-size: 0.35em;
  vertical-align: super;
`;

const EstimateDiv = styled.div`
  margin: 5px 2px 5px 25px;
  border-right: 2px solid #d7d9e0;

  @media (max-width: 1330px)
  {
    padding: 0px;
    border-bottom: 2px solid #d7d9e0;
    border-right: none;    
    margin: 2px 25px;
  }
`;

const WhatIfContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 33%;
  margin: 2px 20px;
  grid-column-gap: 20px;

  @media (max-width: 800px)
  {
    display: block;
    border-bottom: 1px solid #00000
  }
`;

class App extends React.Component {

  constructor(props){
    super(props)
    
    this.barWidth = 0;

    this.state = {
      width: 500,
      height: 375,
      data: {
      StartAge: 18,
      RetireAge: 60,
      Rate: 10,
      initial: 0,
      contributions: 0,
      growth: 0,
      schedule: [{year: 2018, money: 0}]
      }, 
      barsize: 25
    }
  }

  updateDimensions() {
    var bar = this.resultContainer;
    if(bar !== undefined)
    {
      this.setState({width: bar.offsetWidth, height: bar.offsetWidth * 0.75});
    }
  }

  /**
   * Add event listener
   */
  componentWillMount() {
    this.updateDimensions();
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {    
    this.updateDimensions();
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  onClick(investmentData)
  {    
    this.setState({
      data: 
        {
          StartAge: investmentData.StartAge,
          RetireAge:investmentData.RetireAge,
          Rate: investmentData.Rate,
          initial: investmentData.initial,
          contributions: investmentData.contributions,
          growth: investmentData.growth,
          schedule: investmentData.schedule
        },
      barsize: 0
    });
    this.updateDimensions();
    this.divResult.style.opacity = "1"
  }

  calculateGrowth(value)
  {
    if(value == undefined)
      return 0;

    var growth = 0;

    for(var i = this.state.data.StartAge; i < this.state.data.RetireAge; i++)
    {
      growth = (growth + value) * (1 + (this.state.data.Rate/ 100));
    }
    return growth;
  }

  getPercentage(dividend, divisor)
  {
    if (divisor == 0)
      return 0    
    else
      return Math.round((dividend/divisor)* 100, 0).toLocaleString() + " "
  }

  render(){
    
    return(
    <ToolContainer >
      <InvestmentCalc onClick={e => this.onClick(e)} />
      <div ref={ (divResult) => this.divResult = divResult} style={{opacity: '0.1', display: 'block', background: 'white', float: 'left', width: '100%' }}>
        <div style={{backgroundImage: `url(${bgImage})`, backgroundRepeat: 'repeat', display: 'block', width: '100%', textAlign: 'center'}}>
          
        <WhatIfContainer >
            <div >            
              <ResultInfoHeader>Initial Balance</ResultInfoHeader>
              <ResultInfo>
                <Sup style={{paddingRight: '10px'}}>Php</Sup>
                {Math.round(this.state.data.initial,0).toLocaleString()}
              </ResultInfo>
              <p style={{fontSize: '1rem', textShadow: '2px 2px 15px white'}}>
                {this.getPercentage(this.state.data.initial, (this.state.data.initial + this.state.data.contributions))}
                % of Principal
              </p>
            </div>
            <div >
              <ResultInfoHeader>Contributions</ResultInfoHeader>
              <ResultInfo>
                <Sup style={{paddingRight: '10px'}}>Php</Sup>
                {Math.round(this.state.data.contributions,0).toLocaleString()}
              </ResultInfo>
              <p style={{fontSize: 'rem', textShadow: '2px 2px 15px white'}}>
                {this.getPercentage(this.state.data.contributions, (this.state.data.initial + this.state.data.contributions))}
                % of Principal
              </p>
            </div>
            <div >
              <ResultInfoHeader>Growth</ResultInfoHeader>
              <ResultInfo>
                <Sup style={{paddingRight: '10px'}}>Php</Sup>
                {Math.round(this.state.data.growth,0).toLocaleString()}
              </ResultInfo>
              <p style={{fontSize: '1rem', textShadow: '2px 2px 15px white'}}>
                {this.getPercentage(this.state.data.growth, (this.state.data.initial + this.state.data.contributions))}
                % gain
              </p>
            </div>
          </WhatIfContainer>
          <div id="summary" style={{margin: '20px 2%', background: 'white', boxShadow: '0px 20px 50px 2px #888888'}}>
            <div style={{fontSize: '2.25rem', borderTop: '#000000 solid', marginBottom: '15', paddingTop: '20px', fontFamily: 'Arial,sans-serif', fontWeight: 'bold', lineHeight: '2.25rem'}}>Results</div>
            <ResultContainer >
              <EstimateDiv>
                <div style={{paddingRight: '5px', fontWeight: '800', fontSize: '1.25rem', textAlign: 'left', padding: '2px 5px 0px 5px'}}>
                  <p style={{marginBottom: '10px',  display: 'inline', paddingRight: '5px'}}><img style={{width: '20px'}} src={retireImage} /></p>
                  <p style={{marginBottom: '10px', display: 'inline'}}>ESTIMATED RETIREMENT SAVINGS</p>
                </div>
                <div style={{textAlign: 'left', padding: '0px 5px 12px 5px'}}>Saving from {this.state.data.StartAge} y.o to your retirement at {this.state.data.RetireAge} y.o.
                &nbsp;&nbsp;In {this.state.data.schedule[this.state.data.schedule.length-1].year - this.state.data.schedule[0].year} years, your investment could be worth:</div>
              </EstimateDiv>
              <div>
                <div style={{fontSize: '3rem', fontFamily: 'Arial,sans-serif', fontWeight: 'bold', verticalAlign: 'top', textAlign: 'right', marginRight: '20px'}}>
                  <p >
                    <Sup style={{paddingRight: '10px'}}>Php</Sup>
                    <span>
                      {Math.round(this.state.data.schedule[this.state.data.schedule.length-1].money,0).toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
            </ResultContainer >
            <div style={{textAlign: 'center', margin: '2px 20px 0px 20px', padding: '20px 80px 20px 80px'}}>Is that enough for your retirement?  Find out with our free assessment.</div>
          </div>
        </div>
        <div style={{background: 'white'}}>
          <div ref={ (resultContainer) => this.resultContainer = resultContainer} style={{margin: '30px 15px'}}>
            <BarChart data={this.state.data} width={this.state.width} height={this.state.height} 
              barsize={this.state.barsize} />
          </div>
        </div>        
        <div style={{display: 'block', width: '100%', textAlign: 'center'}}>
        <div style={{fontSize: '1.75rem', borderTop: '1px solid #d7d9e0', marginBottom: '25', paddingTop: '20px', fontFamily: 'Arial,sans-serif', fontWeight: 'bold'}}>What if...</div>
          <WhatIfContainer >
              <div >
                <p style={{marginBottom: '2px'}}><img style={{width: '40px'}} src={saveMoney} /></p>
                <p style={{padding: '0px 10px', marginBottom: '0px', fontWeight: '800', fontSize: '1.3rem', textShadow: '2px 2px 5px white'}}>SAVE ADDITIONAL 500 PER MONTH.</p>
                <p style={{marginBottom: '0px', fontSize: '1rem', textShadow: '2px 2px 5px white'}}>and create</p>
                <p style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', textShadow: '2px 2px 5px white'}}>
                  <Sup style={{fontSize: '50%', paddingRight: '10px'}}>Php</Sup>
                  {Math.round(this.calculateGrowth(6000),0).toLocaleString()}
                </p>
                <p style={{marginBottom: '20px',  fontSize: '1rem', textShadow: '2px 2px 5px white'}}>in additional growth.</p>
              </div>
              <div >
                <p style={{marginBottom: '2px'}}><img style={{width: '40px'}} src={saveSoda} /></p>
                <p style={{padding: '0px 10px', marginBottom: '0px', fontWeight: '800', fontSize: '1.3rem', textShadow: '2px 2px 5px white'}}>GAVE UP DAILY SOFTDRINK.</p>
                <p style={{marginBottom: '0px', fontSize: '1rem', textShadow: '2px 2px 5px white'}}>and create</p>
                <p style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', textShadow: '2px 2px 5px white'}}>
                  <Sup style={{paddingRight: '10px'}}>Php</Sup>
                  {Math.round(this.calculateGrowth(9125),0).toLocaleString()}
                </p>
                <p style={{marginBottom: '20px',  fontSize: '1rem', textShadow: '2px 2px 5px white'}}>in additional growth.</p>
              </div>
              <div >
                <p style={{marginBottom: '2px'}}><img style={{width: '40px'}} src={saveResto} /></p>
                <p style={{padding: '0px 10px', marginBottom: '0px', fontWeight: '800', fontSize: '1.3rem', textShadow: '2px 2px 5px white'}}>GAVE UP WEEKLY RESTAURANT VISITS.</p>
                <p style={{marginBottom: '0px', fontSize: '1rem', textShadow: '2px 2px 5px white'}}>and create</p>
                <p style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px', textShadow: '2px 2px 5px white'}}>
                  <Sup style={{paddingRight: '10px'}}>Php</Sup>
                  {Math.round(this.calculateGrowth(38400),0).toLocaleString()}
                </p>
                <p style={{marginBottom: '20px', fontSize: '1rem', textShadow: '2px 2px 5px white'}}>in additional growth.</p>
              </div>
          </WhatIfContainer>
        </div>
      </div>
    </ToolContainer>);
  }
}

export default ({ data, scales, margins, svgDimensions }) => (
  <div>
    <Helmet>
      <title>Tools - {data.site.siteMetadata.title}</title>
    </Helmet>

    <App />    
  </div>  
);

export const query = graphql`
  query ToolsInvestmentPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
