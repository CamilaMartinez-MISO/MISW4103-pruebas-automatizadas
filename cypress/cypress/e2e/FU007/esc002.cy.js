import { faker } from '@faker-js/faker'
import data from '../properties.json'

// Destructurar la data de properties.json
const { baseURL, email, password } = data

/**
 * Feature: Login into Ghost and manage my admin page
 */
describe('FEATURE: Login into Ghost saved a post as a draft and edit its title later', function () {

    /**
     * SCENARIO: As an admin user I want to save a Post as a draft and change its content later
     */
    it(`SCENARIO: As an admin user I want to save a Post as a draft and change its content later`, function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
        const newFakeTitle = faker.word.words({ count: { min: 1, max: 3 } })
        const fakeBody = faker.lorem.paragraphs({ min: 1, max: 2 })

        // Given Section
        given_navigateToPage(baseURL)

        // When Section
        when_signIn(email, password)
        when_goToDrafts()
        when_clickOnNewPost()
        when_fillContentPost(fakeTitle, fakeBody)
        when_clickOnBackButton()
        when_clickOnMenuAvatar()
        when_clickOnSignOut()
        when_signIn(email, password)
        when_goToDrafts()
        then_expectToSeeMyDraft(fakeTitle)

        // Then Section
        then_chooseTheLatestDraftPost()
        then_changeTitleToNewerOne(newFakeTitle)
        when_clickOnBackButton()
        then_expectToSeeMyDraft(newFakeTitle)




    })
});

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
 * AND: I go to Drafts
 */
const when_goToDrafts = () => {
    cy.wait(2000)
    cy.get('a[title="Drafts"]').click({ force: true })
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
 * THEN: I proof that there is one Draft with the fakeTitle I used
 * @param {String} fakeTitle the title to asset with
 */
const then_expectToSeeMyDraft = (fakeTitle) => {

    cy.wait(1000)
    cy.contains('h3.gh-content-entry-title', fakeTitle).should('exist')
}

/**
 * THEN: I choose the latest draft post
 */
const then_chooseTheLatestDraftPost = () => {
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
