//Q - 1
let a = 10;

let resultDiv = document.getElementById("result");

let output = `
<h2>Result:</h2>
<p>The value of a is: ${a}</p>
<br>

<p>The value of ++a is: ${++a}</p>
<p>Now the value of a is: ${a}</p>
<br>

<p>The value of a++ is: ${a++}</p>
<p>Now the value of a is: ${a}</p>
<br>

<p>The value of --a is: ${--a}</p>
<p>Now the value of a is: ${a}</p>
<br>

<p>The value of a-- is: ${a--}</p>
<p>Now the value of a is: ${a}</p>
`;

resultDiv.innerHTML = output;

//Q - 2

//Q - 3
userName = prompt("Enter your name:");
alert(`Hello ${userName}`);

//Q - 5
var num = prompt("Enter a number for multiplication table");
if (num === "" || num === null) {
  num = 5;
}

console.log(num + " x 1 = " + num * 1);
console.log(num + " x 2 = " + num * 2);
console.log(num + " x 3 = " + num * 3);
console.log(num + " x 4 = " + num * 4);
console.log(num + " x 5 = " + num * 5);
console.log(num + " x 6 = " + num * 6);
console.log(num + " x 7 = " + num * 7);
console.log(num + " x 8 = " + num * 8);
console.log(num + " x 9 = " + num * 9);
console.log(num + " x 10 = " + num * 10);

//Q - 6
var sub1 = prompt("Enter first subject name");
var sub2 = prompt("Enter second subject name");
var sub3 = prompt("Enter third subject name");

var totalMarksPerSubject = 100;

var marks1 = prompt("Enter obtained marks for " + sub1);
var marks2 = prompt("Enter obtained marks for " + sub2);
var marks3 = prompt("Enter obtained marks for " + sub3);

marks1 = Number(marks1);
marks2 = Number(marks2);
marks3 = Number(marks3);

var totalMarks = totalMarksPerSubject * 3;
var obtainedMarks = marks1 + marks2 + marks3;
var percentage = (obtainedMarks / totalMarks) * 100;

console.log("Subject\tTotal Marks\tObtained Marks");

console.log(sub1 + "\t100\t\t" + marks1);
console.log(sub2 + "\t100\t\t" + marks2);
console.log(sub3 + "\t100\t\t" + marks3);

console.log("Total\t" + totalMarks + "\t\t" + obtainedMarks);
console.log("Percentage: " + percentage + "%");
