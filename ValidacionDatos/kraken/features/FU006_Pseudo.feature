Feature: Search a post

  @user2 @web
  Scenario: FU006_PSE_01: As an user I want to add a Post and search it outside the administrator
    # Given Section
    Given I navigate to page "<baseURLHome>"
    And I wait for 1 seconds
    And I go to search
    And I wait for 1 seconds

    # When Section
    When I type an any value in search input external
    And I wait for 3 seconds
    
    # Then Section
    Then Validate the name title not exist
