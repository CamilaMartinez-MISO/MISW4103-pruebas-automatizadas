import data from './properties.json'
import dataPool from "./pages/dataPool";
const loginPage = require("./pages/loginPage");
import { faker } from "@faker-js/faker";

// Destructurar la data de properties.json
const { baseURL } = data

describe('HU009: ', () => {

  let memberFormData = []

  // Given Section
  beforeEach(() => {
    cy.visit(baseURL)
    cy.request('GET', 'https://api.mockaroo.com/api/ecad2bd0?count=20&key=6a3c7e00').then((response) => {
      memberFormData = response.body
    });
  });

  it('Scenario Apriori: Validate that is not possible login with wrong apriori inputs', () => {
    const email = dataPool.getRandomElement();
    const password = dataPool.getRandomElement();

    loginPage.signIn(email, password)

    loginPage.elements.errorMessage().should('exist')

  })

  it('Scenario Random: Validate that is not possible login with wrong ramdom inputs', () => {
    const email = faker.internet.email()
    const password = faker.internet.password({ length: 30 })

    loginPage.signIn(email, password)

    loginPage.elements.errorMessage().contains('There is no user with that email address').should('exist')

  })

  it('Scenario Pseudo: Validate that is not possible login with wrong pseudo-ramdom inputs with a library', () => {

    const name = faker.person.firstName('female')
    const email = faker.internet.email({ firstName: name })
    const password = faker.internet.password({ length: 30 })

    loginPage.signIn(email, password)

    loginPage.elements.errorMessage().contains('There is no user with that email address').should('exist')

  })

  it('Scenario Pseudo: Validate that is not possible login with wrong pseudo-ramdom inputs from an API', () => {

    const scenarioData = memberFormData[Math.floor(Math.random() * memberFormData.length)]
    const email =  scenarioData.email
    const password = scenarioData.note

    loginPage.signIn(email, password)

    loginPage.elements.errorMessage().contains('There is no user with that email address').should('exist')

  })


})