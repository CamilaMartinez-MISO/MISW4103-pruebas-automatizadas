Feature: Change the metadata of app

  @user1 @web
  Scenario: FU024_PSE_01: Validate inputs about metadata of page
    Given I navigate to page "<baseURL>"
    And I wait for 3 seconds
    When I sigin "<email>" "<password>"
    And I wait for 2 seconds

    And I go to general settings of site
    And I wait for 2 seconds
    And I go to general settings
    And I wait for 2 seconds
    And I expand meta data section
    And I wait for 2 seconds
    When I type random value in the title meta data
    And I wait for 1 seconds
    And I type random value in the description meta data
    And I wait for 1 seconds
    And I save changes of general settings
    And I wait for 1 seconds
    Then I validate saved settings

  @user1 @web
  Scenario: FU024_PSE_02: Validate inputs about metadata of page
    Given I navigate to page "<baseURL>"
    And I wait for 3 seconds
    When I sigin "<email>" "<password>"
    And I wait for 2 seconds

    And I go to general settings of site
    And I wait for 2 seconds
    And I go to general settings
    And I wait for 2 seconds
    And I expand meta data section
    And I wait for 2 seconds
    When I type very long value in the title meta data
    And I wait for 1 seconds
    And I type very long value in the description meta data
    And I wait for 1 seconds
    And I save changes of general settings
    And I wait for 1 seconds
    Then I validate exist error message
