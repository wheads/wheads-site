import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import logo from '../logo.svg';
import PropTypes from 'prop-types'
import '../../styles/SliderStyle.css';


const ButtonHolder = styled.div`
  display: grid;  
  grid-template-columns: 50% 50%;

  @media (max-width: 400px) {
    margin: 15px auto;
    padding: 10px 10px;
  }
`;

const LeftButtonHolder = styled.div`
  margin-right: 50px;

  @media (max-width: 400px) {
    margin-right: 0px;
  }
`;

const RightButtonHolder = styled.div`
  padding-left: 50px;

  @media (max-width: 400px) {
    padding-left: 0px;
  }
`;

const ContentHolder = styled.div`
  display: grid;  
  grid-template-columns: auto auto;
  margin-top: 15px;

  @media (max-width: 750px) {
    display: block;
    margin-top: 0px;
  }
`;

const TextDiv = styled.div`
  display: block;  
`;

const AmountDiv = styled.h3`
  min-width: 180px;
  text-align: right;
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.Color};
  padding-right: 10px;

  @media (max-width: 400px) {
    margin-bottom: 20px;
    padding-right: 20px;
  }
  
  &::before {
    content: '${props => props.ShowCurrency ? 'Php' : ''}';
    position: relative;
    left: -0.5rem;
    top: -0.5rem;
    font-size: 1rem;
  }
`

const Container = styled.div`
  //padding: 5px 20px;
  padding: 0px;
  margin: 0px;
  position: relative;
  width: 100%;
  max-width: 600px;
  min-width: ${props => props.width}px;

  @media (max-width: 400px) {
    //padding: 5px 5px;
    padding: 0px;
    min-width: ${props => props.width}px;
  }
`;

const Final = styled.h3`
  text-align: center;
  margin: 0px;
  display: block;
  margin-bottom: 5px;
  font-size: 1rem;
  color: #2d3939;
  font-weight: normal;
  padding: 0px 10px;
`;

const NextStep = styled.h3`
  text-align: center;
  margin: 0px;
  display: block;
  margin-bottom: 5px;
  font-size: 1rem;
  color: #2d3939;
  font-weight: normal;
  margin-top: 10px;
  padding: 0px 10px;
`

const NextStepLink = styled.a`
  font-weight: bold;
  color: #e79702;
`

const Final2 = styled.h3`
  text-align: center;
  margin: 0px;
  display: block;
  margin-bottom: 0px;
  font-size: 1rem;
  color: #2d3939;
  font-weight: normal;
`;

const TextInfo = styled.h3`
  margin: 0px;  
  display: block;
  text-align: left;
  margin-bottom: 25px;
  font-size: 1.65rem;
  color: ${props => props.Color};
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;

  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
  }
`;

const TextSubInfo = styled.h3`
  margin: 0px;
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-size: 1rem;
  color: #2d3939;
  font-weight: normal;
  padding-left: 5px;
  padding-top: 25px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  
  @media (max-width: 400px) {
    padding-top: 15px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const TextDisplay1 = styled.h3`
  margin: 0px;
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-size: 1.65rem;
  color: #505050;
  font-weight: bold;
  border-left: 3px solid ${props => props.Color};
  margin-left: 35px;
  padding-left: 5px;
  padding-right: 20px;

  @media (max-width: 750px) {
    display: block;
    padding-right: 10px;
  }

  &::before {
    content: '${props => props.Number}';
    position: absolute;
    left: 10px;
    top: 20px;
    font-size: 1rem;

    @media (max-width: 750px) {
      display: block;
      padding-right: 10px;
      left: 10px;
      top: 5px;
    }
  }
`;

const TextDisplay2 = styled.div`
  margin: 0px 0px 20px 0px;
  display: block;
  text-align: left;
  margin-bottom: 20px;
  font-size: 1rem;
  color: #606060;
  font-weight: bold;
  padding: 10px;

  @media (max-width: 750px) {
    display: block;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0px;
  }
`;

const Slider = styled.input`
  margin: 0px;
  position: relative;
  margin-bottom: 30px;
  padding: 0px 15px;

  @media (max-width: 750px) {
    margin-bottom: 10px;
  }
