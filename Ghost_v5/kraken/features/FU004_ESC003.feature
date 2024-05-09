Feature: Delete a post

  @user2 @web
  Scenario: FU004_ESC003: As an admin user I want to delete a post published
    # Given Section
    Given I navigate to page "<baseURL>"
    And I wait for 3 seconds

    # When Section
    When I sigin into Ghost "<email>" "<password>"
    And I wait for 5 seconds
    And I go to Posts
    And I wait for 2 seconds
    And I click on Published posts
    And I wait for 2 seconds
    And I click on the first post
    And I access the post settings
    And I wait for 2 seconds
    And I initiate post removal
    And I wait for 2 seconds
    And I confirm post deletion
    And I wait for 2 seconds
    
    # Then Section
    Then I verify that the post was deleted
