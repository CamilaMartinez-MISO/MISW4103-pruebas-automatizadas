import { faker } from '@faker-js/faker'
import data from '../properties.json'
import loginPage from '../pages/loginPage';
import homePage from '../pages/homePage';
import postPage from '../pages/postPage';
import screenshotPage from '../pages/screenshotPage';

// Destructurar la data de properties.json
const { baseURL, email, password } = data

/**
 * Feature: Login into Ghost and manage my admin page
 */
describe('FEATURE: Drafts Posts', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });
    /**
     * SCENARIO: As an admin user I want to save a Post as a draft
     */
    it('SCENARIO: FU007_ESC001: As an admin user I want to save a Post as a draft', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
        const fakeBody = faker.lorem.paragraphs({ min: 1, max: 2 })

        screenshotPage.configureScreenshotFolder('FU007_ESC001')

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnDrafts()
        homePage.clickOnNewPost()
        postPage.enterTitle(fakeTitle)
        postPage.clickOnBody()
        postPage.enterBody(fakeBody)
        postPage.clickOnPostsWhenIsDraft()

        // Then Section
        homePage.elements.draftPosts().contains(fakeTitle).should('exist');

    })

    /**
     * SCENARIO: As an admin user I want to save a Post as a draft and change its content later
     */
    it(`SCENARIO: FU007_ESC002: As an admin user I want to save a Post as a draft and change its content later`, function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
        const newFakeTitle = faker.word.words({ count: { min: 1, max: 3 } })
        const fakeBody = faker.lorem.paragraphs({ min: 1, max: 2 })

        screenshotPage.configureScreenshotFolder('FU007_ESC002')

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnDrafts()
        homePage.clickOnNewPost()
        postPage.enterTitle(fakeTitle)
        postPage.clickOnBody()
        postPage.enterBody(fakeBody)
        postPage.clickOnPostsWhenIsDraft()
        homePage.elements.draftPosts().contains(fakeTitle).should('exist').click()
        postPage.enterTitle(newFakeTitle)
        postPage.clickOnPostsWhenIsDraft()

        // Then Section
        homePage.elements.draftPosts().contains(newFakeTitle).should('exist');

    });

    /**
     * SCENARIO: As an admin user I want to save a Post as a draft and change its content later
     */
    it(`SCENARIO: FU007_ESC003: As an admin user I want to save a Post as a draft and delete it seconds after`, function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
        const fakeBody = faker.lorem.paragraphs({ min: 1, max: 2 })

        screenshotPage.configureScreenshotFolder('FU007_ESC003')

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnDrafts()
        homePage.clickOnNewPost()
        postPage.enterTitle(fakeTitle)
        postPage.clickOnBody()
        postPage.enterBody(fakeBody)
        postPage.clickOnPostsWhenIsDraft()
        homePage.elements.draftPosts().contains(fakeTitle).should('exist').click()
        postPage.clickOnSettingsSmall()
        postPage.clickOnDeletePost()
        postPage.clickOnConfirmDeletePost()

        // Then Section
        homePage.elements.draftPosts().contains(fakeTitle).should('not.exist')


    })
});
