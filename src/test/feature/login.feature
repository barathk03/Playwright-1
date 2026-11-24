Feature: User Authentication tests

  Background:
    Given user navigates to the application
    And User click on the login link

  Scenario: Login should be success
    And user enter the username as "skill@123"
    And user enter the password as "skill@123"
    When use click on the login button
    Then login should be success

  Scenario: login should not be success
     Given user enter the username as "skilu@123"
     Given user enter the password as "skin@123"
     When use click on the login button
     But login should fail
