import { faker } from '@faker-js/faker'
import data from '../properties.json'
import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import indexPage from '../pages/indexPage'
import postPage from "../pages/postPage";
import extPostPage from "../pages/extPostPage";

// Destructurar la data de properties.json
const { baseURL, baseURLHome, email, password } = data

/**
 * Feature: Search post
 */
describe('Feature: Search post', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });

    /**
     * Scenario: As an user I want to add a Post and search it outside the administrator view by body content
     */
    it('Scenario: As an user I want to add a Post and search it outside the administrator view by body content', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } } )

        const randomIdentification = faker.word.words({ count: { min: 2, max: 3 } }) + faker.datatype.number({ min: 10, max: 500 })
        const fakeFrag1 = faker.word.words({ count: { min: 10, max: 20 } })
        const fakeFrag2 = faker.word.words({ count: { min: 10, max: 20 } })

        const fakeBody =  fakeFrag1 + ' ' + randomIdentification + ' ' + fakeFrag2

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPosts()
        homePage.clickOnNewPost()
        postPage.enterTitle(fakeTitle)
        postPage.clickOnBody()
        postPage.enterBody(fakeBody)
        postPage.clickOnPublish()
        postPage.clickOnContinue()
        postPage.clickOnPublishPost()

        // Then Section
        cy.visit(baseURLHome)
        indexPage.clickOnSearchButton()
        indexPage.typeOnSearchInput(randomIdentification)
        indexPage.clickOnFirstPostFound()
        extPostPage.elements.title().contains(fakeTitle).should('exist')
        extPostPage.elements.body().contains(fakeBody).should('exist')
    })
})

