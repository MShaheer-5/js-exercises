// Q-1
var multiArray = [];
console.log(multiArray);

// Q-2
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

for (var i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join(" "));
}

// Q-3
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// Q-4
var tableNum = Number(prompt("Enter table number"));
var tableLength = Number(prompt("Enter table length"));

for (var i = 1; i <= tableLength; i++) {
  console.log(tableNum + " x " + i + " = " + tableNum * i);
}

// Q-5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Q-6
var counting = "";
for (var i = 1; i <= 15; i++) {
  counting += i + ", ";
}
console.log("Counting:", counting);

var reverse = "";
for (var i = 10; i >= 1; i--) {
  reverse += i + ", ";
}
console.log("Reverse:", reverse);

var even = "";
for (var i = 0; i <= 20; i += 2) {
  even += i + ", ";
}
console.log("Even:", even);

var odd = "";
for (var i = 1; i < 20; i += 2) {
  odd += i + ", ";
}
console.log("Odd:", odd);

var series = "";
for (var i = 2; i <= 20; i += 2) {
  series += i + "k, ";
}
console.log("Series:", series);

// Q-7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Enter item to search").toLowerCase();
var found = false;

for (var i = 0; i < A.length; i++) {
  if (A[i] === searchItem) {
    found = true;
    console.log(searchItem + " is found at index " + i);
    break;
  }
}

if (!found) {
  console.log(searchItem + " is not found in the list");
}

// Q-8
var numbers = [24, 53, 78, 91, 12];
var largest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("Largest number is:", largest);

// Q-9
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}
console.log("Smallest number is:", smallest);

// Q-10
var multiples = "";

for (var i = 5; i <= 100; i += 5) {
  multiples += i + ", ";
}

console.log("Multiples of 5:", multiples);
