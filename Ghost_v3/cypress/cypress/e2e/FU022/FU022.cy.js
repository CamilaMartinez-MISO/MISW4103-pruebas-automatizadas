import { faker } from '@faker-js/faker'
import data from '../properties.json'
import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import settingsPage from '../pages/settingsPage'
import postPage from "../pages/postPage";
import pagesPage from '../pages/pagesPage'
import screenshotPage from "../pages/screenshotPage";
import extPostPage from "../pages/extPostPage";

// Destructurar la data de properties.json
const { baseURL, baseURLHome, email, password } = data

/**
 * FEATURE: Delete al content in pages and posts
 */
describe('Feature: Delete all content', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });

    /**
     * Scenario: As an admin user I want to delete all posts
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
        postPage.clickOnPublishPost()
        postPage.clickOnPosts()
        homePage.clickOnLabs()
        settingsPage.clickOnDeleteAllContent()
        settingsPage.clickOnConfirmDelete()
        homePage.clickOnPostsBtn()

        // Then Section
        homePage.elements.noPosts().should('exist')
        screenshotPage.takeScreenshot('delete_all_content_posts')
    })

    it('Scenario: FU022_ESC002: As an admin user I want to delete all pages', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
        const fakeBody = faker.lorem.paragraphs({ min: 1, max: 2 })

        screenshotPage.configureScreenshotFolder('FU022_ESC002')

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnPage()
        homePage.clickOnNewPage()
        pagesPage.enterTitle(fakeTitle)
        pagesPage.clickOnBody()
        pagesPage.enterBody(fakeBody)
        pagesPage.clickOnPublish()
        pagesPage.clickOnPublishPost()
        pagesPage.clickOnPages()
        homePage.clickOnLabs()
        settingsPage.clickOnDeleteAllContent()
        settingsPage.clickOnConfirmDelete()
        homePage.clickOnPage()
        homePage.clickOnPagesBtn()
        // Then Section
        homePage.elements.noPosts().should('exist')
        screenshotPage.takeScreenshot('delete_all_content_pages')
    })
})

