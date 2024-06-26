Feature: Create post

@user1 @web
Scenario: FU002_ESC001: As an admin user, I want to create a post and publish it
  Given I navigate to page "<baseURL>"
  And I wait for 3 seconds
  When I sigin into Ghost "<email>" "<password>"
  And I wait for 5 seconds
  And I click on Posts
  And I wait for 2 seconds
  And I click on New post
  And I wait for 2 seconds
  And I enter text "$name_1" as post title
  And I wait for 2 seconds
  And I click on body field
  And I wait for 2 seconds
  And I enter text "$string_2" as post body
  And I wait for 2 seconds
  And I click on Publish
  And I wait for 2 seconds
  And I click on Continue
  And I wait for 2 seconds
  And I click on Publish post
  And I wait for 2 seconds
  And I click on Back to editor
  And I wait for 2 seconds
  And I click on Posts
  And I wait for 2 seconds
  And I click on Published
  And I wait for 2 seconds
  Then I see the post with title "$$name_1" in the list of published posts
