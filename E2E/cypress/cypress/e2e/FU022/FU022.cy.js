import { faker } from '@faker-js/faker'
import data from '../properties.json'
import loginPage from '../pages/loginPage';
import homePage from '../pages/homePage';
import screenshotPage from '../pages/screenshotPage';
import postPage from "../pages/postPage";
import settingsPage from '../pages/settingsPage';
import pagesPage from '../pages/pagesPage';

// Destructurar la data de properties.json
const { baseURL, email, password } = data

/**
 * FEATURE: Delete al content in pages and posts
 */
describe('Feature: Delete all content', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });
    /**
     * SCENARIO: As an admin user I want to add a new tag
     */
    it('Scenario: FU022_ESC001: As an admin user I want to delete all posts', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
        const fakeBody = faker.lorem.paragraphs({ min: 1, max: 2 })

        screenshotPage.configureScreenshotFolder('FU022_ESC001')

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
        postPage.clickOnBackToEditor()
        postPage.clickOnPosts()
        homePage.clickOnSettings()
        homePage.clickOnLabs()
        settingsPage.clickOnDeleteAllContent()
        settingsPage.clickOnConfirmDelete()
        homePage.clickOnPosts()

        // Then Section
        homePage.elements.noPosts().should('exist')
        screenshotPage.takeScreenshot('delete_all_content_posts')
    });

    it('Scenario: FU022_ESC002: As an admin user I want to delete all pages', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
        const fakeBody = faker.lorem.paragraphs({ min: 1, max: 2 })

        screenshotPage.configureScreenshotFolder('FU022_ESC002')

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPage()
        homePage.clickOnNewPage()
        pagesPage.setTitle(fakeTitle)
        pagesPage.clickOnBody()
        pagesPage.enterBody(fakeBody)
        pagesPage.clickOnPublish()
        pagesPage.clickOnContinue()
        pagesPage.clickOnPublishPage()
        pagesPage.clickOnBackToEditor()
        pagesPage.clickOnPages()
        homePage.clickOnSettings()
        homePage.clickOnLabs()
        settingsPage.clickOnDeleteAllContent()
        settingsPage.clickOnConfirmDelete()
        homePage.clickOnPage()

        // Then Section
        homePage.elements.noPosts().should('exist')
        screenshotPage.takeScreenshot('delete_all_content_pages')
    })

});
