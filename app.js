'use strict';

let question1 = "Is coffee nicer than tea (y/n)";
let question2 = "Do you like Star Trek (y/n)?";
let question3 = "Do you like animals (y/n)?";
let question4 = "Do you know how to code (y/n)?";
let question5 = "Have you used ChatGPT (y/n)?";
let userName = prompt("What is your name?");

let welcomeHeading = document.getElementById("welcomeHeading");
welcomeHeading.textContent = "Welcome " + userName + ", here are things about me (Paul Brown)";

// console.log("The user's name is: " + userName);
alert("The user's name is: " + userName);

// This is one way to do it
// const questions = [];
// questions.push(Is coffee nicer than tea (y/n));
// questions.push(Do you like Star Trek (y/n)?);
// questions.push(Do you like animals (y/n)?);
// questions.push(Do you know how to code (y/n)?);
// questions.push(Have you used ChatGPT (y/n)?);

// This is another way:
const questions = [question1, question2, question3, question4, question5];
const responses = [];

for (let i=0; i < questions.length; i++) {
  let newResponse = prompt(questions[i]).toLowerCase();

  while (newResponse !== 'y' && newResponse !== 'n' && newResponse !== 'yes' && newResponse !=='no') {
    console.log(newResponse);
    alert("Incorrect response, please try again. Answer y/n.")
    newResponse = prompt(questions[i]).toLowerCase();
  }
  responses.push(newResponse);
  // console.log(questions[i] + ' was answered with: ' + responses[i]);
  alert(questions[i] + ' was answered with: ' + responses[i]);
} 
