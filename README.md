# Create React App + React Testing Library + Cypress with Circle CI
> This is a repo that demonstrates the minimal setup to have a up and running application with continuous integration using Circle CI with unit, integration and e2e tests.

<p align="center">
  <img alt="Should not be that hard to setup a continuous integration project with Create React App, React Testing Library , Cypress with Circle CI" src="./cover.png">
</p>

Hey there 👋, this is a minimal setup for having a React app with Circle CI.

You can go ahead and clone this repository or you can easily implement on your own code with [3 commits](https://github.com/jeanbauer/cra-rtl-cypress-circleci/commits/master):




## 1. Add React Testing Library
> RTL is one of my favorite libraries, it makes writing tests as natural as writing code.
`yarn add @testing-library/react @testing-library/jest-dom -D`

Create a file called ./src/setupTests.js:
```js
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect'
```

Go ahead and write your first test:
```js
import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders content', () => {
    const { getByText } = render(<App />)
    const content = getByText('Hello world')
    expect(content).toBeInTheDocument()
  })
})
```

That's it for React Testing Library, check more examples here:
- If you want to see more beginner examples: [link](https://testing-library.com/docs/react-testing-library/example-intro)
- More specific cases like react-redux: [link](https://github.com/kentcdodds/react-testing-library-examples/tree/master/src/__tests__)


## 2. Add Cypress
First add Cypress to your project: `yarn add cypress -D`

Now create the initial cypress folder structure:
Create a folder called _cypress_ and another one called _integration_ inside of it.

Then, create your fist e2e test:
```javascript
describe('App', () => {
  it('check if app is rendering a welcome message', () => {
    cy.visit('http://localhost:3000')

    cy.get('.App').contains('Hello world')
  })
})
```

This is a very simple example of what you can build with Cypress, I know it probably didnt sound that awesome but things can really exciting with this features that you can add to your scripts:
- 📷Visual Regression Tests: https://github.com/palmerhq/cypress-image-snapshot
- ♿Improve your app accessibility with: https://github.com/avanslaars/cypress-axe
- 🤯Take Cypress to unit testing: https://github.com/bahmutov/cypress-react-unit-test
- And [much](https://docs.cypress.io/plugins/index.html) more

## 3. Add Circle CI
Create a folder like: _./.circleci_ and a file called _./.circleci/config.yml_

The content of config.yml should be:
```yml
version: 2.1
orbs:
  cypress: cypress-io/cypress@1
  react: thefrontside/react@0.1.0
workflows:
  push:
    jobs:
      - react/install
      - react/test:
          requires:
            - react/install
  build:
    jobs:
      - cypress/run:
          yarn: true
          start: yarn start
          wait-on: 'http://localhost:3000'
          no-workspace: true
```

That's all about the code part, now follow Circle CI tutorial to create an account and add your project: [link](https://circleci.com/docs/2.0/project-build/)

## 4. (Optional) Add a Badge

Want to show everyone else that you did it? Check [here](https://circleci.com/docs/2.0/status-badges/#steps) how to add a Circle CI badge to your repo.

<p align="center">
  <a href="https://circleci.com/gh/jeanbauer/cra-rtl-cypress-circleci/tree/master" title="CircleCI badge showing that tests are passing">
    <img alt="CircleCI badge showing that tests are passing" src="https://circleci.com/gh/jeanbauer/cra-rtl-cypress-circleci/tree/master.svg?style=svg">
  </a>
</p>

## That's it

That's it, if you have any suggestion to improve this example, feel free to open an issue or dm me.

Hope it helps. _Happy testing!_ 👋
