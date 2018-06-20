import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import logo from '../logo.svg';
import PropTypes from 'prop-types'
import checkImg from './check.png';
import crossImg from './cross.png';

import { Wrapper, SectionH2, SectionParag, Section1ColGray, HideOnMobile } from "../../styles/style.js";

const QuestionDiv = styled.div`
  margin: 1em 0.01em 0.5em 0.01em;
  font-size: 1.125rem;
  color: #3a3e4b;
`;

const AnswerChoice = styled.div`
  margin: 0px;
  font-size: 1.125rem;
  color: #3a3e4b;
`;

const DetailedAnswer = styled.div`
  margin: 5px;
  font-size: 1.125rem;
  font-weight: 500;
  color: green;
  xcolor: #004086;
  display: none;
`;

const DetailedAnswerSub = styled.div`
  margin-top: 10px;
`;

const AnswersIcon = styled.img`
  margin: 0px 0.5em 0px 0px;
  width: 12px;
  opacity: 0;
`;

class Question extends Component {   
  
  constructor(props) {
    super(props);

    this.state = {
      answer1 :
        { expected: 'true', actual: '' },
      answer2 :
        { expected: 'false', actual: '' },
      answer3 :
        { expected: 'c', actual: '' },
      answer4 :
        { expected: 'c', actual: '' },
      answer5 :
        { expected: 'a', actual: '' },
      answer6 :
        { expected: 'b', actual: '' },
      answer7 :
        { expected: 'false', actual: '' },
      answer8 :
        { expected: 'a', actual: '' },
      answer9 :
        { expected: 'false', actual: '' },
    }
  }

  onOptionChange(e)
  {    
    this.props.question.answer = e.currentTarget.value;

    this.props.onChange(this.props.question);
  }

  render() {
    const {question} = this.props

    return (
        <div style={this.props.style}>
          <QuestionDiv>{question.number}.&nbsp;{question.text}.
          </QuestionDiv>
          <AnswerChoice>
          {question.options.map(options =>
            <label>              
              <AnswersIcon id={'rdimg' + question.number + options.value} src={crossImg} />
              <input
                type="radio"
                id={"rd" + question.number + options.value}
                name={question.name+question.number}
                value={options.value}
                checked={options.checked}
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
    );
  }
}

export default Question;