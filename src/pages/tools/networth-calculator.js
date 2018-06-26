import React, { Component } from 'react';
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { select } from 'd3-selection'
import SlidingDiv from '../../components/Controls/SlidingDiv';
import { transition } from 'd3-transition'

//DARK GREEN - 146414
//LIGHT GREEN - 9AE48B
//BLUE - 00B9FF
//BEIGE - FFFBCE

const PageContainer = styled.div`
  display: grid;  
  grid-template-columns: 60% 40%;
  font-size: 14px;

  @media (max-width: 1000px) {
    display: block;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  position: relative;
  margin: 5px auto;  
  max-width: 600px;
  overflow: hidden;
`;

const MovingContainer = styled.div`
  display: flex;
  position: relative;
  margin: 0px;
`;

class App extends React.Component {

  constructor(props){
    super(props)

    
    this.state = {
      contents : [
        {Number: '1',
        Text1: 'Do you own a House / Lot?' ,
        Text2: 'Total all your real estate properties',
        Amount: 0,
        Max: 10000000,
        Step: 10000,
        },
        {Number: '2',
        Text1: 'Do you own shares of stocks/mutual funds?' ,
        Text2: 'Total all your investment portfolio.',
        Amount: 0,
        Max: 10000000,
        Step: 10000,
        },
        {Number: '3',
        Text1: 'Cars' ,
        Text2: 'Total all your cars.',
        Amount: 0,
        Max: 10000000,
        Step: 10000,
        },
      ]
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
    
    //var div = select("#divSliderContainer").node()
    var div = null;
    if(div !== null)
    {
      this.setState(
        {
          Width: div.offsetWidth
        }
      );
    }
  }

  onMovePanels(index)
  {    
    var div = document.getElementById("divSliderContainer");
    var x = (index-1) * div.offsetWidth * -1;
    
    transition(
      select('#divMoving')
          .transition()
          .style("left", function() { return x +  "px"; })
          .duration(500)
          .delay(0));
  }

  render(){
    
    return(
      <PageContainer >
        <SliderContainer ref={ (divSliderContainer) => this.divSliderContainer = divSliderContainer}  id="divSliderContainer">
          <MovingContainer id="divMoving">
            {this.state.contents.map((content, index) =>
              <SlidingDiv key={index.toString()} ref={ (divSliding) => this.divSliding = divSliding} 
                Content = {content}
                Next={(index<(this.state.contents.length-1))?"true":"false"} Back={(index>0)?"true":"false"} 
                Width={this.state.Width}
                onMovePanels={(e) => this.onMovePanels(e)}
              />
            )}
          </MovingContainer>
        </SliderContainer>
        <div style={{display: 'block'}}>Anhi ang uban</div>
      </PageContainer>);
  }
}

export default ({ data, scales, margins, svgDimensions }) => (
  <div>
    <Helmet>
      <title>Tools - {data.site.siteMetadata.title}</title>
    </Helmet>
    <App/>
    
  </div>  
);

export const query = graphql`
  query NetWorthCalculator {
    site {
      siteMetadata {
        title
      }
    }
  }
`
