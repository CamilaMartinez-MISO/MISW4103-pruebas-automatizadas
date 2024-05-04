Feature: Change description

  @user2 @web
  Scenario: As an user I want to change description site
    # Given Section
    Given I navigate to page "<baseURL>"
    And I wait for 3 seconds

    # When Section
    When I sigin into Ghost "<email>" "<password>"
    And I wait for 2 seconds

    And I go to general settings of site
    And I wait for 1 seconds
    And I go to general settings
    And I wait for 1 seconds
    And I expand title and description section
    And I wait for 1 seconds
    And I type new description
    And I wait for 1 seconds
    And I save changes of general settings
    And I wait for 1 seconds

    And I click on "Menu button"
    And I wait for 2 seconds
    And I click on "Sign out"
    And I wait for 3 seconds

   # Then Section
    And I navigate to page "<baseURLHome>"
    And I wait for 3 seconds
    Then I validate the description of site


