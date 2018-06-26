import React, { Component } from 'react';
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import NumericInput from 'react-numeric-input';

const InputContainer = styled.div`
  height: 50px;
  padding: 0px;
  border-width: 1px;
  border-color: #00B9FF;
  border-style: solid;
  vertical-align: middle;
  display: inline-flex;
`;

const Symbol = styled.div`
  display: table;
  min-width: 30px;
  vertical-align: middle;
  height: 100%;
  background-color: #d7d9e0;
  text-align: right;
  padding-right: 2px;
  font-size: 0.75rem;

  @media (max-width: 600px) {
    display: none;
  }
`

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
        <InputContainer style={{height: '100%', verticalAlign: 'middle'}}>
          <Symbol>
              <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                <div>
                  Php
                </div>
              </div>
            </Symbol>
            <NumericInput strict={true} precision={2} onChange={this.onChange}
              defaultValue={this.props.value}
              style={{
                width: '80%',
                float: 'left',
                paddingRight: '0px',
                textAlign: 'right',
                wrap: {
                    borderStyle: 'none',
                    padding: '0px 0px 0px 0px',
                    fontSize: '1rem',
                    height: '100%',
                    textAlign: 'right'
                },
                input: {
                    borderRadius: '1px 1px 1px 1px',
                    borderStyle: 'none',
                    color: '#988869',
                    padding: '0.1ex 1ex',
                    marginLeft: '0px',
                    display: 'block',
                    fontWeight: 100,
                    fontSize: '1rem',
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
              }} />
        </InputContainer>
    )
  }
}

//DARK GREEN - 146414
//LIGHT GREEN - 9AE48B
//BLUE - 00B9FF
//BEIGE - FFFBCE

const PageContainer = styled.div`
  display: block;
  height: 100%;
`;

const TitleContainer = styled.div`    
  display: grid;
  grid-template-columns: 40% 60%;
  font-size: 16px;
  margin: 10px;
  max-width: 1000px;

  @media (max-width: 1000px) {
    display: block;
    margin: 2px 10px;
    font-size: 12px;
    margin: 5px;
}

@media (max-width: 600px) {
  display: block;
  margin: 2px 10px;
  font-size: 8px;
  margin: 5px;
}
`;

const TitleHolder = styled.div`
  display: block;
  background-color: #FFFFFF;
  background-position: -150px -50px;
`;

const Title = styled.span`
  display: block;
  font-size: 4rem;
  padding: 5px 10px 5px 25px;
  font-weight: bold;

  @media (max-width: 700px) {
    font-size: 4rem;
    padding: 2px 10px 5px 25px;
  }

  @media (max-width: 400px) {
    padding: 5px 5px;
    font-size: 4rem;
  }
`;

const NetWorthDescription = styled.div`
  display: block;
  background-color: #FFFBCE;
  background-position: -150px -50px;
  margin: 10px 25px;
  border-radius: 10px;
  padding: 15px 25px;
  text-align: justify;
  
  @media (max-width: 1000px) {
    font-size: 1.25rem;
  }

  @media (max-width: 400px) {
    padding: 15px 10px;
    font-size: 1rem;
    margin: 10px;
  }
`;

const CalcContainer = styled.div`    
  display: grid;
  grid-template-columns: 50% 50%;
  font-size: 16px;
  margin: 10px;
  max-width: 1000px;

  @media (max-width: 786px) {
    display: block;
    margin: 2px 10px;
    font-size: 12px;
    margin: 5px;
}
`;

const ALContainer = styled.div`
  display: block;
  border-bottom: 2px solid #000000;
  padding: 15px;

  @media (max-width: 786px) {
    display: grid;
    grid-template-columns: 40% 60%;
    padding-left: 5px;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 60% 40%;
  }
`;

const AssetContainer = styled.div`
  display: block;
`;

const AssetTitle = styled.p`
  font-size: 2.5rem;
  margin: 0px;
  font-weight: bold;
  padding-left: 5px;
  color: #146414;

  @media (max-width: 600px) {
    font-size: 2.15rem;
  }
`;

const AssetSub = styled.p`
  font-size: 1.25rem;
  margin: 0px;
  padding-left: 5px;
`;

const LiabilityContainer = styled.div`
  display: block;
`;

const LiabilityTitle = styled.p`
  font-size: 2.5rem;
  margin: 0px;
  font-weight: bold;
  padding-left: 5px;
  color: red;

  @media (max-width: 600px) {
    font-size: 2.15rem;
  }
`;

const LiabilitySub = styled.p`
  font-size: 1.25rem;
  margin: 0px;
  padding-left: 5px;
`;

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: 20px auto 150px;
  margin: 5px;
  height: 30px;

  @media (max-width: 600px) {
    height: 25px;
  }
`;

const CategoryIcon = styled.div`
  background-color: ;
`;

const CategoryDesc = styled.div`
  background-color: ;
  padding-left: 5px;
  font-size: 0.9rem;

  @media (max-width: 600px) {
    padding-left: 3px;
  }
`;

const CategoryAmount = styled.div`
  background-color: ;