`;

const BigButton = styled(Link)`
  display: inline;
  color: #2d3939;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 15px 40px;
  border-radius: 5px;
  border: 4px solid #e79702;
  margin: 15px;

  @media (max-width: 400px) {
    margin: 15px auto;
    padding: 10px 40px;
  }

  &:hover {
    background-color: #e79702;
  }
`;

class SlidingDiv extends Component {   
  
  constructor(props) {
    super(props);

    this.state = {
      left: 0,
      Amount: this.props.Content.Value,
    }
  }
  
  componentDidMount() {    

  }
  
  componentWillUnmount() {    
    
  }

  onClick(e, movement)
  {    
    e.preventDefault();
    
    var i = this.props.Index;
    
    if(movement == "back")
    {
      i--;
      //x += parseInt(this.props.Width);
    }
    else
    {
      i++;
      //x -= parseInt(this.props.Width);
    }
    this.props.onMovePanels(i);
  }

  onSliderChange(e)
  {
    //this.props.Content.Amount = e.target.value;
    this.setState(
      {
        Amount: e.target.value,
      }
    )
    
    this.props.Content.Value = e.target.value;
  }

  render() {
    const {Content, Back, Next, Width} = this.props

    return (
        <Container width={this.props.Width}>
            <div style={{display: (Content.InfoOnly || Content.Last) ? 'none' : 'block' }}>
            <ContentHolder>
              <TextDiv>                          
                <TextDisplay1 Color={this.props.Content.Color} Number={this.props.Content.Number}>{this.props.Content.Text1}</TextDisplay1>
                <TextDisplay2>{this.props.Content.Text2}</TextDisplay2>
              </TextDiv>
              <AmountDiv ShowCurrency={this.props.Content.ShowCurrency} Color={this.props.Content.Color}>{Math.round(this.state.Amount,2).toLocaleString()}</AmountDiv>
            </ContentHolder>
            <Slider type="range" defaultValue={Content.Value} min={Content.Min} max={Content.Max} step={Content.Step} 
              onChange={(e) => this.onSliderChange(e)} />
            </div>
            <div style={{display: (Content.InfoOnly && !Content.Last) ? 'block' : 'none' }}>
              <TextDiv>                          
                <TextInfo Color={Content.Color} >{Content.Text1}</TextInfo>
                <TextSubInfo>{Content.Text2}</TextSubInfo>
              </TextDiv>
            </div>
            <div style={{display: Content.Last ? 'block' : 'none', textAlign: 'center' }}>
              <ContentHolder>
                <TextDiv>                          
                  <TextInfo Color={Content.Color} >{Content.Text1}</TextInfo>
                </TextDiv>
                <AmountDiv ShowCurrency={this.props.Content.ShowCurrency} Color={(this.props.Worth >= 0) ? 'green': '#b24073'}>
                  {(this.props.CustomResult)? this.props.Worth : Math.round(this.props.Worth,2).toLocaleString()}
                </AmountDiv>
              </ContentHolder>
              <Final>{(this.props.Worth >=0) ? Content.Positive1 : Content.Negative1 }</Final>
              <Final>{(this.props.Worth >=0) ? Content.Positive2 : Content.Negative2 }</Final>
              <NextStep>{Content.NextStep} <b><i><NextStepLink href={Content.NextStepLink}>Click here</NextStepLink>.</i></b></NextStep>
            </div>
            <ButtonHolder>
              <LeftButtonHolder>
                <BigButton id="back" style={{float: 'left', display: this.props.Back !== 'true' ? 'none' : 'block' }} onClick={(e) => this.onClick(e, "back")} to="#">Back</BigButton>
              </LeftButtonHolder>
              <RightButtonHolder>
                <BigButton id="next" style={{float: 'right', display: this.props.Next !== 'true' ? 'none' : 'block'}} onClick={(e) => this.onClick(e, "forward")} to="#">Next</BigButton>
              </RightButtonHolder>
            </ButtonHolder>
            {/*<div style={{display: Content.Last ? 'block' : 'none', textAlign: 'center' }}>*/}
        </Container>
    );
  }
}

export default SlidingDiv;