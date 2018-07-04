import React from "react";
import Helmet from "react-helmet";
import HeaderSection from "../components/HeaderSection.js";
import MobileHeaderSection from "../components/MobileHeaderSection.js";
import FooterSection from "../components/FooterSection.js";
import { HideOnMobile, HideOnDesktop } from '../styles/style.js';
import favicon from './favicon.png'

export default ({ data, children }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>

    <HideOnMobile>
      <HeaderSection 
        imgAltTitle={data.site.siteMetadata.title} 
        menuLink1="/get-started/savings"
        menuLink2="/classes"
        menuLink3="/tools"
        menuLink4="/contact"
      />
    </HideOnMobile>  

    <HideOnDesktop>
      <MobileHeaderSection 
        imgAltTitle={data.site.siteMetadata.title} 
        mobileMenuLink1="/get-started/savings"
        mobileMenuLink2="/classes"
        mobileMenuLink3="/tools"
        mobileMenuLink4="/contact"
      />
    </HideOnDesktop>

    {children()}
    
    <FooterSection 
      footerSiteTitle={data.site.siteMetadata.title} 
      menuLink1="/get-started/savings"
      menuLink2="/classes"
      menuLink3="/tools"
      menuLink4="/contact"
    />
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`