Feature: Schedule a post

  @user1 @web
  Scenario: FU008_ESC001: As an admin user I want to schedule a Post
    # Given Section
    Given I navigate to page "<baseURL>"
    And I wait for 3 seconds
    # When Section
    When I sigin into Ghost "<email>" "<password>"
    And I wait for 3 seconds
    And I go to Scheduled
    And I wait for 3 seconds
    And I click on "New post"
    And I wait for 3 seconds
    And I fill the form for a new Post
    And I wait for 2 seconds
    And I click on "Publish"
    And I wait for 2 seconds
    And I click on "Right now" menu
    And I wait for 3 seconds
    And I click on "Schedule for later"
    And I wait for 2 seconds
    And I click on "Continue, final review"
    And I wait for 2 seconds
    And I click on "Publish post on the selected date"
    And I wait for 2 seconds
    And I go back to to editor
    And I wait for 2 seconds
    And I go back to main menu
    And I wait for 2 seconds
    And I click on "Menu button"
    And I wait for 2 seconds
    And I click on "Sign out"
    And I wait for 3 seconds
    And I sigin into Ghost "<email>" "<password>"
    And I wait for 3 seconds
    And I go to Scheduled
    And I wait for 3 seconds
    
    # Then Section
    Then I proof that there is one Scheduled post with the fakeTitle I used
