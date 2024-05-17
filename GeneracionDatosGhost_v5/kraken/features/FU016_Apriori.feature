Feature: Add team member

@user1 @web
Scenario Outline: Validate that it is not possible to add a new member with data in an incorrect format.
  Given I navigate to page "<baseURL>"
  And I wait for 3 seconds
  When I sigin "<email>" "<password>"
  And I wait for 5 seconds
  And I click on Members
  And I wait for 2 seconds
  And I click on New member
  And I wait for 2 seconds
  And I enter text <name> as member name
  And I wait for 2 seconds
  And I enter text <email_member> as member email
  And I wait for 2 seconds
  And I enter text <label> as member label
  And I wait for 2 seconds
  And I click on add label
  And I wait for 2 seconds
  And I enter text <note> as member note
  And I wait for 2 seconds
  And I disable subscription to newsletter
  And I wait for 2 seconds
  And I click on Save
  And I wait for 2 seconds
  Then I see the invalid format message <message>

  Examples:
    | name | email_member | label | note | message |
    |Burr Cogman||in|Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.|Please enter an email.|
    |Madel Meininking|בְּרֵאשִׁית, בָּרָא אֱלֹהִים, אֵת הַשָּׁמַיִם, וְאֵת הָאָרֶץ|porta volutpat|Aliquam non mauris.|Invalid Email.|
    |Wilmer Gorman|zcasserley1@behance.net|consequat|sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi|Note is too long.|
    |Ṱ̺̺̕o͞ ̷i̲̬͇̪͙n̝̗͕v̟̜̘̦͟o̶̙̰̠kè͚̮̺̪̹̱̤ ̖t̝͕̳̣̻̪͞h̼͓̲̦̳̘̲e͇̣̰̦̬͎ ̢̼̻̱̘h͚͎͙̜̣̲ͅi̦̲̣̰̤v̻͍e̺̭̳̪̰-m̢iͅn̖̺̞̲̯̰d̵̼̟͙̩̼̘̳ ̞̥̱̳̭r̛̗̘e͙p͠r̼̞̻̭̗e̺̠̣͟s̘͇̳͍̝͉e͉̥̯̞̲͚̬͜ǹ̬͎͎̟̖͇̤t͍̬̤͓̼̭͘ͅi̪̱n͠g̴͉ ͏͉ͅc̬̟h͡a̫̻̯͘o̫̟̖͍̙̝͉s̗̦̲.̨̹͈̣|zcasserley1@behance.net|consequat||Name cannot be longer than 191 characters.|

@user2 @web
Scenario Outline: Add a new member
  Given I navigate to page "<baseURL>"
  And I wait for 3 seconds
  When I sigin "<email>" "<password>"
  And I wait for 5 seconds
  And I click on Members
  And I wait for 2 seconds
  And I click on New member
  And I wait for 2 seconds
  And I enter text <name> as member name
  And I wait for 2 seconds
  And I enter text <email_member> as member email
  And I wait for 2 seconds
  And I enter text <label> as member label
  And I wait for 2 seconds
  And I click on add label
  And I wait for 2 seconds
  And I enter text <note> as member note
  And I wait for 2 seconds
  And I disable subscription to newsletter
  And I wait for 2 seconds
  And I click on Save
  And I wait for 2 seconds
  Then I see the created label

  Examples:
    | name | email_member | label | note |
    |__ﾛ(,_,*)|pianilli3@omniture.com|<img src=x onerror=alert('hi') />|() { _; } >_[$($())] { touch /tmp/blns.shellshock2.fail; }|