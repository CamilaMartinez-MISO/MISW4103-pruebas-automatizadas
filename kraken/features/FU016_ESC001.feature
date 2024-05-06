Feature: Add team member

@user1 @web
Scenario: FU016_ESC001: As an admin user, I want to add a new member
  Given I navigate to page "<baseURL>"
  And I wait for 3 seconds
  When I sigin into Ghost "<email>" "<password>"
  And I wait for 5 seconds
  And I click on Members
  And I wait for 2 seconds
  And I click on New member
  And I wait for 2 seconds
  And I enter text "$name_1" as member name
  And I wait for 2 seconds
  And I enter text "$email_2" as member email
  And I wait for 2 seconds
  And I enter text "$string_3" as member note
  And I wait for 2 seconds
  And I disable subscription to newsletter
  And I wait for 2 seconds
  And I click on Save
  And I wait for 2 seconds
  And I click on Members
  And I wait for 2 seconds
  Then I see the member with name "$$name_1" on the list
