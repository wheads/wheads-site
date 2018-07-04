import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";

import { Wrapper, SectionH2, SectionParag, Section1ColGray } from "../styles/style.js";

const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HeroBanner = styled.div`
  padding: 25px 50px;
  background-color: #ccc6ba;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const HeroBannerParag = styled.p`
  font-size: 18px;
  color: #2d3939;
`;

const HeroBannerTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  padding-bottom: 0;
  border-bottom: none;
  font-size: 52px;
  color: #2d3939;

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

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    text-align: left;
  }

  input {
    max-width: 300px;
    padding: 0.1ex 1ex 0.1ex 4px;
    font-size: 18px;
    margin-bottom: 10px;

    @media (max-width: 767px) {
      max-width: 100%;
    }
  }

  textarea {
    padding: 0.1ex 1ex 0.1ex 4px;
    font-size: 18px;
  }
`;

const FormButton = styled.button`
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
  border-style: none;
  margin-top: 15px;
  width: 230px;

  @media (max-width: 767px) {
    margin: 15px auto;
    width: 100%;
  }
`;

export default ({ data }) => (
  <div>
    <Helmet>
      <title>Contact - {data.site.siteMetadata.title}</title>
    </Helmet>

    <BannerContainer>
      <HeroBanner>
          <HeroBannerTitle>Contact us</HeroBannerTitle>
          <Form action="https://formspree.io/wealthyheads@gmail.com" method="POST">
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Your Name" required />
            <label>Your Email</label>
            <input type="email" name="_replyto" placeholder="Your Email" required />
            <label>Your Message</label>
            <textarea name="message" placeholder="Write your message here." required />
            <FormButton type="submit" value="Send">Send</FormButton>
          </Form>
      </HeroBanner>
      <Img sizes={data.imageBannerBg.childImageSharp.sizes} />
    </BannerContainer>
  </div>
  
);

export const query = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    imageBannerBg: file(relativePath: { eq: "contact-bg.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920, maxHeight: 1281) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`