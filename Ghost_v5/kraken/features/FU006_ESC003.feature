Feature: Search a post

  @user2 @web
  Scenario: FU006_ESC003: As an user I want to add a Post and search it outside the administrator view by body content
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
    And I fill a body with fake description
    And I wait for 10 seconds
    And I click on "Publish button"
    And I wait for 2 seconds
    And I click on "Continue button"
    And I wait for 2 seconds
    And I click on "Publish post, right now"
    And I wait for 2 seconds

    # Then Section
    And I navigate to page "<baseURLHome>"
    And I wait for 1 seconds
    And I go to search
    And I wait for 1 seconds
    And I type the fragment on post in search input
    And I wait for 1 seconds
    And I go to created post
    And I wait for 1 seconds
    Then Validate the description of post
