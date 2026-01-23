// Q-1

var firstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
var fullName = firstName + " " + lastName;

console.log("Hello " + fullName);

// Q-2

var mobile = prompt("Enter your favorite mobile phone model");
console.log("My favorite phone is: " + mobile);
console.log("Length of string: " + mobile.length);

// Q-3

var word = "Pakistani";
console.log("Index of n:", word.indexOf("n"));

// Q-4

var text = "Hello World";
console.log("Last index of l:", text.lastIndexOf("l"));

// Q-5

console.log("Character at index 3:", word.charAt(3));

// Q-6

var fullName2 = firstName.concat(" ", lastName);
console.log("Hello " + fullName2);

// Q-7

var city = "Hyderabad";
console.log(city.replace("Hyder", "Islam"));

// Q-8

var message =
  "Ali and Sami are best friends. They play cricket and football together.";
console.log(message.replace(/and/g, "&"));

// Q-9

var strNum = "472";
var num = Number(strNum);

console.log(strNum, typeof strNum);
console.log(num, typeof num);

// Q-10

var input = prompt("Enter any text");
console.log(input.toUpperCase());

// Q-11

var titleInput = prompt("Enter text for title case");
var words = titleInput.toLowerCase().split(" ");
var titleCase = "";

for (var i = 0; i < words.length; i++) {
  titleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
}

console.log(titleCase);

// Q-12

var numDot = 35.36;
var numStr = numDot.toString().replace(".", "");
console.log(numStr);

// Q-13

var username = prompt("Enter username");
var isValid = true;

for (var i = 0; i < username.length; i++) {
  var code = username.charCodeAt(i);
  if (code === 33 || code === 44 || code === 46 || code === 64) {
    isValid = false;
    break;
  }
}

if (isValid) {
  console.log("Username is valid");
} else {
  console.log("Please enter a valid username");
}

// Q-14

var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter item to search").toLowerCase();
var found = false;

for (var i = 0; i < items.length; i++) {
  if (items[i] === search) {
    found = true;
    break;
  }
}

if (found) {
  console.log(search + " is available");
} else {
  console.log(search + " is not available");
}

// Q-15

var password = prompt("Enter password");
var hasAlpha = false;
var hasNum = false;

if (password.length < 6 || !isNaN(password.charAt(0))) {
  console.log("Enter a valid password");
} else {
  for (var i = 0; i < password.length; i++) {
    var ch = password.charCodeAt(i);
    if ((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122)) {
      hasAlpha = true;
    } else if (ch >= 48 && ch <= 57) {
      hasNum = true;
    }
  }

  if (hasAlpha && hasNum) {
    console.log("Password is valid");
  } else {
    console.log("Enter a valid password");
  }
}

// Q-16

var university = "University of Karachi";
var uniArray = university.split(" ");

for (var i = 0; i < uniArray.length; i++) {
  console.log(uniArray[i]);
}

// Q-17

var userText = prompt("Enter any text");
console.log("Last character:", userText.charAt(userText.length - 1));

// Q-18

var sentence = "The quick brown fox jumps over the lazy dog";
var lower = sentence.toLowerCase();
var count = lower.split("the").length - 1;

console.log("Occurrences of 'the':", count);
