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
import { transition } from 'd3-transition'

const HeroBanner = styled.div`
  padding: 50px;
  background-color: #ccc6ba;
  font-size: 14px;

  @media (max-width: 768px) {
    padding: 15px;
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
  font-size: 3rem;
  color: #000;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroBannerSub = styled.h1`
  font-size: 1.75rem;
  color: #707070;
  font-weight: 400;
  border-bottom: 2px solid #0695a4;
  margin: 25px 15px;
  text-align: center;
  padding: 0px 0px 50px 0px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 0px 0px 20px 0px;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
    padding: 0px 0px 20px 0px;
  }
`;
const BigButton = styled(Link)`
  display: block;
  background-color: #e79702;
  box-shadow: 0 8px 6px -6px black;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 15px 20px;
  border-radius: 15px;
  min-width: 200px;
  max-width: 400px;
  font-size: calc(1.25vw + 1.25vh + .5vmin);

  @media (max-width: 768px) {    
    font-size: calc(1.5vw + 1.5vh + .5vmin);
    min-width: 150px;
    max-width: 350px;
    padding: 10px 10px;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const Button = styled(Link)`
  display: block;
  background-color: #e79702;
  box-shadow: 0 8px 6px -6px black;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 15px 20px;
  border-radius: 3px;
  min-width: 200px;
  max-width: 280px;
  font-size: calc(0.75vw + 0.75vh + .5vmin);

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {    
    font-size: calc(1vw + 1vh + .5vmin);
    min-width: 120px;
    max-width: 150px;
    padding: 5px 10px;
  }

  @media (max-width: 360px) {    
    font-size: calc(1vw + 1vh + .5vmin);
    min-width: 80px;
    max-width: 150px;
    padding: 5px 10px;
  }
`;

class MoneyMythQuiz extends Component {   
  
  constructor(props) {
    super(props);
    
    this.state = {
      containerX: 0,
      index: 0,
      width: 500,
      yourScore: 0,
      questions : [
        {number: '1',
        text: 'Insurance with investment will help me retire wealthy.' ,
        name: 'rdQuestion',
        expected: 'Myth',
        answer: '',
        detailAnswer2: `If you don't understand how it works, you may end up blaming your agent.`,
        detailAnswer3: 'If you have one, take time to learn more about it.',
        options: [{
            selected: '',
            img: checkImg,
            text: 'Myth',
            value: 'Myth'},
          {
            selected: '',
            img: checkImg,
            text: 'Fact',
            value: 'Fact'}]
        },
        {number: '2',
        text: 'Playing the lottery will make me rich.' ,
        name: 'rdQuestion',
        expected: 'Myth',
        answer: '',
        detailAnswer2: `This may seem harsh, but lottery is for people who can't do math.`,
        detailAnswer3: `If you learn how to save your the cost of your lottery ticket, it is a guarantee that you will be a millionaire when you retire.`,
        options: [{
            selected: '',
            img: checkImg,
            text: 'Myth',
            value: 'Myth'},
          {
            selected: '',
            img: checkImg,
            text: 'Fact',
            value: 'Fact'}]
        },
        {number: '3',
        text: `Funeral plans and educational plans are not that cost-effective` ,
        name: 'rdQuestion',
        expected: 'Fact',
        answer: '',
        detailAnswer2: 'If you take time to learn more, there are better choices.',
        detailAnswer3: 'With these plans you also lost the flexibility.',
        options: [{
            selected: '',
            img: checkImg,
            text: 'Myth',
            value: 'Myth'},
          {
            selected: '',
            img: checkImg,
            text: 'Fact',
            value: 'Fact'}]
        },
        {number: '4',
        text: `I don't have time to work on a budget or retirement planning.` ,
        name: 'rdQuestion',
        expected: 'Myth',
        answer: '',
        detailAnswer2: `If you don't have time to watch your favorite TV series or watch movies, then I will believe you.`,
        detailAnswer3: 'It is just about prioritizing things, it is easy really.',
        options: [{
            selected: '',
            img: checkImg,
            text: 'Myth',
            value: 'Myth'},
          {
            selected: '',
            img: checkImg,
            text: 'Fact',
            value: 'Fact'}]
        },
        {number: '5',
        text: `I can't afford Life Insurace.` ,
        name: 'rdQuestion',
        expected: 'Myth',
        answer: '',
        detailAnswer2: `Maybe you have this sentiment because you were sold a very expensive kind of life insurance. Term insurance is very affordable.`,
        detailAnswer3: 'If you are 30 y.o you can be insured for 1Million for only 6k annually.',
        link: "/../contact",
        linkText: 'You heard it right! 6,000 Annual.  Send us a message to know more',
        options: [{
            selected: '',
            img: checkImg,
            text: 'Myth',
            value: 'Myth'},
          {
            selected: '',
            img: checkImg,
            text: 'Fact',
            value: 'Fact'}]
        },
        {number: '6',
        text: 'When I save money in the bank, I am losing money.' ,
        name: 'rdQuestion',
        expected: 'Fact',
        answer: '',
        detailAnswer2: `Money saved in the bank will be eaten by inflation, you also need to invest to fight inflation.`,
        detailAnswer3: ``,
        link: "/../contact",
        linkText: `Send us a message to know our free-seminar schedules.`,
        options: [{
            selected: '',
            img: checkImg,
            text: 'Fact',
            value: 'Fact'},
          {
            selected: '',
            img: checkImg,
            text: 'Myth',
            value: 'Myth'}]
        },
        {number: '7',
        text: `I can rely with SSS/GSIS for my retirement years.` ,
        name: 'rdQuestion',
        expected: 'Myth',
        answer: '',
        detailAnswer2: `Try computing your SSS/GSIS pension you will be receiving today and ask yourself "If I retire today, will this be enough?"`,
        detailAnswer3: `You need to supplement those government pensions.`,
        options: [{
            selected: '',
            img: checkImg,
            text: 'Myth',
            value: 'Myth'},
          {
            selected: '',
            img: checkImg,
            text: 'Fact',
            value: 'Fact'}]
        },
        {number: '8',
        text: 'I can rely with PhilHealth for my retirement healthcare needs.' ,
        name: 'rdQuestion',
        expected: 'Myth',
        answer: '',
        detailAnswer2: `PhilHealth does not cover the entire hospitalization cost and it will not cover your maintenance medicines.`,
        detailAnswer3: `There are financial solutions out there that can help you.`,
        link: "/../contact",
        linkText: `Send us a message to know our free-seminar schedules.`,
        options: [{
            selected: '',
            img: checkImg,
            text: 'Myth',
            value: 'Myth'},
          {
            selected: '',
            img: checkImg,
            text: 'Fact',
            value: 'Fact'}]
        },
        {number: '9',
        text: `If I save up for emergency, emergency will come to my life` ,
        name: 'rdQuestion',
        expected: 'Myth',
        answer: '',
        detailAnswer2: `Emergencies will come to our life no matter what.  But it is better to be prepared than to be sorry.`,
        detailAnswer3: `Which scenarios do you like?  You spend your emergency fund or be buried in debt?`,
        options: [{
            selected: '',
            img: checkImg,
            text: 'Fact',
            value: 'Fact'},
          {
            selected: '',
            img: checkImg,
            text: 'Myth',
            value: 'Myth'}]
        },
        {number: '10',
        text: `I will just plan for my retirement when I'm about to retire.` ,
        name: 'rdQuestion',
        expected: 'Myth',
        answer: '',
        detailAnswer2: `This will be the biggest mistake if you believe in this myth.`,
        detailAnswer3: `Make the magic of compounding work for you.`,
        link: "/../contact",
        linkText: `Send us a message to know our free-seminar schedules.`,
        options: [{
            selected: '',
            img: checkImg,
            text: 'Myth',
            value: 'Myth'},
          {
            selected: '',
            img: checkImg,
            text: 'Fact',
            value: 'Fact'}]
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
    var mainContainer = this.divMainContainer;
    if(mainContainer !== null && mainContainer !== undefined)
    {
      console.log(window.innerHeight);
      if(window.innerHeight < 400)
        this.divMainContainer.style.height = 280 + "px";
      else
        this.divMainContainer.style.height = (window.innerHeight / 2) + "px";
    }
    if(container !== null && container !== undefined)
    {
      var containerDiv = select('#divContainer');
      
      var multiplier = this.state.index;
      var newLoc = this.state.containerX - ((container.offsetWidth*multiplier) - (this.state.width*multiplier))
      if(this.state.index == 1)
        newLoc = 0;
        
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
  
  enableButton(id){
    select(id).style('pointer-events', 'auto').style('background-color','#e79702')
  }

  disableButton(id){
    select(id).style('pointer-events', 'none').style('background-color','#cccccc')
  }

  showButton(id){
    select(id).style('opacity','1');
    select(id).style('pointer-events','auto');
  }

  hideButton(id){
    select(id).style('opacity','0');
    select(id).style('pointer-events','none');
  }

  onOptionChange(e)
  {
    var maxIndex = this.state.questions.length - 1;
    if(e.answer !== "")
    {
      this.enableButton("#btnNext");

      if(this.state.index == maxIndex && this.state.status !== "done")
        this.showButton("#btnShow");
    }

    return;
  }

  ReviewQuiz(e)
  {
    e.preventDefault();
    select("#divReviewQuiz").style('display','none');
    this.showButton("#btnNext");
    this.setState({index: 0, status: 'done'});
    for(var i = 0; i < this.state.questions.length; i++)
    {      
      select("#detail" + this.state.questions[i].number).style('display','block');
    }
    select('#Container').selectAll('input').attr('disabled','disabled').style('cursor','default').style('pointer-events','none');
  }

  StartQuiz(e)
  { 
    e.preventDefault();
    transition(
      select('#divStartInfo')
          .transition()
          .style('opacity','0')
          .style('display','none')
          .duration(500)
          .delay(0));

    this.showButton("#btnNext");
  }

  ShowAnswersDiv()
  {    
    var unanswered = this.state.questions.filter(function (question) {
      return question.answer.length == 0;});
    
    if(unanswered.length > 0)
      {
        alert('Please answer all the questions.');
        return;
      }

    select("#divContainer").style('left','0');
    select("#divReviewQuiz").style('display','table-cell');
    this.hideButton("#btnBack");
    this.hideButton("#btnShow")

    var score = 0;
    for(var i = 0; i < this.state.questions.length; i++)
    {
      var correctOption = null;
      for(var j = 0; j < this.state.questions[i].options.length; j++)
      {
         
        var option = select('#rd' + this.state.questions[i].number + this.state.questions[i].options[j].value);
        var img = select('#rdimg' + this.state.questions[i].number + this.state.questions[i].options[j].value);
        if(option !== undefined && img !== undefined)
        {         
          img.style('opacity', 0);
          if(this.state.questions[i].expected == this.state.questions[i].answer)
          {
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
            {
              correctOption = option;
              img.style('opacity', 1);
            }
            if(this.state.questions[i].options[j].value == this.state.questions[i].answer 
              && this.state.questions[i].options[j].selected == "true")
            { 
              img.style('opacity', 1);
              option.checked = false;
            }
          }
        }
      }
      
      if(correctOption !== null)
        correctOption.checked = true;      
    }
    this.setState({
      yourScore: score
    });

  }

  onKeyDown(e)
  {
    
    if(e.keyCode == 39 && this.state.questions[this.state.index].answer !== "")
    {
      this.MoveQuestions(e, "next");
    }
    else if(e.keyCode == 37 && this.state.index !== 0)
    {
      this.MoveQuestions(e, "back");
    }
    else if((e.keyCode == 40 || e.keyCode == 38) && this.state.questions[this.state.index].answer == "")
    {
      this.disableButton("#btnNext");
    }
    
  }

  ShowAnswers(e)
  {
    e.preventDefault();
    this.ShowAnswersDiv();
  }

  MoveQuestions(e, direction)
  {
    e.preventDefault();
    
    var index = this.state.index;
    var loc = 0;
    var maxIndex = this.state.questions.length - 1;
    if(direction=="next" && this.state.index < this.state.questions.length)
      index++;
    else if (this.state.index !== 0)
      index--;
    
    if(index>maxIndex)
      index = maxIndex;
    loc = 0 - (this.divSliding.props.Width * index);
    
    this.setState({
      containerX: loc,
      index: index
    });

    transition(
      select('#divContainer')
          .transition()
          .style("left", function() { return loc +  "px"; })
          .duration(500)
          .delay(0));

    (this.state.questions[index].answer == "") ? this.disableButton("#btnNext") : this.enableButton("#btnNext");
    if(index == 0) {
      this.hideButton("#btnBack");
     }
     else{
      this.showButton("#btnBack");
      this.hideButton("#btnShow");
     } 
    (index == maxIndex) ? this.hideButton("#btnNext") : this.showButton("#btnNext");    

    if(index === maxIndex && this.state.status !== "done" && this.state.questions[index].answer !== "")
      this.showButton("#btnShow");
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
          <HeroBannerTitle>Debunking the Debt Myth</HeroBannerTitle>          
          <div id="Container" ref={ (divMainContainer) => this.divMainContainer = divMainContainer} style={{width: '100%', margin: '0px', display: 'block', backgroundColor: 'white', boxShadow: 'darkslategrey 10px 10px 50px'}}>
            <div style={{position: 'relative', width: '100%', height: '100%'}}>
            <div style={{display: 'block', width: '100%', height: '80%', backgroundColor: 'white', overflowY: 'auto', overflowX: 'hidden'}}>
              <div id="divContainer" ref={ (divContainer) => this.divContainer = divContainer} style={{position: 'relative', display: 'block'}} onKeyDown={(e) => this.onKeyDown(e)}>
                {this.state.questions.map((question, index) =>
                  <SlidingQuestion key={index} ref={ (divSliding) => this.divSliding = divSliding} question={question} style={{display: 'block'}} index={index} onOptionChange={(e) => this.onOptionChange(e)}
                    Width={this.state.width} Next={(index<(this.state.questions.length-1))?"true":"false"} Back={(index>0)?"true":"false"} Location={this.state.containerX} />
                  )}
                
                <div id="divStartInfo" style={{display: 'table-cell', textAlign: 'center', position: 'absolute', left: '0px', top: '0px', height: '100%', width: '100%', backgroundColor: 'white'}}>
                  <HeroBannerSub>Can you identify the debt myths?<br/>Take the short quiz below to find out.<br/><br/>Explanations will be provided after completing the quiz.</HeroBannerSub>
                  <BigButton to="#" id="btnStart" style={{display: 'inline-block'}} ref={ (btnResults) => this.btnResults = btnResults} onClick={(e) => this.StartQuiz(e)}>Start</BigButton>
                </div>
                <div id="divReviewQuiz" style={{display: 'none', textAlign: 'center', position: 'absolute', left: '0px', top: '0px', height: '100%', width: '100%', backgroundColor: 'white'}}>
                  <HeroBannerSub style={{borderBottom: '1px solid', padding: 'calc(1.75vw + 1.75vh + .5vmin) 25px', textAlign: 'center'}}>Congratulations!!!<br/><br/>You have scored {this.state.yourScore} out of the {this.state.questions.length} questions</HeroBannerSub>
                  <BigButton to="#" id="btnReview" style={{display: 'inline-block'}} ref={ (btnResults) => this.btnResults = btnResults} onClick={(e) => this.ReviewQuiz(e)}>Review Answers</BigButton>
                </div>
              </div>
            </div> 
            <div style={{display: 'table', width: '100%', height: '20%', textAlign: 'center'}}>
              <div style={{display: 'table-cell', height: '75%', verticalAlign: 'middle'}}>
                <Button to="#" id="btnShow" style={{display: 'inline-block', opacity: '0', pointerEvents: 'none'}} ref={ (btnResults) => this.btnResults = btnResults} onClick={(e) => this.ShowAnswers(e)}>Show Answers</Button>
                <Button to="#" id="btnBack" style={{display: 'inline-block', opacity: '0', pointerEvents: 'none', position: 'absolute', left: '10px' }} ref={ (btnResults) => this.btnResults = btnResults} onClick={(e) => this.MoveQuestions(e, 'back')}>Back</Button>
                <Button to="#" id="btnNext" style={{display: 'inline-block', opacity: '0', pointerEvents: 'none', position: 'absolute', right: '10px', backgroundColor: '#cccccc', pointerEvents: 'none'}} ref={ (btnResults) => this.btnResults = btnResults} onClick={(e) => this.MoveQuestions(e, 'next')}>Next</Button>
              </div>
            </div> 
            </div>
          </div>
      </HeroBanner>
    );
  }
}

export default MoneyMythQuiz;