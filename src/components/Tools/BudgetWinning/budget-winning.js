import React, { Component } from 'react';
import { select } from 'd3-selection'
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Background from './budget_bg.png';
import b01 from './b01.png';
import b02 from './b02.png';
import b03 from './b03.png';
import b04 from './b04.png';
import b05 from './b05.png';

//Blue - #0695a4
//Brown - #ccc6ba
//Orange - #e79702
//Dark Green - #2d3939

const DivBG = styled.div`
  position: absolute;
  display: block;
  opacity: 0.02;
  background-image: url(${Background});
  width: 100%;
  height: 100%;
  background-position: -150px -50px;
`;

const Holder = styled.div`
  opacity: 1;
`;

const WinningBudget = styled.div`    
  display: grid;
  grid-template-columns: 50% 50%;
  font-size: 16px;
  margin: 10px;

  @media (max-width: 1200px) {
    display: block;
    margin: 2px 10px;
    font-size: 12px;
    margin: 5px;
  }
`;

const StepTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  margin-bottom: 15px;

  @media (max-width: 1200px) {
    grid-template-columns: 10% 90%;
    margin-bottom: 15px;
  } 

  @media (max-width: 400px) {
    grid-template-columns: 15% 85%;
    margin-bottom: 5px;
  } 
`;

const StepTitle = styled.span`
  font-size: 4em;
  text-align: right;
  font-weight: bold;

  @media (max-width: 1200px) {
    font-size: 7em;
  }

  @media (max-width: 400px) {
    font-size: 5em;
  } 
`;

const StepSub = styled.span`
  font-size: 1.5em;
  line-height: 1.5rem;
  letter-spacing: 8px;
  font-weight: bold;
  position: relative;
  top: 30px;
  padding-left: 10px;

  @media (max-width: 1200px) {
    letter-spacing: 8px;
    font-size: 2.5em;
    line-height: 2.5rem;
    position: relative;
    top: 50px;
    padding-left: 10px;
  }

  @media (max-width: 400px) {
    font-size: 1.75em;
    line-height: 1.75rem;
    letter-spacing: 4px;
    position: relative;
    top: 20px;
    padding-left: 10px;
  }
`;

const StepContainer = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
`;

const StepDesc = styled.div`
  padding-left: 10px;

  @media (max-width: 1200px) {
    font-size: 1.5em;
  }

  @media (max-width: 400px) {
    font-size: 1.25em;
  }
`;

const StepImg = styled.img`
  padding-left: 10px;
  margin: auto;
  width: 120px;

  @media (max-width: 1200px) {
    width: 150px;
  }

  @media (max-width: 400px) {
    width: 75px;
  }
`;

const Note = styled.div`
  display: block;
  border-radius: 15px;
  padding: 25px;
  background-color: #0695a4;
  top: -15px;
  position: relative;
  color: #FFFFFF;
  margin: 0px 25px;
  font-size: 1em;

  @media (max-width: 1200px) {
    border-radius: 5px;
    padding: 15px;
    margin: 0px 8px;
    font-size: 1.5em;
  }

  @media (max-width: 400px) {
    border-radius: 5px;
    padding: 10px;
    margin: 0px 8px;
    font-size: 1.25em;
  }
`;

const TitleHolder = styled.div`
  display: block;
  background-color: #2d393999;
  background-image: url(${Background});
  background-position: -150px -50px;
`;

const TitleMain = styled.span`
  font-size: 8rem;
  position: relative;
  top: -25px;
  padding: 5px 10px 5px 25px;
  font-weight: bold;

  @media (max-width: 1200px) {
    font-size: 10em;
    padding: 2px 10px 5px 25px;
  }

  @media (max-width: 400px) {
    padding: 5px 5px;
    font-size: 7em;
  }
`;

const TitleSub = styled.span`
  font-size: 2.5rem;
  letter-spacing: 5px;
  font-weight: bold;
  position: relative;
  top: 10px;

  @media (max-width: 1200px) {
    font-size: 3.25em;
    letter-spacing: 8px;
  }

  @media (max-width: 400px) {
    letter-spacing: 4px;
    font-size: 2em;
  }
`;

const TitleSub2 = styled.span`
  font-size: 1.5rem;
  letter-spacing: 8px;
  padding-left: 25px;
  line-spaceing 0.25rem;
  position: relative;
  top: -50px;
  left: -100px;

  @media (max-width: 1200px) {
    font-size: 2.5em;
  }

  @media (max-width: 400px) {
    font-size: 2em;
    letter-spacing: 4px;
    padding-left: 10px;
  }
`;

const DivStyle1 = styled.div`
  display: block;
  padding: 20px 10px;
  background-color: #2d3939;
  color: #ccc6ba;

  @media (max-width: 1200px) {
    padding: 10px 5px;
  }

  @media (max-width: 400px) {
    padding: 10px 5px;
  }
`;

const DivStyle2 = styled.div`
  display: block;
  padding: 20px 10px;
  background-color: #ccc6ba;
  color: #2d3939;

  @media (max-width: 1200px) {
    padding: 10px 5px;
  }

  @media (max-width: 400px) {
    padding: 10px 5px;
  }
`;

class DescriptionHolder extends React.Component {
  
  render(){
    
    return(
        this.createDiv(this.props.type)
      );
  }

  createDiv(type, text)
  {
    if(type == 0)
    {
      return <DivStyle1>
      {this.props.children}</DivStyle1>
    }
    else
    {      
      return <DivStyle2>
      {this.props.children}</DivStyle2>
    }
  }
}

class BudgetWinning extends React.Component {

