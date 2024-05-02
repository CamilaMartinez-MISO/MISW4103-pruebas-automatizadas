
import { expect } from 'chai';
import { faker } from '@faker-js/faker'
import data from '../properties.json'

// Destructurar la data de properties.json
const { baseURL, email, password } = data

/**
 * Feature: Login into Ghost and manage my admin page
 */
describe('FEATURE: Login into Ghost and manage my admin page', function () {

    /**
     * Given I navigate to page "<baseURL>"
     */
    it(`GIVEN: I navigate to page ${data.baseURL}`, function () {

        cy.visit(baseURL);
        cy.wait(1500);

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
        const fakeBody = faker.lorem.paragraphs({ min: 1, max: 2 })

        when_signIn(email, password)
        when_goToDrafts()
        when_clickOnNewPost()
        when_fillContentPost(fakeTitle, fakeBody)
        when_clickOnBackButton()
        when_clickOnMenuAvatar()
        when_clickOnSignOut()

        then_signInAgain(email, password)
        then_goToSeeMySavedDrafts()
        then_expectToSeeMyDraft(fakeTitle)

    })
});

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
    cy.get('a.ember-view.gh-btn').click({ force: true })
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
 * THEN: I sigin again into Ghost
 * @param {String} email email of the admin
 * @param {String} password password for the platform
 */
const then_signInAgain = (email, password) => {

    cy.wait(1000)
    cy.get('input[name="identification"]').type(email)
    cy.wait(500)
    cy.get('input[name="password"]').type(password)
    cy.wait(500)
    cy.get('button.login.gh-btn').click({ force: true })
}

/**
 * THEN: I go to see my saved Drafts
 */
const then_goToSeeMySavedDrafts = () => {

    cy.wait(1000)
    cy.get('a[title="Drafts"]').click({ force: true })
}

/**
 * THEN: I proof that there is one Draft with the fakeTitle I used
 * @param {String} fakeTitle the title to asset with
 */
const then_expectToSeeMyDraft = (fakeTitle) => {

    cy.wait(1000)
    cy.get('h3.gh-content-entry-title').contains(fakeTitle)
}