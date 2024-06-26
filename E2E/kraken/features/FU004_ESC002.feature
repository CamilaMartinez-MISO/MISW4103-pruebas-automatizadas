Feature: Create and search a post and delete it

  @user2 @web
  Scenario: FU004_ESC002: Create, Publish, Search, and Delete a Post as an Administrator
    # Given Section
    Given I navigate to page "<baseURL>"
    And I wait for 3 seconds

    # When Section
    When I sigin into Ghost "<email>" "<password>"
    And I wait for 5 seconds
    And I go to Posts
    And I wait for 2 seconds
    And I click on "New post"
    And I wait for 2 seconds
    And I set the post title
    And I wait for 2 seconds
    And I add content to the post
    And I wait for 2 seconds
    And I submit the post for publishing
    And I wait for 2 seconds
    And I advance to the next step
    And I wait for 2 seconds
    And I confirm post publication
    And I wait for 2 seconds
    And I go back to to editor
    And I wait for 2 seconds
    And I go to Posts
    And I search in de admin view
    And I wait for 2 seconds
    And I search title in post view
    And I wait for 2 seconds
    And I go to edit searched post
    And I wait for 2 seconds
    And I access the post settings
    And I wait for 2 seconds
    And I initiate post removal
    And I wait for 2 seconds
    And I confirm post deletion
    And I wait for 2 seconds
    
    # Then Section
    Then I verify that the post was deleted
