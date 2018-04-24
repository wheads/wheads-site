import React from "react";
import Helmet from "react-helmet";
import HeaderSection from "../components/HeaderSection.js";
import FooterSection from "../components/FooterSection.js";

export default ({ data, children }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>

    <HeaderSection imgAltTitle={data.site.siteMetadata.title} />

    {children()}
    
    <FooterSection footerSiteTitle={data.site.siteMetadata.title} />
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