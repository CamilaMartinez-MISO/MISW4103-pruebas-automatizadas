Feature: HU002 - Crear Post


    // TODO: Implementar luego
  @user1 @web
  Scenario Outline: Trying to create and publish a post with invalid fields
    Given I navigate to page "<baseURL>"
    And I wait for 2 seconds
    When I sigin into Ghost "<email>" "<password>"
    And I wait for 1 seconds

    Examples:
      | email_test               | password_test | result    |
      | h.franco@uniandes.edu.co | miso20244103  | Dashboard |
