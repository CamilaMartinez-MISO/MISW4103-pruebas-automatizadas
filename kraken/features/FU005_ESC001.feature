Feature: Create a page

  @user2 @web
  Scenario: As an admin user, I want to create and publish a Page to ensure that it is available and visible on the website.
    # Given Section
    Given I navigate to page "<baseURL>"
    And I wait for 3 seconds
    # When Section
    When I sigin into Ghost "<email>" "<password>"
    And I wait for 5 seconds
    And I go to Pages
    And I wait for 2 seconds
    And I create a new page
    And I wait for 2 seconds
    And I set the page title
    And I wait for 2 seconds
    And I add content to the page
    And I wait for 2 seconds
    And I submit the page for publishing
    And I wait for 2 seconds
    And I want to publish page
    And I wait for 2 seconds
    And I confirm page publication
    And I wait for 2 seconds
    And I go back to the page editor page
    And I wait for 2 seconds
    And I go to Pages
    And I wait for 2 seconds  
    And I click on Published pages
    And I wait for 2 seconds  
    Then I verify that the page was created
    