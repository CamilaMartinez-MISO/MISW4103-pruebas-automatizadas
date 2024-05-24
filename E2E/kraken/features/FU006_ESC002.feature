Feature: Search a post

  @user2 @web
  Scenario: FU006_ESC002: As an user I want to add a Post and search for it in published
    # Given Section
    Given I navigate to page "<baseURL>"
    And I wait for 3 seconds

    # When Section
    When I sigin into Ghost "<email>" "<password>"
    And I wait for 3 seconds
    And I click on add post action
    And I wait for 3 seconds
    And I fill a title
    And I wait for 1 seconds
    And I fill a body on "Begin writing your post..."
    And I wait for 8 seconds
    And I click on "Publish button"
    And I wait for 2 seconds
    And I click on "Continue button"
    And I wait for 2 seconds
    And I click on "Publish post, right now"
    And I wait for 2 seconds
    And I go back to to editor
    And I wait for 2 seconds
    And I go back to main menu
    And I wait for 1 seconds
    And I go to search while i am logged in
    And I wait for 1 seconds
    And I type the title post in search input while i am logged in
    And I wait for 2 seconds
    And I go to edit published post
    And I wait for 1 seconds

    # Then Section
    Then Validate the name title in edit view
