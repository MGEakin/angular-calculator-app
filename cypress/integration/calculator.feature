Feature: calculator

  Scenario: Addition
    Given a calculator
    And I start with a 2
    When I add a value of 2
    Then I will have a total of 4

#  Scenario: Subtraction
#    Given a calculator
#    And I start with a 3
#    When I subtract a value of 1
#    Then I will have a total of 2
#
#  Scenario: Multiplication
#    Given a calculator
#    And I start with a 3
#    When I multiply a value of 2
#    Then I will have a total of 6
#
#  Scenario: Division
#    Given a calculator
#    And I start with a 6
#    When I divide a value of 2
#    Then I will have a total of 3
#
#  Scenario: Multiplication Floats/Decimals
#    Given a calculator
#    And I start with a 2
#    When I multiply a value of 3.0
#    Then I will have a total of 6.0
#
#  Scenario: More Multiplication Floats/Decimals
#    Given a calculator
#    And I start with a 2.1
#    When I multiply a value of 3.05
#    Then I will have a total of 6.405
#
#  Scenario: Division Floats/Decimals
#    Given a calculator
#    And I start with a 5
#    When I divide a value of 2.0
#    Then I will have a total of 2.5
#
#  Scenario: More Multiplication Floats/Decimals
#    Given a calculator
#    And I start with a 7.1
#    When I divide a value of 3.05
#    Then I will have a total of 2.3278688524590163
#
#  Scenario: Comparison with <
#    Given a calculator
#    And I start with a 5
#    When I have a less than value of 4
#    Then I will have "true"
#
#  Scenario: Comparison with >
#    Given a calculator
#    And I start with a 2
#    When I have a greater than value of 4
#    Then I will have "true"
