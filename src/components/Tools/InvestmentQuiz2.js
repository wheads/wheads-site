import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import logo from '../logo.svg';
import PropTypes from 'prop-types'
import checkImg from './check.png';
import crossImg from './cross.png';
import Question from '../Controls/Question';
import SlidingQuestion from '../Controls/SlidingQuestion';
import { select } from 'd3-selection'

const HeroBanner = styled.div`
  padding: 50px;
  background-color: #dff9fb;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const HeroBannerParag = styled.p`
  font-size: 18px;
  margin-bottom: 0px;
`;

const HeroBannerTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  padding-bottom: 0;
  border-bottom: none;
  font-size: 52px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const HeroBannerSub = styled.h1`
  font-size: 1.65rem;
  color: #707070;
  margin-bottom: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BigButton = styled(Link)`
  display: block;
  background-color: orange;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 15px 20px;
  border-radius: 3px;
  margin-top: 15px;
  max-width: 230px;

  @media (max-width: 768px) {
    margin: 15px auto;
  }
`;

class InvestmentQuiz2 extends Component {   
  
  constructor(props) {
    super(props);
    
    this.state = {
      containerX: 0,
      index: 0,
      width: 500,
      yourScore: 0,
      questions : [
        {number: '1',
        text: 'A mutual fund is an investment vehicle made up of a pool of moneys collected from many investors for the purpose of investing in securities such as stocks, bonds, money market instruments, etc., and are managed by professional fund managers.' ,
        name: 'rdQuestion',
        expected: 'true',
        answer: '',
        detailAnswer2: 'A mutual fund is a fund operated by an investment company that pools your money with hundreds of other investors to buy stocks, bonds, options, commodities, or money market securities.',
        detailAnswer3: 'These funds offer investors the advantages of diversification and professional management.',
        options: [{
            selected: '',
            img: checkImg,
            text: 'True',
            value: 'true'},
          {
            selected: '',
            img: checkImg,
            text: 'False',
            value: 'false'}]
        },
        {number: '2',
        text: 'Is it recommended to invest in a single stock.' ,
        name: 'rdQuestion',
        expected: 'false',
        answer: '',
        detailAnswer2: 'To see a single stock perform 50% in 1 year is very tempting, but if it can go 50% in a year it can also go 50% in a year.',
        detailAnswer3: 'And, if you place much of your nest egg with one or two single stocks, your risk skyrockets.',
        options: [{
            selected: '',
            img: checkImg,
            text: 'True',
            value: 'true'},
          {
            selected: '',
            img: checkImg,
            text: 'False',
            value: 'false'}]
        },
        {number: '3',
        text: 'What is diversification?' ,
        name: 'rdQuestion',
        expected: 'c',
        answer: '',
        detailAnswer2: 'Diversification is an investment strategy that involves buying a variety of different investments that are not highly associated with each other, in order to reduce risk.',
        detailAnswer3: ' Diversification ratio will be different as you age.',
        link: "http://www.google.com",
        linkText: 'To know more about diversification strategies...',
        options: [{
            selected: '',
            img: checkImg,
            text: 'Putting the majority of your nest egg into one investment to maximize profits.',
            value: 'a'},
          {
            selected: '',
            img: checkImg,
            text: 'Investing equally for both retirement and college.',
            value: 'b'},
          {
            selected: '',
            img: checkImg,
            text: 'Spreading of investments across different areas to reduce risks.',
            value: 'c'}]
        },
        {number: '4',
        text: 'What type of mutual should you invest, if you want to participate in the stock market?' ,
        name: 'rdQuestion',
        expected: 'c',
        answer: '',
        detailAnswer: 'Money Market Funds invest in short-term fixed income securities such as government bonds, treasury bills, bankers’ acceptances, commercial paper and certificates of deposit.',
        detailAnswer2: 'Fixed Income Funds buy investments that pay a fixed rate of return like government bonds, investment-grade corporate bonds and high-yield corporate bonds.',
        detailAnswer3: 'These funds invest in stocks. These funds aim to grow faster than money market or fixed income funds, so there is usually a higher risk that you could lose money.',
        options: [{
            selected: '',
            img: checkImg,
            text: 'Fixed Income Fund',
            value: 'a'},
          {
            selected: '',
            img: checkImg,
            text: 'Money Market Fund',
            value: 'b'},
          {
            selected: '',
            img: checkImg,
            text: 'Equity Fund',
            value: 'c'}]
        },
        {number: '5',
        text: 'What is the suggested minimum length of time for one to be investing in Equity Fund?' ,
        name: 'rdQuestion',
        expected: 'a',
        answer: '',
        detailAnswer3: 'It is suggested to invested in not less than 5 years.  Less than that is simply saving.',
        link: "http://www.google.com",
        linkText: 'To know WHY',
        options: [{
            selected: '',
            img: checkImg,
            text: '5 years',
            value: 'a'},
          {
            selected: '',
            img: checkImg,
            text: '3 years',
            value: 'b'},
          {
            selected: '',
            img: checkImg,
            text: '1 year',
            value: 'c'}]
        },
        {number: '6',
        text: 'A loaded fund is:' ,
        name: 'rdQuestion',
        expected: 'b',
        answer: '',
        detailAnswer2: "A load is a type of commission. Depending on the type of load a mutual fund exhibits, charges may be incurred at time of purchase, time of sale, or a mix of both. A sales load can range from 1.5% to 3.5%.",
        detailAnswer3: "If you invest 5,000.00 each month for 20 years in a MF with 3% sales load, it can give you additional 113,000.00.",
        link: "www.google.com",
        linkText: "To know more how you can save on sales load...",
        options: [{
            selected: '',
            img: checkImg,
            text: 'A mutual fund that consists of more than 10 stocks.',
            value: 'a'},
          {
            selected: '',
            img: checkImg,
            text: 'A mutual fund that has a sales charge.',
            value: 'b'},
          {
            selected: '',
            img: checkImg,
            text: 'A fund that can get you arrested if you take it on a plane.',
            value: 'c'}]
        },
        {number: '7',
        text: 'Generally speaking, a more sophisticated product is a better investment.' ,
        name: 'rdQuestion',
        expected: 'false',
        answer: '',
        detailAnswer2: "False! Just because it looks and sounds sophisticated doesn't mean it is smart and it is good for you.",
        detailAnswer3: "Never put money in anything you don't understand.",
        link: 'http://www.google.com',
        linkText: "Attend our free workshops.",
        options: [{
            selected: '',
            img: checkImg,
            text: 'True',
            value: 'true'},
          {
            selected: '',
            img: checkImg,
            text: 'False',
            value: 'false'}]
        },
        {number: '8',
        text: 'What is the less stressful and have higher chance of success of actually growing your money?' ,
        name: 'rdQuestion',
        expected: 'a',
        answer: '',
        detailAnswer: 'We hear a lot of success stories in stock trading, but the skill and stress are high. Saving in the bank is indeed less stressful but inflation will eat up its value.',
        detailAnswer2: 'In mutual fund investing we let the fund managers handle the stress and have returns more than inflation.',
        options: [{
            selected: '',
            img: checkImg,
            text: 'Mutual Fund Investing',
            value: 'a'},
          {
            selected: '',
            img: checkImg,
            text: 'Stock Trading',
            value: 'b'},
          {
            selected: '',
            img: checkImg,
            text: 'Saving in Bank',
            value: 'c'}]
        },
        {number: '9',
        text: 'Borrowing money to invest in stocks is a good strategy.' ,
        name: 'rdQuestion',
        expected: 'false',
        answer: '',
        detailAnswer: 'Absolutely false! Interest in borrowed money is a GUARANTEE, returns in stock investing is NOT.',
        options: [{
            selected: '',
            img: checkImg,
            text: 'True',
            value: 'true'},
          {
            selected: '',
            img: checkImg,
            text: 'False',
            value: 'false'}]
        },
        {number: '10',
        text: 'In your retirement years, where should you put your healthcare fund?' ,
        name: 'rdQuestion',
        expected: 'a',
        answer: '',
        link: 'http://www.google.com',
        linkText: "Know more.",
        detailAnswer: 'When you get old you are more sickly.  Putting your money in a mutual fund can be a challenge especially if you need money for hospitalization. While inflation might eat up your fund if you just put it in the bank.',
        detailAnswer2: 'While inflation might eat up your fund if you just put it in the bank.',
        detailAnswer3: 'Long-term care fund have both the strength of Savings Account liquidity and the inflation-beating returns of a mutual fund.',
        options: [{
            selected: '',
            img: checkImg,
            text: 'Long-term Care fund',
            value: 'a'},
          {
            selected: '',
            img: checkImg,
            text: 'Mutual Fund',
            value: 'b'},
          {
            selected: '',
            img: checkImg,
            text: 'Savings Bank Account',
            value: 'c'}]
        },
        ],
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
    var container = this.divContainer;
    if(container !== undefined)
    {
      
      var containerDiv = select('#divContainer');
      
      var multiplier = this.state.index;
      var newLoc = this.state.containerX - ((container.offsetWidth*multiplier) - (this.state.width*multiplier))
      if(this.state.index == 1)
        newLoc = 0;
      //var diff = this.state.containerX - (container.offsetWidth - this.state.width);
      this.setState(
        {
          containerX: newLoc,
          width: container.offsetWidth, 
          height: container.offsetWidth * 0.75
        });
      this.setState({containerX: newLoc});
      
      containerDiv.style("left", (newLoc) + "px" );
    }
  }
  
  onOptionChange(e)
  {
    return;
  }

  onSlidingClick(xLocation, xIndex)
  { 
    if(xIndex == 10)
    {
      this.showAnswers();
      return;
      // show answers
    }
    else
    {
      this.setState({
          containerX: xLocation,
          index: xIndex
      });
    
      var containerDiv = select('#divContainer');
      containerDiv
          .transition()
          .style("left", function() { return xLocation +  "px"; })
          .duration(500)
          .delay(0);
    }
  }

  showAnswers()
  {    
    var unanswered = this.state.questions.filter(function (question) {
      return question.answer.length == 0;});
    
    if(unanswered.length > 0)
      {
        alert('Please answer all the questions.');
        return;
      }

    var score = 0;
    for(var i = 0; i < this.state.questions.length; i++)
    {
      var correctOption = null;
      for(var j = 0; j < this.state.questions[i].options.length; j++)
      {
        //var option = document.getElementById('rd' + this.state.questions[i].number + this.state.questions[i].options[j].value);
        //var img2 = document.getElementById('rdimg' + this.state.questions[i].number + this.state.questions[i].options[j].value);
         
        var option = select('#rd' + this.state.questions[i].number + this.state.questions[i].options[j].value);
        var img = select('#rdimg' + this.state.questions[i].number + this.state.questions[i].options[j].value);
        if(option !== undefined && img !== undefined)
        {         
          img.style('opacity', 0);
          if(this.state.questions[i].expected == this.state.questions[i].answer)
          {
            //if(option.value == this.state.questions[i].answer && option.checked)
            if(this.state.questions[i].options[j].value == this.state.questions[i].answer 
              && this.state.questions[i].options[j].selected == "true")
            {
              score++;
              img.style('opacity', 1);
              correctOption = option;
            }
          }
          else
          {
            if(this.state.questions[i].options[j].value == this.state.questions[i].expected) 
              //&& this.state.questions[i].options[j].selected == "")
            {
              correctOption = option;
              img.style('opacity', 1);
            }
            if(this.state.questions[i].options[j].value == this.state.questions[i].answer 
              && this.state.questions[i].options[j].selected == "true")
            { 
              img.style('opacity', 1);
              //this.state.questions[i].options[j].selected = ""
              option.checked = false;
            }
          }
        }
      }
      //var detail = document.getElementById("detail" + this.state.questions[i].number).style.display = 'block';
      select("#detail" + this.state.questions[i].number).style('opacity','1');
      if(correctOption !== null)
        correctOption.checked = true;
      this.setState({
        yourScore: score
      });
    }

    //console.log(this.btnResults);
    //this.btnResults.style.display = 'none';
    //this.divResults.style.display = 'block';
  }

  onClick(e)
  {    
    e.preventDefault();
    var unanswered = this.state.questions.filter(function (question) {
      return question.answer.length == 0;});
    
    if(unanswered.length > 0)
      {
        alert('Please answer all the questions.');
        return;
      }

    var score = 0;
    for(var i = 0; i < this.state.questions.length; i++)
    {
      var correctOption = null;
      for(var j = 0; j < this.state.questions[i].options.length; j++)
      {
        //var option = document.getElementById('rd' + this.state.questions[i].number + this.state.questions[i].options[j].value);
        //var img2 = document.getElementById('rdimg' + this.state.questions[i].number + this.state.questions[i].options[j].value);
         
        var option = select('#rd' + this.state.questions[i].number + this.state.questions[i].options[j].value);
        var img = select('#rdimg' + this.state.questions[i].number + this.state.questions[i].options[j].value);
        if(option !== undefined && img !== undefined)
        {         
          img.style('opacity', 0);
          if(this.state.questions[i].expected == this.state.questions[i].answer)
          {
            //if(option.value == this.state.questions[i].answer && option.checked)
            if(this.state.questions[i].options[j].value == this.state.questions[i].answer 
              && this.state.questions[i].options[j].selected == "true")
            {
              score++;
              img.style('opacity', 1);
              correctOption = option;
            }
          }
          else
          {
            if(this.state.questions[i].options[j].value == this.state.questions[i].expected) 
              //&& this.state.questions[i].options[j].selected == "")
            {
              correctOption = option;
              img.style('opacity', 1);
            }
            if(this.state.questions[i].options[j].value == this.state.questions[i].answer 
              && this.state.questions[i].options[j].selected == "true")
            { 
              img.style('opacity', 1);
              //this.state.questions[i].options[j].selected = ""
              option.checked = false;
            }
          }
        }
      }
      //var detail = document.getElementById("detail" + this.state.questions[i].number).style.display = 'block';
      select("#detail" + this.state.questions[i].number).style('opacity','1');
      if(correctOption !== null)
        correctOption.checked = true;
      this.setState({
        yourScore: score
      });
    }

    //console.log(this.btnResults);
    //this.btnResults.style.display = 'none';
    //this.divResults.style.display = 'block';
  }

  render() {
    
    const iframe = '<iframe src="https://www.youtube.com/embed/Jy6RufqwAoI?rel=0&amp;autoplay=1" width="540" height="450"></iframe>';

    function iframeMe()
    {
      return {
        __html: iframe//this.props.iframe
      }
    }

    return (
        <HeroBanner>
          <HeroBannerTitle>Basic Investing Quiz</HeroBannerTitle>          
            
          <HeroBannerSub style={{borderBottom: '1px solid', paddingBottom: '20px'}}>How will do you know investing?  Take the short quiz below to find out.<br/>Explanations will be provided after completing the quiz.</HeroBannerSub>
          
          <div style={{display: 'block', backgroundColor: 'beige', margin: '20px auto', width: '100%', overflow: 'hidden'}}>
            <div id="divContainer" ref={ (divContainer) => this.divContainer = divContainer} style={{position: 'relative', display: 'block'}}>
              {this.state.questions.map((question, index) =>
                <SlidingQuestion ref={ (divSliding) => this.divSliding = divSliding} question={question} style={{display: 'block'}} index={index} onOptionChange={(e) => this.onOptionChange(e)}
                  Width={this.state.width} Next={(index<(this.state.questions.length-1))?"true":"false"} Back={(index>0)?"true":"false"} Location={this.state.containerX} onSlidingClick={this.onSlidingClick.bind(this)} />
                )}
            </div>
          </div>
              
          {/*<BigButton ref={ (btnResults) => this.btnResults = btnResults} onClick={this.onClick.bind(this)}>Show Answers</BigButton>*/}
          <HeroBannerSub ref={ (divResults) => this.divResults = divResults} style={{marginTop: '20px', display: 'none'}}>You scored {this.state.yourScore} out of {this.state.questions.length}</HeroBannerSub>
          
      </HeroBanner>
    );
  }
}

export default InvestmentQuiz2;