Feature: Create post

@user1 @web
Scenario Outline: Create a post and publish it
  Given I navigate to page "<baseURL>"
  And I wait for 3 seconds
  When I sigin "<email>" "<password>"
  And I wait for 5 seconds
  And I click on Posts
  And I wait for 2 seconds
  And I click on New post
  And I wait for 2 seconds
  And I enter text <title> as post title
  And I wait for 2 seconds
  And I click on body field
  And I wait for 2 seconds
  And I enter text <body> as post body
  And I wait for 2 seconds
  And I click on Publish
  And I wait for 2 seconds
  And I click on Continue
  And I wait for 2 seconds
  And I click on Publish post
  And I wait for 2 seconds
  Then I see confirmation of publication

  Examples:
    | title | body |
    |Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.|platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien|
    ||❤️ 💔 💌 💕 💞 💓 💗 💖 💘 💝 💟 💜 💛 💚 💙 ÅÍÎÏ˝ÓÔÒÚÆ☃ (╯°□°）╯︵ ┻━┻)|
    
@user2 @web
Scenario Outline: Validate that it is not possible to create a post with a long title.
  Given I navigate to page "<baseURL>"
  And I wait for 3 seconds
  When I sigin "<email>" "<password>"
  And I wait for 5 seconds
  And I click on Posts
  And I wait for 2 seconds
  And I click on New post
  And I wait for 2 seconds
  And I enter text <title> as post title
  And I wait for 2 seconds
  And I click on body field
  And I wait for 2 seconds
  And I enter text <body> as post body
  And I wait for 2 seconds
  And I click on Publish
  And I wait for 2 seconds
  Then I see the error message <message>

  Examples:
    | title | body | message |
    |Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. |ヽ༼ຈل͜ຈ༽ﾉ ヽ༼ຈل͜ຈ༽ﾉ `⁄€‹›ﬁﬂ‡°·‚—±|Title cannot be longer than 255 characters.|

@user3 @web
Scenario Outline: validate that it is not possible to create an entry with Meta data longer than the maximum length. 
  Given I navigate to page "<baseURL>"
  And I wait for 3 seconds
  When I sigin "<email>" "<password>"
  And I wait for 5 seconds
  And I click on Posts
  And I wait for 2 seconds
  And I click on New post
  And I wait for 2 seconds
  And I enter text <title> as post title
  And I wait for 2 seconds
  And I click on body field
  And I wait for 2 seconds
  And I enter text <body> as post body
  And I wait for 2 seconds
  And I click on Settings
  And I wait for 2 seconds
  And I click on Meta data
  And I wait for 2 seconds
  And I enter text <meta_title> as meta data title
  And I wait for 2 seconds
  And I enter text <meta_description> as meta data description
  And I wait for 2 seconds
  And I click on Publish
  And I wait for 2 seconds
  Then I see the error message <message>

  Examples:
    | title | body | meta_title | meta_description | message |
    |accumsan felis ut at dolor|Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.|Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.|œ∑´®†¥¨ˆøπ“‘|Meta Title cannot be longer than 300 characters.|
    |	₀₁₂|社會科學院語學研究所|<img src=x onerror=alert('hi') />|Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.|Meta Description cannot be longer than 500 characters.|
