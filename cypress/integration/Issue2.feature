Feature: Add New Role
As a Recruiter
I need to add a new Role
So I can recruit for that Role

  Scenario: add new role
    Given I navigate to the Create Role page
    When I enter all the role information
    Then the role is created

  Scenario: required field missing
    Given I navigate to the Create Role page
    When I do not enter the Role Name field
    Then an error message is displayed
    And the role is not created
