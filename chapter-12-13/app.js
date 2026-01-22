//Q - 1
var ch = prompt("Enter a character");
var code = ch.charCodeAt(0);

if (code >= 48 && code <= 57) {
  console.log("Input is a Number");
} else if (code >= 65 && code <= 90) {
  console.log("Input is an Uppercase Letter");
} else if (code >= 97 && code <= 122) {
  console.log("Input is a Lowercase Letter");
} else {
  console.log("Input is neither number nor letter");
}

//Q - 2
var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));

if (num1 > num2) {
  console.log(num1 + " is larger");
} else if (num2 > num1) {
  console.log(num2 + " is larger");
} else {
  console.log("Both numbers are equal");
}

//Q - 3
var num = Number(prompt("Enter a number"));

if (num > 0) {
  console.log("Number is Positive");
} else if (num < 0) {
  console.log("Number is Negative");
} else {
  console.log("Number is Zero");
}

//Q - 4
var char = prompt("Enter a character");

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u" ||
  char === "A" ||
  char === "E" ||
  char === "I" ||
  char === "O" ||
  char === "U"
) {
  console.log(true);
} else {
  console.log(false);
}

// Q - 5
var correctPassword = "js123";
var userPassword = prompt("Enter your password");

if (userPassword === "" || userPassword === null) {
  console.log("Please enter your password");
} else if (userPassword === correctPassword) {
  console.log(
    "Correct! The password you entered matches the original password",
  );
} else {
  console.log("Incorrect password");
}

//Q - 6
var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);

//Q - 7
var time = Number(prompt("Enter time in 24-hour format (e.g. 1900)"));

if (time >= 0 && time < 1200) {
  console.log("Good morning");
} else if (time >= 1200 && time < 1700) {
  console.log("Good afternoon");
} else if (time >= 1700 && time < 2100) {
  console.log("Good evening");
} else if (time >= 2100 && time <= 2359) {
  console.log("Good night");
} else {
  console.log("Invalid time entered");
}
