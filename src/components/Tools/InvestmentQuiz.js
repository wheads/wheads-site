import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import logo from '../logo.svg';
import PropTypes from 'prop-types'
import checkImg from './check.png';
import crossImg from './cross.png';
import Question from '../Controls/Question';

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

class InvestmentQuiz extends Component {   
  
  constructor(props) {
    super(props);
    
    this.state = {
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
          text: 'True',
          value: 'true'},
          {
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
          text: 'True',
          value: 'true'},
          {
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
          text: 'Putting the majority of your nest egg into one investment to maximize profits.',
          value: 'a'},
          {
          text: 'Investing equally for both retirement and college.',
          value: 'b'},
          {
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
          text: 'Fixed Income Fund',
          value: 'a'},
          {
          text: 'Money Market Fund',
          value: 'b'},
          {
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
          text: '5 years',
          value: 'a'},
          {
          text: '3 years',
          value: 'b'},
          {
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
          text: 'A mutual fund that consists of more than 10 stocks.',
          value: 'a'},
          {
          text: 'A mutual fund that has a sales charge.',
          value: 'b'},
          {
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
          text: 'True',
          value: 'true'},
          {
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
          text: 'Mutual Fund Investing',
          value: 'a'},
          {
          text: 'Stock Trading',
          value: 'b'},
          {
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
          text: 'True',
          value: 'true'},
          {
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
          text: 'Long-term Care fund',
          value: 'a'},
          {
          text: 'Mutual Fund',
          value: 'b'},
          {
          text: 'Savings Bank Account',
          value: 'c'}]
        },
        ],
    }
  }

  onOptionChange(e)
  {
    return;
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
        var option = document.getElementById('rd' + this.state.questions[i].number + this.state.questions[i].options[j].value);
        var img = document.getElementById('rdimg' + this.state.questions[i].number + this.state.questions[i].options[j].value);
         
        if(option !== undefined && img !== undefined)
        {         
          img.style.opacity = 0;
          if(this.state.questions[i].expected == this.state.questions[i].answer)
          {
            if(option.value == this.state.questions[i].answer && option.checked)
            {
              score++;
              img.style.opacity = 1;
              img.src = checkImg;
              correctOption = option;
            }
          }
          else
          {
            if(option.value == this.state.questions[i].expected && option.checked == false)
            {
              correctOption = option;
            }
            else if(option.value == this.state.questions[i].answer && option.checked == true)
            { 
              img.style.opacity = 1;
              img.src = crossImg;
              option.checked = false;
            }
          }
        }
      }
      var detail = document.getElementById("detail" + this.state.questions[i].number).style.display = 'block';
      if(correctOption !== null)
        correctOption.checked = true;
      this.setState({
        yourScore: score
      });
    }

    document.getElementById("btnResults").style.display = 'none';
    document.getElementById("divResults").style.display = 'block';
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
          
          <div id="divQuestions">
            <HeroBannerSub style={{borderBottom: '1px solid', paddingBottom: '20px'}}>How will do you know investing?  Take the short quiz below to find out.<br/>Explanations will be provided after completing the quiz.</HeroBannerSub>                        
            {this.state.questions.map(questions =>
              <Question question={questions} onChange={(e) => this.onOptionChange(e)} />
              )}
          </div>
          <BigButton id="btnResults" onClick={this.onClick.bind(this)}>Show Answers</BigButton>
          <HeroBannerSub id="divResults" style={{marginTop: '20px', display: 'none'}}>You scored {this.state.yourScore} out of {this.state.questions.length}</HeroBannerSub>
          
      </HeroBanner>
    );
  }
}

export default InvestmentQuiz;