"use strict"

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  // need createRedirect action in boundActionCreators collection
  // to make the redirection magic happen.
  // https://www.gatsbyjs.org/docs/bound-action-creators/
  const { createRedirect } = boundActionCreators

  // Let’s set up some string consts to use throughout the following.
  // MDN > JavaScript reference > Statements and declarations
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
  // Maybe we usually redirect to page 2, with trailing slash.
  // const page2Path = `/page-2/`
  // But sometimes to homepage.
  const homePath = `/`

  // One-off redirect, note trailing slash missing on fromPath and
  // toPath here.
  createRedirect({
    fromPath: `/get-started`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/get-started/savings`,
  })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/tools\/investment-quiz-embed/)) {
      // It's assumed that `yourLayoutPage.js` exists in the `/layouts/` directory
      page.layout = "embed";

      // Update the page.
      createPage(page);
    }

    resolve();
  });
};

const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators
    return new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve('src/templates/blog-post.js')
        resolve(
            graphql(`
                {
                    allContentfulBlogPost (limit:100) {
                        edges {
                            node {
                                id
                                slug
                            }
                        }
                    }
                }
            `).then((result) => {
                if (result.errors) {
                    reject(result.errors)
                }
                result.data.allContentfulBlogPost.edges.forEach((edge) => {
                    createPage ({
                        path: edge.node.slug,
                        component: blogPostTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                })
                return
            })
        )
    })
}