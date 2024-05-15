Feature: HU009 - Iniciar sesión

  @user1 @web
  Scenario Outline: Login failed with wrong inputs
    Given I navigate to page "<baseURL>"
    And I wait for 2 seconds
    When I sigin into Ghost <email_test> and <password_test>
    And I wait for 1 seconds
    Then I expect to see in the login page this message: <message>

    Examples:
      | email_test                              | password_test          | message                                |
      |                                         |                        | "Please fill out the form to sign in." |
      | miso                                    |                        | "Please fill out the form to sign in." |
      |                                         |                   1234 | "Please fill out the form to sign in." |
      | h.franco@uniandes.edu.co                |                        | "Please fill out the form to sign in." |
      | SELECT * FROM information_schema.tables |                        | "Please fill out the form to sign in." |
      | ; DROP TABLE users; --                  | miso20244103           | "Please fill out the form to sign in." |
      | h.franco@uniandes.edu.co                |                   1234 | "Your password is incorrect."          |
      | h.franco@uniandes.edu.co                | ; DROP TABLE users; -- | "Your password is incorrect."          |
      | h.franco@uniandes.edu.co                | miso2024👽4103          | "Your password is incorrect."          |
      | 😚😋😛😝😜🤪                                  |                        | "Please fill out the form to sign in." |
      | 😚😋😛😝😜🤪                                  | 😝😜🤪                    | "Please fill out the form to sign in." |

  @user2 @web
  Scenario Outline: Login success
    Given I navigate to page "<baseURL>"
    And I wait for 2 seconds
    When I sigin into Ghost <email_test> and <password_test>
    Then I shoud see the main title <result>

    Examples:
      | email_test               | password_test | result    |
      | h.franco@uniandes.edu.co | miso20244103  | Dashboard |
