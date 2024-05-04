Feature: Edit post

@user1 @web
Scenario: As an admin user, I want to edit a published post
  Given I navigate to page "<baseURL>"
  And I wait for 3 seconds
  When I sigin into Ghost "<email>" "<password>"
  And I wait for 5 seconds
  And I click on Posts
  And I wait for 1 seconds
  And I click on New post
  And I wait for 1 seconds
  And I enter text "$name_1" as post title
  And I wait for 1 seconds
  And I click on body field
  And I wait for 1 seconds
  And I enter text "$string_2" as post body
  And I wait for 1 seconds
  And I click on Publish
  And I wait for 1 seconds
  And I click on Continue
  And I wait for 1 seconds
  And I click on Publish post
  And I wait for 1 seconds
  And I click on Back to editor
  And I wait for 1 seconds
  And I click on Posts
  And I wait for 1 seconds
  And I click on Published
  And I wait for 1 seconds
  And I click on the post with title "$$name_1"
  And I wait for 1 seconds
  And I click on title field
  And I wait for 1 seconds
  And I clear the title
  And I wait for 1 seconds
  And I enter text "$name_3" as post title
  And I wait for 1 seconds
  And I click on Update
  And I wait for 1 seconds
  And I click on Settings
  And I wait for 1 seconds
  And I click on View post
  And I wait for 1 seconds
  Then I see the new title "$$name_3" in the post