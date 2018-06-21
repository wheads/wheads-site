import React, { Component } from 'react';
import { select } from 'd3-selection'
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import bucket1 from './bucket1.png';
import bucket2 from './bucket2.png';
import bucket3 from './bucket3.png';


const Tooltip = styled.div`
  position: absolute;
  background: #0a0a0a;
  color: #f4f4f4;
  border: 1px #333 solid;
  border-radius: 5px;
  text-align: left;
  font-weight: normal;
  font-weight: 1em;
  padding: 10px;
  opacity: 0;
  max-width: 500px;

  @media (max-width: 768px) {
    padding: 5px;
    max-width: 150px;
    font-weight: 1.25em;
  }
`;

const ClickHint = styled.div`
  display: block;
  text-align: left;
  padding-left: 5px;
  padding-top: 5px;
  font-size: 0.75em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const ToolContainer = styled.div`
  display: block;
  font-size: 16px;
  max-width: 1300px;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

const Line1 = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header1 = styled.h1`
  font-size: 4em;
  color: green;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    margin-bottom: 2px;
  }
`;

const Header2 = styled.h2`
  font-size: 3em;
  font-weight: normal;
  font-family: sans-serif;
  color: cadetblue;
  letter-spacing: 8px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    margin-bottom: 2px;
  }
`;

const Explanation = styled.h2`
  font-size: 1em;
  font-weight: normal;
  color: black;
  margin: 15px 50px 25px 2px;

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const LeftHeader = styled.h2`
  font-size: 2em;
  font-weight: normal;
  color: darkgoldenrod;
  border-bottom: darkgoldenrod 2px solid;
  padding: 2px 5px;
  margin-bottom: 5px;
`;

const TableNeeds = styled.table`
  text-align: center;
  font-size: 1em;
  cursor: pointer;

  @media (max-width: 768px) {
  font-size: 1.5em;
  }
`;

const TrAlt = styled.tr`
  background-color: floralwhite;
`;

const TrMain = styled.tr`
  background-color: gainsboro;
`;

const TdDesc = styled.td`
  text-align: left;
  padding: 0px 5px;
  margin: 0px 5px;
  width: 80%;
  border-right: white 2px solid;
  padding-left: 5px;
`;

const TdPercent = styled.td`
  padding: 0px 5px;
  font-weight: bold;
`;

const Line2 = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;  

  @media (max-width: 768px) {
    display: block;
  }
`;

const BucketsContainer = styled.div`
  border-radius: 25px;
  background-color: #f5f5f5;
  border: 2px solid #73AD21;
  text-align: center;
  margin: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    border-radius: 10px;
  }
`

const Buckets = styled.img`
  width: 250px;
  margin: 0px;
  vertical-align: middle;

  @media (max-width: 768px) {
    width: 170px;
  }

  @media (max-width: 400px) {
    width: 100px;
  }
`

const BucketText = styled.div`
  position: absolute;
  margin: 0px;
  padding: 0px;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -50%);
  letter-spacing: 5px;
  font-weight: bold;
  font-size: 1em;

  @media (max-width: 768px) {
    letter-spacing: 2px;
    font-size: 0.85em;
  }
`;

const BucketTextPercent = styled.div`
  position: absolute;
  margin: 0px;
  padding: 0px;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 3em;
`;

const TipSection = styled.div`
    display: block;
    margin: 2px 10px;

    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: auto auto;  
    }
`;

const TipContainer = styled.div`
    width: 100%%;
    max-width: 300px;
    margin-bottom: 25px;

    @media (max-width: 768px) {
      max-width: 200px;
      margin-bottom: 10px;
      font-size: 2em;
    }
  
    @media (max-width: 400px) {
      font-size: 1.25em;
      max-width: 120px;
    }
`;

const TipHeader = styled.span`
    padding: 2px 10px;
    margin: 0px;
`;

const TipContent = styled.div`
    padding: 20px 15px;
    margin: 10px 0px;
    font-style: italic;

    @media (max-width: 768px) {
      padding: 10px 7px;
      margin: 5px 0px;
    }
`;

