import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import styled from "styled-components"
import Helmet from "react-helmet";
import img from "./img-homepage.jpg"

const BlogPostItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;

  @media (max-width: 767px) {
    display: block;
  }
`

const BlogPostItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  @media (max-width: 767px) {
    margin-left: 0;
  }

  h3 {
    font-size: 30px;

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
`

const FeaturedImg = styled.div`
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`

const BlogPosts = ({node}) => {
    return (
        <BlogPostItemContainer>
          <FeaturedImg>
            <Img sizes={node.featuredImage.sizes}/>
          </FeaturedImg>
          <BlogPostItem>
            <h3><Link to={node.slug}>{node.title}</Link></h3>
            <p>{node.createdAt}</p>
            <div>                
              <div style={{fontSize:`18px`}}>{node.content.childMarkdownRemark.excerpt}</div>
            </div>
          </BlogPostItem>
        </BlogPostItemContainer>
    )
}

const BlogPage = (props) => {

    console.log(props)
    return (
        <div>
          <Helmet>
            <title>EveryPeso Blog - EveryPeso.com</title>
            <meta name="description" content="We never run out of things to say about personal finance! We post about budgeting tips, inspiration and success stories to keep you motivated!" />
            <meta property="og:title" content="EveryPeso Blog" />
            <meta property="og:description" content="We never run out of things to say about personal finance! We post about budgeting tips, inspiration and success stories to keep you motivated!" />
            <meta property="og:url" content="https://www.everypeso.com/blog" />
            <meta property="og:site_name" content="EveryPeso Blog" />
            <meta property="og:image" content={img} />
          </Helmet>

          {props.data.allContentfulBlogPost.edges.map((edge) => <BlogPosts key={edge.node.id} node={edge.node} />)}
        </div>
    )
}

export default BlogPage

export const blogPageQuery = graphql`
    query blogPageQuery {
        allContentfulBlogPost(
            filter: {
                node_locale: {eq: "en-US"}
            },
            sort: {
                fields: [createdAt], order: DESC
            }
        ) {
            edges {
                node {
                    id
                    title
                    slug
                    createdAt(formatString: "MMMM DD, YYYY")
                    featuredImage {
                      sizes(maxWidth: 800) {
                        ...GatsbyContentfulSizes
                      }
                    }
                    content {
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                }
            }
        }
    }
`