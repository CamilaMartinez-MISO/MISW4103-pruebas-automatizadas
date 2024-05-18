Feature: Search a post

  @user2 @web
  Scenario: FU006_ALE_01: As an user I want to add a Post and search it outside the administrator
    # Given Section
    Given I navigate to page "<baseURLHome>"
    And I wait for 1 seconds
    And I go to search
    And I wait for 1 seconds

    # When Section
    When I type an random values in input for search
    And I wait for 3 seconds
    
    # Then Section
    Then Validate the name title not exist
