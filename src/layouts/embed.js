import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

const EmbedFooter = styled.div`
  text-align: center;
  padding-top: 30px;
`;

export default ({ data, children }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>

    {children()}
    
    <EmbedFooter>
      <p><a href="https://www.everypeso.com">Powered by EveryPeso.com</a></p>
    </EmbedFooter>
  </div>
);

export const query = graphql`
  query EmbedLayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`