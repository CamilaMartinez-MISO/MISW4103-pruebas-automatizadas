import { faker } from '@faker-js/faker'
import data from './properties.json'
import loginPage from './pages/loginPage'
import homePage from './pages/homePage'
import memberPage from './pages/memberPage'

// Destructurar la data de properties.json
const { baseURL, email, password } = data

/**
 * Feature: Add member
 */
describe('Feature: Add member', function () {
    let memberFormData = []

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
        cy.request('GET', 'https://api.mockaroo.com/api/ecad2bd0?count=10&key=6a3c7e00').then((response) => {
            memberFormData = response.body
        });
    });

    //
    // Random Scenarios
    //

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

    //
    // Pseudorandom Scenarios
    //

    it('Scenario Pseudorandom: Add a new member', function () {
        const scenarioData = memberFormData[Math.floor(Math.random() * memberFormData.length)]
        const name = scenarioData.name

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnMembers()
        memberPage.clickOnNewMember()
        memberPage.enterName(name)
        memberPage.enterEmail(scenarioData.email)
        memberPage.enterNote(scenarioData.note)
        memberPage.disableNewsletter()
        memberPage.clickOnSave()
        memberPage.clickOnMembers()

        // Then Section
        memberPage.elements.membersList().contains(name).should('exist');
    })

    it('Scenario Pseudorandom: Add a new member using a naughty string as name', function () {
        const scenarioData = memberFormData[Math.floor(Math.random() * memberFormData.length)]
        const bad_name = scenarioData.bad_name

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnMembers()
        memberPage.clickOnNewMember()
        memberPage.enterName(bad_name)
        memberPage.enterEmail(scenarioData.email)
        memberPage.enterNote(scenarioData.note)
        memberPage.disableNewsletter()
        memberPage.clickOnSave()
        memberPage.clickOnMembers()

        // Then Section
        memberPage.elements.membersList().contains(bad_name).should('exist');
        console.log('bad_name: ', bad_name)
    })

    it('Scenario Pseudorandom: Add a new member using a naughty string as note', function () {
        const scenarioData = memberFormData[Math.floor(Math.random() * memberFormData.length)]
        const name = scenarioData.name

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnMembers()
        memberPage.clickOnNewMember()
        memberPage.enterName(name)
        memberPage.enterEmail(scenarioData.email)
        memberPage.enterNote(scenarioData.bad_note)
        memberPage.disableNewsletter()
        memberPage.clickOnSave()
        memberPage.clickOnMembers()

        // Then Section
        memberPage.elements.membersList().contains(name).should('exist');
        console.log('bad_note: ', scenarioData.bad_note)
    })

    it('Scenario Pseudorandom: Add a new member using a naughty string as label', function () {
        const scenarioData = memberFormData[Math.floor(Math.random() * memberFormData.length)]
        const name = scenarioData.name

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnMembers()
        memberPage.clickOnNewMember()
        memberPage.enterName(name)
        memberPage.enterEmail(scenarioData.email)
        memberPage.enterLabel(scenarioData.bad_label)
        memberPage.clickOnAddLabel()
        memberPage.enterNote(scenarioData.note)
        memberPage.disableNewsletter()
        memberPage.clickOnSave()
        memberPage.clickOnMembers()

        // Then Section
        memberPage.elements.membersList().contains(name).should('exist');
        console.log('bad_label: ', scenarioData.bad_label)
    })
});
