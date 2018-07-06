import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import styled from "styled-components"

const BlogPostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px;
`

const BlogTitle = styled.h1`
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;

  @media (max-width: 767px) {
    font-size: 28px;
  }
`

class BlogPostTemplate extends Component {
    render() {
        console.log(this.props)
        const { title, createdAt, featuredImage, content } = this.props.data.contentfulBlogPost
        return (
            <BlogPostContainer>
                <BlogTitle>{title}</BlogTitle>
                <p>{createdAt}</p>
                <div>
                    <Img sizes={featuredImage.sizes}/>
                </div>
                <hr />
                <div style={{fontSize:`18px`}} dangerouslySetInnerHTML={{__html:content.childMarkdownRemark.html}} />
            </BlogPostContainer>
        )
    }
}

BlogPostTemplate.PropTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPostTemplate

export const blogPostTemplateQuery = graphql`
    query blogPostTemplateQuery($slug: String!){
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            createdAt(formatString: "MMMM DD, YYYY")
            featuredImage {
                sizes(maxWidth: 800) {
                    ...GatsbyContentfulSizes
                }
            }
            content {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`