  constructor(props){
    super(props)

    this.state = {
    };
  } 


  update(e)
  {
    //var holder = document.getElementById("titleHolder");
    //if(holder !== null)
    //{
    //  select("#titleHolder").style('height', (holder.offsetHeight + 10) + "px");
    //}
  }

  /**
   * Add event listener
   */
  componentWillMount() {
    this.update();
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.update();
    console.log('resize');
    window.addEventListener("resize", this.update.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    this.update()
    console.log('resize');
    window.removeEventListener("resize", this.update.bind(this));
  }  

  render(){
    
    return(
      <WinningBudget>
        <Holder>
          <TitleHolder id="titleHolder" ref={(divTitleHolder) => this.divTitleHolder = divTitleHolder}>
            {/*<DivBG/>
            <div style={{position: 'absolute', opacity: '0.02', backgroundImage: `url(${Background})`, width: '100%', height: '100%', backgroundPosition: '-150px -50px'}}></div>*/}
            <div style={{  display: 'grid', gridTemplateColumns: '100px auto', verticalAlign: 'middle'}}>
              <TitleMain style={{opacity: '1'}}>5</TitleMain>
              <TitleSub>STEPS IN CREATING</TitleSub>&nbsp;
              <TitleSub2>a Winning Budget</TitleSub2>
            </div>
            <Note>Developing a budget can do more than track your spending and savings.&nbsp;&nbsp;It can also help you work toward your financial goals.&nbsp;&nbsp;The following steps will show your how to build a budget that works for your life, so you don't have to worry about falling short of your plans.</Note>
          </TitleHolder>
          <DescriptionHolder type="1">
            <StepTitleContainer>
              <StepTitle>1</StepTitle>
              <StepSub>START WITH YOUR GOALS</StepSub>
            </StepTitleContainer>
            <StepContainer>
              <StepDesc>Write down your financial goals. Be sure to include actual amounts and time frames to make tracking possible.&nbsp;&nbsp;For example, measurable goals would be "Have" a 50,000 emergency fund by April 1" and "Pay off 25,000 credit card debt in a year".  Then divided the amount by the number of months to figure out your monthly goals.</StepDesc>
              <div>
                <span style={{display: 'inline-block', height: '100%', verticalAlign: 'middle'}}/>
                <StepImg src={b01}/>
              </div>
            </StepContainer>
          </DescriptionHolder>
          <DescriptionHolder type="0">
            <StepTitleContainer>
              <StepTitle>2</StepTitle>
              <StepSub>KNOW YOUR INCOME</StepSub>
            </StepTitleContainer>
            <StepContainer>
              <StepDesc>Before you can establish a budget, you have to know exactly how much money you have coming in every month from your employer and other sources.&nbsp;&nbsp;Make sure to include only the money you actually receive (for example, the exact amount of your salary rather than your gross pay).</StepDesc>
              <div>
                <span style={{display: 'inline-block', height: '100%', verticalAlign: 'middle'}}/>
                <StepImg src={b02}/>
              </div>
            </StepContainer>
          </DescriptionHolder>
        </Holder>
        <Holder>
          <DescriptionHolder type="1">
            <StepTitleContainer>
              <StepTitle>3</StepTitle>
              <StepSub>TOTAL YOUR MONTHLY EXPENSES</StepSub>
            </StepTitleContainer>
            <StepContainer>
              <StepDesc>You'll need to know how much money you're spending every month.  When figuring out your total monthly expenses, be sure to include groceries, rent or mortgages, all debt payments (including car loans and credit cards), cell phone load, cable and entertainment.  Remember to include occassional expenses, like doctor visits and car insurance.  Look through bank and credit card statements to get a realistic picture of your spending.</StepDesc>
              <div>
                <span style={{display: 'inline-block', height: '100%', verticalAlign: 'middle'}}/>
                <StepImg src={b03}/>
              </div>
            </StepContainer>
          </DescriptionHolder>
          <DescriptionHolder type="0">
            <StepTitleContainer>
              <StepTitle>4</StepTitle>
              <StepSub>CREATE A REALISTIC BUDGET</StepSub>
            </StepTitleContainer>
            <StepContainer>
              <StepDesc>To make your first stab at a budget, add your monthly expenses from Step 3 to the monthly goals you calculated in Step 1, then subtract that total from your monthly income.  If the balance is positive, you've created a budget that is compatible with your current lifestyle.  If the balance is negative, take another look at your goals, expenses and income.</StepDesc>
              <div>
                <span style={{display: 'inline-block', height: '100%', verticalAlign: 'middle'}}/>
                <StepImg src={b04}/>
              </div>
            </StepContainer>
          </DescriptionHolder>
          <DescriptionHolder type="1">
            <StepTitleContainer>
              <StepTitle>5</StepTitle>
              <StepSub>REVISIT YOUR GOALS AND EXPENSES</StepSub>
            </StepTitleContainer>
            <StepContainer>
              <StepDesc>If the first draft of your budget came out negative, rework the numbers and try again.  Think about what areas you may be able to alter in order to create a budget that's manageable and still fits your needs.  For example, you can revisit your expenses, and decide which are priority items that need to stay in your budget and which you can do without.  You can consider changing the amount of time or money needed to meet your goals.  Or you can figure out a way to increase your income.  Any one of those changes could make your budget come together.</StepDesc>
              <div>
                <span style={{display: 'inline-block', height: '100%', verticalAlign: 'middle'}}/>
                <StepImg src={b05}/>
              </div>
            </StepContainer>
          </DescriptionHolder>
        </Holder>
      </WinningBudget>);
  }
}

export default BudgetWinning;