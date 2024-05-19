Feature: Change the metadata of app

@user1 @web
Scenario Outline: FU024_APR_01: Validate inputs about metadata of page
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
  When I type <title> in title meta data
  And I wait for 1 seconds
  And I type <description> in description meta data
  And I wait for 1 seconds
  And I save changes of general settings
  And I wait for 1 seconds
  Then I validate saved settings

  Examples:
    | title | description |
    |  |  |
    | Meta title for application | Meta description for application |
    | Ghost data app | |
    |  | Ghost description of page  |