class App extends React.Component {

  constructor(props){
    super(props)
    this.info = "show";

    this.state = {
      tableDesc: 'Needs',
      data:  [  
        {desc: 'Housing (including utilities)', percent: '25-35%'},
        {desc: 'Giving', percent: '10-15%'},
        {desc: 'Food (basic groceries)', percent: '5-10%'},
        {desc: 'Transportation (including insurance & gas)', percent: '5-10%'},
        {desc: 'Health & Insurance', percent: '5-10%'}
      ],
      Needs: [        
          {text: 'Housing is notoriously the biggest category in almost everyone’s budget. It’s good to be close to the 25% mark here.'},
          {text: 'It’s been scientifically proven that generosity makes us happy. That’s one reason why we recommend allocating 10% of your budget to giving. If you want to build up to this, start smaller and work your way up to the full amount over a few months.'},
          {text: 'This category can be really small or really large depending on the size of your family, your location and your dietary restrictions. There’s definitely some wiggle room here.'},
          {text: 'This category will vary depending on where you live, whether you have a long commute to and from work—or if you have access to great public transportation.'},
          {text: 'It isn’t the most fun expense in your budget, but you definitely need insurance coverage. And if you’re paying for it each month, you need to plan for it.'}
        ],
      Wants: [
          {text: 'This is the category for things like haircuts, manicures and wardrobe updates. This can vary depending on your other expenses and discretionary income.'},
          {text: 'Travels to unwind goes in here.'},
          {text: 'Eating out with friends and families on fancy restaurants.'},
          {text: 'Buying tickets and atching movies, concerts.'}
        ],
      Savings: [
          {text: 'This fund is intended for your day-to-day expense during retirement.'},
          {text: 'Better be prepared for unplanned repairs and other emergencies'},
          {text: 'Saving for your health needs during retirement is a must.'}
        ]
    };
  } 


  hideInfo(e)
  {
    if(this.info !== "show")
    {
      select("#tooltip").style('opacity','0');
    }

    this.info = "";
  }

  ShowInfo(e, category, index)
  {
    select("#tooltip").html(this.state[category][index].text);
    var tooltip = document.getElementById('tooltip');
    var x = e.pageX;
    var y = e.pageY;

    if((e.pageX + tooltip.offsetWidth + 50) > window.innerWidth)
      x -= (tooltip.offsetWidth + 5);
    else
      x += 5;

    if((e.pageY + tooltip.offsetHeight + 50) > window.innerHeight)
      y -= (tooltip.offsetHeight + 5);
    else
      y += 5;

    select("#tooltip").style('opacity','1').style('left', x + 'px').style('top', e.pageY + 'px');
    this.info = "show";
  }

  ShowNeedsBreakdown()
  {
    this.setState({
      tableDesc: 'Needs',
      data:  [  
        {desc: 'Housing (including utilities)', percent: '25-35%'},
        {desc: 'Giving', percent: '10-15%'},
        {desc: 'Food (basic groceries)', percent: '5-10%'},
        {desc: 'Transportation (including insurance & gas)', percent: '5-10%'},
        {desc: 'Health & Insurance', percent: '5-10%'}
    ]
    });
  }

  ShowWantsBreakdown()
  {
    this.setState({
      tableDesc: 'Wants',
      data:  [
        {desc: 'Clothing', percent: '10-15%'},
        {desc: 'Vacations', percent: '8-10%'},
        {desc: 'Restaurants', percent: '7-12%'},
        {desc: 'Entertainment', percent: '5-10%'},
    ]
    });
  }

  ShowSavingsBreakdown()
  {
    this.setState({
      tableDesc: 'Savings',
      data:  [
        {desc: 'Retirement Fund', percent: '10-15%'},
        {desc: 'Emergency Fund', percent: '5-10%'},
        {desc: 'Long-term Care', percent: '5-10%'},
    ]
    });
  }

