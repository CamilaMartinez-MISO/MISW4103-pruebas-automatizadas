Feature: Change the description of app

@user1 @web
Scenario Outline: FU023_APR_01: Validate changes in navigation of application.
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
  When I type <label> in label navigation
  And I wait for 1 seconds
  And I type <url> in url navigation
  And I wait for 1 seconds
  And I save changes of general settings
  And I wait for 1 seconds
  Then I see the error <error_label> in label input
  And I see the error <error_url> in url input

  Examples:
    | label | url | error_label | error_url |
    |  |  | You must specify a label | You must specify a URL or relative path |
    |  | https://ghost-fcj4.onrender.com/ | You must specify a label | |
    | Contact us | | | You must specify a URL or relative path |
    | Contact us | https://ghost-fcj4.onrender.com/contact-us/ | | |
