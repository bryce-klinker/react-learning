# Session Overview

This session is intended to provide you with a basic introduction to React. The intent here is to provide you with a set of tests that you need to get to pass.

Below are commands that you will need to know to verify the tests work and how to view your code running in a browser.

## Getting Started

First you will need to install the dependencies required to run tests and run the site using a dev server:

```bash
# Installs all dependencies for running tests and the site
yarn install
# or
npm install
```

### Running Tests

```bash
# Run tests one time
yarn test
# or
npm test

# Run tests with file watcher
yarn test:watch
# or
npm run test:watch
```

### Running the Site

```bash
# This will transpile our components to work in the browser. It will also open a browser window to view what happens in the browser.
yarn start
# or
npm start
```

# Where should you start?

1.  Fix tests in the following order
    1.  [Stateless Component](./src/stateless.spec.jsx)
    1.  [Stateful Component](./src/stateful.spec.jsx)
    1.  [Composition Component](./src/composition.spec.jsx)
    1.  [Pass Me Data Component](./src/pass-me-data.spec.jsx)
1.  Run app to view components working in the browser
