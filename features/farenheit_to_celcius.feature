Feature: Convert farenheit to celcius
    We want to convert farenheit degrees to celcius degrees

  Scenario: Convert farenheit to celcius & celcius to farenheit
    Given a <input_degree> degree "<unit>"
    When I want to convert it to opposit tempeture unit
    Then it should return <output_degree> degree

    Examples: 
      | input_degree | output_degree | unit      |
      |           86 |            30 | farenheit |
      |           65 |         18.33 | farenheit |
      |           60 |         15.56 | farenheit |
      |          -20 |        -28.89 | farenheit |
      |           -0 |        -17.78 | farenheit |
      |            0 |            32 | celcius   |
      |            4 |          39.2 | celcius   |
      |           10 |            50 | celcius   |
      |           28 |          82.4 | celcius   |
