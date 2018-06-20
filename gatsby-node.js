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