Feature: Convert arabic numeral to roman numeral
    This converter should take arabic numbers and convert them to roman numbers

  Scenario: Convert any number to roman numeral
    Given I have number <number>
    When I want to convert it to roman numeral
    Then I should get "<answer>"

    Examples: 
      | number | answer    |
      |      5 | V         |
      |    200 | CC        |
      |    412 | CDXII     |
      |     54 | LIV       |
      |   1648 | MDCXLVIII |
