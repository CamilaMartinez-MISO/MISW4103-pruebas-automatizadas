import data from './properties.json'
import dataPool from "./pages/dataPool";
const loginPage = require("./pages/loginPage");
import { faker } from "@faker-js/faker";

// Destructurar la data de properties.json
const { baseURL } = data

describe('HU009: ', () => {

  // Given Section
  beforeEach(() => {
    cy.visit(baseURL)
  });

  it('Scenario: HU009_ESC_001: Login failed with wrong apriori inputs', () => {
    const email = dataPool.getRandomElement();
    const password = dataPool.getRandomElement();

    loginPage.signIn(email, password)

    loginPage.elements.errorMessage().should('exist')

  })

  it('Scenario: HU009_ESC_002: Login failed with wrong ramdom inputs', () => {
    const email = faker.internet.email()
    const password = faker.internet.password({ length: 30 })

    loginPage.signIn(email, password)

    loginPage.elements.errorMessage().contains('There is no user with that email address').should('exist')

  })
})