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
// Rd - #b24073

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
        Text1: `How much time do you need to work to buy what you want.` ,
        Text2: "Step through each item to know, click NEXT to begin",
        Value: 0,
        InfoOnly: true,
        },
        {Number: '',
        Color: '#0695a4',
        Text1: 'How much is the thing/item you want to buy?' ,
        Text2: '',
        Min: 1000,
        Max: 1000000,
        Step: 1000,
        Value: 1000,
        ShowCurrency: true,
        },
        {Number: '',
        Color: '#0695a4',
        Text1: 'What is your hourly rate?' ,
        Text2: '',
        Min: 50,
        Max: 10000,
        Step: 50,
        Value: 200,
        ShowCurrency: true,
        },
        {Number: '',
        Color: '#0695a4',
        Text1: 'The number of hours you need to spend: ' ,
        Positive1: 'That is the trade off you need to do in exchange for the thing you want.',
        Positive2: 'Is it worth it?',
        Negative1: '',
        Negative2: '',
        Text2: '',
        Value: 0,
        Last: true,
        NextStep: 'You can leave us a message.',
        NextStepLink: '/../contact',
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

  calculateHours(InputAge, InsuranceNeed)
  {
    var totalHours = parseFloat(this.state.contents[1].Value)/parseFloat(this.state.contents[2].Value);
    var years, months, weeks, days, hours = 0;
    hours = totalHours;
    var message = 'You will spend ';
    if(totalHours >= 8760)
    {
      years =  hours / 8760;
      hours = hours % 8760;
      message = message + Math.round(years,2).toLocaleString() + ' year(s), ';
    }
    if(totalHours >= 720)
    {
      months =  hours / 720;
      hours = hours % 720;
      message = message + Math.round(months,2).toLocaleString() + ' month(s), ';
    }
    if(totalHours >= 168)
    {
      weeks =  hours / 168;
      hours = hours % 168;
      message = message + Math.round(weeks,2).toLocaleString() + ' weeks(s), ';
    }
    if(totalHours >= 24)
    {
      days =  hours / 24;
      hours = hours % 24;
      message = message + Math.round(days,2).toLocaleString() + ' days(s), ';
    }
    if(hours > 0)
    {      
      message = message + Math.round(hours,2).toLocaleString() + ' hr(s) ';
    }

    message = message + " of your life, to get what you want. That is a total hours of :"
    
    this.state.contents[3].Text1 = message;

    this.setState(
      {TotalHours: totalHours}
    )
  }

  onMovePanels(index, animate)
  {    
    if(index === 3)
    {
      this.calculateHours();
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
  }

  render(){
    
    return(
      <ToolContainer>
        <PageContainer >
          <Content>
            <Title>Do you want to buy something?  Is it worth it?</Title>&nbsp;
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
                    Worth={parseFloat(this.state.TotalHours)}
                  />
                )}
              </MovingContainer>
            </SliderContainer>
            <QuotedText BackgroundImage={`url(` + insurance + `)`} FontSize='1.5rem' Color='#ffffff' QuoteColor='#e79702' QuoteBy="Benjamin Franklin" >Lost time is never found again.</QuotedText>
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
  query WantsCostCalculator {
    site {
      siteMetadata {
        title
      }
    }
  }
`
