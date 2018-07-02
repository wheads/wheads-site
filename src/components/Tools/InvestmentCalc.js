import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import logo from '../logo.svg';
import NumericInput from 'react-numeric-input';
import PropTypes from 'prop-types'
NumericInput.style.input.borderStyle = 'none';
NumericInput.size = '50px';

import { Wrapper, SectionH2, SectionParag, Section1ColGray, HideOnMobile } from "../../styles/style.js";
import MyInput from '../MyInput.js';

//Blue - #0695a4
//Brown - #ccc6ba
//Orange - #e79702
//Dark Green - #2d3939

class CurrencyInput extends React.Component {  
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e)
  {
    this.props.onChange(this.props.controlName, e);
  }

  render()
  {
    const { controlName, value, onChange } = this.props;

    return (
      <div>
        <InputContainer style={{height: '40px', verticalAlign: 'middle'}}>
          <div style={{minWidth: '50px', display: 'table', verticalAlign: 'middle', height: '100%', 
            backgroundColor: '#d7d9e0', textAlign: 'right', paddingRight: '0.5em'}}>
              <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                <div>
                  Php
                </div>
              </div>
            </div>
          <NumericInput //strict={true} 
            precision={2} onChange={this.onChange}
            //defaultValue={this.props.value}
            strict={true}
            style={{
              width: '80%',
              float: 'left',
              paddingRight: '0px',
              wrap: {
                  borderStyle: 'none',
                  padding: '0px 0px 0px 0px',
                  fontSize: 18,
                  height: '100%'
              },
              input: {
                  borderRadius: '1px 1px 1px 1px',
                  borderStyle: 'none',
                  color: '#988869',
                  padding: '0.1ex 1ex',
                  marginLeft: '0px',
                  display: 'block',
                  fontWeight: 100,
                  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                  textAlign: 'right',
                  width: '100%'
              },
              'wrap:focus' : {
                  outline: 'none',
              },
              'input:focus' : {
                  outline: 'none'
              },
              btnUp: {
                display: 'none'
              },
              btnDown: {
                  display: 'none'
              }
            }}
          />
        </InputContainer>
      </div>
    )
  }
}

class PercentInput extends React.Component {  
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e)
  {
    this.props.onChange(this.props.controlName, e);
  }

  render()
  {
    const { controlName, value, onChange } = this.props;

    return (
      <div>
        <InputContainer style={{height: '40px', verticalAlign: 'middle'}}>          
          <NumericInput //strict={true} 
            precision={2} onChange={this.onChange}
            defaultValue={this.props.value}            
            strict={true}
            style={{
              width: '80%',
              float: 'left',
              paddingRight: '0px',
              wrap: {
                  borderStyle: 'none',
                  padding: '0px 0px 0px 0px',
                  fontSize: 18,
                  height: '100%'
              },
              input: {
                  borderRadius: '1px 1px 1px 1px',
                  borderStyle: 'none',
                  color: '#988869',
                  padding: '0.1ex 1ex',
                  marginLeft: '0px',
                  display: 'block',
                  fontWeight: 100,
                  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                  textAlign: 'right',
                  width: '100%'
              },
              'wrap:focus' : {
                  outline: 'none',
              },
              'input:focus' : {
                  outline: 'none'
              },
              btnUp: {
                display: 'none'
              },
              btnDown: {
                  display: 'none'
              }
            }}
          />
        <div style={{minWidth: '30px', display: 'table', verticalAlign: 'middle', height: '100%', 
          backgroundColor: '#d7d9e0', textAlign: 'left', paddingLeft: '0.5em'}}>
            <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
              <div>
                %
              </div>
            </div>
          </div>
        </InputContainer>
      </div>
    )
  }
}

class NumberInput extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e)
  {
    this.props.onChange(this.props.controlName, e);
  }

  render()
  {
    const { controlName, value, onChange,
    } = this.props;
    
    return (
      
      <InputContainer style={{height: '40px', verticalAlign: 'middle'}}>
            <NumericInput 
              onChange={this.onChange}
              defaultValue={this.props.value}
              precision={0}
              size={12}
              step={1}
              mobile={false}
              strict={true}
              style={{
                wrap: {
                    background: '#FFFFFF',
                    padding: '2px 2.26ex 2px 2px',
                    fontSize: 18
                },
                input: {
                    borderRadius: '1px 1px 1px 1px',
                    borderStyle: 'none',
                    color: '#988869',
                    padding: '0.1ex 1ex',
                    border: '1px none #ccc',
                    marginRight: 4,
                    display: 'block',
                    fontWeight: 100,
                    height: '100%',
                    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)'
                },
                'wrap:focus' : {
                    outline: 'solid',
                    outlineColr: 'red'
                },
                'input:focus' : {
                    borderWidth: '2px',
                    borderColor: '#FFFFFF',
                    borderStyle: 'transparent',
                    outline: 'none'
                },
                arrowUp: {
                    borderBottomColor: 'rgba(66, 54, 0, 0.63)'
                },
                arrowDown: {
                    borderTopColor: 'rgba(66, 54, 0, 0.63)'
                }
            }}
            />
      </InputContainer>
    );
  }
}

