import data from './properties.json'
import loginPage from "./pages/loginPage";
import homePage from "./pages/homePage";
import settingsPage from "./pages/settingsPage";
import dataPool from "./pages/dataPool";
import {faker} from "@faker-js/faker";


// Destructurar la data de properties.json
const {baseURL, email, password} = data

describe('Feature: Change the meta data of application', function () {

    // Given Section
    beforeEach(() => {
        cy.visit(baseURL)
    });


    it('Scenario Apriori: As an admin user I want to change the meta data of application', function () {
        loginPage.signIn(email, password)
        homePage.clickOnSettings()
        settingsPage.clickOnGeneralSettings()
        settingsPage.clickOnExpandMetadataOptions()

        // When
        settingsPage.cleanMetaTitle()
        settingsPage.cleanMetaDescription();

        // Then Section
        settingsPage.clickOnSaveSettings()
    })

    it('Scenario Apriori: As an admin user I want to change the meta data of application', function () {
        let title = dataPool.getRandomLabelNavigation();
        let description = dataPool.getRandomLabelNavigation();

        loginPage.signIn(email, password)
        homePage.clickOnSettings()
        settingsPage.clickOnGeneralSettings()
        settingsPage.clickOnExpandMetadataOptions()

        // When
        settingsPage.cleanMetaTitle();
        settingsPage.typeMetaTitle(title);
        settingsPage.cleanMetaDescription();
        settingsPage.typeMetaDescription(description);

        // Then Section
        settingsPage.clickOnSaveSettings()
    })

    it('Scenario Pseudo: As an admin user I want to change the meta data of application', function () {
        let title = faker.word.words(15);
        let description = faker.word.words(35);

        loginPage.signIn(email, password)
        homePage.clickOnSettings()
        settingsPage.clickOnGeneralSettings()
        settingsPage.clickOnExpandMetadataOptions()

        // When
        settingsPage.cleanMetaTitle();
        settingsPage.typeMetaTitle(title);
        settingsPage.cleanMetaDescription();
        settingsPage.typeMetaDescription(description);

        // Then Section
        settingsPage.clickOnSaveSettings()
    })

    it('Scenario Random: As an admin user I want to change the meta data of application', function () {
        let title = dataPool.getRandomElement();
        let description = dataPool.getRandomElement();

        loginPage.signIn(email, password)
        homePage.clickOnSettings()
        settingsPage.clickOnGeneralSettings()
        settingsPage.clickOnExpandMetadataOptions()

        // When
        settingsPage.cleanMetaTitle();
        settingsPage.typeMetaTitle(title);
        settingsPage.cleanMetaDescription();
        settingsPage.typeMetaDescription(description);

        // Then Section
        settingsPage.clickOnSaveSettings()
    })
})

