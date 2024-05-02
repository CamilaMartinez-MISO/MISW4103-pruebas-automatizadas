Feature: Login into Ghost and manage my admin page

  @user1 @web
  Scenario: As an admin user I want to save a Post as a draft
    # Given Section
    Given I navigate to page "<baseURL>"
    And I wait for 3 seconds
    
    # When Section
    When I enter my email "<email>"
    And I wait for 1 seconds
    And I enter my password "<password>"
    And I wait for 1 seconds
    And I click on login
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
    And I click on "Menu Avatar button"
    And I wait for 2 seconds
    And I click on "Sign out"
    And I wait for 4 seconds
    # Then Section
    Then I sigin again into Ghost "<email>" "<password>"
    Then I wait for 5 seconds
    Then I go to see my saved Drafts
    Then I wait for 3 seconds
    Then I proof that there is one Draft with the fakeTitle I used