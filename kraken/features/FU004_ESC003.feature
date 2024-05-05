Feature: Delete a post

  @user2 @web
  Scenario: As an admin user I want to delete a post published
    # Given Section
    Given I navigate to page "<baseURL>"
    And I wait for 3 seconds
    # When Section
    When I sigin into Ghost "<email>" "<password>"
    And I wait for 5 seconds
    And I go to Posts
    And I wait for 1 seconds
    And I click on Published posts
    And I wait for 1 seconds
    And I click on the first post

    # Then Section
    Then I access the post settings
    Then I wait for 1 seconds
    Then I initiate post removal
    Then I wait for 1 seconds
    Then I confirm post deletion
    Then I wait for 1 seconds
    Then I verify that the post was deleted
