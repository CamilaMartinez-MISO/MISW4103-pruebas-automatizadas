Feature: Search a post

  @user2 @web
  Scenario Outline: FU006_APR_01: As an user I want to add a Post and search it outside the administrator
    # Given Section
    Given I navigate to page "<baseURLHome>"
    And I wait for 1 seconds
    And I go to search
    And I wait for 1 seconds

    # When Section
    When I type <search> in search input
    And I wait for 3 seconds
    
    # Then Section
    Then Validate the name title not exist

    Examples:
      | search |
      | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus |
