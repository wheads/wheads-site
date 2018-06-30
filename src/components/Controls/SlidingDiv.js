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
    padding: 10px 0px;
  }
`;

const LeftButtonHolder = styled.div`
  margin-right: 50px;

  @media (max-width: 400px) {
    margin-right: 10px;
  }
`;

const RightButtonHolder = styled.div`
  margin-left: 50px;

  @media (max-width: 400px) {
    margin-left: 10px;
  }
`;

const ContentHolder = styled.div`
  display: grid;  
  grid-template-columns: auto auto;
  margin-top: 15px;

  @media (max-width: 400px) {
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

  @media (max-width: 400px) {
    margin-bottom: 20px;
  }
  
  &::before {
    content: 'Php';
    position: relative;
    left: -1.5rem;
    top: -0.5rem;
    font-size: 1rem;
  }
`

const Container = styled.div`
  padding: 5px 20px;
  position: relative;
  width: 100%;
  max-width: 600px;
  min-width: ${props => props.width}px;

  @media (max-width: 400px) {
    min-width: ${props => props.width}px;
  }
`;

const TextInfo = styled.h3`
  margin: 0px;
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-size: 1.65rem;
  color: ${props => props.Color};
  font-weight: bold;
  padding-left: 5px;
  margin-left: 15px;
`;

const Final = styled.h3`
  text-align: center;
  margin: 0px;
  display: block;
  margin-bottom: 5px;
  font-size: 1rem;
  color: #2d3939;
  font-weight: normal;
`;

const Final2 = styled.h3`
  text-align: center;
  margin: 0px;
  display: block;
  margin-bottom: 0px;
  font-size: 1rem;
  color: #2d3939;
  font-weight: normal;
`;

const TextSubInfo = styled.h3`
  margin: 0px;
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-size: 1.15rem;
  color: #2d3939;
  font-weight: normal;
  padding-left: 5px;
  margin-left: 15px;
`;

const TextDisplay1 = styled.h3`
  margin: 0px;
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-size: 1.65rem;
  color: #505050;
  font-weight: bold;
  padding-left: 5px;
  margin-left: 15px;
  border-left: 3px solid ${props => props.Color};

  @media (max-width: 600px) {
    display: block;
  }

  &::before {
    content: '${props => props.Number}';
    position: relative;
    left: -1.5rem;
    font-size: 1rem;
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
  padding-left: 5px;
  margin-left: 15px;

  @media (max-width: 600px) {
    display: block;
  }
`;

const Slider = styled.input`
  margin: 0px;
  position: relative;
  margin-bottom: 30px;
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
      Amount: this.props.Content.Amount,
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
        <Container width={this.props.Width} >
            <div style={{display: (Content.InfoOnly || Content.Last) ? 'none' : 'block' }}>
            <ContentHolder>
              <TextDiv>                          
                <TextDisplay1 Color={this.props.Content.Color} Number={this.props.Content.Number}>{this.props.Content.Text1}</TextDisplay1>
                <TextDisplay2>{this.props.Content.Text2}</TextDisplay2>
              </TextDiv>
              <AmountDiv Color={this.props.Content.Color}>{Math.round(this.state.Amount,2).toLocaleString()}</AmountDiv>
            </ContentHolder>
            <Slider type="range" defaultValue={0} max={Content.Max} step={Content.Step} 
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
                <AmountDiv Color={(this.props.Worth >= 0) ? 'green': 'red'}>{Math.round(this.props.Worth,2).toLocaleString()}</AmountDiv>
              </ContentHolder>
              <Final>{(this.props.Worth >=0) ? Content.Positive1 : Content.Negative1 }</Final>
              <Final>{(this.props.Worth >=0) ? Content.Positive2 : Content.Negative2 }</Final>
            </div>
            <ButtonHolder>
              <LeftButtonHolder>
                <BigButton id="back" style={{float: 'right', display: this.props.Back !== 'true' ? 'none' : 'block' }} onClick={(e) => this.onClick(e, "back")} to="#">Back</BigButton>
              </LeftButtonHolder>
              <RightButtonHolder>
                <BigButton id="next" style={{float: 'left', display: this.props.Next !== 'true' ? 'none' : 'block'}} onClick={(e) => this.onClick(e, "forward")} to="#">Next</BigButton>
              </RightButtonHolder>
            </ButtonHolder>
            {/*<div style={{display: Content.Last ? 'block' : 'none', textAlign: 'center' }}>*/}
        </Container>
    );
  }
}

export default SlidingDiv;