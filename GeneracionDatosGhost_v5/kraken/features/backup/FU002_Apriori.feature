Feature: HU002 - Crear Post
    // TODO: Implementar luego

  @user1 @web
  Scenario Outline: Trying to create and publish a post with invalid fields
    Given I navigate to page "<baseURL>"
    And I wait for 2 seconds
    When I sigin into Ghost <email> and <password>
    And I wait for 1 seconds
    And I click on Posts
    And I wait for 1 seconds
    And I click on New post
    And I wait for 1 seconds
    And I enter text <title> as post title
    And I wait for 2 seconds
    And I click on body field
    And I wait for 2 seconds
    And I enter text <body> as post body
    And I wait for 2 seconds
    # And I click on Publish

    Examples:
      | email                    | password     | title                  | body | message   |
      | h.franco@uniandes.edu.co | miso20244103 |                        |      | Dashboard |
      | h.franco@uniandes.edu.co | miso20244103 | Hola                   |      | Dashboard |
      | h.franco@uniandes.edu.co | miso20244103 |                        | body | Dashboard |
      | h.franco@uniandes.edu.co | miso20244103 | ; DROP TABLE users; -- |      | Dashboard |
