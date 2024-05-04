Feature: Add team member

@user1 @web
Scenario: As an admin user, I want to validate that it is not possible to add a new member with data in an incorrect format.
  Given I navigate to page "<baseURL>"
  And I wait for 3 seconds
  When I sigin into Ghost "<email>" "<password>"
  And I wait for 5 seconds
  And I click on Members
  And I wait for 1 seconds
  And I click on New member
  And I wait for 1 seconds
  And I enter text "$name_1" as member name
  And I wait for 1 seconds
  And I enter text "$string_2" as member email
  And I wait for 1 seconds
  And I enter a large text as member note
  And I wait for 1 seconds
  And I disable subscription to newsletter
  And I wait for 1 seconds
  And I click on Save
  And I wait for 1 seconds
  Then I see the invalid format messages