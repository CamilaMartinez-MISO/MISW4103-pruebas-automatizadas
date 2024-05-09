Feature: Save post as a draft

  @user2 @web
  Scenario: FU007_ESC003: As an admin user I want to save a Post as a draft and delete it seconds after
    # Given Section
    Given I navigate to page "<baseURL>"
    And I wait for 3 seconds
    # When Section
    When I sigin into Ghost "<email>" "<password>"
    And I wait for 5 seconds
    And I go to Drafts
    And I wait for 5 seconds
    And I click on "New post"
    And I wait for 3 seconds
    And I fill a title on "Post title"
    And I wait for 3 seconds
    And I fill a body on "Begin writing your post..."
    And I wait for 2 seconds
    And I click on "Back button"
    And I wait for 2 seconds
    And I click on "Menu button"
    And I wait for 2 seconds
    And I click on "Sign out"
    And I wait for 4 seconds
    And I sigin into Ghost "<email>" "<password>"
    And I wait for 5 seconds
    And I go to Drafts
    And I wait for 3 seconds
    And I proof that there is one Draft with the fakeTitle I used
    And I wait for 3 seconds
    And I choose the latest draft post
    And I wait for 3 seconds
    And I click on "Settings" button
    And I wait for 2 seconds
    And I click on "Delete" button
    And I wait for 2 seconds
    And I confirm I want to delete de drafted post
    And I wait for 2 seconds
    
    # Then Section
    Then I see that my drafted post was deleted
