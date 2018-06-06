import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import logo from '../logo.svg';
import PropTypes from 'prop-types'
import { select } from 'd3-selection'


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

const Slider = styled.input`
  margin: 0px;
  position: relative;
`;

const BigButton = styled(Link)`
  display: inline;
  background-color: orange;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 15px 40px;
  border-radius: 3px;
  margin: 15px;
  max-width: 250px;

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

  onClick(e, movement)
  {    
    e.preventDefault();
    
    var x = this.props.Location;
    
    if(movement == "back")
    {
      x += parseInt(this.props.Width);
    }
    else
    {
      x -= parseInt(this.props.Width);
    }
    
    this.props.onClick(x)
  }


  render() {
    const {Text1, Text2, Width} = this.props

    return (
        <Container style={{display:'table-cell'}}>
            <div style={{width: this.props.Width, padding: '0px 50px'}}>
              <TextDisplay1>{this.props.Text1}</TextDisplay1>
              <TextDisplay2>{this.props.Text2}</TextDisplay2>
            <div style={{display: 'inline'}}>
            <BigButton id="back" style={{float: 'left', display: this.props.Back !== 'true' ? 'none' : 'block' }} onClick={(e) => this.onClick(e, "back")}>Back</BigButton>
            <BigButton id="next" style={{float: 'right', display: this.props.Next !== 'true' ? 'none' : 'block'}} onClick={(e) => this.onClick(e, "forward")}>Next</BigButton>
            </div>
            </div>
        </Container>
    );
  }
}

export default SlidingQuestion;