const HeroBanner = styled.div`
  padding: 50px;
  background-color: #ccc6ba;

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
  font-size: 30px;
  color: #fff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const BigButton = styled(Link)`
  display: block;
  background-color: #e79702;
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

  &:hover {
    opacity: 0.9;
    font-weight: bold;
  }
`;

const CustomHeroBannerParag = styled(HeroBannerParag)`
  font-style: italic;
  color: #8990a4;
  margin-bottom: 15px;
`;

const InfoContainer = styled.div`
  margin-bottom: 15px;
`;

const InputContainer = styled.div`
  height: 50px;
  padding: 0px;
  border-width: 2px;
  border-color: #0695a4;
  border-style: solid;
  vertical-align: middle;
  display: inline-flex;
`;

class InvestmentCalc extends Component {    

  state = {
    CurrAge: 18,
    RetireAge: 60,
    Saved: 0,
    Contribution: 0,
    Rate: 10,
  };

  onValueChange(name, value)
  {    
    this.setState(
      {
        [name]: value,
      }
    );
  }

  onClick(e)
  {    
    e.preventDefault();
    var money = this.state.Saved;
    var data =
    {
      StartAge: this.state.CurrAge,
      RetireAge: this.state.RetireAge,
      Rate: this.state.Rate,
      initial: 0,
      contributions: 0,
      growth: 0,
      schedule: [,]
    }

    if(this.state.CurrAge > this.state.RetireAge || this.state.CurrAge == this.state.RetireAge)
      {
        alert('Retire age must be greater than your current age.')
        return;
      }
    
    if(this.state.Saved <= 0 && this.state.Contribution <= 0)
    {
      alert('Please provide a positive value for your the money you currently saved or your plan contributions.')
      return;
    }
    
    if(this.state.Rate <= 0)
    {
      alert('Please provide a positive value for the estimated annual return.')
      return;
    }

    var schedule = [];
    var currYear = new Date().getFullYear();
    var yearlyContributions = (this.state.Contribution * 12);
    for(var i=this.state.CurrAge; i < this.state.RetireAge; i++)
    {      
      money = (money + yearlyContributions) * (1 + (this.state.Rate/100));
      var year = currYear + (i-this.state.CurrAge); 
      schedule.push({year,money});
      data.contributions += yearlyContributions;
    }
    
    data.initial = this.state.Saved;
    data.schedule = schedule;
    data.growth = money - data.initial - data.contributions;
    this.props.onClick(data);
  }

  render() {
    
    return (
        <HeroBanner>
          <HeroBannerTitle>Enter Your Information</HeroBannerTitle>
          <InfoContainer>
            <HeroBannerParag>Enter your current age.</HeroBannerParag>
            <NumberInput controlName='CurrAge' value={this.state.CurrAge} onChange={(name, value) => this.onValueChange(name, value)} />
          </InfoContainer>
          <InfoContainer>
            <HeroBannerParag>Enter the age you plan to retire.</HeroBannerParag>        
            <NumberInput controlName='RetireAge' value={this.state.RetireAge} onChange={(name, value) => this.onValueChange(name, value)} />
            <CustomHeroBannerParag>Most people retire at 60, but you can retire early.</CustomHeroBannerParag>
          </InfoContainer>
          <InfoContainer>
            <HeroBannerParag>How much have you saved for retirement.</HeroBannerParag>
            <CurrencyInput controlName='Saved' value={this.state.Saved} onChange = {(name, value) => this.onValueChange(name, value)} />
            <CustomHeroBannerParag>This should be the total of all you retirement accounts.</CustomHeroBannerParag>
          </InfoContainer>
          <InfoContainer>
            <HeroBannerParag>How much will you contribute monthly.</HeroBannerParag>
            <CurrencyInput controlName='Contribution' value={this.state.Contribution} onChange = {(name, value) => this.onValueChange(name, value)} />
            <CustomHeroBannerParag>This is the amount you add to your retirement savings each month.</CustomHeroBannerParag>
          </InfoContainer>          
          <InfoContainer>
            <HeroBannerParag>Estimated Rate of Return.</HeroBannerParag>
            <PercentInput controlName='Rate' value={this.state.Rate} onChange = {(name, value) => this.onValueChange(name, value)} />
            <CustomHeroBannerParag>This is the return your investment will generate per year.</CustomHeroBannerParag>
          </InfoContainer>
          <BigButton onClick={this.onClick.bind(this)}>Calculate</BigButton>
      </HeroBanner>
    );
  }
}

export default InvestmentCalc;