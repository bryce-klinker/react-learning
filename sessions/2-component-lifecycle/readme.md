# Session Overview

This session is intented to provide you with a basic understanding of react component life cycles. Similar to the last session there are tests that will require the use of life cycle hooks for them to pass.

[React Lifecycle Hooks](https://reactjs.org/docs/react-component.html)

## Goals

- Understand commonly used React Component Lifecycle
- Exposure to:
  - fake timers in jest
  - spying in jest
  - simulating async

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

1.  Fix tests in [Lifecycle Component](./src/Lifecycle.spec.jsx) in the order they appear in the test file.
