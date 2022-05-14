# Getting Started with Create React App

-- Udemy Tutorial: Testing React with Jest and Testing Library --

    - used and worked  -  following to create app: 
    npx create-react-app@latest react-testing-sundaes-on-demand

    - did not work:
    npx create-react-app react-testing-sundaes-on-demand

1.  npm install eslint-plugin-testing-library eslint-plugin-jest-dom

2. npm install react-bootstrap bootstrap
---------------------------------------------------------------------
=> I had the following error after running npm test:

Error: Failed to initialize watch plugin "node_modules/jest-watch-typeahead/filename.js":

  ● Test suite failed to run

    file:///Users/jas/Documents/GitHub/react-testing-sundaes-on-demand/node_modules/jest-watch-typeahead/build/file_name_plugin/prompt.js:4
    import { PatternPrompt, printPatternCaret, printRestoredPatternCaret } from 'jest-watcher';
                            ^^^^^^^^^^^^^^^^^
    SyntaxError: Named export 'printPatternCaret' not found. The requested module 'jest-watcher' is a CommonJS module, which may not support all module.exports as named exports.
    CommonJS modules can always be imported via the default export, for example using:

    import pkg from 'jest-watcher';
    const { PatternPrompt, printPatternCaret, printRestoredPatternCaret } = pkg;

      at async requireOrImportModule (node_modules/jest-util/build/requireOrImportModule.js:65:32)
      at async watch (node_modules/@jest/core/build/watch.js:337:34)
      at async _run10000 (node_modules/@jest/core/build/cli/index.js:311:7)
      at async runCLI (node_modules/@jest/core/build/cli/index.js:173:3)



=> I run following to resolve it:
npm i -D --exact jest-watch-typeahead@0.6.5
---------------------------------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# react-testing-sundaes-on-demand
