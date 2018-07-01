import React, { Component } from 'react';
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { select } from 'd3-selection'
import SlidingDiv from '../../components/Controls/SlidingDiv';
import { transition } from 'd3-transition'
import bobook from "./book.jpg"

// Blue - #0695a4
// Brown - #ccc6ba
// Orange - #e79702
// Dark Green - #2d3939

const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: #2d3939;
  margin: 0px;
`;

const Quote = styled.q`
  quotes: "“" "„" "‚" "‘";
  font-size: 1rem;
  font-style: italic;
  text-align: left;
  padding: 20px;
`;

const ForewordBy = styled.p`
  text-align: left;
  font-weight: bold;
  margin-top: 0px;
  font-size: 1rem;
  padding-left: 25px;
`;

const Final2 = styled.h3`
  text-align: center;
  display: block;
  font-size: 1rem;
  color: #2d3939;
  font-weight: normal;
  margin: 0px 50px;

  @media (max-width: 786px) {
    margin: 10px 15px 5px 15px;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.25rem;
  text-align: center;
  color: #2d3939;
  font-weight: normal;
  margin: 0px 100px;
  border-bottom: 2px solid #0695a4;
  padding-bottom: 15px;

  @media (max-width: 786px) {
    margin: 0px 15px;
  }
`;

const PageContainer = styled.div`  
  margin-top: 25px;
`

const Content = styled.div`
  display: grid;
  width: 85%;
  margin: auto;
  grid-template-columns: 60% 40%;
  font-size: 14px;

  @media (max-width: 1000px) {
    display: block;
    width: 100%;
  }
`;

const BookContent = styled.div`
  display: grid;  
  grid-template-columns: 30% auto;
`

const SliderContainer = styled.div`
  display: flex;
  position: relative;
  margin: 5px auto;  
  max-width: 600px;
  overflow: hidden;
`;

const MovingContainer = styled.div`
  display: flex;
  position: relative;
  margin: 0px;
`;

class App extends React.Component {

  constructor(props){
    super(props)
    
    this.state = {
      currentIndex: 0,
      Worth: 0,
      contents : [
        {Number: '',
        Color: '#2d3939',
        Text1: 'D.I.M.E method is the simplest way to determine, how much insurance you need.' ,
        Text2: "Let's step through each item, click NEXT to being",
        Value: 0,
        InfoOnly: true,
        },
        //{Number: '',
        //Color: 'GREEN',
        //Asset: true,
        //Text1: 'ASSETS' ,
        //Text2: 'These are everything your own, Real Estate Properties/Savings & Investments/Cars',
        //Value: 0,
        //InfoOnly: true,
        //},
        {Number: '',
        Color: '#146414',
        Asset: true,
        Text1: 'How much DEBT do you have?' ,
        Text2: 'Combined Credit Cards, Loans and other Debts',
        Amount: 0,
        Max: 8000000,
        Step: 10000,
        Value: 0,
        },
        {Number: '',
        Color: '#146414',
        Asset: true,
        Text1: 'What is your Annual INCOME?' ,
        Text2: 'This includes your other sideline income.',
        Amount: 0,
        Max: 4000000,
        Step: 10000,
        Value: 0,
        },
        {Number: '3',
        Color: '#146414',
        Asset: true,
        Text1: 'Do you have cars?' ,
        Text2: 'Total the current value of all your vehicles.',
        Amount: 0,
        Max: 10000000,
        Step: 10000,
        Value: 0,
        },
        {Number: '4',
        Color: '#146414',
        Asset: true,
        Text1: 'Do you own other things?' ,
        Text2: 'Total it all here.',
        Amount: 0,
        Max: 10000000,
        Step: 10000,
        Value: 0,
        },
        {Number: '',
        Color: 'RED',
        Text1: 'LIABILITIES',
        Asset: false,
        Text2: 'These are everything your owe, Morgages/Loans/Credit Cards Debts',
        Value: 0,
        InfoOnly: true,
        },
        {Number: '1',
        Color: 'red',
        Asset: false,
        Text1: 'Do you still have a home mortgage?' ,
        Text2: 'Total all your real estate mortgages.',
        Amount: 0,
        Max: 10000000,
        Step: 10000,
        Value: 0,
        },
        {Number: '2',
        Color: 'red',
        Asset: false,
        Text1: 'Do you have an existing car loan?' ,
        Text2: 'Total all of your car loans.',
        Amount: 0,
        Max: 10000000,
        Step: 10000,
        Value: 0,
        },
        {Number: '3',
        Color: 'red',
        Asset: false,
        Text1: 'Do you have a Personal Loan?' ,
        Text2: 'This includes loans from SSS/GSIS/PAG-BIG/BANKS',
        Amount: 0,
        Max: 10000000,
        Step: 10000,
        Value: 0,
        },
        {Number: '4',
        Color: 'red',
        Asset: false,
        Text1: 'Do you have credit card debts?' ,
        Text2: 'Total all your outstanding credit card balances',
        Amount: 0,
        Max: 10000000,
        Step: 10000,
        Value: 0,
        },
        {Number: '5',
        Color: 'red',
        Asset: false,
        Text1: 'What other liabilities do you have that was not listed?' ,
        Text2: 'Total all other loans/debts/liabilities you owe.',
        Amount: 0,
        Max: 10000000,
        Step: 10000,
        Value: 0,
        },
        {Number: '',
        Color: '#2d3939',
        Text1: 'Your Net Worth' ,
        Positive1: 'Congratulations in having a positive Net Worth, keep it up!',
        Positive2: 'Do you want to know if it is enough? Click here.',
        Negative1: 'Having a negative Net Worth is bad, you need to take action.',
        Negative2: 'Need help? Click here.',
        Text2: 'Total all other loans/debts/liabilities you owe.',
        Value: 0,
        Last: true,
        },
      ]
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

  updateDimensions() {
    
    if(typeof document !== "undefined")
    {
      var div = select("#divSliderContainer").node()
      if(div !== null)
      {
        this.setState(
          {
            Width: div.offsetWidth
          }
        );
      }

      this.onMovePanels(this.state.currentIndex);
    }
  }

  onMovePanels(index, animate)
  {    
    var div = document.getElementById("divSliderContainer");
    if(div !== null)
    {
      var x = (index) * div.offsetWidth * -1;
      
      this.setState(
        {currentIndex: index}
      );
      
      if(animate)
      {
      transition(
        select('#divMoving')
            .transition()
            .style("left", function() { return x +  "px"; })
            .duration(500)
            .delay(0));
      }
      else
      {
        select('#divMoving')
            .style("left", function() { return x +  "px"; })
      }
    }

    var Worth = 0;
    for(var i=0; i < this.state.contents.length; i++)
    {
      if(this.state.contents[i].Asset)
        Worth += parseInt(this.state.contents[i].Value);
      else
        Worth -= parseInt(this.state.contents[i].Value);
    }
    
    this.setState(
      {
        Worth: Worth,
      }
    )
  }

  render(){
    
    return(
      <PageContainer >
        <Content>
          <Title>How much Insurance do you Need?</Title>&nbsp;
          <SubTitle></SubTitle>&nbsp;
          <SliderContainer ref={ (divSliderContainer) => this.divSliderContainer = divSliderContainer}  id="divSliderContainer">
            <MovingContainer id="divMoving">
              {this.state.contents.map((content, index) =>
                <SlidingDiv key={index.toString()} ref={ (divSliding) => this.divSliding = divSliding} 
                  Index = {index}
                  Content = {content}
                  Next={(index<(this.state.contents.length-1))?"true":"false"} Back={(index>0)?"true":"false"} 
                  Width={this.state.Width}
                  onMovePanels={(e) => this.onMovePanels(e, true)}
                  Worth={this.state.Worth}
                />
              )}
            </MovingContainer>
          </SliderContainer>
          
          <div style={{textAlign: 'center', margin: '10px'}}>
            <BookContent>
              <img src={bobook}/>
              <div>
                <Quote>Friend, this book is your ticket to upgrading your financial life. Read it, devour it, and share it with people who need a financial revolution in their life.</Quote>
                <ForewordBy>- Bro. Bo Sanchez</ForewordBy>
              </div>
            </BookContent>
            <Final2 style={{marginTop: '25px'}}>Start your journey now. &nbsp;Get the first 2 chapters of <b>"The Secret to Saving and Building Your Future"</b>.</Final2>
            <iframe allowtransparency="true" scrolling='no' style={{marginLeft: '0px', border: 'none', width: '100%', overflow: 'hidden', height: '180px'}} src="https://4374kf.imgcorp.com/getbook1/"></iframe>
          </div>
        </Content>
      </PageContainer>);
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
  query InsuranceCalculator {
    site {
      siteMetadata {
        title
      }
    }
  }
`
