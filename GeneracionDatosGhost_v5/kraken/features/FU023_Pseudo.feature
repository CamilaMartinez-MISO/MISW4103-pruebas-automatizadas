Feature: Change the description of app

@user1 @web
Scenario: FU023_PSE_01: Validate changes in navigation of application.
  Given I navigate to page "<baseURL>"
  And I wait for 3 seconds
  When I sigin "<email>" "<password>"
  And I wait for 2 seconds

  And I go to general settings of site
  And I wait for 1 seconds
  And I go to navigation settings
  And I wait for 1 seconds
  And I add element in primary navigation
  And I wait for 2 seconds
  When I type random value in the label navigation
  And I wait for 1 seconds
  And I type random value in the url navigation
  And I wait for 1 seconds
  Then I save changes of general settings
  And I wait for 1 seconds

@user1 @web
Scenario: FU023_PSE_01: Validate changes in navigation of application.
  Given I navigate to page "<baseURL>"
  And I wait for 3 seconds
  When I sigin "<email>" "<password>"
  And I wait for 2 seconds

  And I go to general settings of site
  And I wait for 1 seconds
  And I go to navigation settings
  And I wait for 1 seconds
  And I add element in primary navigation
  And I wait for 2 seconds
  When I type very long value in the label navigation
  And I wait for 1 seconds
  And I type random value in the url navigation
  And I wait for 1 seconds
  Then I save changes of general settings
  And I wait for 1 seconds
