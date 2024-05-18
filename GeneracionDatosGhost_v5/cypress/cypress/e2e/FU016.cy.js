import { faker } from '@faker-js/faker'
import data from './properties.json'
import loginPage from './pages/loginPage'
import homePage from './pages/homePage'
import memberPage from './pages/memberPage'

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

    it('Scenario Random: Add a new member', function () {
        const name = faker.person.fullName()

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnMembers()
        memberPage.clickOnNewMember()
        memberPage.enterName(name)
        memberPage.enterEmail(faker.internet.email())
        memberPage.enterNote(faker.lorem.paragraph())
        memberPage.disableNewsletter()
        memberPage.clickOnSave()
        memberPage.clickOnMembers()

        // Then Section
        memberPage.elements.membersList().contains(name).should('exist');
    })

    it('Scenario Random: Validate that it is not possible to add a new member with email in invalid format', function () {
        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnMembers()
        memberPage.clickOnNewMember()
        memberPage.enterName(faker.person.fullName())
        memberPage.enterEmail(faker.string.symbol(10))
        memberPage.enterNote(faker.lorem.words(10))
        memberPage.disableNewsletter()
        memberPage.clickOnSave()

        // Then Section
        memberPage.getEmailMessage().contains('Invalid Email.').should('exist');
    })

    it('Scenario Random: Validate that it is not possible to add a new member with note longer than the maximum length', function () {
        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnMembers()
        memberPage.clickOnNewMember()
        memberPage.enterName(faker.person.fullName())
        memberPage.enterEmail(faker.internet.email())
        memberPage.enterNote(faker.lorem.paragraphs({ min: 5, max: 10 }))
        memberPage.disableNewsletter()
        memberPage.clickOnSave()

        // Then Section
        memberPage.getNoteMessage().contains('Note is too long.').should('exist');
    })

    it('Scenario Random: Validate that it is not possible to add a new member with name longer than the maximum length', function () {
        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnMembers()
        memberPage.clickOnNewMember()
        memberPage.enterName(faker.lorem.words(50))
        memberPage.enterEmail(faker.internet.email())
        memberPage.enterNote(faker.lorem.paragraphs(1))
        memberPage.disableNewsletter()
        memberPage.clickOnSave()

        // Then Section
        memberPage.getNameMessage().contains('Name cannot be longer than 191 characters.').should('exist');
    })
});
