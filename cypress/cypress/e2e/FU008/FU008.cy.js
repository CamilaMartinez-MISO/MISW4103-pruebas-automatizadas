import { faker } from '@faker-js/faker'
import data from '../properties.json'
import loginPage from '../pages/loginPage';
import homePage from '../pages/homePage';
import postPage from '../pages/postPage';

// Destructurar la data de properties.json
const { baseURL, email, password } = data

/**
 * FEATURE: Login into Ghost and schedule a Post
 */
describe('FEATURE: Schedule a Post', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });

    /**
     * SCENARIO: As an admin user I want to schedule a Post
     */
    it('SCENARIO: As an admin user I want to schedule a Post', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
        const fakeBody = faker.lorem.paragraphs({ min: 1, max: 2 })

        // When Section

        loginPage.signIn(email, password)
        homePage.clickOnScheduled()
        homePage.clickOnNewPost()
        postPage.enterTitle(fakeTitle)
        postPage.clickOnBody()
        postPage.enterBody(fakeBody)
        postPage.clickOnPublish()
        postPage.changePublicationTime()
        postPage.clickOnContinue()
        postPage.clickOnPublishPost()
        postPage.clickOnEditor()
        postPage.clickOnPosts()
        homePage.clicOnkMenuButton()
        loginPage.singOut()
        loginPage.signIn(email, password)
        homePage.clickOnScheduled()
        // Then Section
        homePage.elements.scheduledPosts().contains(fakeTitle).should('exist');

    })

    /**
     * SCENARIO: As an admin user I want to schedule a Post and change its content later
     */
    it('SCENARIO: As an admin user I want to schedule a Post and change its content later', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
        const newFakeTitle = faker.word.words({ count: { min: 1, max: 3 } })
        const fakeBody = faker.lorem.paragraphs({ min: 1, max: 2 })

        loginPage.signIn(email, password)
        homePage.clickOnScheduled()
        homePage.clickOnNewPost()
        postPage.enterTitle(fakeTitle)
        postPage.clickOnBody()
        postPage.enterBody(fakeBody)
        postPage.clickOnPublish()
        postPage.changePublicationTime()
        postPage.clickOnContinue()
        postPage.clickOnPublishPost()
        postPage.clickOnEditor()
        postPage.clickOnPosts()
        homePage.clicOnkMenuButton()
        loginPage.singOut()
        loginPage.signIn(email, password)
        homePage.clickOnScheduled()
        // Then Section
        homePage.elements.scheduledPosts().contains(fakeTitle).should('exist').click()


        // Then Section
        postPage.enterTitle(newFakeTitle)
        postPage.clickOnUpdate()
        // then_clickOnUpdateButton()
        postPage.clickOnPosts()
        // when_clickOnBackButton()
        homePage.elements.scheduledPosts().contains(newFakeTitle).should('exist')
    })
})




