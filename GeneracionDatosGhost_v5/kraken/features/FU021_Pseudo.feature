Feature: HU021 - Crear etiqueta (tags)

    @user1 @web
    Scenario: Create a new Tag with a valid name successfully
        Given I navigate to page "<baseURL>"
        And I wait for 2 seconds
        When I sigin "<email>" "<password>"
        And I wait for 2 seconds
        And I click on Tags link
        And I click on New Tag Button
        And I enter any value in Tag Name
        And I wait for 1 seconds
        And I click on Save Tag button
        And I wait for 1 seconds
        And I click on Tags back link
        Then I check that my new tag was created

    @user2 @web
    Scenario Outline: Validate that it's not possible create a new Tag with a long Description
        Given I navigate to page "<baseURL>"
        And I wait for 2 seconds
        When I sigin "<email>" "<password>"
        And I wait for 2 seconds
        And I click on Tags link
        And I click on New Tag Button
        And I enter any value in Tag Name
        And I wait for 1 seconds
        And I enter a long value in Tag Description
        And I wait for 1 seconds
        And I click on Save Tag button
        Then I expect to see the Tag Description error message

    @user3 @web
    Scenario Outline: Validate that it's not possible create a new Tag with a long Slug
        Given I navigate to page "<baseURL>"
        And I wait for 2 seconds
        When I sigin "<email>" "<password>"
        And I wait for 2 seconds
        And I click on Tags link
        And I click on New Tag Button
        And I enter any value in Tag Name
        And I wait for 1 seconds
        And I enter a long value in Tag Slug
        And I wait for 1 seconds
        And I click on Save Tag button
        Then I expect to see the Tag Slug error message

    @user4 @web
    Scenario Outline: Create a new Tag even with a Canonical Link
        Given I navigate to page "<baseURL>"
        And I wait for 2 seconds
        When I sigin "<email>" "<password>"
        And I wait for 2 seconds
        And I click on Tags link
        And I click on New Tag Button
        And I enter any value in Tag Name
        And I wait for 1 seconds
        And I click on Meta Expand button
        And I wait for 1 seconds
        And I enter a random Canonical Link
        And I wait for 1 seconds
        And I click on Save Tag button
        And I wait for 1 seconds
        And I click on Tags back link
        Then I check that my new tag was created

    @user5 @web
    Scenario Outline: Create a new Tag with Meta Titles, even with a not recommended title
        Given I navigate to page "<baseURL>"
        And I wait for 2 seconds
        When I sigin "<email>" "<password>"
        And I wait for 2 seconds
        And I click on Tags link
        And I click on New Tag Button
        And I enter any value in Tag Name
        And I wait for 1 seconds
        And I click on Meta Expand button
        And I wait for 1 seconds
        And I enter a random Meta title
        And I wait for 1 seconds
        And I click on Save Tag button
        And I click on Tags back link
        Then I check that my new tag was created

    @user6 @web
    Scenario Outline: Create a new Tag with Meta Description, even with a not recommended description
        Given I navigate to page "<baseURL>"
        And I wait for 2 seconds
        When I sigin "<email>" "<password>"
        And I wait for 2 seconds
        And I click on Tags link
        And I click on New Tag Button
        And I enter any value in Tag Name
        And I wait for 1 seconds
        And I click on Meta Expand button
        And I wait for 1 seconds
        And I enter a random Meta description
        And I wait for 1 seconds
        And I click on Save Tag button
        And I click on Tags back link
        Then I check that my new tag was created

