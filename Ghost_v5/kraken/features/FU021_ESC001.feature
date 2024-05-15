Feature: Add tag

@user1 @web
Scenario: FU021_ESC001: As an admin user I want to add a new tag
  Given I navigate to page "<baseURL>"
  And I wait for 3 seconds
  When I sigin into Ghost "<email>" "<password>"
  And I wait for 5 seconds
  
  And I go to Tags
  And I wait for 2 seconds

  And I click on New Tag button
  And I wait for 2 seconds

  And I enter the name of the tag
  And I wait for 2 seconds

  And I save the new tag
  And I wait for 2 seconds

  And I go back to tag section
  And I wait for 2 seconds

  Then I check that my new tag was created