  /**
   * Add event listener
   */
  componentWillMount() {
    this.hideInfo();
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.hideInfo();
    console.log('resize');
    window.addEventListener("resize", this.hideInfo.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    this.hideInfo()
    console.log('resize');
    window.removeEventListener("resize", this.hideInfo.bind(this));
  }  

  render(){
    
    return(
    <ToolContainer onClick={(e) => this.hideInfo(e)}>
      <Line1>
        <div style={{backgroundColor: 'white', marginLeft: '15px'}}>
          <Header1>&nbsp;Your Budget</Header1>
          <Header2>by the Numbers</Header2>
          <Explanation>A budget gives you control over your money.&nbsp;&nbsp;Create a livable one seems a challenge, the best way to get started is using the 50-30-20 rule.</Explanation>
          <Explanation>This standard is flexible enough, so that you can live for today and plan for tommorow.</Explanation>
        </div>
        <div style={{backgroundColor: 'white', marginLeft: '5px', marginRight: '5px'}}>
          <LeftHeader>A Closer Look at {this.state.tableDesc}</LeftHeader>
          <ClickHint>* Click on each category to get some insights.</ClickHint>
          <TableNeeds>
          {this.state.data.map((data, index) =>
                  {
                    if((index % 2) == 0)
                    {
                      return(<TrMain onClick={(e) => this.ShowInfo(e, this.state.tableDesc, index)}>
                        <TdDesc >{data.desc}</TdDesc>
                        <TdPercent>{data.percent}</TdPercent>
                      </TrMain>)
                    }
                    else
                    {
                      return(<TrAlt onClick={(e) => this.ShowInfo(e, this.state.tableDesc, index)}>
                        <TdDesc onClick={(e) => this.ShowInfo(e, this.state.tableDesc, index)}>{data.desc}</TdDesc>
                        <TdPercent>{data.percent}</TdPercent>
                      </TrAlt>)
                    }
                  }
                  )}
          </TableNeeds>
        </div>
      </Line1>
      <Line2>
          <BucketsContainer>
            <ClickHint>* Click on each bucket to have a closer look.</ClickHint>
            <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto'}}>
              <div style={{position: 'relative'}} 
                onClick={(e) => this.ShowNeedsBreakdown(e)}>
                <span style={{display: 'inline-block'}}></span>
                <Buckets src={bucket1} />
                <BucketText>NEEDS</BucketText>
                <BucketTextPercent>50%</BucketTextPercent>
              </div>
              <div style={{position: 'relative'}}
                onClick={(e) => this.ShowWantsBreakdown(e)}>
                <span style={{display: 'inline-block'}}></span>
                <Buckets src={bucket2} />
                <BucketText>WANTS</BucketText>
                <BucketTextPercent>30%</BucketTextPercent>
              </div>
              <div style={{position: 'relative'}} 
                onClick={(e) => this.ShowSavingsBreakdown(e)} >
                <span style={{display: 'inline-block'}}></span>
                <Buckets src={bucket3}/>
                <BucketText>SAVINGS & INVESTMENTS</BucketText>
                <BucketTextPercent>20%</BucketTextPercent>
              </div>
            </div>
          </BucketsContainer>
          <TipSection>
            <TipContainer>
              <TipHeader style={{backgroundColor:'#add8e6'}}>--TIP--</TipHeader>
              <TipContent style={{backgroundColor:'#add8e68c'}}>Figure out your budget based on take-home pay, not gross pay</TipContent>
            </TipContainer>
            <TipContainer>
              <TipHeader style={{backgroundColor:'#ffa500'}}>--TIP--</TipHeader>
              <TipContent style={{backgroundColor:'#ffa5008c'}}>If your "Needs" exceeds 50%, steal from your "Wants" bucket.</TipContent>
            </TipContainer>
          </TipSection>
      </Line2>      
      <Tooltip id="tooltip" ref={(divTooltip) => this.divTooltip = divTooltip} >abc
      </Tooltip>
    </ToolContainer>);
  }
}

export default ({ data, scales, margins, svgDimensions }) => (
    <div>
        <App/>
    </div>
     
  );