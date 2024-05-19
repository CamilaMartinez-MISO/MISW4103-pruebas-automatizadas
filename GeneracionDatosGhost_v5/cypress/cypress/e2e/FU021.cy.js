import {  faker } from '@faker-js/faker'
import data from './properties.json'
import loginPage from './pages/loginPage';
import homePage from './pages/homePage';
import tagPage from './pages/tagPage';
import dataPool from "./pages/dataPool";

// Destructurar la data de properties.json
const { baseURL, email, password } = data

/**
 * Feature: Crear etiquetas (tags)
 */
describe('FEATURE: Create Tags', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });

    it("Scenario Apriori: Validate that it's not possible create a new Tag with empty name", function () {

        const emptyTitle = " "

        // When Section
        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(emptyTitle)
        tagPage.clickOnSaveButton()
        // Then Section
        tagPage.elements.tagNameErrorMessage().contains('You must specify a name for the tag.').should('exist')

    });

    it("Scenario Random: Validate that it's not possible create a new Tag with a large name", function () {

        const longFakeTitle = faker.word.words({ count: 60 })

        // When Section
        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(longFakeTitle)
        tagPage.clickOnSaveButton()
        // Then Section
        tagPage.elements.tagNameErrorMessage().contains('Tag names cannot be longer than 191 characters.').should('exist')

    });

    it("Scenario Random: Validate that it's not possible create a new Tag with a wrong color input", function () {

        const fakeName = faker.person.firstName('male')
        const fakeWrongColor = faker.person.fullName()

        // When Section
        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(fakeName)
        tagPage.enterTagColor(fakeWrongColor)
        tagPage.clickOnSaveButton()
        // Then Section
        tagPage.elements.tagNameErrorMessage().contains('The colour should be in valid hex format').should('exist')

    });

    it("Scenario Random: Validate that it's not possible create a new Tag with a large description", function () {

        const fakeTitle = faker.person.firstName('male')
        const longFakeDescription = faker.word.words({ count: 90 })

        // When Section
        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(fakeTitle)
        tagPage.enterTagDescription(longFakeDescription)
        tagPage.clickOnSaveButton()
        // Then Section
        tagPage.elements.tagNameErrorMessage().contains('Description cannot be longer than 500 characters.').should('exist')

    });

    it("Scenario Random: Validate that it's not possible create a new Tag with a large Slug", function () {

        const fakeTitle = faker.person.firstName('male')
        const longFakeSlug = faker.word.words({ count: 60 })

        // When Section
        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(fakeTitle)
        tagPage.enterTagSlug(longFakeSlug)
        tagPage.clickOnSaveButton()
        // Then Section
        tagPage.elements.tagNameErrorMessage().contains('URL cannot be longer than 191 characters.').should('exist')

    });

    it("Scenario Outline: Create a new Tag even with wrong Canonical Link", function () {
        const urlBase = 'https://'
        const fakeUrl = faker.lorem.word()

        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(fakeUrl)
        tagPage.clickOnMetaExpandButton()
        tagPage.enterCanonicalLink(urlBase + fakeUrl)
        tagPage.clickOnSaveButton()
        tagPage.clickOnTagsLink()

        tagPage.elements.tagNameErrorMessage().contains('URL cannot be longer than 191 characters.').should('not.exist')
    });

    it("Scenario Outline: Create a new Tag with a random Canonical Link", function () {
        const fakeUrl = faker.internet.url()

        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(fakeUrl)
        tagPage.clickOnMetaExpandButton()
        tagPage.enterCanonicalLink(fakeUrl)
        tagPage.clickOnSaveButton()
        tagPage.clickOnTagsLink()

        tagPage.elements.tagNameErrorMessage().contains('URL cannot be longer than 191 characters.').should('not.exist')
    });

    it("Scenario Outline: Validate that it's not possible create a new Tag with a wrong Canonical Link", function () {
        const fakeTitle = faker.lorem.word()
        const urlBase = 'https://'
        const fakeUrl = '😁 😆 😅 😂 🤣 🥲 🥹 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 🙂‍↕️ 😏 😒 🙂‍↔️ 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😮‍💨 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😨 😳 🥵 🥶 😱 😨 😰 😨 😎 🥸 🤩 🥳 🙂‍↕️ 😏 😒 🙂‍↔️ 😞 😔 😟 😕 😎 🥸 🤩 🥳 🙂‍↕️ 😏 😁 😆 😅 😂 🤣 🥲 🥹 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 🙂‍↕️ 😏 😒 🙂‍↔️ 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😮‍💨 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😨 😳 🥵 🥶 😱 😨 😰 😨 😎 🥸 🤩 🥳 🙂‍↕️ 😏 😒 🙂‍↔️ 😞 😔 😟 😕 😎 🥸 🤩 🥳 🙂‍↕️ 😏 😁 😆 😅 😂 🤣 🥲 🥹 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 🙂‍↕️ 😏 😒 🙂‍↔️ 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😮‍💨 😤 😠 😡'

        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(fakeTitle)
        tagPage.clickOnMetaExpandButton()
        tagPage.enterCanonicalLink(urlBase + fakeUrl)
        tagPage.clickOnSaveButton()
        tagPage.clickOnTagsLink()

        tagPage.elements.tagNameErrorMessage().contains('The url should be a valid url').should('exist')
    });

    it("Scenario Outline: Validate that it's not possible create a new Tag with a long Meta Tile", function () {
        const fakeTitle = faker.lorem.word()
        const longFakeTitle = faker.lorem.words(60)

        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(fakeTitle)
        tagPage.clickOnMetaExpandButton()
        tagPage.enterMetaTitle(longFakeTitle)
        tagPage.clickOnSaveButton()
        tagPage.clickOnTagsLink()

        tagPage.elements.tagNameErrorMessage().contains('Meta Title cannot be longer than 300 characters.').should('exist')
    });

    it("Scenario Outline: Validate that it's not possible create a new Tag with a long Meta Description", function () {
        const fakeTitle = faker.lorem.word()
        const longFakeDescription = faker.lorem.words(90)

        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(fakeTitle)
        tagPage.clickOnMetaExpandButton()
        tagPage.enterMetaDescription(longFakeDescription)
        tagPage.clickOnSaveButton()
        tagPage.clickOnTagsLink()

        tagPage.elements.tagNameErrorMessage().contains('Meta Description cannot be longer than 500 characters.').should('exist')
    });

    it("Scenario Outline: Validate that it's possible create a new Tag with a Meta Description not recommended", function () {
        const fakeTitle = faker.lorem.word()
        const longFakeDescription = faker.lorem.words(30)

        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(fakeTitle)
        tagPage.clickOnMetaExpandButton()
        tagPage.enterMetaDescription(longFakeDescription)
        tagPage.clickOnSaveButton()
        tagPage.clickOnTagsLink()

        homePage.elements.tagsAvailable().contains(fakeTitle).should('exist').click();
    });

    it("Scenario Outline: Validate that it's possible create a new Tag with a Meta Title not recommended", function () {
        const fakeTitle = faker.lorem.word()
        const longFakeTitle = faker.lorem.words(15)

        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(fakeTitle)
        tagPage.clickOnMetaExpandButton()
        tagPage.enterMetaTitle(longFakeTitle)
        tagPage.clickOnSaveButton()
        tagPage.clickOnTagsLink()

        homePage.elements.tagsAvailable().contains(fakeTitle).should('exist').click();
    });

    it("Scenario Outline: Validate that it's possible create a new Tag with a Meta title not recommended", function () {
        const fakeTitle = faker.lorem.word()
        const fakeMetaTitle = '¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿×÷ßØÞþøåæçđŋœʃʒʔʕ'

        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(fakeTitle)
        tagPage.clickOnMetaExpandButton()
        tagPage.enterMetaTitle(fakeMetaTitle)
        tagPage.clickOnSaveButton()
        tagPage.clickOnTagsLink()

        homePage.elements.tagsAvailable().contains(fakeTitle).should('exist').click();
    });

    it("Scenario Outline: Validate that it's possible create a new Tag with a random Canonical Link", function () {
        const url = dataPool.getRandomUrlNavigation();
        const fakeTitle = faker.lorem.word()

        loginPage.signIn(email, password)
        cy.visit(`${baseURL}/#/tags/new`)
        tagPage.enterTagName(fakeTitle)
        tagPage.clickOnMetaExpandButton()
        tagPage.enterCanonicalLink(url)
        tagPage.clickOnSaveButton()
        tagPage.clickOnTagsLink()

        tagPage.elements.tagNameErrorMessage().contains('URL cannot be longer than 191 characters.').should('not.exist')
    });

});
