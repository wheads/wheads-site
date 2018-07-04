import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import { HideOnMobile } from '../styles/style.js';
import logo from './logo.svg';
import NumericInput from 'react-numeric-input';
NumericInput.style.input.borderStyle = 'none';
NumericInput.size = '50px';

import { Wrapper, SectionH2, SectionParag, Section1ColGray } from "../styles/style.js";

class MyInput extends React.Component {
  
  constructor(props)
  {
    super(props);
    this.state={
      name: '',
      value: '',
    }

    this.changeValue = this.changeValue.bind(this);
  }    

  changeValue = (e) => {
    var original = this.state.value;

    var val = e.target.value;
    if(this.props.numeric == true)
    {
      if (isNaN(val))
      {
        val = null;
        e.target.value = original;
      }
      else
      {
        val = e.target.value;
      };
    }
    else
    {
      val = e.target.value;
    }

    this.setState({
      value: parseFloat(val),
      name: this.props.name,
    });
    this.props.onChange(this.props.name, parseFloat(val));
  }

  render()
  {
    const { name, numeric, onChange } = this.props;

    return (
      <input name={this.props.name} onChange={this.changeValue}  />
    )
  }
}

export default MyInput;