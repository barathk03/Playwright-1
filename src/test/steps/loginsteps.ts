 import { Given, When, Then } from '@cucumber/cucumber';

Given('user navigates to the application', function () {
  console.log('Navigating to the application');
});

Given('User click on the login link', function () {
  console.log('Click on login link');
});

Given('user enter the username as {string}', function (username: string) {
  console.log('Username entered:', username);
});

Given('user enter the password as {string}', function (password: string) {
  console.log('Password entered:', password);
});

When('use click on the login button', function () {
  console.log('Click login button');
});

Then('login should be success', function () {
  console.log('Login should be success');
});

Then('login should fail', function () {
  console.log('Login should fail');
});