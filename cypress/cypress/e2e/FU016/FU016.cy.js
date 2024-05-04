import { faker } from '@faker-js/faker'
import data from '../properties.json'
import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import memberPage from '../pages/memberPage'

// Destructurar la data de properties.json
const { baseURL, email, password } = data

/**
 * Feature: Create post
 */
describe('Feature: Create post', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });

    it('Scenario: As an admin user, I want to create a post and publish it', function () {
        const name = faker.person.fullName()
        const randomEmail = faker.internet.email()
        const note = faker.lorem.paragraph()

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnMembers()
        memberPage.clickOnNewMember()
        memberPage.enterName(name)
        memberPage.enterEmail(randomEmail)
        memberPage.enterNote(note)
        memberPage.disableNewsletter()
        memberPage.clickOnSave()
        memberPage.clickOnMembers()

        // Then Section
        memberPage.elements.membersList().contains(name).should('exist');
    })

    it('Scenario: As an admin user, I want to validate that it is not possible to add a new member with data in an incorrect format', function () {
        const name = faker.person.fullName()
        const badEmail = faker.lorem.words()
        const note = faker.lorem.paragraphs({ min: 5, max: 10 })

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnMembers()
        memberPage.clickOnNewMember()
        memberPage.enterName(name)
        memberPage.enterEmail(badEmail)
        memberPage.enterNote(note)
        memberPage.disableNewsletter()
        memberPage.clickOnSave()

        // Then Section
        memberPage.getEmailMessage().contains('Invalid Email.').should('exist');
        memberPage.getNoteMessage().contains('Note is too long.').should('exist');
    })
});