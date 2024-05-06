import { faker } from '@faker-js/faker'
import data from '../properties.json'
import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import postPage from '../pages/postPage'

// Destructurar la data de properties.json
const { baseURL, email, password } = data

/**
 * Feature: Delete post
 */
describe('Feature: Delete post', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });

    it('Scenario: FU004_ESC001: As an admin user I want to create a Post, save it as a draft, and delete it shortly after', function () {
        const title = faker.lorem.words()
        const body = faker.lorem.paragraph()

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPosts()
        homePage.clickOnNewPost()
        postPage.enterTitle(title)
        postPage.clickOnBody()
        postPage.enterBody(body)
        postPage.clickOnPublish()
        postPage.clickOnContinue()
        postPage.clickOnPublishPost()
        postPage.clickOnBackToEditor()
        postPage.clickOnSettingsSmall()
        postPage.clickOnDeletePost()
        postPage.clickOnConfirmDeletePost()

        // Then Section
        homePage.elements.publishedPosts().contains(title).should('not.exist');
    })

    it('Scenario: FU004_ESC002: Create, Publish, Search, and Delete a Post as an Administrator', function () {
        const title = faker.lorem.words()
        const body = faker.lorem.paragraph()

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPosts()
        homePage.clickOnNewPost()
        postPage.enterTitle(title)
        postPage.clickOnBody()
        postPage.enterBody(body)
        postPage.clickOnPublish()
        postPage.clickOnContinue()
        postPage.clickOnPublishPost()
        postPage.clickOnBackToEditor()
        postPage.clickOnPosts()
        postPage.clickOnSearchButton()
        postPage.typeOnSearchInput(title)
        postPage.clickOnPostByTitle(title)
        postPage.clickOnSettingsSmall()
        postPage.clickOnDeletePost()
        postPage.clickOnConfirmDeletePost()

        // Then Section
        homePage.elements.publishedPosts().contains(title).should('not.exist');
    })

    it('Scenario: FU004_ESC003: As an admin user I want to delete a post published', function () {
        const title = faker.lorem.words()
        const body = faker.lorem.paragraph()

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPosts()
        homePage.clickOnPublished()
        postPage.clickOnFirstPost()
        postPage.clickOnSettingsSmall()
        postPage.clickOnDeletePost()
        postPage.clickOnConfirmDeletePost()

        // Then Section
        homePage.elements.publishedPosts().contains(title).should('not.exist');
    })
});
