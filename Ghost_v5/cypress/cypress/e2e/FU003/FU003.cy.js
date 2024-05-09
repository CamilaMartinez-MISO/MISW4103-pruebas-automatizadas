import { faker } from '@faker-js/faker'
import data from '../properties.json'
import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import postPage from '../pages/postPage'
import screenshotPage from '../pages/screenshotPage'

// Destructurar la data de properties.json
const { baseURL, email, password } = data

/**
 * Feature: Edit post
 */
describe('Feature: Edit post', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });

    it('Scenario: FU003_ESC001: As an admin user, I want to edit a published post', function () {
        const title = faker.lorem.words()
        const body = faker.lorem.paragraph()
        const titleEdit = faker.lorem.words()

        screenshotPage.configureScreenshotFolder('FU003_ESC001')

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
        homePage.clickOnPublished()
        homePage.clickOnPostWithTitle(title)
        postPage.clearTitle()
        postPage.enterTitle(titleEdit)
        postPage.clickOnUpdate()
        postPage.clickOnSettings()
        postPage.clickOnViewPost()

        // Then Section
        postPage.elements.editedPostTitle().should('have.text', titleEdit);
    })

    it('Scenario: FU003_ESC002: As an admin user, I want to edit a published post, unpublish it and reschedule its publication', function () {
        const title = faker.lorem.words()
        const body = faker.lorem.paragraph()
        const titleEdit = faker.lorem.words()

        screenshotPage.configureScreenshotFolder('FU003_ESC002')

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
        homePage.clickOnPublished()
        homePage.clickOnPostWithTitle(title)
        postPage.clearTitle()
        postPage.enterTitle(titleEdit)
        postPage.clickOnUpdate()
        postPage.clickOnUnpublish()
        postPage.confirmUnpublish()
        postPage.clickOnPublish()
        postPage.changePublicationTime()
        postPage.clickOnContinue()
        postPage.clickOnPublishPost()
        postPage.clickOnEditor()
        postPage.clickOnPosts()
        homePage.clickOnScheduled()

        // Then Section
        homePage.elements.scheduledPosts().contains(titleEdit).should('exist');
        screenshotPage.takeScreenshot()
    })
});
