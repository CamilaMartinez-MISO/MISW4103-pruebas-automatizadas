Feature: HU021 - Crear etiqueta (tags)

  @user1 @web
  Scenario Outline: Validate that it's not possible create a new Tag with no name and with long characters
    Given I navigate to page "<baseURL>"
    And I wait for 2 seconds
    When I sigin "<email>" "<password>"
    And I wait for 2 seconds
    And I click on Tags link
    And I click on New Tag Button
    And I enter the Tag Name <tag_name>
    And I wait for 1 seconds
    And I click on Save Tag button
    Then I expect to see the Tag Name error message: <message>

    Examples:
      | tag_name                                                                                                                                                                                         | message                                         |
      |                                                                                                                                                                                                  | You must specify a name for the tag.            |
      | Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida1a | Tag names cannot be longer than 191 characters. |

  @user2 @web
  Scenario Outline: Validate that it's not possible create a new Tag with a long Description
    Given I navigate to page "<baseURL>"
    And I wait for 2 seconds
    When I sigin "<email>" "<password>"
    And I wait for 2 seconds
    And I click on Tags link
    And I click on New Tag Button
    And I enter the Tag Name <tag_name>
    And I wait for 1 seconds
    And I enter the Tag Description <tag_description>
    And I wait for 1 seconds
    And I click on Save Tag button
    Then I expect to see the Tag Description error message: <message>

    Examples:
      | tag_name | tag_description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | message                                           |
      | MISO     | Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida1a Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida1a Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue 123 53 | Description cannot be longer than 500 characters. |

  @user3 @web
  Scenario Outline: Validate that it's not possible create a new Tag with a long Slug
    Given I navigate to page "<baseURL>"
    And I wait for 2 seconds
    When I sigin "<email>" "<password>"
    And I wait for 2 seconds
    And I click on Tags link
    And I click on New Tag Button
    And I enter the Tag Name <tag_name>
    And I wait for 1 seconds
    And I enter the Tag Slug <tag_slug>
    And I wait for 1 seconds
    And I click on Save Tag button
    Then I expect to see the Tag Slug error message: <message>

    Examples:
      | tag_name | tag_slug                                                                                                                                                                                         | message                                   |
      | Slug     | Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida1a | URL cannot be longer than 191 characters. |

  @user4 @web
  Scenario Outline: Create a new Tag with a valid name successfully
    Given I navigate to page "<baseURL>"
    And I wait for 2 seconds
    When I sigin "<email>" "<password>"
    And I wait for 2 seconds
    And I click on Tags link
    And I click on New Tag Button
    And I enter the Tag Name <tag_name>
    And I wait for 1 seconds
    And I click on Save Tag button
    And I click on Tags back link
    Then I expect to see the the new create Tag: <message>

    Examples:
      | tag_name | message |
      | MISO     | MISO    |
