Feature: Change the description of app

@user1 @web
Scenario Outline: FU012_APR_01: Validate that it is not possible change the description site with long value
  Given I navigate to page "<baseURL>"
  And I wait for 3 seconds
  When I sigin "<email>" "<password>"
  And I wait for 2 seconds

  And I go to general settings of site
  And I wait for 2 seconds
  And I go to general settings
  And I wait for 2 seconds
  And I expand title and description section
  And I wait for 2 seconds
  When I type <description> in description
  And I wait for 1 seconds
  And I save changes of general settings
  And I wait for 1 seconds
  Then I see the error <message> in description input

  Examples:
    | description | message |
    | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus | Description is too long |
