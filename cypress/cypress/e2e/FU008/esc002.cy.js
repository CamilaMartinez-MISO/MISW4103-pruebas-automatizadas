import { faker } from '@faker-js/faker'
import data from '../properties.json'

// Destructurar la data de properties.json
const { baseURL, email, password } = data

/**
 * FEATURE: Login into Ghost, schedule a Post and edit its title later
 */
describe('FEATURE: Login into Ghost, schedule a Post and edit its title later', function () {

    /**
     * SCENARIO: As an admin user I want to schedule a Post and change its content later
     */
    it('SCENARIO: As an admin user I want to schedule a Post and change its content later', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
        const newFakeTitle = faker.word.words({ count: { min: 1, max: 3 } })
        const fakeBody = faker.lorem.paragraphs({ min: 1, max: 2 })

        // Given Section
        given_navigateToPage(baseURL)

        // When Section
        when_signIn(email, password)
        when_goToScheduled()
        when_clickOnNewPost()
        when_fillContentPost(fakeTitle, fakeBody)
        when_clickOnPublishButton()
        when_clickOnRightNow()
        when_clickOnScheduled()
        when_clickOnFinalReview()
        when_clickOnPostOnSelectedDate()
        when_clickOnBackToEditor()
        when_clickOnBackButton()
        when_clickOnMenuAvatar()
        when_clickOnSignOut()
        when_signIn(email, password)
        when_goToScheduled()
        then_expectToSeeMyScheduledPost(fakeTitle)

        // Then Section
        then_chooseTheLatestSheduledPost()
        then_changeTitleToNewerOne(newFakeTitle)
        then_clickOnUpdateButton()
        when_clickOnBackButton()
        then_expectToSeeMyScheduledPost(newFakeTitle)
    })
})

/**
 * GIVEN: Navigate to the webiste
 * @param {String} baseURL URL del sitio web
 */
const given_navigateToPage = (baseURL) => {
    cy.visit(baseURL);
    cy.wait(1500);
}

/**
 * WHEN: I sigin into Ghost
 * @param {String} email email of the admin
 * @param {String} password password for the platform
 */
const when_signIn = (email, password) => {

    cy.wait(1000)
    cy.get('input[name="identification"]').type(email)
    cy.wait(500)
    cy.get('input[name="password"]').type(password)
    cy.wait(500)
    cy.get('button.login.gh-btn').click({ force: true })
}

/**
 * AND: I go to Scheduled
 */
const when_goToScheduled = () => {
    cy.wait(2000)
    cy.get('a[title="Scheduled"]').click({ force: true })
}

/**
 * WHEN: I click on "New Post" button
 */
const when_clickOnNewPost = () => {
    cy.wait(1000)
    cy.get('a.ember-view.gh-btn.gh-btn-primary.view-actions-top-row').click({ force: true })
}

/**
 * WHEN: I fill the content for a new post
 * @param {String} fakeTitle Title for a post
 * @param {String} fakeBody  Body of the post
 */
const when_fillContentPost = (fakeTitle, fakeBody) => {
    cy.wait(1000)
    cy.get('textarea.gh-editor-title').type(fakeTitle)
    cy.wait(1000)
    cy.get('article.koenig-editor.w-100').type(fakeBody)
}

/**
 * WHEN: I click on "Publish"
 */
const when_clickOnPublishButton = () => {
    cy.wait(2000)
    cy.get('button.gh-publish-trigger').click({ force: true })
}

/**
 * WHEN: I click on "Right now" menu
 */
const when_clickOnRightNow = () => {
    cy.wait(2000)
    cy.get('div.gh-publish-setting.last > button.gh-publish-setting-title > div.gh-publish-setting-trigger').click({ force: true })
}

/**
 * WHEN: I click on "Schedule for later"
 */
const when_clickOnScheduled = () => {
    cy.wait(2000)
    cy.get('fieldset > div.gh-publish-schedule > div.gh-radio > div.gh-radio-button').then(($el) => {
        const el = $el.get(1)
        cy.wrap(el).click({ force: true });
    })
}

/**
 * WHEN: I click on "Continue, final review"
 */
const when_clickOnFinalReview = () => {
    cy.wait(2000)
    cy.get('div.gh-publish-cta > button.gh-btn.gh-btn-black.gh-btn-large').click({ force: true })
}

/**
 * WHEN: I click on "Publish post on the selected date"
 */
const when_clickOnPostOnSelectedDate = () => {
    cy.wait(2000)
    cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click({ force: true })
}

/**
 * WHEN: I go back to to editor
 */
const when_clickOnBackToEditor = () => {
    cy.wait(2000)
    cy.get('button.gh-btn-editor.gh-publish-back-button').click({ force: true })
}

/**
 * WHEN: I click on "Back" button
 */
const when_clickOnBackButton = () => {
    cy.wait(5000)
    cy.get('a.gh-editor-back-button').click({ force: true })
}

/**
 * WHEN: I click on "Menu Avatar button"
 */
const when_clickOnMenuAvatar = () => {
    cy.wait(1000)
    cy.get('div.gh-user-avatar').click({ force: true })
}

/**
 * WHEN: I click on "Sign out"
 */
const when_clickOnSignOut = () => {
    cy.wait(1000)
    cy.get('a.user-menu-signout').click({ force: true })
}

/**
 * THEN: I proof that there is one Scheduled with the fakeTitle I used
 * @param {String} fakeTitle the title to asset with
 */
const then_expectToSeeMyScheduledPost = (fakeTitle) => {

    cy.wait(1000)
    cy.contains('h3.gh-content-entry-title', fakeTitle).should('exist')
}


/**
 * THEN: I choose the latest draft post
 */
const then_chooseTheLatestSheduledPost = () => {
    cy.wait(3000)
    cy.get('h3.gh-content-entry-title').then(($el) => {
        const el = $el.get(0)
        cy.wrap(el).click({ force: true });
    })
}


/**
 * THEN: I choose the latest draft post
 */
const then_changeTitleToNewerOne = (newTitle) => {
    cy.wait(3000)
    cy.get('textarea.gh-editor-title').clear().type(newTitle)
}

/**
 * THEN: I click on "Update"
 */
const then_clickOnUpdateButton = (newTitle) => {
    cy.wait(3000)
    cy.get(`button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view`).click({ force: true })
} 