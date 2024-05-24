import { faker } from '@faker-js/faker'
import data from '../properties.json'
import loginPage from '../pages/loginPage';
import homePage from '../pages/homePage';
import screenshotPage from '../pages/screenshotPage';
import tagPage from '../pages/tagPage';


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
    /**
     * SCENARIO: As an admin user I want to add a new tag
     */
    it('SCENARIO: FU021_ESC001: As an admin user I want to add a new tag', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })

        screenshotPage.configureScreenshotFolder('FU021_ESC001')

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnTagsButton()
        homePage.clickOnNewTagButton()
        tagPage.enterTagName(fakeTitle)
        tagPage.clickOnSaveButton()
        tagPage.clickOnTagsLink()

        // Then Section
        homePage.elements.tagsAvailable().contains(fakeTitle).should('exist');

    });

    /**
     * SCENARIO: As an admin user I want to add a new tag
     */
    it('SCENARIO: FU021_ESC002: As an admin user I want to a new tag and edit its name later', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
        const newFakeTitle = faker.word.words({ count: { min: 1, max: 3 } })

        screenshotPage.configureScreenshotFolder('FU021_ESC002')

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnTagsButton()
        homePage.clickOnNewTagButton()
        tagPage.enterTagName(fakeTitle)
        tagPage.clickOnSaveButton()
        tagPage.clickOnTagsLink()

        homePage.elements.tagsAvailable().contains(fakeTitle).should('exist').click();
        tagPage.clearTagName()
        tagPage.enterTagName(newFakeTitle)
        tagPage.clickOnSaveButton()
        tagPage.clickOnTagsLink()
        // Then Section
        homePage.elements.tagsAvailable().contains(newFakeTitle).should('exist')

    });

    /**
     * SCENARIO: As an admin user I want to a new tag and change its color and description later
     */
    it('SCENARIO: FU021_ESC003: As an admin user I want to a new tag and change its color and description later', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })
        const fakeDescription = faker.word.words({ count: { min: 1, max: 2 } })
        const fakeColor = faker.color.rgb({ format: 'hex', casing: 'lower' }).split('#')[1]

        screenshotPage.configureScreenshotFolder('FU021_ESC003')

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnTagsButton()
        homePage.clickOnNewTagButton()
        tagPage.enterTagName(fakeTitle)
        tagPage.clickOnSaveButton()
        tagPage.clickOnTagsLink()

        homePage.elements.tagsAvailable().contains(fakeTitle).should('exist').click();
        tagPage.enterTagColor(fakeColor)
        tagPage.enterTagDescription(fakeDescription)
        tagPage.clickOnSaveButton()
        tagPage.clickOnTagsLink()
        // Then Section
        homePage.elements.tagsDescriptionAvailable().contains(fakeDescription).should('exist')

    });

    /**
     * SCENARIO: As an admin user I want to add a new tag
     */
    it('SCENARIO: FU021_ESC004: As an admin user I want to add a new tag and delete it later', function () {

        const fakeTitle = faker.word.words({ count: { min: 3, max: 5 } })

        screenshotPage.configureScreenshotFolder('FU021_ESC004')

        // When Section
        loginPage.signIn(email, password)
        homePage.clickOnTagsButton()
        homePage.clickOnNewTagButton()
        tagPage.enterTagName(fakeTitle)
        tagPage.clickOnSaveButton()
        tagPage.clickOnTagsLink()

        homePage.elements.tagsAvailable().contains(fakeTitle).should('exist').click();
        tagPage.clickOnDeleteTagButton()
        tagPage.clickOnConfonfirmDeleteAction()
        // Then Section
        homePage.elements.tagsAvailable().contains(fakeTitle).should('not.exist')

    });

});