`;

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      Savings : 0,
      House: 0,
      Retirement: 0,
      Car: 0,
      OtherAssets: 0,
      Mortgage: 0,
      Personal: 0,
      CarLoan: 0,
      CreditCard: 0,
      OtherLiabilities: 0,
      TotalAssets: 0,
      TotalLiabilities: 0,
    }
  }

  componentDidMount() {
  }
  componentWillUnmount() {    
  }

  onValueChange(name, value)
  {    
    var totalLiability = 0;
    var totalAsset = 0;

    this.setState(
      {
        [name]: value,
        
      }, () => {
        totalLiability = this.state.Mortgage + this.state.Personal + this.state.CarLoan + this.state.CreditCard + this.state.OtherLiabilities;
        totalAsset = this.state.Savings + this.state.House + this.state.Retirement + this.state.Car + this.state.OtherAssets;

        this.setState(
          {
            TotalLiabilities: totalLiability,
            TotalAssets: totalAsset
          }
        )
      }
    );

  }

  render(){
    
    return(
      <PageContainer>
        <TitleContainer >      
            <TitleHolder>
              <Title>Know Your Net Worth</Title>
            </TitleHolder>
            <NetWorthDescription>The best thermometer for your financial health is your Net Worth.<br/>
            Knowing where you stand is the first step in building and securing your future.<br/><br/>
            Use this simple tool to know if you are winning or losing ground.
            </NetWorthDescription>
        </TitleContainer>
        <CalcContainer>
          <AssetContainer>
            <ALContainer>
              <AssetTitle>ASSETS</AssetTitle>
              <AssetSub>Everything You Own</AssetSub>
            </ALContainer>
            <CategoryContainer>
              <CategoryIcon></CategoryIcon>
              <CategoryDesc>Savings and Investments</CategoryDesc>
              <CategoryAmount>
                <CurrencyInput controlName='Savings' value={0} onChange = {(name, value) => this.onValueChange(name, value)} />
              </CategoryAmount>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryIcon></CategoryIcon>
              <CategoryDesc>House/Lot</CategoryDesc>
              <CategoryAmount>
                <CurrencyInput controlName='House' value={0} onChange = {(name, value) => this.onValueChange(name, value)} />
              </CategoryAmount>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryIcon></CategoryIcon>
              <CategoryDesc>Retirement Funds</CategoryDesc>
              <CategoryAmount>
                <CurrencyInput controlName='Retirement' value={0} onChange = {(name, value) => this.onValueChange(name, value)} />
              </CategoryAmount>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryIcon></CategoryIcon>
              <CategoryDesc>Cars</CategoryDesc>
              <CategoryAmount>
                <CurrencyInput controlName='Car' value={0} onChange = {(name, value) => this.onValueChange(name, value)} />
              </CategoryAmount>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryIcon></CategoryIcon>
              <CategoryDesc>Others</CategoryDesc>
              <CategoryAmount>
                <CurrencyInput controlName='OtherAssets' value={0} onChange = {(name, value) => this.onValueChange(name, value)} />
              </CategoryAmount>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryIcon></CategoryIcon>
              <CategoryDesc style={{fontWeight: 'bold', color: '#146414', fontSize: '1rem'}}>TOTAL ASSETS</CategoryDesc>
              <CategoryAmount style={{borderTopColor: '#000000', borderTopStyle: 'double', textAlign: 'right', paddingRight: '10px', color: '#146414', fontWeight: 'bold', fontSize: '1rem'}}>
                {Math.round(this.state.TotalAssets,2).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2})}
              </CategoryAmount>
            </CategoryContainer>
          </AssetContainer>
          <LiabilityContainer>
            <ALContainer>
              <LiabilityTitle>LIABILITIES</LiabilityTitle>
              <LiabilitySub>Everything You Owe</LiabilitySub>
            </ALContainer>
            <CategoryContainer>
              <CategoryIcon></CategoryIcon>
              <CategoryDesc>Mortgage</CategoryDesc>
              <CategoryAmount>
                <CurrencyInput controlName='Mortgage' value={0} onChange = {(name, value) => this.onValueChange(name, value)} />
              </CategoryAmount>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryIcon></CategoryIcon>
              <CategoryDesc>Personal Loans</CategoryDesc>
              <CategoryAmount>
                <CurrencyInput controlName='Personal' value={0} onChange = {(name, value) => this.onValueChange(name, value)} />
              </CategoryAmount>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryIcon></CategoryIcon>
              <CategoryDesc>Car Loan</CategoryDesc>
              <CategoryAmount>
                <CurrencyInput controlName='CarLoan' value={0} onChange = {(name, value) => this.onValueChange(name, value)} />
              </CategoryAmount>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryIcon></CategoryIcon>
              <CategoryDesc>Credit Card Debt</CategoryDesc>
              <CategoryAmount>
                <CurrencyInput controlName='CreditCard' value={0} onChange = {(name, value) => this.onValueChange(name, value)} />
              </CategoryAmount>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryIcon></CategoryIcon>
              <CategoryDesc>Others</CategoryDesc>
              <CategoryAmount>
                <CurrencyInput controlName='OtherLiabilities' value={0} onChange = {(name, value) => this.onValueChange(name, value)} />
              </CategoryAmount>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryIcon></CategoryIcon>
              <CategoryDesc style={{fontWeight: 'bold', color: 'red', fontSize: '1rem'}}>TOTAL LIABILITIES</CategoryDesc>
              <CategoryAmount style={{borderTopColor: '#000000', borderTopStyle: 'double', textAlign: 'right', paddingRight: '10px', color: 'red', fontWeight: 'bold', fontSize: '1rem'}}>
                {Math.round(this.state.TotalLiabilities,2).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2})}
              </CategoryAmount>
            </CategoryContainer>
          </LiabilityContainer>
        </CalcContainer>
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
  query NetWorthCalculator2 {
    site {
      siteMetadata {
        title
      }
    }
  }
`
