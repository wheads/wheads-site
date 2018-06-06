import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import logo from '../logo.svg';
import PropTypes from 'prop-types'
import { select } from 'd3-selection'
import checkImg from './check.png';
import crossImg from './cross.png';

const Container = styled.div`
  margin: 0px;
  position: relative;
`;

const TextDisplay1 = styled.div`
  margin: 0px;
  display: block;
  text-align: center;
  margin-bottom: 5px;
  font-size: 1.65rem;
  color: #707070;
  font-weight: 400;
`;

const TextDisplay2 = styled.div`
  margin: 0px 0px 20px 0px;
  display: block;
  text-align: center;
  margin-bottom: 20px;
  font-size: 1rem;
  color: #707070;
  font-weight: 400;
`;

const QuestionDiv = styled.div`
  margin: 1em 0.01em 0.5em 0.01em;
  font-size: calc(0.5vw + 1vh + .5vmin);
  color: #3a3e4b;
  text-align: left;
`;

const Radio = styled.input`
  height: calc(0.5vw + 0.5vh + .5vmin);
  width: calc(0.5vw + 0.5vh + .5vmin);
`;

const AnswerChoice = styled.div`
  margin: 0px;
  font-size: calc(0.5vw + 1vh + .5vmin);
  color: #3a3e4b;
  text-align: left;
`;

const DetailedAnswer = styled.div`
  margin: 5px;
  font-size: calc(0.5vw + 1vh + .5vmin);
  font-weight: 500;
  color: green;
  xcolor: #004086;
  display: block;
  text-align: left;
  opacity: 0;
`;

const DetailedAnswerSub = styled.div`
  margin-top: 10px;
`;

const AnswersIcon = styled.img`
  margin: 0px 0.5em 0px 0px;
  width: calc(0.5vw + 0.5vh + .5vmin);
  height: calc(0.5vw + 0.5vh + .5vmin);
  opacity: 0;
`;

const Button = styled(Link)`
  display: inline;
  background-color: orange;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 400;
  letter-spacing: 1px;
  padding: calc(0.5vw + 1vh + .5vmin) calc(1.5vw + 2.5vh + .5vmin);
  border-radius: 25px;
  margin: 15px;
  max-width: 350px;
  min-width: calc(8.5vw + 11.5vh + .5vmin);
  font-size: calc(0.5vw + 1vh + .5vmin);

  @media (max-width: 768px) {
    margin: 15px auto;
  }
`;

class SlidingQuestion extends Component {   
  
  constructor(props) {
    super(props);

    this.state = {
      left: 0
    }    
  }
  
  componentDidMount() {    

  }
  
  componentWillUnmount() {    
    
  }

  onOptionChange(e)
  {    
    //e.preventDefault();
    this.props.question.answer = e.currentTarget.value;
    for(var i=0;i < this.props.question.options.length; i++)
    {
      this.props.question.options[i].selected = (e.currentTarget.value == this.props.question.options[i].value) ? "true" : "";
      this.props.question.options[i].img = (this.props.question.options[i].value == this.props.question.expected) ? checkImg : crossImg;

      this.setState({ ["option" + i]:  (e.currentTarget.value == this.props.question.options[i].value) ? "true" : "" })
    }
    select("#next" + this.props.question.number).style("pointer-events",'auto').style('background-color','orange')
    
    if(this.props.question.number==10)
    {
      select("#next10").style('display','block')
      select("#next10").style('background-color','green')
    }

    this.props.onOptionChange(this.props.question);
    
  }

  onClick(e, movement)
  {    
    e.preventDefault();
    var x = this.props.Location;
    var index = this.props.index;

    console.log('number : ' + this.props.question.number)
    if(this.props.question.number == 10)
    {
      index = 10;
      x = 0;
      this.props.onSlidingClick(x, index);
      return;
    }

    console.log('why?')
    if(movement == "back")
    {
      x += parseInt(this.props.Width);
      index--;
    }
    else
    {
      x -= parseInt(this.props.Width);
      index++;
    }
    this.props.onSlidingClick(x, index)
  }


  render() {
    const {question, Width} = this.props

    return (
        <Container style={{display:'table-cell'}}>            

            <div style={{width: this.props.Width, padding: '0px 30px', marginBottom: 'calc(4.5vw + 4.5vh + .5vmin)'}}>
              <div style={this.props.style}>
                <QuestionDiv>{question.number}.&nbsp;{question.text}.
                </QuestionDiv>
                <AnswerChoice>
                {question.options.map((options, index) =>
                  <label>              
                    <AnswersIcon id={'rdimg' + question.number + options.value} src={options.img} />
                    <Radio
                      type="radio"
                      id={"rd" + question.number + options.value}
                      name={question.name+question.number}
                      value={options.value}
                      checked={this.state["option" + index]}
                      onChange={(e) => this.onOptionChange(e)} 
                    />
                    &nbsp;
                    {options.text}<br/>
                  </label>
                  )}
                </AnswerChoice>
                <DetailedAnswer id={"detail" + question.number}>
                    <strong>Detailed Answer :</strong>&nbsp;&nbsp;
                    <DetailedAnswerSub>{question.detailAnswer}</DetailedAnswerSub>
                    <DetailedAnswerSub>{question.detailAnswer2}</DetailedAnswerSub>
                    <DetailedAnswerSub style={{display:'inline'}}>{question.detailAnswer3}</DetailedAnswerSub>
                    <strong><a style={{paddingLeft: '10px'}} href={question.link}>{question.linkText}</a></strong>
                </DetailedAnswer>
              </div>
              <div style={{display: 'inline'}}>
              <Button id="back" style={{position: 'absolute', bottom: '15px', left: '15px', display: this.props.Back !== 'true' ? 'none' : 'block' }} onClick={(e) => this.onClick(e, "back")}>Back</Button>
              <Button id={"next" + question.number} style={{position: 'absolute', bottom: '15px', right: '15px', backgroundColor: '#cccccc', pointerEvents: 'none', display: this.props.Next !== 'true' ? 'none' : 'block'}} onClick={(e) => this.onClick(e, "forward")}>
                {(question.number==10)?"Show Answers":"Next"}</Button>
              </div>
            </div>
        </Container>
    );
  }
}

export default SlidingQuestion;