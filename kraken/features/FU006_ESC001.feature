Feature: Search a post

  @user2 @web
  Scenario: As an user I want to add a Post and search it outside the administrator view
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
    And I wait for 2 seconds
    And I click on "Menu button"
    And I wait for 2 seconds
    And I click on "Sign out"
    And I wait for 3 seconds

    # Then Section
    Then I navigate to page "<baseURLHome>"
    Then I wait for 1 seconds
    Then I go to search
    Then I wait for 1 seconds
    Then I type the title post in search input
    Then I wait for 1 seconds
    Then I go to created post
    Then I wait for 1 seconds
    Then Validate the name title
