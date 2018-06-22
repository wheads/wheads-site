import React, { Component } from 'react';
import { select } from 'd3-selection'
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Background from './budget_bg.png';

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

  @media (max-width: 768px) {
    display: block;
    margin: 2px 10px;
    font-size: 12px;
    margin: 5px;
  }
`;

const Note = styled.div`
  display: block;
  border-radius: 15px;
  padding: 25px;
  background-color: #E8E8E8;
  top: -15px;
  position: relative;
  margin: 5px 25px;

  @media (max-width: 768px) {
    border-radius: 5px;
    padding: 10px;
    margin: 5px 25px;
  }
`;

const TitleHolder = styled.div`
  display: block;
  background-color: #69A2B099;
  background-image: url(${Background});
  background-position: -150px -50px;

  @media (max-width: 768px) {
  }
`;

const TitleMain = styled.span`
  font-size: 6em;
  padding: 5px 10px 5px 25px;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 5px 5px;
  }
`;

const TitleSub = styled.span`
  font-size: 2em;
  letter-spacing: 8px;
  font-weight: bold;

  @media (max-width: 768px) {
    letter-spacing: 4px;
  }
`;

const TitleSub2 = styled.span`
  font-size: 1.5em;
  letter-spacing: 8px;
  padding-left: 25px;
  top: -35px;
  position: relative;

  @media (max-width: 768px) {
    letter-spacing: 4px;
    padding-left: 5px;
    top: -28px;
  }
`;

const DivStyle1 = styled.div`
  display: block;
  padding: 20px 10px;
  background-color: #69A2B099;

  @media (max-width: 768px) {
    padding: 10px 5px;
  }
`;

const DivStyle2 = styled.div`
  display: block;
  padding: 20px 10px;
  background-color: #69A2B033;

  @media (max-width: 768px) {
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

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
    };
  } 


  update(e)
  {
    var holder = document.getElementById("titleHolder");
    console.log(holder);
    if(holder !== null)
    {
      select("#titleHolder").style('height', (holder.offsetHeight + 10) + "px");
    }
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
          <TitleHolder id="titleHolder" ref={(divTitleHolder) => this.divTitleHolder = divTitleHolder} type="1">
            {/*<DivBG/>
            <div style={{position: 'absolute', opacity: '0.02', backgroundImage: `url(${Background})`, width: '100%', height: '100%', backgroundPosition: '-150px -50px'}}></div>*/}
            <TitleMain style={{opacity: '1'}}>5</TitleMain><TitleSub>STEPS IN CREATING</TitleSub><br/>
            <TitleSub2>a Winning Budget</TitleSub2>
            <Note>Developing a chuva chu chu</Note>
          </TitleHolder>
          <DescriptionHolder type="1">asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/></DescriptionHolder>
          <DescriptionHolder type="0">asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/></DescriptionHolder>
          <DescriptionHolder type="1">asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/></DescriptionHolder>
          <DescriptionHolder type="0">asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/></DescriptionHolder>
        </Holder>
        <Holder>
          <DescriptionHolder type="1">asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/></DescriptionHolder>
          <DescriptionHolder type="0">asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/></DescriptionHolder>
          <DescriptionHolder type="1">asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/></DescriptionHolder>
          <DescriptionHolder type="0">asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/></DescriptionHolder>
          <DescriptionHolder type="1">asdfasdf<br/>asdfasdf<br/>asdfasdf<br/>asdfasdf<br/></DescriptionHolder>
        </Holder>
      </WinningBudget>);
  }
}

export default ({ data, scales, margins, svgDimensions }) => (
    <div>
        <App/>
    </div>
     
  );