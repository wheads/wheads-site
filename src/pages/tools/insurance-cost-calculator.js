import React, { Component } from 'react';
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { select } from 'd3-selection'
import SlidingDiv from '../../components/Controls/SlidingDiv';
import {QuotedText} from '../../components/QuoteComp'
import { transition } from 'd3-transition'
import insurance from "../get-started/img-hero-banner-insurance.jpg"
import {ToolContainer} from "../../components/ToolContainer";

// Blue - #0695a4
// Brown - #ccc6ba
// Orange - #e79702
// Dark Green - #2d3939

const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: #2d3939;
  margin: 0px;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0px 10px;
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
    font-size: 1rem;
  }
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
  margin: 25px 20px 0px 20px;

  @media (max-width: 786px) {
    margin: 10px 15px 5px 15px;
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

  @media (max-width: 1280px) {
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
        Text1: `You don't need much to be covered.` ,
        Text2: "Let's step through each item, click NEXT to begin",
        Value: 0,
        InfoOnly: true,
        },
        {Number: '',
        Color: '#0695a4',
        Asset: true,
        Text1: 'How old are you?' ,
        Text2: '',
        Min: 18,
        Max: 60,
        Step: 1,
        Value: 18,
        },
        {Number: '',
        Color: '#0695a4',
        Asset: true,
        Text1: 'How much insurance do you need?' ,
        Text2: '',
        Min: 250000,
        Max: 4000000,
        Step: 250000,
        Value: 250000,
        ShowCurrency: true,
        },
        {Number: '',
        Color: '#0695a4',
        Asset: true,
        Text1: 'How long are you planning to pay?' ,
        Text2: '',
        Min: 1,
        Max: 18,
        Step: 1,
        Value: 18,
        },
        {Number: '',
        Color: '#0695a4',
        Text1: 'Your premium (Annually): ' ,
        Positive1: 'Congratulations in planning to take care of your family.',
        Positive2: '',
        Negative1: '',
        Negative2: '',
        Text2: '',
        Value: 0,
        Last: true,
        NextStep: 'You can leave us a message.',
        NextStepLink: '../contact',
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

  calculateInsurancePremium(InputAge, InsuranceNeed)
  {
    var rates = [
      {Age: 18,
      Rates:
      [
        {
          T1 : 6.14, T2 : 5.18, T3 : 4.41, T4 : 4.22,
        }
      ]},
      {Age: 19,
      Rates:
      [
        {
          T1 : 6.24, T2 : 5.28, T3 : 4.51, T4 : 4.32,
        }
      ]},
      {Age: 20,
      Rates:
      [
        {
          T1 : 6.34, T2 : 5.38, T3 : 4.61, T4 : 4.42,
        }
      ]},
      {Age: 21,
      Rates:
      [
        {
          T1 : 6.44, T2 : 5.48, T3 : 4.71, T4 : 4.52,
        }
      ]},
      {Age: 22,
      Rates:
      [
        {
          T1 : 6.45, T2 : 5.49, T3 : 4.72, T4 : 4.52,
        }
      ]},
      {Age: 23,
      Rates:
      [
        {
          T1 : 6.55, T2 : 5.59, T3 : 4.82, T4 : 4.62,
        }
      ]},
      {Age: 24,
      Rates:
      [
        {
          T1 : 6.56, T2 : 5.59, T3 : 4.82, T4 : 4.63,
        }
      ]},
      {Age: 25,
      Rates:
      [
        {
          T1 : 6.56, T2 : 5.59, T3 : 4.82, T4 : 4.63,
        }
      ]},
      {Age: 26,
      Rates:
      [
        {
          T1 : 6.56, T2 : 5.60, T3 : 4.83, T4 : 4.63,
        }
      ]},
      {Age: 27,
      Rates:
      [
        {
          T1 : 6.57, T2 : 5.60, T3 : 4.83, T4 : 4.64,
        }
      ]},
      {Age: 28,
      Rates:
      [
        {
          T1 : 6.57, T2 : 5.61, T3 : 4.83, T4 : 4.64,
        }
      ]},
      {Age: 29,
      Rates:
      [
        {
          T1 : 6.68, T2 : 5.71, T3 : 4.93, T4 : 4.64,
        }
      ]},
      {Age: 30,
      Rates:
      [
        {
          T1 : 6.68, T2 : 5.71, T3 : 4.94, T4 : 4.74,
        }
      ]},
      {Age: 31,
      Rates:
      [
        {
          T1 : 6.78, T2 : 5.81, T3 : 5.04, T4 : 4.84,
        }
      ]},
      {Age: 32,
      Rates:
      [
        {
          T1 : 6.98, T2 : 6.01, T3 : 5.24, T4 : 5.04,
        }
      ]},
      {Age: 33,
      Rates:
      [
        {
          T1 : 7.18, T2 : 6.21, T3 : 5.43, T4 : 5.24,
        }
      ]},
      {Age: 34,
      Rates:
      [
        {
          T1 : 7.48, T2 : 6.51, T3 : 5.73, T4 : 5.54,
        }
      ]},
      {Age: 35,
      Rates:
      [
        {
          T1 : 7.78, T2 : 6.80, T3 : 6.03, T4 : 5.83,
        }
      ]},
      {Age: 36,
      Rates:
      [
        {
          T1 : 8.17, T2 : 7.2, T3 : 6.42, T4 : 6.22,
        }
      ]},
      {Age: 37,
      Rates:
      [
        {
          T1 : 8.56, T2 : 7.59, T3 : 6.81, T4 : 6.62,
        }
      ]},
      {Age: 38,
      Rates:
      [
        {
          T1 : 8.96, T2 : 7.99, T3 : 7.21, T4 : 7.01,
        }
      ]},
      {Age: 39,
      Rates:
      [
        {
          T1 : 9.46, T2 : 8.48, T3 : 7.70, T4 : 7.51,
        }
      ]},
      {Age: 40,
      Rates:
      [
        {
          T1 : 10.05, T2 : 9.07, T3 : 8.29, T4 : 8.1,
        }
      ]},
      {Age: 41,
      Rates:
      [
        {
          T1 : 10.64, T2 : 9.66, T3 : 8.88, T4 : 8.69,
        }
      ]},
      {Age: 42,
      Rates:
      [
        {
          T1 : 11.33, T2 : 10.5, T3 : 9.57, T4 : 9.38,
        }
      ]},
      {Age: 43,
      Rates:
      [
        {
          T1 : 12.02, T2 : 11.05, T3 : 10.26, T4 : 10.07,
        }
      ]},
      {Age: 44,
      Rates:
      [
        {
          T1 : 12.72, T2 : 11.74, T3 : 10.96, T4 : 10.76,
        }
      ]},
      {Age: 45,
      Rates:
      [
        {
          T1 : 13.51, T2 : 12.53, T3 : 11.75, T4 : 11.55,
        }
      ]},
      {Age: 46,
      Rates:
      [
        {
          T1 : 14.41, T2 : 13.43, T3 : 12.64, T4 : 12.45,
        }
      ]},
      {Age: 47,
      Rates:
      [
        {
          T1 : 15.39, T2 : 14.41, T3 : 13.63, T4 : 13.43,
        }
      ]},
      {Age: 48,
      Rates:
      [
        {
          T1 : 16.48, T2 : 15.50, T3 : 14.72, T4 : 14.52,
        }
      ]},
      {Age: 49,
      Rates:
      [
        {
          T1 : 17.77, T2 : 16.79, T3 : 16.01, T4 : 15.81,
        }
      ]},
      {Age: 50,
      Rates:
      [
        {
          T1 : 19.16, T2 : 18.18, T3 : 17.40, T4 : 17.20,
        }
      ]},
      {Age: 51,
      Rates:
      [
        {
          T1 : 20.66, T2 : 19.67, T3 : 18.89, T4 : 18.69,
        }
      ]},
      {Age: 52,
      Rates:
      [
        {
          T1 : 22.24, T2 : 21.25, T3 : 20.47, T4 : 20.27,
        }
      ]},
      {Age: 53,
      Rates:
      [
        {
          T1 : 23.93, T2 : 22.95, T3 : 22.16, T4 : 21.96,
        }
      ]},
      {Age: 54,
      Rates:
      [
        {
          T1 : 25.72, T2 : 24.74, T3 : 23.95, T4 : 23.75,
        }
      ]},
      {Age: 55,
      Rates:
      [
        {
          T1 : 27.82, T2 : 26.83, T3 : 26.04, T4 : 25.84,
        }
      ]},
      {Age: 56,
      Rates:
      [
        {
          T1 : 30.21, T2 : 29.22, T3 : 28.43, T4 : 28.23,
        }
      ]},
      {Age: 57,
      Rates:
      [
        {
          T1 : 32.70, T2 : 31.71, T3 : 30.92, T4 : 30.73,
        }
      ]},
      {Age: 58,
      Rates:
      [
        {
          T1 : 35.38, T2 : 34.40, T3 : 33.61, T4 : 33.41,
        }
      ]},
      {Age: 59,
      Rates:
      [
        {
          T1 : 38.18, T2 : 37.19, T3 : 36.40, T4 : 36.20,
        }
      ]},
      {Age: 60,
      Rates:
      [
        {
          T1 : 41.09, T2 : 40.10, T3 : 39.30, T4 : 31.11,
        }
      ]}
    ]
    var cost = 0;

    console.clear();
    console.log(InputAge);
    var rate = rates.filter((rate) => 
      rate.Age === parseInt(InputAge)
    );

    InsuranceNeed = parseInt(InsuranceNeed) / 1000;

    console.log(InsuranceNeed);
    if(InsuranceNeed >= 5000)
    {
      cost = rate[0].Rates[0].T4;
    }
    else if(InsuranceNeed >= 2500)
    {
      cost = rate[0].Rates[0].T3;
    }
    else if(InsuranceNeed >= 1000)
    {
      cost = rate[0].Rates[0].T2;
    }
    else
    {
      cost = rate[0].Rates[0].T1;
    }
    
    cost = ((cost * InsuranceNeed) + 300) * 18;

    this.setState(
      {TotalInsuranceCost: cost}
    )
  }

  onMovePanels(index, animate)
  {    
    if(index === 3)
    {
      console.log("Get Insurance")
      this.calculateInsurancePremium(this.state.contents[index-2].Value, this.state.contents[index-1].Value);
    }

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

    console.log(this.state.contents)
    var InsuranceNeed = this.state.TotalInsuranceCost / this.state.contents[3].Value;
    
    this.setState(
      {
        InsuranceNeed: InsuranceNeed,
      }
    )
  }

  render(){
    
    return(
      <ToolContainer>
        <PageContainer >
          <Content>
            <Title>How much will my Insurance cost?</Title>&nbsp;
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
                    Worth={this.state.InsuranceNeed}
                  />
                )}
              </MovingContainer>
            </SliderContainer>
            <QuotedText BackgroundImage={`url(` + insurance + `)`} FontSize='1.5rem' Color='#ffffff' QuoteColor='#e79702' QuoteBy="Dave Ramsey" >Term life insurance is part of a good defensive game plan.</QuotedText>
            {/*<div style={{textAlign: 'center', padding: '10px', backgroundColor: '#ccc6ba', margin: '0px 5px'}}>
              <BookContent>
                <img src={bobook}/>
                <div>
                  <Quote>Friend, this book is your ticket to upgrading your financial life. Read it, devour it, and share it with people who need a financial revolution in their life.</Quote>
                  <ForewordBy>- Bro. Bo Sanchez</ForewordBy>
                </div>
              </BookContent>
              <Final2>Start your journey now. &nbsp;Get the first 2 chapters of <br/><b>"The Secret to Saving and Building Your Future"</b>.</Final2>
              <iframe allowTransparency="true" scrolling='no' style={{marginLeft: '0px', border: 'none', width: '100%', overflow: 'hidden', height: '180px'}} src="https://4374kf.imgcorp.com/getbook1/"></iframe>
              </div>*/}
          </Content>
        </PageContainer>
      </ToolContainer>
      );
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
  query InsuranceCostCalculator {
    site {
      siteMetadata {
        title
      }
    }
  }
`
