"use strict"

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators }) => {
  // need createRedirect action in actions collection
  // to make the redirection magic happen.
  // https://www.gatsbyjs.org/docs/bound-action-creators/
  const { createRedirect } = boundActionCreators

  // Let’s set up some string consts to use thoroughout the following.
  // MDN > JavaScript reference > Statements and declarations
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
  // Maybe we usually redirect to page 2, with trailing slash.
  // const page2Path = `/page-2/`
  // But sometimes to homepage.
  const homePath = `/`

  // A more modern approach might use forEach rather than for...of
  // Compare
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement
  // and
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  let redirectBatch = [
  //  { f: `/juice`, t: `/` },
    { f: `https://ep-live.netlify.com/*`, t: `https://www.everypeso.com/:splat` }
  ]

  redirectBatch.forEach(({ f, t }) => {
    if (t === ``) {
      t = homePath
    }
    createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t,
    })
    // Uncomment next line to see forEach in action during build
    // console.log('\nRedirecting:\n' + f + '\nTo:\n' + t + '\n');
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